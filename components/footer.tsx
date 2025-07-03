import Link from "next/link"
import { Facebook, Instagram, Calendar, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  return (
    <footer className="bg-earth-dark text-cream">
      <div className="container mx-auto px-4 py-12">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center">
              <span className="text-cream font-bold text-2xl">EM</span>
            </div>
            <h2 className="font-serif font-bold text-3xl">Espace Musset</h2>
          </div>
          <p className="text-cream/80 max-w-md mx-auto">
            Lieu de vie associatif dédié au partage, à la philosophie, à l'écologie et aux arts du corps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-semibold text-xl mb-4">Contact</h3>
            <div className="space-y-2 text-cream/80">
              <p>123 Rue de la République</p>
              <p>31000 Toulouse</p>
              <p className="flex items-center space-x-2">
                <span>Métro:</span>
                <span>Capitole (Ligne A)</span>
              </p>
              <p>Tél: 05 61 23 45 67</p>
              <p>Email: contact@espacemusset.fr</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif font-semibold text-xl mb-4">Newsletter</h3>
            <p className="text-cream/80 mb-4">Restez informé de nos événements et activités</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/60"
              />
              <Button className="bg-sage hover:bg-sage/80 text-cream">S'inscrire</Button>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-serif font-semibold text-xl mb-4">Suivez-nous</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="text-cream/80 hover:text-sage transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-cream/80 hover:text-sage transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-cream/80 hover:text-sage transition-colors">
                <Calendar className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-cream/80 hover:text-sage transition-colors">
                <Home className="w-6 h-6" />
              </Link>
            </div>
            <div className="text-sm text-cream/60 space-y-1">
              <p>Facebook & Instagram: @espacemusset</p>
              <p>Eventbrite: Espace Musset Events</p>
              <p>Kaktus: Location de salles</p>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-cream/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-cream/60">
          <p>&copy; 2024 Espace Musset. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/mentions-legales" className="hover:text-sage transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-sage transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
