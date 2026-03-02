import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type KycSubmission = Record<string, unknown> & {
  email?: string;
};

function need(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

export async function POST(req: Request) {
  try {
    const data: KycSubmission = await req.json();

    const host = need("SMTP_HOST");
    const port = Number(need("SMTP_PORT"));
    const secure = String(process.env.SMTP_SECURE ?? "false") === "true";
    const user = need("SMTP_USER");
    const pass = need("SMTP_PASS");

    const to = need("KYC_TO_EMAIL");
    const from = need("KYC_FROM_EMAIL");

    console.log("KYC SUBMISSION RECEIVED:", {
      to,
      from,
      host,
      port,
      secure,
      keys: Object.keys(data || {}),
    });

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

    console.log("KYC EMAIL SENT:", { messageId: info.messageId });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("KYC EMAIL ERROR:", err);
    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : "Email failed",
      },
      { status: 500 }
    );
  }
}
