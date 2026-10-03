import BuyerPage from "@/components/BuyerPage";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Distributors | MPE",
  "Distributors and partner networks with no app of their own get a ready-made app in their brand."
);

export default function DistributorsPage() {
  return (
    <BuyerPage
      eyebrow="DISTRIBUTORS"
      title="A ready-made app in your brand."
      lede="For distributors and partner networks with no app of their own."
      job="Offer payouts, cards and identity checks without building an app."
      integrate="Take the ready-made app in your brand."
      gets={[
        "KYC, payouts and card screens, already built",
        "Your brand on the app",
        "The same orchestration behind it",
      ]}
    />
  );
}
