import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EventData } from "@/types/event-types";
import { MonthlyEventsData } from "@/data/get-monthly.events";
import { downloadNewsletterHTML, downloadNewsletterHTMLGrouped } from "@/utils/newsletter-html-exporter";

interface ExportButtonsProps {
  events?: EventData[];
  eventsData?: MonthlyEventsData;
  month?: string;
  year?: number;
}

export function ExportButton({ events, eventsData, month, year }: ExportButtonsProps) {
  const handleDownload = () => {
    if (eventsData) {
      downloadNewsletterHTMLGrouped(eventsData, month, year);
    } else if (events) {
      downloadNewsletterHTML(events, month, year);
    }
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="max-w-80">
          <Mail className="w-4 h-4 mr-2" />
          Envoyer la Newsletter
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[600px] sm:max-w-[600px] flex flex-col">
        <SheetHeader>
          <SheetTitle>Comment envoyer la newsletter par email</SheetTitle>
          <SheetDescription>
            Suivez ces étapes pour envoyer votre newsletter aux abonnés
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 py-4">
          {/* Étape 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
              1
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Télécharger la newsletter au format HTML</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Cliquez sur le bouton ci-dessous pour télécharger le fichier HTML de votre
                newsletter.
              </p>
              <Button
                onClick={handleDownload}
                variant="outline"
                size="sm"
              >
                <Download className="w-4 h-4 mr-2" />
                Télécharger la Newsletter
              </Button>
            </div>
          </div>

          {/* Étape 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
              2
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Ouvrir et copier la newsletter</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Ouvrez le fichier HTML téléchargé dans votre navigateur, puis :
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>
                  Sélectionnez tout le contenu (
                  <kbd className="px-1.5 py-0.5 text-xs bg-muted rounded">Ctrl+A</kbd> sur
                  Windows/Linux ou{" "}
                  <kbd className="px-1.5 py-0.5 text-xs bg-muted rounded">Cmd+A</kbd> sur Mac)
                </li>
                <li>
                  Copiez le contenu (
                  <kbd className="px-1.5 py-0.5 text-xs bg-muted rounded">Ctrl+C</kbd> ou{" "}
                  <kbd className="px-1.5 py-0.5 text-xs bg-muted rounded">Cmd+C</kbd>)
                </li>
              </ul>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
              3
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Coller dans votre email</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Ouvrez votre client email (Gmail, Outlook, etc.) et créez un nouveau message :
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Cliquez dans la zone de texte du message</li>
                <li>
                  Collez le contenu (
                  <kbd className="px-1.5 py-0.5 text-xs bg-muted rounded">Ctrl+V</kbd> ou{" "}
                  <kbd className="px-1.5 py-0.5 text-xs bg-muted rounded">Cmd+V</kbd>)
                </li>
                <li>Vérifiez que la mise en forme est correcte</li>
              </ul>
            </div>
          </div>

          {/* Étape 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
              4
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Envoyer l'email</h3>
              <p className="text-sm text-muted-foreground">
                Ajoutez vos destinataires, vérifiez une dernière fois le message, puis envoyez votre
                newsletter !
              </p>
            </div>
          </div>

          {/* Note importante */}
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm font-medium mb-1">💡 Conseil</p>
            <p className="text-sm text-muted-foreground">
              Envoyez-vous d'abord un email de test pour vérifier que tout s'affiche correctement
              avant d'envoyer à tous vos abonnés.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
