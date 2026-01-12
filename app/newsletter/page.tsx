"use client";
import { NewsletterTemplate } from "@/components/newsletter/NewsletterTemplate";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { eventList } from "@/data/data.allevents";
import { getMonthlyEventsGrouped } from "@/data/get-monthly.events";
import { ROUTES } from "@/data/route";

import { ExportButton } from "@/components/newsletter/ExportButtons";

export default function NewsLetter() {
  const eventsData = getMonthlyEventsGrouped(eventList);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={ROUTES.ACCUEIL}>Accueil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>Newsletter</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="w-full flex justify-between">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Newsletter</h1>
          <ExportButton eventsData={eventsData} />
        </div>
        <div className="prose prose-lg max-w-none space-y-8">
          <NewsletterTemplate eventsData={eventsData} />
        </div>
      </div>
    </div>
  );
}
