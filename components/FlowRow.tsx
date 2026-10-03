type Step = { title: string; body: string };

export default function FlowRow({ steps }: { steps: readonly Step[] }) {
  return (
    <ol className="flowSteps">
      {steps.map((step, index) => (
        <li key={step.title}>
          <span className="flowIndex">{index + 1}</span>
          <b>{step.title}</b>
          <p>{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
