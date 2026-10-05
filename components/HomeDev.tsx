"use client";

import { useState } from "react";

const STEPS = [
  { title: "Authorize", note: "", code: "Authorization: Bearer mpe_..." },
  { title: "Route", note: "", code: '"method": "bank"' },
  { title: "Sign", note: "Signed webhook", code: "X-MPE-Signature" },
] as const;

export default function HomeDev({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <ol className="devSteps">
        {STEPS.map((step) => (
          <li key={step.title}>
            <b>{step.title}</b>
            {step.note ? <span>{step.note}</span> : null}
            <code>{step.code}</code>
          </li>
        ))}
      </ol>

      <div className="devWindow">
        <div className="devChrome">
          <span className="devDots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <b>Payout request</b>
          <button type="button" className="devCopy" onClick={onCopy}>
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="devCode" aria-label="Payout request">
          <code>
            <span className="tokVerb">POST</span> <span className="tokPath">/v1/programs/{"{programId}"}/payouts</span>
            {"\n"}
            <span className="tokLabel">Authorization</span>
            {": Bearer "}
            <span className="tokStr">mpe_test_...</span>
            {"\n"}
            <span className="tokLabel">Idempotency-Key</span>
            {": "}
            <span className="tokStr">{"<uuid>"}</span>
            {"\n"}
            <span className="tokLabel">Body</span>
            {"\n"}
            {"{\n  "}
            <span className="tokKey">&quot;enrollmentId&quot;</span>
            {": "}
            <span className="tokStr">&quot;enr_...&quot;</span>
            {",\n  "}
            <span className="tokKey">&quot;amountInMinor&quot;</span>
            {": "}
            <span className="tokNum">248000</span>
            {",\n  "}
            <span className="tokKey">&quot;currency&quot;</span>
            {": "}
            <span className="tokStr">&quot;CAD&quot;</span>
            {",\n  "}
            <span className="tokKey">&quot;method&quot;</span>
            {": "}
            <span className="tokStr">&quot;bank&quot;</span>
            {"\n}\n"}
            <span className="tokNum">201</span>
            {" { "}
            <span className="tokKey">&quot;transferId&quot;</span>
            {": "}
            <span className="tokStr">&quot;trf_...&quot;</span>
            {", "}
            <span className="tokKey">&quot;state&quot;</span>
            {": "}
            <span className="tokStr">&quot;Sent&quot;</span>
            {" }"}
          </code>
        </pre>
      </div>
    </>
  );
}
