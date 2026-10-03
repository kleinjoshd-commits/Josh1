type Step = { title: string; body: string };

export default function FlowRow({
  steps,
  className,
}: {
  steps: readonly Step[];
  className?: string;
}) {
  return (
    <ol className={className ? `flowSteps ${className}` : "flowSteps"}>
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
