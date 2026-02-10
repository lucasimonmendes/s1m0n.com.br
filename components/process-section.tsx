"use client"

import Image from "next/image"
import { useLanguage } from "./language-context"

export function ProcessSection() {
  const { t } = useLanguage()

  const steps = [
    { number: "01", titleKey: "process.1.title", descKey: "process.1.desc", tilt: 1 },
    { number: "02", titleKey: "process.2.title", descKey: "process.2.desc", tilt: -0.8 },
    { number: "03", titleKey: "process.3.title", descKey: "process.3.desc", tilt: 0.5 },
    { number: "04", titleKey: "process.4.title", descKey: "process.4.desc", tilt: -1.2 },
  ]

  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background watermark */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none" style={{ transform: "translate(-50%, -50%) rotate(8deg)" }}>
        <Image
          src="/images/s1m0n-symbol.png"
          alt=""
          width={500}
          height={800}
          className="invert"
          aria-hidden="true"
        />
      </div>

      {/* Floating scribble */}
      <div className="pointer-events-none absolute right-12 top-20 opacity-[0.06] animate-float select-none hidden lg:block" aria-hidden="true">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M10 70 Q40 10 70 70" stroke="#2563EB" strokeWidth="1" fill="none" strokeDasharray="3 5" />
          <path d="M15 65 Q40 15 65 65" stroke="#2563EB" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mb-16 flex items-baseline gap-4 flex-wrap">
          <h2 className="font-heading text-2xl font-bold text-cloud sm:text-3xl lowercase">
            {t("process.heading")}
          </h2>
          <span className="font-mono text-xs text-slate/50 italic">
            {t("process.aside")}
          </span>
          <span className="h-px flex-1 bg-line/10" />
        </div>

        {/* Process steps -- slightly chaotic grid */}
        <div className="grid gap-px md:grid-cols-4 stagger-children">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative flex flex-col border border-line/10 p-6 sm:p-8 transition-all hover:border-line/25 hover:rotate-0 animate-slide-up"
              style={{ transform: `rotate(${step.tilt}deg)` }}
            >
              {/* Hand-drawn number circle */}
              <div className="relative mb-4 inline-flex">
                <span className="font-mono text-xs font-bold text-saas-blue">
                  {step.number}
                </span>
                <svg
                  className="absolute -inset-2 text-saas-blue/20"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
                </svg>
              </div>

              <h3 className="font-heading text-lg font-bold text-cloud lowercase">
                {t(step.titleKey)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {t(step.descKey)}
              </p>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="mt-4 hidden text-line/30 md:block" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
