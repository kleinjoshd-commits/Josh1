"use client";

import { useState } from "react";

type KycResponse = {
  ok?: boolean;
  error?: string;
};

const INTERESTS = ["Employer programme", "Licensed institution", "Partner or other"];

export default function KycForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [interest, setInterest] = useState(INTERESTS[0]);

  if (submitted) {
    return (
      <section id="kyc" className="emeraldBand">
        <div className="ebWrap" style={{ paddingTop: 56, paddingBottom: 64 }}>
          <div className="ebTag">TALK TO US</div>
          <div className="kycCard">
            <h3 style={{ marginTop: 0 }}>Received. A person will reply.</h3>
            <p style={{ opacity: 0.8, marginTop: 10 }}>
              Your note went to the team, not a queue. We will come back to you
              about your programme and the right way to start.
            </p>
            <p style={{ opacity: 0.6, marginTop: 12, fontSize: 14 }}>
              No obligation, and nothing is shared beyond MPE.
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
      const payload: Record<string, string> = Object.fromEntries(
        Array.from(fd.entries()).map(([key, value]) => [key, String(value)])
      );

      payload.interest = interest;
      payload.pageUrl = window.location.href;
      payload.submittedAtIso = new Date().toISOString();
      payload.userAgent = navigator.userAgent;

      const res = await fetch("/api/kyc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json: KycResponse = await res.json().catch(() => ({}));

      if (!res.ok || !json?.ok) {
        throw new Error(json?.error || "Submission failed. Please try again.");
      }

      setSubmitted(true);
      form.reset();
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? "Submission failed. Please try again."
          : "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="kyc" className="emeraldBand">
      <div className="ebWrap" style={{ paddingTop: 56, paddingBottom: 64 }}>
        <div className="kycCenter">
        <div className="ebTag">TALK TO US</div>
        <div className="kycHead">
          <h2>Start the conversation.</h2>
          <p>
            An employer programme, an institutional partnership, or something
            we have not thought of yet: share a few details and the right
            person replies.
          </p>
        </div>
        </div>

        <div className="kycCard">
          {/* Who is writing: shapes the follow-up, travels with the form. */}
          <div className="kycPills" role="radiogroup" aria-label="I am contacting MPE as">
            {INTERESTS.map((i) => (
              <button
                key={i}
                type="button"
                role="radio"
                aria-checked={interest === i}
                className={"kycPill" + (interest === i ? " kycPillOn" : "")}
                onClick={() => setInterest(i)}
              >
                {i}
              </button>
            ))}
          </div>

          <form className="kycFormGrid" onSubmit={onSubmit}>
            <input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{
                position: "absolute",
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0 0 0 0)",
                whiteSpace: "nowrap",
                border: 0,
              }}
            />

            <input
              name="companyName"
              required
              placeholder="Organization"
              className="kycInput kycSpan2"
            />
            <input name="fullName" required placeholder="Your name" className="kycInput" />
            <input
              name="email"
              required
              type="email"
              placeholder="Work email"
              className="kycInput"
            />
            <input
              name="countryOrRegion"
              placeholder="Country / region"
              className="kycInput"
            />
            <input
              name="monthlyPayoutVolume"
              placeholder="Estimated monthly volume (optional)"
              className="kycInput"
            />
            <textarea
              name="useCase"
              placeholder="What would you like to build? (optional)"
              rows={4}
              className="kycInput kycSpan2"
            />

            {error ? <div className="kycError kycSpan2">{error}</div> : null}

            <div className="kycSpan2" style={{ marginTop: 6 }}>
              <button
                type="submit"
                className="btnPrimary"
                style={{ width: "100%", opacity: sending ? 0.85 : 1 }}
                disabled={sending}
              >
                {sending ? "Sending..." : "Talk to us"}
              </button>
              <p className="kycFine">
                No obligation. A person replies, and nothing is shared beyond
                MPE. Money transfer and payment services within MPE programmes
                are provided by licensed partner institutions in each market.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
