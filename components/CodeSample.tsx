export default function CodeSample({ code, label }: { code: string; label: string }) {
  return (
    <pre className="codePanel" aria-label={label}>
      <code>{code}</code>
    </pre>
  );
}
