"use client"

import { useLanguage } from "./language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-line/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        {/* Brand */}
        <span className="font-mono text-sm font-bold text-cloud/50">
          s1m0n
        </span>

        {/* Human tagline */}
        <span className="font-mono text-[11px] text-slate/40 italic lowercase">
          {t("footer.made")} -- {t("footer.location")}
        </span>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/s1m0n"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate transition-colors hover:text-cloud lowercase"
            aria-label="GitHub"
          >
            github
          </a>
          <a
            href="https://linkedin.com/in/lucas-simon-mendes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate transition-colors hover:text-cloud lowercase"
            aria-label="LinkedIn"
          >
            linkedin
          </a>
        </div>
      </div>
    </footer>
  )
}
