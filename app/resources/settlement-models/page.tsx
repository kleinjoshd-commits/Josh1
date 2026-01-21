import Nav from "../../../components/Nav";
import Link from "next/link";

export const metadata = {
  title: "Local & Global Settlement Models | Modern PayEngine",
  description:
    "A control-plane view of domestic vs cross-border settlement—how routing through trusted local banks and licensed partners stays consistent under one governed operating layer.",
};

export default function SettlementModelsResource() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          {/* HEADER — RESPONSIVE GRID */}
          <div className="pageHeaderGrid">
            {/* LEFT */}
            <div>
              <div className="eyebrow">
                Resources <span className="dot" />
                Settlement models
              </div>

              <h1 className="h1" style={{ marginBottom: 12 }}>
                Local & global
                <br />
                settlement models
              </h1>

              <p className="p" style={{ maxWidth: 980 }}>
                “Settlement” describes how value actually completes: which
                institution moves funds, through which local clearing systems,
                under which regulatory permissions, and with what confirmation.
                The complexity isn’t that money can’t move — it’s that the
                execution path varies by market.
              </p>

              <p className="p" style={{ maxWidth: 980, marginTop: 12 }}>
                Modern PayEngine keeps the operating layer consistent across
                markets by separating <strong>authority</strong> from{" "}
                <strong>execution</strong>. Lifecycle state, approvals, funding,
                FX decisioning, and release are governed centrally — while
                settlement routes through trusted local banks for domestic flows
                and licensed partners for cross-border payouts.
              </p>

              <div className="btnRow" style={{ marginTop: 18 }}>
                <Link className="btnSecondary" href="/resources">
                  Back to Resources
                </Link>
                <Link className="btnPrimary" href="/#kyc">
                  Request a walkthrough
                </Link>
              </div>
            </div>

            {/* RIGHT: AT-A-GLANCE */}
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>At a glance</h3>

              <p className="p" style={{ marginTop: 10 }}>
                <strong>Domestic:</strong> local bank + local clearing
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Cross-border:</strong> licensed partner + corridor
                routing
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Control plane:</strong> consistent state, policy, and
                audit
              </p>

              <div
                style={{
                  height: 1,
                  opacity: 0.12,
                  margin: "14px 0",
                  background: "currentColor",
                }}
              />

              <p className="p" style={{ margin: 0 }}>
                One governed operating layer — many settlement paths — without
                governance drift across providers.
              </p>
            </div>
          </div>

          {/* ARTICLE */}
          <div style={{ marginTop: 28, maxWidth: 980 }}>
            <h2 className="h2" style={{ marginBottom: 10 }}>
              Why settlement models fragment enterprise operations
            </h2>
            <p className="p">
              Most global organizations don’t have “a payments system.” They
              have a patchwork: payroll providers, bank portals, local payment
              processors, FX vendors, and country-by-country execution partners.
              Each tool introduces its own states, permissions, cutoffs, and
              reporting semantics.
            </p>
            <p className="p" style={{ marginTop: 10 }}>
              The result is predictable: approvals and funding are managed in
              one system, execution in another, and reconciliation in a third.
              When a payout is delayed, teams chase providers instead of
              consulting a single source of truth.
            </p>

            <h2 className="h2" style={{ marginTop: 28, marginBottom: 10 }}>
              Domestic settlement (local rails)
            </h2>
            <p className="p">
              Domestic settlement typically means value moves within a single
              country through local clearing systems and domestic banking
              networks. The executing institution is usually a local bank that
              holds or receives funds and settles on local rails.
            </p>

            <div
              className="kycGrid"
              style={{ marginTop: 14, alignItems: "stretch" }}
            >
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Common characteristics</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Local clearing cutoffs, localized compliance requirements, and
                  bank-specific formats for file submission and confirmation.
                </p>
              </div>

              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Typical failure modes</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Missed cutoffs, format exceptions, late funding, and delayed
                  confirmation that breaks payroll timelines.
                </p>
              </div>
            </div>

            {/* WPS NOD */}
            <p className="p" style={{ marginTop: 14 }}>
              In jurisdictions with mandated wage protection frameworks — such
              as Wage Protection Systems (WPS) in parts of the Gulf — domestic
              settlement must also satisfy regulatory timing, formatting, and
              confirmation requirements. In these environments, Modern
              PayEngine governs approval, funding, and release centrally while
              routing execution through compliant local banks and payroll
              partners to meet statutory wage obligations without fragmenting
              controls.
            </p>

            <h2 className="h2" style={{ marginTop: 28, marginBottom: 10 }}>
              Cross-border settlement (corridor routing)
            </h2>
            <p className="p">
              Cross-border settlement introduces an additional layer of
              complexity: multiple institutions, multiple regulatory regimes,
              and corridor-dependent execution paths. Settlement can involve
              correspondent banking, licensed cross-border providers, or local
              payout partners depending on the market and corridor.
            </p>

            <div
              className="kycGrid"
              style={{ marginTop: 14, alignItems: "stretch" }}
            >
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Common characteristics</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Corridor-by-corridor routing, FX timing decisions, and
                  settlement confirmations that arrive asynchronously from
                  different parties.
                </p>
              </div>

              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Typical failure modes</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Unclear delivery amounts due to late FX, intermediary delays,
                  inconsistent tracking data, and fragmented reporting.
                </p>
              </div>
            </div>

            <h2 className="h2" style={{ marginTop: 28, marginBottom: 10 }}>
              A control-plane approach to settlement
            </h2>
            <p className="p">
              Modern PayEngine treats settlement as execution — and keeps the
              organization’s authority above it. Lifecycle state, approvals,
              funding checkpoints, FX decisioning, and release conditions are
              governed centrally. Settlement is routed to the best available
              executing institution for each market and corridor.
            </p>

            <div className="panel" style={{ marginTop: 14 }}>
              <h3 style={{ marginTop: 0 }}>What stays consistent</h3>
              <p className="p" style={{ marginTop: 10, marginBottom: 0 }}>
                <strong>Policy:</strong> who can initiate, approve, and release
                <br />
                <strong>State:</strong> explicit lifecycle transitions
                <br />
                <strong>Audit:</strong> deterministic lineage from intent to
                settlement
              </p>
            </div>

            <h2 className="h2" style={{ marginTop: 28, marginBottom: 10 }}>
              Why this matters operationally
            </h2>

            <div
              className="kycGrid"
              style={{ marginTop: 14, alignItems: "stretch" }}
            >
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Provider flexibility</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Change banks or partners by corridor without reworking controls
                  or retraining teams on new approval semantics.
                </p>
              </div>

              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Predictable delivery</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Align funding and FX with release so delivered amounts are
                  known before execution and exceptions are reduced.
                </p>
              </div>

              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Cleaner audit and reporting</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  One authoritative trail across providers — supporting
                  reconciliations, audits, and operational reporting.
                </p>
              </div>
            </div>

            <div className="panel" style={{ marginTop: 28 }}>
              <h3 style={{ marginTop: 0 }}>Detailed corridor notes</h3>
              <p className="p" style={{ marginTop: 10 }}>
                A deeper breakdown of settlement models — including corridor
                routing patterns, confirmation behaviors, cutoff strategies, and
                partner selection criteria — is currently in development.
              </p>

              <div style={{ marginTop: 14 }}>
                <span
                  className="btnSecondary"
                  style={{ opacity: 0.7, cursor: "default" }}
                >
                  Coming soon
                </span>
              </div>
            </div>

            <div
              style={{
                marginTop: 26,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <Link className="btnSecondary" href="/resources/fx-governed">
                FX governance
              </Link>
              <Link className="btnSecondary" href="/resources/execution-routing">
                Execution abstraction
              </Link>
              <Link className="btnPrimary" href="/#kyc">
                Request a walkthrough
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
