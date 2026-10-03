import BuyerPage from "@/components/BuyerPage";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Fintechs | MPE",
  "One API and one adapter for every licensed provider. Routing scored on success, speed and cost, with fallback when a provider degrades."
);

export default function FintechsPage() {
  return (
    <BuyerPage
      eyebrow="FINTECHS"
      title="Run more than one provider from one API."
      lede="For fintechs and payment programs that run a provider today, or want to add another."
      job="Add a licensed provider without a new integration for each one."
      integrate="One API. One adapter for every licensed provider."
      gets={[
        "Routing scored on success, speed and cost",
        "A signed audit trail",
        "Fallback when a provider degrades",
      ]}
    />
  );
}
