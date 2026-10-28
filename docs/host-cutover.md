# Host cutover (staged)

Canonical host: `https://modernpayengine.com`.

`www.modernpayengine.com`, `mpesolutions.ai`, and `www.mpesolutions.ai` are aliases. The app can redirect them to the apex, but that behavior is **off** until an env flag is set. Do not turn it on until stage 1 has been checked on production.

HSTS sent by the app is exactly `max-age=63072000`. Do not add `includeSubDomains`. Do not add `preload`.

Code does not change Vercel domain settings or DNS. Those steps are below. Do not run them as part of merging this PR.

## What the app does today

`proxy.ts` adds these headers on pages, static files it matches, and every redirect it creates:

- `Strict-Transport-Security: max-age=63072000`
- `Content-Security-Policy` with `frame-ancestors 'none'`
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

Legacy path aliases (for example `/about` to `/company`) stay 301. The community folder redirect stays temporary.

Host redirects read two env vars at request time. Any value other than `1`, including unset, is off.

| `MPE_HOST_REDIRECT` | `MPE_HOST_REDIRECT_PERMANENT` | Result |
| --- | --- | --- |
| unset or not `1` | anything | No host redirect. Apex keeps serving 200. |
| `1` | unset or not `1` | 307 to `https://modernpayengine.com` + same path and query. |
| `1` | `1` | 308 to the same target. |

308 is permanent and keeps the HTTP method. 307 is the temporary version of that. The permanent flag does nothing by itself.

When the first flag is on, these requests redirect in one app hop:

- `https://www.modernpayengine.com/<path>?<query>`
- `https://mpesolutions.ai/<path>?<query>`
- `https://www.mpesolutions.ai/<path>?<query>`
- `http://` on the apex, www, or either mpesolutions.ai host

`http://modernpayengine.com/<path>` goes straight to `https://modernpayengine.com/<path>`, not to www. Other hosts (local, preview) are left alone so this deployment can still be viewed before the flag is on.

Confirm with Josh that the apex, not www, is the chosen host before setting the flag. If the team picks www instead, do not enable this flag. Switch canonicals, the sitemap, `og:url`, and JSON-LD to www and stage the opposite redirect.

## Stage 1 (do this before any redirect flag)

1. Open the Vercel project. Go to Settings, then Domains.
2. Open `modernpayengine.com`. If it says it redirects to `www.modernpayengine.com`, edit the domain and remove that redirect. Attach the apex to Production so it serves this deployment.
3. Wait until Vercel shows a valid certificate for the apex. The panel lists the DNS records it expects. At the registrar, the apex is an A record `76.76.21.21` or an ALIAS/ANAME to `cname.vercel-dns.com`. `www` is a CNAME to `cname.vercel-dns.com`. Use the records Vercel shows if they differ.
4. Leave `www.modernpayengine.com` on the same project. Do not add a Vercel domain redirect from www to the apex in this stage. A domain-level redirect is immediate, usually permanent, and can skip the app headers and the temporary 307.
5. Do not enable an HSTS preload toggle. Do not enable includeSubDomains. If Vercel adds its own `strict-transport-security` header, it must also be `max-age=63072000` without those two directives.
6. Check production:

```bash
curl -vI https://modernpayengine.com 2>&1 | grep -E 'subject|expire|SSL|HTTP/'
curl -sI https://modernpayengine.com/
```

Expect HTTP 200, a certificate for `modernpayengine.com`, and all six headers above. `strict-transport-security` must not contain `includeSubDomains` or `preload`.

## Stage 2 (only after stage 1 passes on production)

1. Settings, then Environment Variables. Add `MPE_HOST_REDIRECT` with value `1` for Production only.
2. Do not set `MPE_HOST_REDIRECT_PERMANENT` yet.
3. Redeploy Production. The proxy reads the variable at runtime; a redeploy is still required so the new deployment picks it up.
4. Check:

```bash
curl -sI https://www.modernpayengine.com/platform
curl -sI "https://www.modernpayengine.com/platform?a=1"
curl -sI https://mpesolutions.ai/platform
curl -sI https://www.mpesolutions.ai/platform
```

Expect `307` and `location: https://modernpayengine.com/platform` (the query check keeps `?a=1`). Each redirect response must include the same six security headers.

5. After that temporary redirect looks right, set `MPE_HOST_REDIRECT_PERMANENT` to `1` on Production and redeploy. Status becomes 308. Browsers cache 308. Do this only when the team is sure the apex is correct.

Do not also add a Vercel domain redirect for the same hosts. Two redirects in a row are an extra hop, and the Vercel one may drop the security headers the app sets.

## Stage 3 (HTTP, including the apex 500)

`http://modernpayengine.com` has been returning 500 from Pingora because the apex is not a healthy edge route while it only exists as a redirect to www. The app cannot answer a request that never reaches it.

1. Finish stage 1 so the apex domain shows Valid Configuration and is not a broken redirect.
2. With `MPE_HOST_REDIRECT=1`, a request that reaches Next.js on port 80 for a known host is redirected to `https://modernpayengine.com` plus the same path and query.
3. Vercel may upgrade `http://` to `https://` on the same host before the app runs. That is a platform hop. To keep a single hop, do not add a second Vercel domain redirect on top of the app.
4. Check that this is never 500:

```bash
curl -sI http://modernpayengine.com/
curl -sI http://www.modernpayengine.com/
curl -sI http://mpesolutions.ai/platform
curl -sI http://www.mpesolutions.ai/platform
```

Expect 301, 307, or 308 to `https://modernpayengine.com/...`. If Vercel still returns 500, the domain is not valid at the edge yet. Fix the domain and DNS in the Vercel panel. Do not change application code for that 500.

## mpesolutions.ai

Keep the domain registered and renewing. Do not delete it.

1. Settings, then Domains. Leave `mpesolutions.ai` and `www.mpesolutions.ai` on this same project so the certificates stay valid and requests hit this app.
2. Do not add a Vercel 301 while `MPE_HOST_REDIRECT` is the control. The same flags above send every path to the apex in one app hop, query string included.
3. After Josh approves the production deploy: in Google Search Console, add `mpesolutions.ai` and use Change of Address to `modernpayengine.com`. In Bing Webmaster Tools, use Site Move to `modernpayengine.com`.

## Header check

```bash
for u in https://modernpayengine.com/ https://www.modernpayengine.com/ http://modernpayengine.com/; do
  curl -sI "$u"
done
```

After stage 2, www and http are redirects and the apex is 200. All three responses should show the six headers. HSTS stays `max-age=63072000` with no `includeSubDomains` and no `preload`.
