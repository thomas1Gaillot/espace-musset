'use client'
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ROUTES } from "@/data/route";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const philosophieSubpages = [
    { name: "Ateliers hebdos", path: ROUTES.PHILOSOPHIE.SUBPAGES.ATELIERS },
    { name: "Cafés philo", path: ROUTES.PHILOSOPHIE.SUBPAGES.CAFES },
    { name: "Ciné philo", path: ROUTES.PHILOSOPHIE.SUBPAGES.CINE },
    { name: "Conférences", path: ROUTES.PHILOSOPHIE.SUBPAGES.CONFERENCES },
  ];

  const ecologieSubpages = [
    { name: "Ateliers écologiques", path: ROUTES.ECOLOGIE.SUBPAGES.ATELIERS },
    { name: "Jardinage urbain", path: ROUTES.ECOLOGIE.SUBPAGES.JARDINAGE },
    { name: "Zéro déchet", path: ROUTES.ECOLOGIE.SUBPAGES.ZERO_DECHET },
  ];

  const artsSubpages = [
    { name: "Yoga", path: ROUTES.ARTS_DU_CORPS.SUBPAGES.YOGA },
    { name: "Danse", path: ROUTES.ARTS_DU_CORPS.SUBPAGES.DANSE },
    { name: "Théâtre", path:ROUTES.ARTS_DU_CORPS.SUBPAGES.THEATRE },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={ROUTES.ACCUEIL} className="flex items-center space-x-2">
            {/* <span className="text-primary-foreground font-serif font-semibold text-xl">EM</span> */}
            <img src="/logo.png" alt="Espace Musset" className="w-12 h-12" />

            <div className="block">
              <h1 className="font-serif font-semibold text-xl text-foreground">Espace Musset</h1>
              <p className="text-xs text-muted-foreground">Centre culturel & associatif</p>
            </div>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href={ROUTES.ACCUEIL} className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Accueil
            </Link>

            <Link href={ROUTES.CAFE_ASSOCIATIF} className={`nav-link ${isActive('/cafe-associatif') ? 'active' : ''}`}>
              Café associatif
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center space-x-1">
                <span>Philosophie</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border">
                <DropdownMenuItem asChild>
                  <Link href={ROUTES.PHILOSOPHIE.ROOT} className="w-full">Vue d'ensemble</Link>
                </DropdownMenuItem>
                {philosophieSubpages.map((page) => (
                  <DropdownMenuItem key={page.path} asChild>
                    <Link href={page.path} className="w-full">{page.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center space-x-1">
                <span>Écologie</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border">
                <DropdownMenuItem asChild>
                  <Link href={ROUTES.ECOLOGIE.ROOT} className="w-full">Vue d'ensemble</Link>
                </DropdownMenuItem>
                {ecologieSubpages.map((page) => (
                  <DropdownMenuItem key={page.path} asChild>
                    <Link href={page.path} className="w-full">{page.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>



            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center space-x-1">
                <span>Arts du corps</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border">
                <DropdownMenuItem asChild>
                  <Link href={ROUTES.ARTS_DU_CORPS.ROOT} className="w-full">Vue d'ensemble</Link>
                </DropdownMenuItem>
                {artsSubpages.map((page) => (
                  <DropdownMenuItem key={page.path} asChild>
                    <Link href={page.path} className="w-full">{page.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href={ROUTES.LOCATION_SALLES} className={`nav-link ${isActive('/location-salles') ? 'active' : ''}`}>
              Location de salles
            </Link>

            <Link href={ROUTES.CONTACT} className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
              Contact
            </Link>

          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link href={ROUTES.ACCUEIL} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Accueil
              </Link>
              <Link href={ROUTES.CAFE_ASSOCIATIF} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Café associatif
              </Link>
              <Link href={ROUTES.ECOLOGIE.ROOT} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Écologie
              </Link>
              <Link href={ROUTES.PHILOSOPHIE.ROOT} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Philosophie
              </Link>
              <Link href={ROUTES.ARTS_DU_CORPS.ROOT} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Arts du corps
              </Link>
              <Link href={ROUTES.LOCATION_SALLES} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Location de salles
              </Link>
              <Link href={ROUTES.CONTACT} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};