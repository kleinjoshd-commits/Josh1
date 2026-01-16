"use client";

import { useState } from "react";

export default function KycForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (submitted) {
    return (
      <section id="kyc" className="deckDark">
        <div className="container darkInner">
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              padding: 28,
              borderRadius: 20,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Thanks — we’ll reach out</h3>

            <p style={{ opacity: 0.78, marginTop: 10 }}>
              Someone from our team will review your information and contact you
              shortly to discuss fit, requirements, and next steps.
            </p>

            <p style={{ opacity: 0.62, marginTop: 12, fontSize: 14 }}>
              No obligation — this works alongside your existing payroll, HR,
              and finance systems.
            </p>
          </div>
        </div>
      </section>
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSending(true);

    try {
      const form = e.currentTarget;
      const fd = new FormData(form);
      const payload: Record<string, any> = Object.fromEntries(fd.entries());

      payload.pageUrl = window.location.href;
      payload.submittedAtIso = new Date().toISOString();
      payload.userAgent = navigator.userAgent;

      const res = await fetch("/api/kyc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({} as any));

      if (!res.ok || !json?.ok) {
        throw new Error(json?.error || "Submission failed. Please try again.");
      }

      setSubmitted(true);
      form.reset();
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="kyc" className="deckDark">
      <div className="container darkInner">
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: 28,
            borderRadius: 20,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Learn more</h3>

          <p style={{ opacity: 0.82, marginTop: 8 }}>
            Share a few details about your organization. We’ll follow up to
            understand your use case and walk through Modern PayEngine and
            Balance.
          </p>

          <p style={{ opacity: 0.7, marginTop: 6 }}>
            Designed to work alongside your existing payroll, HR, and finance
            systems.
          </p>

          <form
            style={{
              marginTop: 22,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
            onSubmit={onSubmit}
          >
            <input
              name="companyName"
              required
              placeholder="Company name"
              style={{
                gridColumn: "span 2",
                padding: 14,
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.85)",
              }}
            />

            <input
              name="fullName"
              required
              placeholder="Your name"
              style={{
                padding: 14,
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.85)",
              }}
            />

            <input
              name="email"
              required
              type="email"
              placeholder="Work email"
              style={{
                padding: 14,
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.85)",
              }}
            />

            <input
              name="countryOrRegion"
              placeholder="Country / region"
              style={{
                padding: 14,
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.85)",
              }}
            />

            <input
              name="monthlyPayoutVolume"
              placeholder="Estimated monthly payout volume (optional)"
              style={{
                padding: 14,
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.85)",
              }}
            />

            <textarea
              name="useCase"
              placeholder="Tell us a bit about your use case (optional)"
              rows={4}
              style={{
                gridColumn: "span 2",
                padding: 14,
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.85)",
              }}
            />

            {error ? (
              <div
                style={{
                  gridColumn: "span 2",
                  padding: 12,
                  borderRadius: 14,
                  border: "1px solid rgba(255,80,80,0.35)",
                  background: "rgba(255,80,80,0.10)",
                  color: "rgba(255,255,255,0.92)",
                  fontSize: 14,
                }}
              >
                {error}
              </div>
            ) : null}

            <div style={{ gridColumn: "span 2", marginTop: 14 }}>
              <button
                type="submit"
                className="btnPrimary"
                style={{ width: "100%", opacity: sending ? 0.85 : 1 }}
                disabled={sending}
              >
                {sending ? "Sending..." : "Learn more"}
              </button>

              <p
                style={{
                  marginTop: 10,
                  fontSize: 13,
                  opacity: 0.65,
                  textAlign: "center",
                }}
              >
                No obligation — we’ll reach out to discuss fit. This works
                alongside your current systems.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
