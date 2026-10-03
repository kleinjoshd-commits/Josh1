import KycForm from "@/components/KycForm";

export default function RequestAccess() {
  return (
    <KycForm
      title="Request access."
      lede="Tell us what you need to pay out, issue, or check. Sandbox keys and docs follow from there."
      submitLabel="Request access"
    />
  );
}
