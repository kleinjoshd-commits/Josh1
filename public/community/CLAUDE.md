# CLAUDE.md — MPE Community Shell (build brief for Claude Code)
*Drop this file in the root of a fresh repo as CLAUDE.md. It is the standing brief every Claude Code session reads first. Written by the MPE strategy brain, 2026-07-23.*

## What we are building
A branded Progressive Web App ("the Shell") for MPE Solutions' community remittance programme in Singapore. The Shell is the front door and growth layer ONLY. It does NOT move money, hold funds, collect identity documents, or perform any regulated activity. The licensed rail partner's flow handles all money movement and KYC — the Shell links out to it (stub the handoff behind `RAIL_HANDOFF_URL` config until the partner is chosen).

## Hard rules (never violate)
1. **No money-state code.** No balances, no transactions, no payment initiation. Rate display is config-driven informational content.
2. **Attribution-only data.** Collect ONLY: full name, mobile number, employer name, preferred language, referral code (optional). NEVER passport/FIN/work-permit numbers, NEVER bank details, NEVER photos of documents. Add a short PDPA consent line at the form.
3. **Mandatory disclosure line** on every screen footer where the programme is described: "Money transfer services are provided by our MAS-licensed partner institution." (Exact partner name inserted at config when signed: `LICENSED_PARTNER_NAME`.)
4. Mobile-first, low-end-Android-first: fast on cheap devices and 3G. No heavy frameworks — vanilla or Preact-class only. Total JS < 150KB. Works offline after first load (service worker).
5. Bilingual EN/TA from day one via a strings file (`/i18n/en.json`, `/i18n/ta.json`). Tamil is machine-drafted — mark every string `"needs_native_review": true` until cleared.

## Screens (v0 scope — nothing more)
1. **Welcome/Splash** — Kumar community branding ("Brought to you by Kumar & the Eyota community" — placeholder assets) inside MPE brand frame. Big single CTA: "Join the Programme".
2. **How it works** — 3 steps with icons: (1) Register with us at the desk or here. (2) Send from your own bank account by PayNow — no cash, ever. (3) Family receives to their bank in India, usually the same day. Trust strip: legal • tracked • receipts for every transfer.
3. **Today's rate** (informational) — config-driven SGD→INR display + "rates shown at the desk daily" note. NO quote engine.
4. **Register** — the 5-field attribution form + PDPA line + success state that shows THEIR referral code + WhatsApp share button ("I joined — use my code").
5. **FAQ** — 6 questions (is this legal · where does my money go · what does it cost · how fast · who is Kumar in this · who do I talk to). Answers supplied in `/content/faq.md` — keep my drafted answers, they are compliance-checked.
6. **Desk mode** (`/desk` route, v0.5 if time) — staff-driven version of Register with bigger touch targets + "enrolled by [officer initials]" field + instant QR to hand the worker the app.

## Stack & structure
- Vite + vanilla TS (or Preact), Tailwind, PWA manifest + service worker. Deploy target: Vercel.
- Forms POST to Supabase (`enrollments` table: name, phone, employer, lang, referral_code_used, referral_code_issued, desk_officer, created_at). Env-var keys; no secrets in repo.
- All brand tokens in `/theme/tokens.css` (colors/fonts/logo paths) so rebranding per-programme is config, not code — this Shell will be re-skinned for other markets (US healthcare next).
- Referral codes: `KUM-` prefix + 4 chars, generated client-side, stored on submit.

## What Josh uploads to the repo before the first Claude Code session
1. **This file** as `CLAUDE.md`.
2. `/reference/MPE_Worker_App_Concept.html` — the existing 4-screen demo (design language source: dark premium look, phone frames, Murugan persona).
3. `/reference/MPE_Eyota_Partner_Overview.pdf` — the brand-design reference doc (colors, type, logo treatment).
4. `/assets/` — MPE logo (SVG or highest-res PNG), any Eyota/Kumar mark or approved name treatment (placeholder text lockup is fine for v0).
5. `/content/programme.md` — 10 lines: programme name (decide: e.g., "MPE Community" / "[Name] Community Programme"), welcome-credit amount (S$10), the three worker benefits in Josh's words.
6. (Night 2) Supabase project URL + anon key as env vars; Vercel account connected to the repo.

## First prompt to Claude Code (copy-paste)
"Read CLAUDE.md and the /reference files. Scaffold the complete v0 PWA per the spec — all 5 screens, i18n structure with EN strings final and TA machine-drafted, PWA manifest + service worker, tokens.css from the brand reference, mobile-first. Stub the Supabase call behind a `submitEnrollment()` function with a local fallback. Then give me a checklist of every decision you made that I should review."

## Definition of done (night 1)
Deployed URL on Vercel · installs to Android home screen · all 5 screens work offline · form saves (Supabase or local fallback) · referral code issues + shares to WhatsApp · EN complete, TA drafted · disclosure line everywhere · Lighthouse mobile ≥ 90.