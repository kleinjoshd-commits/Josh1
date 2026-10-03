import KycForm from "@/components/KycForm";

export default function RequestAccess() {
  return (
    <KycForm
      title="Request access."
      lede="Sandbox access, API docs, and embeds come with access."
      submitLabel="Request access"
    />
  );
}
