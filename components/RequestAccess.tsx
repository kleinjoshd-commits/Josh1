import KycForm from "@/components/KycForm";

type Props = {
  title?: string;
  lede?: string;
  submitLabel?: string;
};

export default function RequestAccess({
  title = "Request access.",
  lede = "Tell us what you pay out, issue, or check.",
  submitLabel = "Request access",
}: Props) {
  return <KycForm title={title} lede={lede} submitLabel={submitLabel} />;
}
