"use client";

import { useState } from "react";

export default function KycForm() {
  const [submitted, setSubmitted] = useState(false);

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
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input
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
              placeholder="Country / region"
              style={{
                padding: 14,
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.85)",
              }}
            />

            <input
              placeholder="Estimated monthly payout volume (optional)"
              style={{
                padding: 14,
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.85)",
              }}
            />

            <textarea
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

            <div style={{ gridColumn: "span 2", marginTop: 14 }}>
              <button
                type="submit"
                className="btnPrimary"
                style={{ width: "100%" }}
              >
                Learn more
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


