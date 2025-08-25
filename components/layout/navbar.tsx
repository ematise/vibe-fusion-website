"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/ui/language-toggle"
import { useTranslation } from "@/lib/i18n"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/menu", label: t("nav.menu") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
    { href: "/reservations", label: t("nav.reservations") },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-brand-primary shadow-sm">
      <div className="mx-auto px-4 container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center"
          >
            <Image 
              src="/vibe-logo-white-transparent-bg-simple.png" 
              alt="Vibe Restaurant | Bar" 
              width={48}
              height={48}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              // Remove locale prefix from pathname for comparison
              const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/'
              const isActive = pathWithoutLocale === item.href || (item.href === '/menu' && pathWithoutLocale.includes('/menu'))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors font-light ${
                    isActive 
                      ? 'text-brand-accent border-b-2 border-brand-accent pb-1' 
                      : 'text-white hover:text-brand-accent'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            {/* Vertical Separator */}
            <div className="h-6 w-px bg-white/30"></div>
            <LanguageToggle />
            {/*<Button asChild className="bg-white text-brand-primary hover:bg-brand-accent hover:text-brand-dark border-2 border-white font-semibold px-6">*/}
            {/*  <Link href="/reservations">{t("nav.bookTable")}</Link>*/}
            {/*</Button>*/}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                // Remove locale prefix from pathname for comparison
                const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/'
                const isActive = pathWithoutLocale === item.href || (item.href === '/menu' && pathWithoutLocale.includes('/menu'))
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-colors px-2 font-extralight ${
                      isActive 
                        ? 'text-brand-accent border-l-2 border-brand-accent pl-3' 
                        : 'text-white hover:text-brand-accent'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <div>
                <LanguageToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
