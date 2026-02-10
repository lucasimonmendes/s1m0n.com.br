"use client"

import { useState } from "react"
import { useLanguage, type Locale } from "./language-context"

const localeLabels: Record<Locale, string> = {
  en: "en",
  pt: "pt-br",
  es: "es",
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { locale, setLocale, t } = useLanguage()

  const navLinks = [
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.process"), href: "#process" },
    { label: t("nav.contact"), href: "#contact" },
  ]

  const cycleLocale = () => {
    const order: Locale[] = ["en", "pt", "es"]
    const next = order[(order.indexOf(locale) + 1) % order.length]
    setLocale(next)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Just the name, no logo */}
        <a
          href="#"
          className="font-mono text-base font-bold text-cloud tracking-wider hover:text-saas-blue transition-colors"
          aria-label="s1m0n home"
        >
          s1m0n
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate transition-colors hover:text-cloud lowercase"
            >
              {link.label}
            </a>
          ))}

          {/* Language switcher */}
          <button
            type="button"
            onClick={cycleLocale}
            className="flex items-center gap-1.5 rounded-sm border border-line/15 bg-line/5 px-2.5 py-1 font-mono text-xs font-bold text-slate transition-colors hover:text-cloud hover:border-line/30"
            aria-label="Switch language"
          >
            <span className="text-saas-blue">/</span>
            {localeLabels[locale]}
          </button>
        </nav>

        {/* Mobile: lang + toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={cycleLocale}
            className="rounded-sm border border-line/15 bg-line/5 px-2 py-1 font-mono text-xs font-bold text-slate"
            aria-label="Switch language"
          >
            {localeLabels[locale]}
          </button>

          <button
            type="button"
            className="flex flex-col gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-cloud transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-cloud transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-cloud transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-line/10 bg-background px-6 py-6 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-slate transition-colors hover:text-cloud lowercase"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
