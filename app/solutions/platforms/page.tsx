import BuyerPage from "@/components/BuyerPage";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Platforms | MPE",
  "Workforce, gig, fleet and logistics software embed KYC, payouts and card screens, and keep their own app."
);

export default function PlatformsPage() {
  return (
    <BuyerPage
      eyebrow="PLATFORMS"
      title="Pay people from your own app."
      lede="Workforce, gig, fleet and logistics software. You embed MPE and keep your app."
      job="Your people get paid from the product they already use."
      integrate="Embed KYC, payouts and card screens. Document and selfie checks sit in your app."
      gets={[
        "Payouts to bank, debit card and mobile wallet",
        "Cross-border payouts",
        "Branded cards with spend controls and freeze",
        "A signed route on every payout",
      ]}
    />
  );
}
