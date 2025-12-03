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
import { getMonthlyEvents } from "@/data/get-monthly.events";
import { ROUTES } from "@/data/route";
import { useEffect, useState } from "react";
import { render } from "@react-email/render";

export default function NewsLetter() {
  const [html, setHtml] = useState("");

  async function generateHtml() {
    const emailHtml = await render(<NewsletterTemplate events={getMonthlyEvents(eventList)} />);
    setHtml(emailHtml);
  }
  useEffect(() => {
    generateHtml();
  }, [eventList]);

  function downloadHtml(html: string) {
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "newsletter.html";
    a.click();
    URL.revokeObjectURL(url);
  }

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
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Newsletter</h1>
        <button
          onClick={() => downloadHtml(html)}
          className="px-4 py-2 bg-primary text-white rounded"
        >
          {"Générer l'email HTML"}
        </button>
        <div className="prose prose-lg max-w-none space-y-8">
          <NewsletterTemplate events={getMonthlyEvents(eventList)} />
        </div>
      </div>
    </div>
  );
}
