import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AnswerPage from "@/components/AnswerPage";
import { getAnswerPage } from "@/content/answers";
import { pageMeta } from "@/lib/pageMeta";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: "gig-and-delivery-payouts" },
    { slug: "branded-worker-wallet" },
    { slug: "worker-account-and-routing-number" },
    { slug: "branded-wallet-alternatives" },
    { slug: "fleet-platform-payouts" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getAnswerPage(slug);
  if (!page) return {};
  return pageMeta(page.path);
}

export default async function WorkerAnswerPage({ params }: Props) {
  const { slug } = await params;
  const page = getAnswerPage(slug);
  if (!page) notFound();
  return <AnswerPage page={page} />;
}
