import { pageSeoByPath } from "@/data/pages.seo";
import { ROUTES } from "@/data/route";
import { USAGES, usageBySlug } from "@/data/salles-usages.data";
import { SALLES, salleById } from "@/data/salles.data";
import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SalleView } from "./salle-view";
import { UsageView } from "./usage-view";

/**
 * Pages de détail de la location de salles :
 * une par salle (/mise-a-disposition/salle-des-muses) et une par usage
 * (/mise-a-disposition/salle-de-yoga-toulouse).
 */
type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [...SALLES.map((s) => ({ slug: s.id })), ...USAGES.map((u) => ({ slug: u.slug }))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const seo = pageSeoByPath(`${ROUTES.MISE_A_DISPOSITION}/${slug}`);
  return seo ? pageMetadata(seo) : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const salle = salleById(slug);
  if (salle) return <SalleView salle={salle} />;

  const usage = usageBySlug(slug);
  if (usage) return <UsageView usage={usage} />;

  notFound();
}
