"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigationItems = [
    { name: "Accueil", href: "/" },
    { name: "Café associatif", href: "/cafe-associatif" },
    {
      name: "Écologie",
      href: "/ecologie",
      dropdown: [
        { name: "Jardinage urbain", href: "/ecologie/jardinage-urbain" },
        { name: "Ateliers zéro déchet", href: "/ecologie/zero-dechet" },
        { name: "Permaculture", href: "/ecologie/permaculture" },
      ],
    },
    {
      name: "Philosophie",
      href: "/philosophie",
      dropdown: [
        { name: "Ateliers hebdos", href: "/philosophie/ateliers-hebdos" },
        { name: "Cafés philo", href: "/philosophie/cafes-philo" },
        { name: "Ciné philo", href: "/philosophie/cine-philo" },
        { name: "Conférences", href: "/philosophie/conferences" },
      ],
    },
    {
      name: "Arts du corps",
      href: "/arts-du-corps",
      dropdown: [
        { name: "Yoga", href: "/arts-du-corps/yoga" },
        { name: "Danse", href: "/arts-du-corps/danse" },
        { name: "Théâtre", href: "/arts-du-corps/theatre" },
      ],
    },
    { name: "Location de salles", href: "/location-salles" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-teal/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="Espace Musset" className="w-12 h-12" />
            <span className="font-serif font-bold text-xl text-burgundy">Espace Musset</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-burgundy hover:text-teal transition-colors duration-200 py-2"
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-teal/20 py-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-earth-dark hover:bg-teal/10 hover:text-teal transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-teal/20">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 text-burgundy hover:text-teal transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-1 text-sm text-earth-medium hover:text-teal transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
