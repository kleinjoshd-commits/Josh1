import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

declare global {
  var __kycSubmissionLog: Map<string, number[]> | undefined;
}

type KycSubmission = {
  companyName: string;
  fullName: string;
  email?: string;
  countryOrRegion?: string;
  monthlyPayoutVolume?: string;
  useCase?: string;
  pageUrl?: string;
  submittedAtIso?: string;
  userAgent?: string;
  website?: string;
};

const MAX_CONTENT_LENGTH = 10_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissionLog =
  globalThis.__kycSubmissionLog ??
  (globalThis.__kycSubmissionLog = new Map<string, number[]>());

function need(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

function getClientIp(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (submissionLog.get(ip) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );
  if (recent.length >= RATE_LIMIT_MAX) {
    submissionLog.set(ip, recent);
    return true;
  }
  recent.push(now);
  submissionLog.set(ip, recent);
  return false;
}

function clampField(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function parseSubmission(data: unknown): KycSubmission {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid submission payload.");
  }

  const submission = data as Record<string, unknown>;
  const parsed: KycSubmission = {
    companyName: clampField(submission.companyName, 160),
    fullName: clampField(submission.fullName, 160),
    email: clampField(submission.email, 200),
    countryOrRegion: clampField(submission.countryOrRegion, 120),
    monthlyPayoutVolume: clampField(submission.monthlyPayoutVolume, 120),
    useCase: clampField(submission.useCase, 2_000),
    pageUrl: clampField(submission.pageUrl, 500),
    submittedAtIso: clampField(submission.submittedAtIso, 80),
    userAgent: clampField(submission.userAgent, 400),
    website: clampField(submission.website, 200),
  };

  if (!parsed.companyName || !parsed.fullName || !parsed.email) {
    throw new Error("Missing required fields.");
  }

  if (!parsed.email.includes("@")) {
    throw new Error("Invalid email address.");
  }

  return parsed;
}

export async function POST(req: Request) {
  try {
    const contentLength = Number(req.headers.get("content-length") || "0");
    if (contentLength > MAX_CONTENT_LENGTH) {
      return NextResponse.json(
        { ok: false, error: "Submission failed. Please try again." },
        { status: 413 }
      );
    }

    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Submission failed. Please try again later." },
        { status: 429 }
      );
    }

    const data = parseSubmission(await req.json());
    if (data.website) {
      return NextResponse.json({ ok: true });
    }

    const host = need("SMTP_HOST");
    const port = Number(need("SMTP_PORT"));
    const secure = String(process.env.SMTP_SECURE ?? "false") === "true";
    const user = need("SMTP_USER");
    const pass = need("SMTP_PASS");

    const to = need("KYC_TO_EMAIL");
    const from = need("KYC_FROM_EMAIL");

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.verify();

    const info = await transporter.sendMail({
      to,
      from,
      subject: "New KYC Submission – MPE",
      text:
        `New KYC submission received\n\n` +
        `Submitted at: ${new Date().toISOString()}\n\n` +
        `${JSON.stringify(data, null, 2)}`,
      replyTo:
        typeof data.email === "string" && data.email.includes("@")
          ? data.email
          : undefined,
    });

    console.log("KYC EMAIL SENT:", { messageId: info.messageId, ip });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("KYC EMAIL ERROR:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Submission failed. Please try again.",
      },
      { status: 500 }
    );
  }
}
