# MPE Website Upgrade Plan

This plan covers the three-phase upgrade. Phase 1 produces this document. Phase 2 and Phase 3 execute the changes below, one logical commit per item.

## Conflict to resolve before Phase 2

The `/use-cases` page built earlier today contains invented metrics ("$62M annualized invoice volume," "1,800+ contractors," "+28% supplier base growth," etc.) and anonymized customer profiles (a poultry processor, a consumer goods importer, a construction firm). The new claims rules forbid customer/pilot names, invented metrics, volumes, and testimonials. Two options:

- **A.** Gut `/use-cases` back to the four-product overview it was before, drop the customer scenarios entirely. The page becomes a routing layer to the product solution pages.
- **B.** Remove `/use-cases` from the nav and from the sitemap; leave the route present but unlinked until real, approved customer stories exist.

Default if unspecified: **Option A**, since the page is still surfaced from the nav and shouldn't 404 or read as "coming soon."

## Phase 1 audit findings

### Site structure (all routes)

```
/                           homepage
/about                      mission + team CTA
/about/team                 the 5-person team page
/balance                    legacy worker product (also see /solutions/balance)
/future-commerce            forward thesis (orbital, machine-to-machine)
/industries                 maritime / logistics / defense / agriculture
/press                      SpaceBelt KSA release
/resources                  index
/resources/execution-infrastructure
/resources/execution-routing
/resources/fx-governed
/resources/payment-lifecycle
/resources/settlement-models
/satellite                  satellite resilience layer
/solutions/balance          MPE Balance product page
/solutions/network          MPE Network
/solutions/os               MPE OS
/solutions/workforce        MPE Workforce
/trust-controls             governance posture
/unified-approach           layered architecture
/use-cases                  see conflict above
/api/kyc                    KYC form endpoint
/sitemap.xml /robots.txt    Next.js generated
```

### Where copy lives

- **Centralized** today: only `lib/siteConfig.ts` (nav labels, footer fine print, four `solutionPages` capability lists).
- **Hardcoded everywhere else**: every page's body copy is inline JSX. Stats like "160+ countries" (5 instances), "3-10%" / "4-10%", and all marketing claims are hardcoded.
- **Press release content**: hardcoded `releases` array in `app/press/page.tsx`.
- **Team roster**: hardcoded `team` array in `app/about/team/page.tsx`.

### Disallowed strings found

| String | File | Action |
| --- | --- | --- |
| `satellite-accessible cards` | `app/page.tsx:159` | replace with approved wording |
| `satellite-accessible delivery` | `app/solutions/balance/page.tsx:160` | replace with approved wording |
| `3-10%` | `app/page.tsx:82` | replace with `4-10%` |
| `/worth-a-shot.png` reference | `components/Nav.tsx:56` | rename file + reference |
| Em-dashes (user-facing) | `app/about/page.tsx:111`, `app/about/team/page.tsx:8`, `app/use-cases/page.tsx` (×4) | sweep |
| Press release dateline em-dash | `app/press/page.tsx:24` | keep (wire format) |

No `GomSpace`, no `GCC exclusivity`, no `mandate`, no banned filler words ("seamlessly", "empower", "revolutionize", "in today's world", "cutting-edge", "next-generation", "world-class") found anywhere.

### Asset audit

**Referenced in code:**
- `worth-a-shot.png` → Nav logo (1209×338, 310 KB). Rename to `mpe-logo.png`.
- `mpe-ui.png` → homepage platform shot. Keep name.
- `mpe-ui-2.png` → solutions/os product shot. Rename to `mpe-os-ui.png`.
- `Balance-flow.png` → solutions/balance flow shot. Rename to `balance-flow.png` (lowercase).
- `papaya-global-logo.png` → footer/disclosure. Keep name.
- `CliffBeekMPE.png`, `JoshKleinMPE.png`, `ColeMahoneyMPE.png`, `NaulissaTuzaMPE.png`, `KokRieOoiMPE.png` → team headshots. Keep names (descriptive).
- `favicon.png`, `unified-architecture*.svg`, vendor SVGs → keep.

**Orphans (not referenced anywhere, candidates for deletion):**
- `mpe-logo.png` (the existing 1038×157, 93 KB file — conflicts with rename target; delete first)
- `Black-mpe-logo.png`, `White-mpe-logo.png`
- `mpe-new-logo-3.png`, `new-logo-4.png`, `new balance.png` (the last one has a space and is the most embarrassing)
- `balance-ui.png`

**Plan for the name collision:** delete the orphan `mpe-logo.png` first, then rename `worth-a-shot.png → mpe-logo.png`. All other orphans get deleted in the same housekeeping commit.

### Repeated claim strings (Phase 2 target for `content/claims.ts`)

- `160+ countries` — 5 instances
- `Zero-fee remittances` / `zero-fee` — repeated
- `USD-held wallets` / `USD-held balances` — repeated
- `SpaceBelt KSA` — banner, hero bridge, press page
- `Papaya Global` — footer fine print only
- Payout corridors list (US, Europe, Singapore, GCC, South Asia, Southeast Asia, Africa, Latin America) — hero + press
- The four product names (MPE OS / Workforce / Balance / Network) — siteConfig already centralizes these

## Phase 2 execution (one commit each)

1. **Create `content/claims.ts`** — single export of `claims` constant with stats, corridor list, partner names, approved proof-point sentence, banner copy. Add re-exports of the four product slugs from siteConfig.
2. **Sweep "satellite-accessible"** — replace both instances with `wallet and card access built to hold up where connectivity fails`. Import the new constant from `claims.ts`.
3. **Standardize wage stat to 4-10%** — update homepage problem section, the page's meta description, and any future card referencing the stat. Source from `claims.ts`.
4. **Strip remaining em-dashes** — `app/about/page.tsx:111`, `app/about/team/page.tsx:8`, all four in `app/use-cases/page.tsx`. Replace contextually with commas/periods. Press dateline keeps its em-dash (wire format).
5. **Resolve `/use-cases`** — execute Option A by default (revert to the four-product overview). Drop the invented metrics, customer profiles, and the "Three customers, three problems" framing.
6. **Asset rename and housekeeping** — delete orphan `mpe-logo.png`, rename `worth-a-shot.png → mpe-logo.png`, rename `mpe-ui-2.png → mpe-os-ui.png`, rename `Balance-flow.png → balance-flow.png`. Update Nav, solutions/os, solutions/balance references. Delete the other orphan PNGs (`Black-mpe-logo.png`, `White-mpe-logo.png`, `mpe-new-logo-3.png`, `new-logo-4.png`, `new balance.png`, `balance-ui.png`).
7. **Approved-claims verification pass** — grep again for disallowed strings, run the production build, fix any TypeScript errors from the asset rename and the claims import.

## Phase 3 execution (one commit per section)

### Target homepage flow (current → target)

| # | Section | Status | Notes |
| --- | --- | --- | --- |
| 1 | Announcement banner | Keep | Already dismissible. Copy in `claims.ts`. |
| 2 | Hero | **Tighten** | Trim to one h1, one subhead, the `4-10%` stat, two CTAs. Drop the corridors paragraph from inside the hero (it lives lower or in the bridge). |
| 3 | Problem ("We start where the system fails people") | Keep, tighten | Single panel. Stat sourced from `claims.ts`. |
| 4 | How MPE works (four-step model) | **Restructure** | Current site has a 4-tag strip + 3-panel grid. Convert to a four-step model with consistent visual treatment. |
| 5 | The bridge ("Oaxaca → orbital") | Keep, promote | Make it full-width with the one allowed orbital design moment (subtle starfield or horizon gradient). Copy unchanged. |
| 6 | For employers | **Merge** | Collapse "Why employers offer MPE" (4-panel) into one section with four benefit cards. One sentence each. Drop the redundant "Why this matters" panel — its best line gets absorbed here. |
| 7 | Platform layer | Keep | Four product chips + UI screenshot. Image framed device-neutral with soft shadow. |
| 8 | Credibility strip | **Add** | Press logos/links to SpaceBelt coverage + approved pilot sentence. |
| 9 | CTA + Request Access form | Keep | Form is one-column on mobile; add inline validation and a clean success state. |
| 10 | Footer | Keep | Papaya disclosure unchanged. |

### Sections to delete entirely

- `Why this matters` panel
- `Where resilience becomes necessary` panel
- `Build what comes next by solving what matters now` final CTA (merged into section 9)

### Design

- Premium, restrained, infrastructure-grade. Generous whitespace, strong typographic hierarchy, limited palette: one dark base + one accent (existing `--brand` green).
- The bridge is the **only** orbital design moment. Implement as a subtle starfield or horizon gradient that respects `prefers-reduced-motion`.
- No glow, no gradient text, no animated rockets.
- Typography: switch to `next/font` for `Geist` (sans body) + optionally `Geist Mono` for numeric stats. No new families.
- Motion: scroll-reveal honoring `prefers-reduced-motion` (`AnimateOnScroll` already supports this — verify).
- UI screenshot section: wrap in a device-neutral frame (rounded panel + soft shadow + 1 px border).
- Mobile-first: every section verified at 375 px viewport. Request Access form one column with thumb-friendly inputs.

### Technical quality

- Replace global system fonts with `next/font` to eliminate FOIT.
- Add explicit `width`/`height` on every `<Image />` (already done in most places; audit).
- Convert PNG hero/UI shots to AVIF/WebP via Next image optimization (automatic with `next/image`).
- Per-page metadata: unique `title` + `description`. Add OpenGraph and Twitter card to each page.
- OG image: generate a real 1200×630 from the new `mpe-logo.png` + tagline via Next's `ImageResponse` API at `/opengraph-image.tsx`.
- Canonical URLs via `metadata.alternates.canonical`.
- Sitemap already exists; verify all routes present.
- `robots.ts` already exists; verify.
- Structured data: emit an `Organization` JSON-LD in `app/layout.tsx` with the corrected logo path and `sameAs` to the SpaceBelt press URL.
- Semantic HTML and ARIA: verify nav `<nav role="navigation">`, banner `aria-label`, dismiss `<button aria-label>`, form `<form aria-describedby>` for inline errors.
- Form: client-side validation states (per field), submit disabled state, success panel with `aria-live="polite"`.
- All external links use `target="_blank"` + `rel="noopener noreferrer"`.

### Lighthouse target

After all changes, the homepage should hit 90+ on Performance, Accessibility, Best Practices, and SEO. Plan a final commit dedicated to fixing any audit failure that survives the build.

## Post-Phase-3

- Run `npm run build` and resolve all warnings/errors.
- Produce `CHANGES.md` summarizing every change with before/after for copy diffs, organized by commit.

## Commit plan

Phase 2 (7 commits):
1. `content/claims.ts` + plumbing
2. Remove "satellite-accessible" wording
3. Standardize wage stat to 4-10%
4. Strip remaining em-dashes
5. Resolve `/use-cases` (Option A unless instructed otherwise)
6. Asset rename + orphan cleanup
7. Approved-claims verification + build fix

Phase 3 (10 commits):
1. Hero tightening
2. Problem section, sourced from claims
3. How MPE works as four-step model
4. The bridge: full-width + subtle orbital treatment
5. For-employers merge
6. Platform layer device-frame
7. Credibility strip
8. Form polish + success state
9. Design system pass (typography, palette, mobile checks)
10. Technical: OG image, structured data, metadata, Lighthouse fixes
