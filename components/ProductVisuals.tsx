import type { ReactNode } from "react";

export function SplitStory({
  visual,
  children,
}: {
  visual: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="vizRow">
      <div className="vizCopy">{children}</div>
      <div className="vizSide">{visual}</div>
    </div>
  );
}

function Phone({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="vizPhone">
      <div className="vizPhoneTop">{label}</div>
      <div className="vizPhoneBody">{children}</div>
    </div>
  );
}

export function PayoutScreen() {
  return (
    <div className="vizPay">
      <p>Payout</p>
      <strong>$2,480.00</strong>
      <span>Bank deposit</span>
      <span>United States</span>
      <em>Sent</em>
    </div>
  );
}

export function CardScreen() {
  return (
    <div className="vizCardScreen">
      <div className="vizCardFace">
        <span>Card</span>
        <b>Spend controls</b>
      </div>
      <div className="vizFreeze">Freeze</div>
    </div>
  );
}

export function HostApp({ screen }: { screen: "payout" | "card" | "both" }) {
  return (
    <div className="vizHost" aria-hidden="true">
      <div className="vizHostNav">
        <span>Home</span>
        <span className="isOn">Pay</span>
        <span>People</span>
      </div>
      <div className="vizHostMain">
        <p>Your app</p>
        <div className="vizHostPhones">
          {screen !== "card" ? (
            <Phone label="Embed">
              <PayoutScreen />
            </Phone>
          ) : null}
          {screen !== "payout" ? (
            <Phone label="Embed">
              <CardScreen />
            </Phone>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function WorkerPhone() {
  return (
    <div className="vizWorker" aria-hidden="true">
      <Phone label="Your brand">
        <ul className="vizWorkerList">
          <li>Verified</li>
          <li>Paid</li>
          <li>Send money home</li>
        </ul>
        <CardScreen />
      </Phone>
    </div>
  );
}

export function BrowserFrame({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="vizBrowser" aria-hidden="true">
      <div className="vizBrowserBar">
        <span />
        <span />
        <span />
        <b>{title}</b>
      </div>
      {children}
    </div>
  );
}

export function OpsConsole() {
  return (
    <BrowserFrame title="Ops">
      <div className="vizOps">
        <table>
          <thead>
            <tr>
              <th>Payout</th>
              <th>Route</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$2,480.00</td>
              <td>Bank</td>
              <td>Success</td>
            </tr>
            <tr>
              <td>€860.00</td>
              <td>Card</td>
              <td>Speed</td>
            </tr>
            <tr>
              <td>£420.00</td>
              <td>Wallet</td>
              <td>Cost</td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li>Provider health</li>
          <li>KYC</li>
          <li>Webhooks</li>
        </ul>
      </div>
    </BrowserFrame>
  );
}

export function OpsRouting() {
  return (
    <BrowserFrame title="Routing">
      <ul className="vizRoutes">
        <li>
          <span>Provider 1</span>
          <em>Eligible</em>
        </li>
        <li className="isDown">
          <span>Provider 2</span>
          <em>Degraded</em>
        </li>
        <li className="isPicked">
          <span>Provider 3</span>
          <em>Picked</em>
        </li>
      </ul>
    </BrowserFrame>
  );
}

export function MiniRoute() {
  return (
    <div className="vizMini" aria-hidden="true">
      <div className="vizMiniProviders">
        <span>Provider 1</span>
        <span>Provider 2</span>
        <span>Provider 3</span>
      </div>
      <svg className="vizMiniWires" viewBox="0 0 100 300" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 50 C 62 50, 62 150, 100 150" />
        <path d="M0 150 H 100" />
        <path d="M0 250 C 62 250, 62 150, 100 150" />
      </svg>
      <div className="vizMiniScore">
        <b>Score</b>
        <span>Success</span>
        <span>Speed</span>
        <span>Cost</span>
      </div>
    </div>
  );
}

function CardPhone({
  label,
  tone,
  children,
}: {
  label: string;
  tone: "pay" | "work";
  children: ReactNode;
}) {
  return (
    <div className={`whoPhone is-${tone}`}>
      <Phone label={label}>{children}</Phone>
    </div>
  );
}

export function SegmentVisual({
  kind,
  frame = "inline",
}: {
  kind: "platforms" | "fintechs" | "businesses" | "machines";
  frame?: "card" | "inline";
}) {
  if (kind === "machines") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/media/built-machines-card.webp"
        alt=""
        className="whoDrone"
        width={1400}
        height={784}
        decoding="sync"
        loading="eager"
        fetchPriority="high"
      />
    );
  }
  if (frame === "card" && kind === "platforms") {
    return (
      <CardPhone label="Your app" tone="pay">
        <PayoutScreen />
      </CardPhone>
    );
  }
  if (frame === "card" && kind === "businesses") {
    return (
      <CardPhone label="Your brand" tone="work">
        <ul className="vizWorkerList">
          <li>Verified</li>
          <li>Paid</li>
          <li>Send money home</li>
        </ul>
        <CardScreen />
      </CardPhone>
    );
  }
  if (kind === "platforms") return <HostApp screen="payout" />;
  if (kind === "businesses") return <WorkerPhone />;
  return <MiniRoute />;
}
