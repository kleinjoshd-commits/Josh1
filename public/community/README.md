# MPE Community Shell — v0
The branded front door for the MPE Community Programme (Singapore). Built by the MPE strategy brain, 2026-07-23.
**What it is:** a zero-build, offline-first PWA. Enrollment + attribution + referral + programme info ONLY. No money movement, no KYC, no identity documents — ever (see CLAUDE.md hard rules).

## Run it right now (10 seconds)
Open `index.html` in a browser. Done — no build step, no dependencies. (For service-worker/PWA testing serve it: `npx serve .`)

## Deploy (5 minutes)
1. Push this folder to a GitHub repo → import to Vercel (framework: **Other**, no build command, output dir: root). Live URL immediately.
2. Point your domain at it. Print the QR of the URL for the desk banners.

## Configure (non-engineer friendly — everything is in `config.js`)
- `INDICATIVE_RATE_SGD_INR` — update daily (ops task) until a rate feed exists.
- `LICENSED_PARTNER_NAME` + `RAIL_HANDOFF_URL` — fill when the rails agreement signs.
- `SUPABASE_URL` + `SUPABASE_ANON_KEY` — night 2: create a Supabase project, one table `enrollments`
  (`name,phone,employer,lang,referral_code_used,referral_code_issued,desk_officer,desk_mode,created_at`, RLS: allow inserts with anon key, no reads). Until then, enrollments save on-device.

## Desk mode
Open `yourdomain.com/#desk` on the desk tablet: shows DESK MODE badge + officer-initials field. Long-press the logo for 3 seconds in desk mode to export the device's enrollments as CSV.

## Language
EN/தமிழ் toggle top-right. **Every Tamil string is machine-drafted — Kok Rie (or a native speaker) MUST review `i18n/strings.js` before any worker sees this.** Search the file for `ta:` — all strings in that block.

## Before workers use it (launch checklist)
- [ ] Tamil native review complete
- [ ] Real MPE logo into `assets/` (replace the placeholder "M" mark + icon-512.png export)
- [ ] Programme name + Kumar name treatment confirmed (config + banner)
- [ ] Rate updated + daily update owner named
- [ ] Supabase wired (or CSV-export routine agreed with desk officer)
- [ ] Domain + QR posters printed
- [ ] PDPA consent text reviewed by counsel (it's drafted conservatively, but check)
- [ ] Licensed partner name inserted ONLY after the rails agreement signs

## What's deliberately NOT here (v0 scope discipline)
Money movement · quotes engine · KYC/document capture · user accounts/login · the moment-card generator (night 2) · Play/App Store wrappers (TWA/Capacitor, later). See `/mpe-sg-brain/27_PRODUCT_ARCHITECTURE.md` gates P1–P3.
