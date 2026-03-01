"use client"

import Image from "next/image"
import { useLanguage } from "./language-context"

export function HeroSection() {
  const { t } = useLanguage()

  const proofBullets = [
    t("hero.proof.1"),
    t("hero.proof.2"),
    t("hero.proof.3"),
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Watermark symbol */}
      <div className="pointer-events-none absolute -right-10 top-1/3 -translate-y-1/2 rotate-12 opacity-[0.03] select-none">
        <Image src="/images/s1m0n-symbol.png" alt="" width={600} height={960} className="invert" aria-hidden="true" />
      </div>

      {/* Floating scribbles */}
      <div className="pointer-events-none absolute left-8 top-40 opacity-10 select-none animate-float hidden lg:block" aria-hidden="true">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="28" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 6" />
        </svg>
      </div>
      <div className="pointer-events-none absolute right-20 bottom-32 opacity-[0.07] select-none animate-wiggle hidden lg:block" aria-hidden="true">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M5 35 L20 5 L35 35 Z" stroke="#14B8A6" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div className="max-w-2xl">
            {/* Mobile/Tablet: Photo + label row */}
            <div className="mb-6 flex items-center gap-4">
              <div className="relative shrink-0 lg:hidden">
                <div className="absolute -inset-1.5 border border-saas-blue/25 rounded-full" style={{ transform: "rotate(4deg)" }} aria-hidden="true" />
                <div className="absolute -inset-1.5 border border-creator-teal/10 rounded-full" style={{ transform: "rotate(-3deg)" }} aria-hidden="true" />
                <Image
                  src="/images/lucas-headshot.webp"
                  alt="Lucas Simon Mendes"
                  width={64}
                  height={64}
                  className="relative rounded-full grayscale hover:grayscale-0 transition-all duration-700 object-cover w-14 h-14 sm:w-16 sm:h-16"
                  style={{ transform: "rotate(-2deg)" }}
                />
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-saas-blue" />
                  <span className="font-mono text-xs font-medium tracking-widest text-saas-blue lowercase">
                    {t("hero.label")}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate/40 lg:hidden pl-11 sm:pl-0">
                  {"// that's me ->"}
                </span>
              </div>
            </div>

            {/* H1 Headline */}
            <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-cloud sm:text-4xl lg:text-5xl text-balance">
              {t("hero.headline")}
            </h1>

            {/* Subheadline */}
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
              {t("hero.subheadline")}
            </p>

            {/* Stack tags */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {["Node.js", "React", "TypeScript", "PostgreSQL", "Docker"].map((tech, i) => (
                <span
                  key={tech}
                  className="rounded-sm border border-line/15 bg-line/5 px-3 py-1 font-mono text-xs font-medium text-slate transition-transform hover:rotate-0"
                  style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1.5}deg)` }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Tablet photo */}
            <div className="mt-8 hidden sm:block lg:hidden">
              <div className="relative inline-block">
                <div className="absolute -inset-2 border-2 border-saas-blue/15 rounded-sm" style={{ transform: "rotate(2deg)" }} aria-hidden="true" />
                <div className="absolute -inset-2 border border-creator-teal/10 rounded-sm" style={{ transform: "rotate(-1.5deg)" }} aria-hidden="true" />
                <Image
                  src="/images/lucas-headshot.webp"
                  alt="Lucas Simon Mendes"
                  width={180}
                  height={180}
                  className="relative rounded-sm grayscale hover:grayscale-0 transition-all duration-700 object-cover"
                  style={{ transform: "rotate(-1deg)" }}
                />
                <span className="absolute -bottom-6 left-0 font-mono text-[10px] text-slate/40" style={{ transform: "rotate(-1.5deg)" }} aria-hidden="true">
                  {"^ yep, still me"}
                </span>
              </div>
            </div>

            {/* CTAs + Download CV */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-sm border-2 border-saas-blue bg-saas-blue px-6 py-3 text-sm font-semibold text-cloud transition-all hover:bg-saas-blue/90 hover:-rotate-1"
              >
                {t("hero.cta.primary")}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center rounded-sm border-2 border-line/20 px-6 py-3 text-sm font-semibold text-cloud transition-all hover:border-line/40 hover:bg-line/5 hover:rotate-1"
              >
                {t("hero.cta.secondary")}
              </a>
              <a
                href={t("cv.link")}
                target="_blank"
                rel="noopener"
                aria-label={t("cv.aria")}
                onClick={() => {
                  if (typeof window !== "undefined" && "dataLayer" in window) {
                    (window as Record<string, unknown[]>).dataLayer?.push?.({ event: "download_cv", label: "download_cv" })
                  }
                }}
                className="inline-flex items-center gap-2 rounded-sm border border-creator-teal/30 bg-creator-teal/10 px-4 py-2.5 font-mono text-xs font-bold text-creator-teal transition-all hover:bg-creator-teal/20 hover:-rotate-1"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 2v9M4 8l4 4 4-4M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t("cv.button")}
              </a>
            </div>

            {/* Microcopy */}
            <p className="mt-3 font-mono text-[11px] text-slate/50 italic">
              {t("hero.microcopy")}
            </p>

            {/* Proof bullets */}
            <div className="mt-10 space-y-3 border-t border-line/10 pt-8">
              {proofBullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-creator-teal" />
                  <p className="text-sm leading-relaxed text-slate">{bullet}</p>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div className="mt-10 flex flex-wrap gap-8 sm:gap-12 border-t border-line/10 pt-8">
              <div>
                <p className="font-heading text-2xl font-bold text-cloud">{"< 200ms"}</p>
                <p className="mt-1 text-xs text-slate lowercase">{t("hero.metric.latency")}</p>
              </div>
              <div className="animate-wiggle">
                <p className="font-heading text-2xl font-bold text-creator-teal">-35%</p>
                <p className="mt-1 text-xs text-slate lowercase">{t("hero.metric.incidents")}</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold text-cloud">90%+</p>
                <p className="mt-1 text-xs text-slate lowercase">{t("hero.metric.tests")}</p>
              </div>
            </div>

            {/* Human aside */}
            <p className="mt-6 font-mono text-[11px] text-slate/50 italic">
              {t("hero.aside")}
            </p>
          </div>

          {/* Desktop headshot */}
          <div className="relative hidden lg:block shrink-0">
            <div className="absolute -inset-3 border-2 border-saas-blue/20 rounded-sm" style={{ transform: "rotate(3deg)" }} aria-hidden="true" />
            <div className="absolute -inset-3 border border-creator-teal/10 rounded-sm" style={{ transform: "rotate(-2deg)" }} aria-hidden="true" />
            <Image
              src="/images/lucas-headshot.webp"
              alt="Lucas Simon Mendes"
              width={280}
              height={280}
              className="relative rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              style={{ transform: "rotate(-1deg)" }}
            />
            <span className="absolute -bottom-8 right-0 font-mono text-[10px] text-slate/40" style={{ transform: "rotate(2deg)" }} aria-hidden="true">
              {"<- that's me"}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
