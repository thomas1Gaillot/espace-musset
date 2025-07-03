'use client'
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const philosophieSubpages = [
    { name: "Ateliers hebdos", path: "/philosophie/ateliers-hebdos" },
    { name: "Cafés philo", path: "/philosophie/cafes-philo" },
    { name: "Ciné philo", path: "/philosophie/cine-philo" },
    { name: "Conférences", path: "/philosophie/conferences" },
  ];

  const ecologieSubpages = [
    { name: "Ateliers écologiques", path: "/ecologie/ateliers" },
    { name: "Jardinage urbain", path: "/ecologie/jardinage" },
    { name: "Zéro déchet", path: "/ecologie/zero-dechet" },
  ];

  const artsSubpages = [
    { name: "Yoga", path: "/arts-du-corps/yoga" },
    { name: "Danse", path: "/arts-du-corps/danse" },
    { name: "Théâtre", path: "/arts-du-corps/theatre" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              {/* <span className="text-primary-foreground font-serif font-semibold text-xl">EM</span> */}
              <img src="/logo.png" alt="Espace Musset" className="w-12 h-12" />

            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif font-semibold text-xl text-foreground">Espace Musset</h1>
              <p className="text-xs text-muted-foreground">Centre culturel & associatif</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Accueil
            </Link>

            <Link href="/cafe-associatif" className={`nav-link ${isActive('/cafe-associatif') ? 'active' : ''}`}>
              Café associatif
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center space-x-1">
                <span>Écologie</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border">
                <DropdownMenuItem asChild>
                  <Link href="/ecologie" className="w-full">Vue d'ensemble</Link>
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
                <span>Philosophie</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border">
                <DropdownMenuItem asChild>
                  <Link href="/philosophie" className="w-full">Vue d'ensemble</Link>
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
                <span>Arts du corps</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border">
                <DropdownMenuItem asChild>
                  <Link href="/arts-du-corps" className="w-full">Vue d'ensemble</Link>
                </DropdownMenuItem>
                {artsSubpages.map((page) => (
                  <DropdownMenuItem key={page.path} asChild>
                    <Link href={page.path} className="w-full">{page.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/location-salles" className={`nav-link ${isActive('/location-salles') ? 'active' : ''}`}>
              Location de salles
            </Link>

            <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
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
              <Link href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Accueil
              </Link>
              <Link href="/cafe-associatif" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Café associatif
              </Link>
              <Link href="/ecologie" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Écologie
              </Link>
              <Link href="/philosophie" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Philosophie
              </Link>
              <Link href="/arts-du-corps" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Arts du corps
              </Link>
              <Link href="/location-salles" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Location de salles
              </Link>
              <Link href="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};