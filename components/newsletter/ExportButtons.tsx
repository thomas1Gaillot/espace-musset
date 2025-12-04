import { Download, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EventData } from "@/types/event-types";
import { useState } from "react";
import { copyNewsletterHTML, downloadNewsletterHTML } from "@/utils/newsletter-html-exporter";

interface ExportButtonsProps {
  events: EventData[];
  month?: string;
  year?: number;
}

export function ExportButtons({ events, month, year }: ExportButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyNewsletterHTML(events, month, year);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex gap-2">
      <Button
        onClick={() => downloadNewsletterHTML(events, month, year)}
        variant="outline"
        className="flex-1"
      >
        <Download className="w-4 h-4 mr-2" />
        Télécharger HTML
      </Button>

      <Button onClick={handleCopy} variant="outline" className="flex-1">
        <Copy className="w-4 h-4 mr-2" />
        {copied ? "✓ Copié !" : "Copier HTML"}
      </Button>
    </div>
  );
}
