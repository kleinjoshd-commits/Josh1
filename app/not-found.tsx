import Link from "next/link";
import Nav from "@/components/Nav";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Page not found | MPE",
  "That page is not on modernpayengine.com. One integration for every way money moves."
);

export default function NotFound() {
  return (
    <main className="sitePage">
      <Nav />
      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">404</div>
          <h1>This page is not here.</h1>
          <p className="ebSub">
            The link may be old. MPE is still one integration for every way
            money moves, for platforms, people and machines.
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="/">Back home</Link>
            <Link className="btnSecondary" href="/#kyc">Talk to us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
