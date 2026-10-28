#!/usr/bin/env node
/**
 * Local acceptance checks for the built site.
 * Items: unique title and meta description (<=155), JSON-LD, FAQ in raw HTML,
 * 404 robots/canonical, copy denylist, query-string invariance.
 *
 * Requires `npm run build` first. Starts `next start` itself.
 * Does not call IndexNow or any external host.
 *
 * Official contact email: josh@modernpayengine.com.
 * This allowlist is for the copy check only. Do not add the address to site copy.
 * Any other email address in the rendered HTML of the nine URLs fails this check.
 */

import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
process.chdir(root);

const PORT = 3456;
const ORIGIN = "https://modernpayengine.com";
const PATHS = [
  "/",
  "/platform",
  "/machines",
  "/solutions",
  "/solutions/platforms",
  "/solutions/fintechs",
  "/solutions/businesses",
  "/developers",
  "/company",
];

const SERVICE_PATHS = new Set(["/platform", "/solutions/platforms"]);
const INDEXNOW_KEY = "f6172fe5482ee6b83488836f445c9d94";

// Copy-check allowlist only. Do not render this address on the site.
const OFFICIAL_EMAILS = new Set(["josh@modernpayengine.com"]);

const failures = [];

function fail(message) {
  failures.push(message);
}

function runHostPolicy() {
  return new Promise((resolve) => {
    const child = spawn(
      process.execPath,
      ["--disable-warning=MODULE_TYPELESS_PACKAGE_JSON", "--experimental-strip-types", "scripts/check-host-policy.mts"],
      { cwd: root, stdio: "inherit" },
    );
    child.on("exit", (code) => resolve(code ?? 1));
  });
}

function get(urlPath) {
  return new Promise((resolve, reject) => {
    const req = http.get(
      { hostname: "127.0.0.1", port: PORT, path: urlPath, headers: { accept: "text/html" } },
      (res) => {
        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => {
          resolve({
            status: res.statusCode ?? 0,
            headers: res.headers,
            body: Buffer.concat(chunks).toString("utf8"),
          });
        });
      },
    );
    req.on("error", reject);
  });
}

function headerValue(headers, name) {
  const value = headers[name.toLowerCase()];
  if (Array.isArray(value)) return value.join("\n");
  return value ?? "";
}

function decodeAttr(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/gi, "'");
}

function attr(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, "i"));
  if (!match) return null;
  return decodeAttr(match[2] ?? match[3] ?? "");
}

function metaBy(html, attribute, expected) {
  const tags = html.match(/<meta\b[^>]*>/gi) ?? [];
  return tags.filter((tag) => (attr(tag, attribute) ?? "").toLowerCase() === expected.toLowerCase());
}

function titles(html) {
  return [...html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)].map((match) =>
    decodeAttr(match[1].trim()),
  );
}

function jsonLdBlocks(html) {
  return [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map(
    (match) => match[1],
  );
}

function collectTypes(node, found = []) {
  if (!node || typeof node !== "object") return found;
  if (Array.isArray(node)) {
    for (const item of node) collectTypes(item, found);
    return found;
  }
  const type = node["@type"];
  if (typeof type === "string") found.push(type);
  else if (Array.isArray(type)) found.push(...type.filter((item) => typeof item === "string"));
  for (const value of Object.values(node)) collectTypes(value, found);
  return found;
}

function snippet(html, index) {
  return html.slice(Math.max(0, index - 50), index + 70).replace(/\s+/g, " ");
}

function copyViolations(html) {
  const hits = [];
  const checks = [
    ["em dash", /\u2014/],
    ["SOC 2", /SOC\s*2/i],
    ["compliant", /compliant/i],
    ["certified", /certified/i],
    ["PCI", /\bPCI\b/i],
    ["bank-grade", /bank-grade/i],
    ["regulated", /regulated/i],
    ["ISD", /\bISD\b/i],
    ["Trux", /trux/i],
    ["Highnote", /highnote/i],
    ["Sumsub", /sumsub/i],
    ["Supabase", /supabase/i],
    ["surge.sh", /surge\.sh/i],
    ["vercel.app", /vercel\.app/i],
    ["transmit", /transmit/i],
    ["No new licenses needed", /no new licenses needed/i],
    ["signed webhooks", /signed webhooks/i],
    ["in each market", /in each market/i],
    ["X-MPE-Signature", /X-MPE-Signature/],
    ["HMAC-SHA256", /HMAC-SHA256/],
    ["arrive signed", /arrive signed/i],
  ];
  for (const [name, pattern] of checks) {
    const match = pattern.exec(html);
    if (match) hits.push(`${name}: ${snippet(html, match.index)}`);
  }

  const withoutAllowed = html
    .replace(/licensed partner institutions/gi, "")
    .replace(/licensed partners/gi, "");
  const licensed = /licensed/i.exec(withoutAllowed);
  if (licensed) hits.push(`licensed outside the allowed phrases: ${snippet(withoutAllowed, licensed.index)}`);

  const emails = html.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) ?? [];
  for (const email of emails) {
    if (!OFFICIAL_EMAILS.has(email.toLowerCase())) {
      hits.push(`email not on the official allowlist: ${email}`);
    }
  }
  return hits;
}

function expectedUrl(urlPath) {
  return urlPath === "/" ? ORIGIN : `${ORIGIN}${urlPath}`;
}

function checkPage(urlPath, html) {
  const pageTitles = titles(html);
  if (pageTitles.length !== 1) fail(`${urlPath} has ${pageTitles.length} <title> elements`);
  const title = pageTitles[0] ?? "";

  const descriptions = metaBy(html, "name", "description")
    .map((tag) => attr(tag, "content"))
    .filter((value) => value != null);
  if (descriptions.length !== 1) fail(`${urlPath} has ${descriptions.length} meta descriptions`);
  const description = descriptions[0] ?? "";
  if (description.length > 155) fail(`${urlPath} meta description is ${description.length} characters`);

  const canonicals = [...html.matchAll(/<link\b[^>]*>/gi)]
    .filter((match) => (attr(match[0], "rel") ?? "").toLowerCase() === "canonical")
    .map((match) => attr(match[0], "href"));
  if (canonicals.length !== 1) fail(`${urlPath} has ${canonicals.length} canonical links`);
  const canonical = canonicals[0];
  const expected = expectedUrl(urlPath);
  if (canonical !== expected) fail(`${urlPath} canonical ${canonical} != ${expected}`);

  const ogUrls = metaBy(html, "property", "og:url").map((tag) => attr(tag, "content"));
  if (ogUrls.length !== 1 || ogUrls[0] !== expected) {
    fail(`${urlPath} og:url ${ogUrls.join(" | ")} != ${expected}`);
  }

  const ogTitles = metaBy(html, "property", "og:title").map((tag) => attr(tag, "content"));
  const twitterTitles = metaBy(html, "name", "twitter:title").map((tag) => attr(tag, "content"));
  if (ogTitles.length !== 1 || ogTitles[0] !== title) fail(`${urlPath} og:title does not match <title>`);
  if (twitterTitles.length !== 1 || twitterTitles[0] !== title) {
    fail(`${urlPath} twitter:title does not match <title>`);
  }

  const blocks = jsonLdBlocks(html);
  if (blocks.length < 1) fail(`${urlPath} has no application/ld+json`);
  const types = [];
  for (const block of blocks) {
    if (block.includes("<")) fail(`${urlPath} JSON-LD contains a raw <`);
    try {
      collectTypes(JSON.parse(block), types);
    } catch (error) {
      fail(`${urlPath} JSON-LD did not parse: ${error.message}`);
    }
  }
  for (const required of ["Organization", "WebSite"]) {
    if (!types.includes(required)) fail(`${urlPath} JSON-LD missing ${required}`);
  }
  if (SERVICE_PATHS.has(urlPath)) {
    if (!types.includes("Service")) fail(`${urlPath} JSON-LD missing Service`);
  } else if (types.includes("Service")) {
    fail(`${urlPath} JSON-LD has Service outside /platform and /solutions/platforms`);
  }
  if (urlPath === "/machines") {
    if (!types.includes("Product")) fail(`${urlPath} JSON-LD missing Product`);
  } else if (types.includes("Product")) {
    fail(`${urlPath} JSON-LD has Product outside /machines`);
  }
  if (urlPath === "/") {
    if (!types.includes("FAQPage")) fail(`${urlPath} JSON-LD missing FAQPage`);
    if (!html.includes("Does MPE hold funds")) fail(`${urlPath} FAQ text is missing from raw HTML`);
  } else if (types.includes("FAQPage")) {
    fail(`${urlPath} JSON-LD has FAQPage outside the home page`);
  }

  for (const hit of copyViolations(html)) fail(`${urlPath} copy: ${hit}`);
  return { title, description };
}

function checkHeaders(label, response) {
  const hsts = headerValue(response.headers, "strict-transport-security");
  const csp = headerValue(response.headers, "content-security-policy");
  const checks = [
    [hsts.includes("max-age=63072000"), `${label} missing HSTS max-age=63072000`],
    [!/includeSubDomains/i.test(hsts), `${label} HSTS includes includeSubDomains`],
    [!/preload/i.test(hsts), `${label} HSTS includes preload`],
    [/frame-ancestors 'none'/.test(csp), `${label} CSP missing frame-ancestors 'none'`],
    [headerValue(response.headers, "x-frame-options") === "DENY", `${label} missing X-Frame-Options DENY`],
    [headerValue(response.headers, "x-content-type-options") === "nosniff", `${label} missing nosniff`],
    [
      headerValue(response.headers, "referrer-policy") === "strict-origin-when-cross-origin",
      `${label} missing referrer-policy`,
    ],
    [
      headerValue(response.headers, "permissions-policy").includes("camera=()"),
      `${label} missing permissions-policy`,
    ],
  ];
  for (const [ok, message] of checks) {
    if (!ok) fail(message);
  }
}

async function waitForServer() {
  const started = Date.now();
  while (Date.now() - started < 40000) {
    if (server.exitCode != null) {
      throw new Error(`next start exited ${server.exitCode}: ${serverLog.slice(-800)}`);
    }
    if (/Ready|Local:/i.test(serverLog)) {
      try {
        const response = await get("/");
        if (response.status === 200) return;
      } catch {
        // server still booting
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  throw new Error(`next start did not become ready: ${serverLog.slice(-800)}`);
}

if (!existsSync(path.join(root, ".next", "BUILD_ID"))) {
  console.error("Missing production build. Run npm run build first.");
  process.exit(1);
}

const policyCode = await runHostPolicy();
if (policyCode !== 0) fail("host policy checks failed");

const server = spawn("npx", ["next", "start", "-H", "127.0.0.1", "-p", String(PORT)], {
  cwd: root,
  stdio: ["ignore", "pipe", "pipe"],
  env: {
    ...process.env,
    MPE_HOST_REDIRECT: "",
    MPE_HOST_REDIRECT_PERMANENT: "",
  },
});
let serverLog = "";
server.stdout.on("data", (chunk) => {
  serverLog += chunk.toString();
});
server.stderr.on("data", (chunk) => {
  serverLog += chunk.toString();
});

function stopServer() {
  if (server.exitCode == null && !server.killed) server.kill("SIGTERM");
}

function finish(code) {
  stopServer();
  setTimeout(() => {
    if (server.exitCode == null) server.kill("SIGKILL");
    process.exit(code);
  }, 300);
}

try {
  await waitForServer();

  const seenTitles = new Map();
  const seenDescriptions = new Map();
  for (const urlPath of PATHS) {
    const response = await get(urlPath);
    if (response.status !== 200) fail(`${urlPath} status ${response.status}`);
    checkHeaders(urlPath, response);
    const { title, description } = checkPage(urlPath, response.body);
    if (seenTitles.has(title)) fail(`duplicate title ${title} on ${urlPath} and ${seenTitles.get(title)}`);
    else seenTitles.set(title, urlPath);
    if (seenDescriptions.has(description)) {
      fail(`duplicate description on ${urlPath} and ${seenDescriptions.get(description)}`);
    } else seenDescriptions.set(description, urlPath);

    const variedPath = `${urlPath}${urlPath.includes("?") ? "&" : "?"}x=<script>`;
    const varied = await get(variedPath);
    if (varied.status !== 200) fail(`${variedPath} status ${varied.status}`);
    if (varied.body !== response.body) {
      const index = [...varied.body].findIndex((char, i) => char !== response.body[i]);
      fail(
        `${urlPath} HTML changes when a query string is added near index ${index}: ${snippet(varied.body, Math.max(0, index))}`,
      );
    }
  }

  const missing = await get("/this-page-is-missing-seo-check");
  if (missing.status !== 404) fail(`missing page status ${missing.status}`);
  const robots = metaBy(missing.body, "name", "robots");
  if (robots.length !== 1) {
    fail(`404 has ${robots.length} robots metas: ${robots.map((tag) => attr(tag, "content")).join(" | ")}`);
  }
  const canonicals = [...missing.body.matchAll(/<link\b[^>]*>/gi)].filter(
    (match) => (attr(match[0], "rel") ?? "").toLowerCase() === "canonical",
  );
  if (canonicals.length !== 0) fail(`404 has ${canonicals.length} canonical link(s)`);

  const sitemap = await get("/sitemap.xml");
  const locs = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const expectedLocs = PATHS.map(expectedUrl);
  if (locs.join("\n") !== expectedLocs.join("\n")) {
    fail(`sitemap locs differ:\n${locs.join("\n")}`);
  }
  const robotsTxt = await get("/robots.txt");
  if (!robotsTxt.body.includes(`Sitemap: ${ORIGIN}/sitemap.xml`)) {
    fail("robots.txt Sitemap line is not the apex");
  }

  const key = await get(`/${INDEXNOW_KEY}.txt`);
  if (key.status !== 200) fail(`IndexNow key status ${key.status}`);
  if (key.body.trim() !== INDEXNOW_KEY) fail("IndexNow key file body does not match the key");
  const keyType = headerValue(key.headers, "content-type");
  if (!keyType.includes("text/plain")) fail(`IndexNow key content-type ${keyType}`);

  const legacy = await get("/about");
  if (legacy.status !== 301 && legacy.status !== 308) fail(`/about status ${legacy.status}`);
  const location = headerValue(legacy.headers, "location");
  if (!location.endsWith("/company")) fail(`/about location ${location}`);
  checkHeaders("/about redirect", legacy);

  const community = await get("/community/index.html");
  if (community.status !== 200) fail(`community shell status ${community.status}`);
  const communityCsp = headerValue(community.headers, "content-security-policy");
  if (!communityCsp.includes("https://*.supabase.co")) fail("community CSP lost its connect-src exception");
} catch (error) {
  fail(error instanceof Error ? error.message : String(error));
  if (serverLog) console.error(serverLog.slice(-2000));
}

if (failures.length > 0) {
  console.error(`\n${failures.length} check(s) failed:`);
  for (const message of failures) console.error(`- ${message}`);
  finish(1);
} else {
  console.log("SEO checks passed");
  finish(0);
}
