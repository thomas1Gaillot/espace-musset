import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLinkIcon, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-sage-50 border-t border-sage-200">

      <div className="container mx-auto px-4 py-12">
        {/* Logo centré */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3">
            <img src="/logo.png" alt="Espace Musset" className="w-16 h-16" />
            <div>
              <h2 className="font-serif font-bold text-2xl text-foreground">Espace Musset</h2>
              <p className="text-sm text-muted-foreground">Centre culturel & associatif</p>
            </div>

          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-serif font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>52 Bis Rue Alfred de Musset</p>
              <p>31200 Toulouse</p>
              <p>Métro: Minimes - Claude Nougaro</p>
              <p>Tél: 06 30 15 46 48</p>
              <p>contact@espace-musset.com</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center">
            <h3 className="font-serif font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Restez informé de nos événements et ateliers
            </p>
            <div className="flex max-w-sm mx-auto">
              <Input
                type="email"
                placeholder="Votre email"
                className="rounded-r-none"
              />
              <Button className="rounded-l-none">
                S'inscrire
              </Button>

            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="font-serif font-semibold text-lg mb-4">Suivez-nous</h3>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end space-x-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" className="h-10" asChild>
                <a href="https://eventbrite.com" target="_blank" rel="noopener noreferrer">
                  Evènements <ExternalLinkIcon className="size-4"/>
                </a>
              </Button>
              <Button variant="outline" size="sm" className="h-10" asChild>
                <a href="https://www.kactus.com/fr/lieux/espace-musset" target="_blank" rel="noopener noreferrer">
                  Location Salle <ExternalLinkIcon className="size-4"/>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-sage-200 pt-6 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
            <Link href="/mentions-legales" className="hover:text-primary transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>
            <span>© 2024 Espace Musset - Tous droits réservés</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
