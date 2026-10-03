import KycForm from "@/components/KycForm";

type Props = {
  title?: string;
  lede?: string;
  submitLabel?: string;
};

export default function RequestAccess({
  title = "Request access.",
  lede = "Sandbox access, API docs and embeds come with access.",
  submitLabel = "Request access",
}: Props) {
  return <KycForm title={title} lede={lede} submitLabel={submitLabel} />;
}
