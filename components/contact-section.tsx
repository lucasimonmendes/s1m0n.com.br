"use client"

import { useLanguage } from "./language-context"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background scribble */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] select-none" aria-hidden="true">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <path d="M50 250 Q150 50 250 250" stroke="#2563EB" strokeWidth="1" fill="none" />
          <path d="M70 230 Q150 70 230 230" stroke="#2563EB" strokeWidth="0.5" fill="none" strokeDasharray="5 8" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-lg text-center">
          {/* Heading -- casual */}
          <h2
            className="font-heading text-2xl font-bold text-cloud sm:text-3xl lowercase"
            style={{ transform: "rotate(-0.5deg)" }}
          >
            {t("contact.heading")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            {t("contact.body")}
          </p>

          {/* CTA */}
          <a
            href="mailto:lucasimonmendes@hotmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-sm border-2 border-saas-blue bg-saas-blue px-8 py-3.5 text-sm font-semibold text-cloud transition-all hover:bg-saas-blue/90 hover:-rotate-1"
          >
            {t("contact.cta")}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Social links */}
          <div className="mt-10">
            <p className="mb-4 font-mono text-xs text-slate/50 lowercase">{t("contact.or")}</p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://github.com/lucasimonmendes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate transition-colors hover:text-cloud lowercase"
              >
                github
              </a>
              <span className="h-4 w-px bg-line/15" aria-hidden="true" />
              <a
                href="https://linkedin.com/in/lucasimonmendes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate transition-colors hover:text-cloud lowercase"
              >
                linkedin
              </a>
              <span className="h-4 w-px bg-line/15" aria-hidden="true" />
              <a
                href="mailto:lucasimonmendes@hotmail.com"
                className="text-sm font-medium text-slate transition-colors hover:text-cloud lowercase"
              >
                email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
