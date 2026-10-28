#!/usr/bin/env node
/**
 * Manual production IndexNow ping.
 *
 * This file is not referenced by package.json build, postbuild, CI, or deploy.
 * Do not add it to a Vercel build command or a GitHub Action.
 *
 * The first live ping is an external submission and needs Josh's yes.
 * The script performs no network call unless both of these are present:
 *   INDEXNOW_APPROVED=yes
 *   --confirm-production-ping
 *
 * It posts only to https://api.indexnow.org for host modernpayengine.com.
 * urlList is read from the production sitemap when that sitemap is reachable,
 * otherwise the nine canonical URLs are used. Expect HTTP 200 or 202.
 *
 *   INDEXNOW_APPROVED=yes node scripts/indexnow-ping.mjs --confirm-production-ping
 */

const KEY = "f6172fe5482ee6b83488836f445c9d94";
const HOST = "modernpayengine.com";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const FALLBACK_URLS = [
  `https://${HOST}`,
  `https://${HOST}/platform`,
  `https://${HOST}/machines`,
  `https://${HOST}/solutions`,
  `https://${HOST}/solutions/platforms`,
  `https://${HOST}/solutions/fintechs`,
  `https://${HOST}/solutions/businesses`,
  `https://${HOST}/developers`,
  `https://${HOST}/company`,
];

const approved = process.env.INDEXNOW_APPROVED === "yes";
const confirmed = process.argv.includes("--confirm-production-ping");

if (!approved || !confirmed) {
  console.error("Refusing to ping IndexNow. No request was sent.");
  console.error("This script is manual and production-only. It is not part of build or deploy.");
  console.error("The first ping needs Josh's approval. Then run:");
  console.error("  INDEXNOW_APPROVED=yes node scripts/indexnow-ping.mjs --confirm-production-ping");
  process.exit(1);
}

if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
  console.error(`Refusing to ping IndexNow because VERCEL_ENV=${process.env.VERCEL_ENV}.`);
  process.exit(1);
}

async function urlList() {
  try {
    const response = await fetch(SITEMAP_URL);
    if (!response.ok) return FALLBACK_URLS;
    const xml = await response.text();
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
    const sameHost = locs.filter((loc) => {
      try {
        return new URL(loc).host === HOST;
      } catch {
        return false;
      }
    });
    return sameHost.length > 0 ? sameHost : FALLBACK_URLS;
  } catch {
    return FALLBACK_URLS;
  }
}

const keyResponse = await fetch(KEY_LOCATION);
const keyBody = (await keyResponse.text()).trim();
if (!keyResponse.ok || keyBody !== KEY) {
  console.error(`Refusing to ping. ${KEY_LOCATION} did not return the key.`);
  process.exit(1);
}

const urls = await urlList();
const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }),
});

console.log(`IndexNow responded ${response.status} for ${urls.length} URL(s).`);
if (response.status !== 200 && response.status !== 202) {
  console.error(await response.text());
  process.exit(1);
}
