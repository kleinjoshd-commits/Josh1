# IndexNow (manual, production only)

The key file is `public/f6172fe5482ee6b83488836f445c9d94.txt`. It contains only the key. After deploy it is served as `text/plain` at:

`https://modernpayengine.com/f6172fe5482ee6b83488836f445c9d94.txt`

The ping script is `scripts/indexnow-ping.mjs`. It is not called from `npm run build`, `npm run start`, lint, typecheck, or `npm run check:seo`. Do not add it to the Vercel build command, a post-deploy hook, or GitHub Actions.

The first live ping submits the site to IndexNow and needs Josh's approval. Until then, do not run it.

The script sends no network request unless both of these are present:

```bash
INDEXNOW_APPROVED=yes node scripts/indexnow-ping.mjs --confirm-production-ping
```

It also refuses when `VERCEL_ENV` is set to anything other than `production`.

Before posting, it checks that the production key URL returns this key. It builds `urlList` from `https://modernpayengine.com/sitemap.xml` when that sitemap is reachable, and otherwise uses the nine canonical URLs. The POST goes only to `https://api.indexnow.org/indexnow`. A successful ping returns HTTP 200 or 202.

Run it once, after the host cutover in `docs/host-cutover.md` is live and Josh has said yes. Do not run it against a preview deployment.
