"use client";

// =====================================================================
// "Licensed access across the world", the flagship map section
// (MPE_Website_Changes_1.md §3.4).
//
// This is the ONE section on the site that uses the dark emerald band:
// it is the designed contrast section, so the light site rhymes with the
// corporate deck without copying it. The SVG, status classes and colors
// come from the compliance-reviewed reference implementation; status
// assignments per country are not a design decision and change only on
// Josh's instruction.
// =====================================================================
import { useEffect, useRef } from "react";
import { MAP_SVG } from "@/content/licensedMapSvg";
import { claims } from "@/content/claims";

const LABEL: Record<string, [string, string, string]> = {
  licensed: ["Licensed network", "full MPE programmes can run here", "#17C97F"],
  payout: ["Payout & collection", "money lands here", "#57A87C"],
  motion: ["Licence in motion", "payout already live, licence underway", "#E0A82E"],
  extended: ["Extended access", "reachable through partner licensing", "#2BA6B6"],
};

export default function LicensedMap() {
  const boxRef = useRef<HTMLDivElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Listeners live on the React-owned WRAPPER, not on the injected svg:
    // anything that re-applies the innerHTML (dev refresh, a future
    // re-render) replaces the svg node, and listeners bound to it die
    // silently. Delegation from the wrapper survives every swap.
    const box = boxRef.current;
    const tip = tipRef.current;
    if (!box || !tip) return;

    const move = (e: MouseEvent) => {
      const p = e.target as SVGElement;
      if (!p.classList || !p.classList.contains("c")) { tip.style.opacity = "0"; return; }
      // Only countries served with at least payout answer on hover;
      // countries outside the network stay quiet.
      const cls = ["licensed", "payout", "motion", "extended"].find(k => p.classList.contains(k));
      if (!cls) { tip.style.opacity = "0"; return; }
      const [t, d, col] = LABEL[cls];
      const name = (p as SVGElement & { dataset: DOMStringMap }).dataset.n ?? "";
      if (!name) { tip.style.opacity = "0"; return; }
      tip.innerHTML = `<b>${name}</b><span><i class="dot" style="background:${col}"></i>${t}, ${d}</span>`;
      tip.style.left = e.clientX + 16 + "px";
      tip.style.top = e.clientY + 14 + "px";
      tip.style.opacity = "1";
    };
    const leave = () => { tip.style.opacity = "0"; };
    box.addEventListener("mousemove", move);
    box.addEventListener("mouseleave", leave);

    // Legend focus: spotlight one status, dim the rest. The svg is looked
    // up at EVENT time for the same reason, never cached across swaps.
    const legends = Array.from(document.querySelectorAll<HTMLElement>(".mpeMap .lg"));
    const offs = legends.map(l => {
      const enter = () => box.querySelector("#worldmap")?.classList.add("f-" + l.dataset.f);
      const exit = () => box.querySelector("#worldmap")?.setAttribute("class", "");
      l.addEventListener("mouseenter", enter);
      l.addEventListener("mouseleave", exit);
      return () => { l.removeEventListener("mouseenter", enter); l.removeEventListener("mouseleave", exit); };
    });
    return () => {
      box.removeEventListener("mousemove", move);
      box.removeEventListener("mouseleave", leave);
      offs.forEach(f => f());
    };
  }, []);

  return (
    <section className="mpeMap" id="network-map" aria-label="Licensed access across the world">
      <div className="wrap">
        <div className="tag">THE NETWORK</div>
        <h2>Licensed access across the world</h2>
        <p className="sub">
          Regulatory reach held by MPE&apos;s licensed partners, usable the day a
          programme needs it. Tap or hover the map, or a legend entry, to explore.
        </p>

        <div className="maprow">
          <div className="mapbox" ref={boxRef} dangerouslySetInnerHTML={{ __html: MAP_SVG }} />
          <div className="legend">
            <div className="lg licensed" data-f="licensed">
              <div className="row"><div className="sw" /><b>Licensed network</b></div>
              <p>UK · EU/EEA · CA · AU · HK · US · IL · GCC · SG · MY · IN · PH</p>
            </div>
            <div className="lg payout" data-f="payout">
              <div className="row"><div className="sw" /><b>Payout &amp; collection</b></div>
              <p>Money lands in {claims.countryCount} countries · Bangladesh · Nepal · Pakistan · Sri Lanka · Vietnam · Mexico · Africa</p>
            </div>
            <div className="lg motion" data-f="motion">
              <div className="row"><div className="sw" /><b>Licence in motion</b></div>
              <p>Saudi bank partner · Indonesia, payout &amp; collection already live there today</p>
            </div>
            <div className="lg extended" data-f="extended">
              <div className="row"><div className="sw" /><b>Extended access</b></div>
              <p>China · via partner licensing</p>
            </div>
            <div className="note">Access shown is the combined contracted and in-process partner network.</div>
          </div>
        </div>

        <div className="statsline">
          {claims.networkStats.map(s => (
            <div className="sl" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
          ))}
        </div>

        <p className="foot-quote">
          One network, many licensed partners, every corridor routed to the best one for the job.
        </p>
      </div>

      <div className="mapTip" ref={tipRef} />

      <style>{`
        .mpeMap{
          --mBg:#0B2318; --mBg2:#071A10; --mLine:#24473A; --mInk:#F2F7F4; --mSub:#9DBFAF; --mFaint:#6E8A7C;
          --mGrn:#12A96B; --mEmerald:#17C97F; --mEmeraldHi:#2FE89C; --mGold:#E0A82E; --mGoldHi:#F2C55C;
          --mPayout:#3E7D5C; --mPayoutHi:#57A87C; --mTeal:#1E7F8C; --mTealHi:#2BA6B6; --mBase:#12261B;
          background:radial-gradient(120% 90% at 20% 0%, #103524 0%, var(--mBg) 45%, var(--mBg2) 100%);
          color:var(--mInk);
        }
        .mpeMap .wrap{max-width:1120px;margin:0 auto;padding:64px 24px 56px}
        .mpeMap .tag{display:inline-flex;align-items:center;gap:10px;padding:6px 12px;border-radius:999px;
          border:1px solid rgba(255,255,255,0.14);background:rgba(255,255,255,0.06);
          color:var(--mSub);font-size:12px;font-weight:650;letter-spacing:0.14em}
        .mpeMap h2{font-size:30px;line-height:1.12;font-weight:620;letter-spacing:-0.02em;margin:14px 0 10px;color:var(--mInk)}
        .mpeMap .sub{color:var(--mSub);font-size:15.5px;line-height:1.7;max-width:760px}
        .mpeMap .maprow{display:grid;grid-template-columns:1fr 250px;gap:34px;align-items:start;margin-top:38px}
        .mpeMap .mapbox{position:relative}
        .mpeMap #worldmap{width:100%;height:auto;display:block;filter:drop-shadow(0 20px 60px rgba(0,0,0,.45))}
        .mpeMap .c{fill:var(--mBase);stroke:#0E3B2A;stroke-width:1.1;transition:fill .25s,opacity .3s;cursor:default}
        .mpeMap .c.payout{fill:var(--mPayout);cursor:pointer}
        .mpeMap .c.licensed{fill:var(--mEmerald);cursor:pointer}
        .mpeMap .c.extended{fill:var(--mTeal);cursor:pointer}
        .mpeMap .c.motion{fill:var(--mGold);cursor:pointer;animation:mpeBreathe 3.2s ease-in-out infinite}
        @keyframes mpeBreathe{0%,100%{fill:var(--mGold)}50%{fill:var(--mGoldHi)}}
        @media (prefers-reduced-motion: reduce){.mpeMap .c.motion{animation:none}}
        .mpeMap .c.payout:hover{fill:var(--mPayoutHi)}
        .mpeMap .c.licensed:hover{fill:var(--mEmeraldHi)}
        .mpeMap .c.extended:hover{fill:var(--mTealHi)}
        .mpeMap .c.motion:hover{fill:var(--mGoldHi);animation:none}
        .mpeMap svg.f-licensed .c:not(.licensed),.mpeMap svg.f-payout .c:not(.payout),
        .mpeMap svg.f-motion .c:not(.motion),.mpeMap svg.f-extended .c:not(.extended){opacity:.18}
        .mpeMap .legend{display:flex;flex-direction:column;gap:10px;position:sticky;top:30px}
        .mpeMap .lg{background:rgba(18,41,29,.75);border:1px solid var(--mLine);border-radius:16px;padding:14px 16px;transition:border-color .2s,transform .15s;cursor:pointer}
        .mpeMap .lg:hover{border-color:var(--mGrn);transform:translateX(-3px)}
        .mpeMap .lg .row{display:flex;align-items:center;gap:10px}
        .mpeMap .lg .sw{width:16px;height:16px;border-radius:5px;flex:none}
        .mpeMap .lg b{font-size:14px}
        .mpeMap .lg p{font-size:11.5px;color:var(--mSub);margin-top:5px;line-height:1.5}
        .mpeMap .lg.licensed .sw{background:var(--mEmerald);box-shadow:0 0 12px rgba(23,201,127,.6)}
        .mpeMap .lg.payout .sw{background:var(--mPayout)}
        .mpeMap .lg.motion .sw{background:var(--mGold);box-shadow:0 0 12px rgba(224,168,46,.5)}
        .mpeMap .lg.extended .sw{background:var(--mTeal)}
        .mpeMap .legend .note{font-size:10.5px;color:var(--mFaint);line-height:1.6;padding:0 4px}
        .mapTip{position:fixed;pointer-events:none;background:#0A1F15;border:1px solid #12A96B;border-radius:10px;padding:10px 14px;font-size:13px;opacity:0;transition:opacity .15s;z-index:99;box-shadow:0 10px 30px rgba(0,0,0,.5);max-width:240px;color:#F2F7F4}
        .mapTip b{display:block;font-size:14px;margin-bottom:2px}
        .mapTip span{color:#9DBFAF;font-size:11.5px}
        .mapTip .dot{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:6px}
        .mpeMap .statsline{display:flex;gap:34px;flex-wrap:wrap;margin-top:34px;padding-top:26px;border-top:1px solid var(--mLine)}
        .mpeMap .sl b{font-size:28px;font-weight:620;letter-spacing:-0.02em;color:var(--mEmerald)}
        .mpeMap .sl span{display:block;font-size:12px;color:var(--mSub)}
        .mpeMap .foot-quote{color:var(--mSub);text-align:center;font-size:15.5px;margin-top:36px}
        @media(max-width:860px){.mpeMap .maprow{grid-template-columns:1fr}.mpeMap .legend{flex-direction:row;flex-wrap:wrap;position:static}.mpeMap .lg{flex:1 1 45%}}
      `}</style>
    </section>
  );
}
