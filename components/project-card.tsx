interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  highlightTags?: string[]
  proof: string
  links: { label: string; href: string }[]
  tilt?: number
}

export function ProjectCard({
  title,
  description,
  tags,
  highlightTags = [],
  proof,
  links,
  tilt = 0,
}: ProjectCardProps) {
  return (
    <article
      className="group relative flex flex-col border-2 border-line/15 bg-card p-6 transition-all hover:border-saas-blue/40 hover:rotate-0 sm:p-8 animate-slide-up"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      {/* Corner accent */}
      <div
        className="absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-saas-blue/30"
        aria-hidden="true"
      />

      {/* Title */}
      <h3 className="font-heading text-lg font-bold text-cloud sm:text-xl lowercase">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-relaxed text-slate">{description}</p>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag, i) => {
          const isHighlight = highlightTags.includes(tag)
          return (
            <span
              key={tag}
              className={`rounded-sm px-2.5 py-1 font-mono text-xs font-bold ${
                isHighlight
                  ? "border border-creator-teal/30 bg-creator-teal/10 text-creator-teal"
                  : "border border-line/15 bg-line/5 text-slate"
              }`}
              style={{ transform: `rotate(${i % 2 === 0 ? -0.5 : 0.8}deg)` }}
            >
              {tag}
            </span>
          )
        })}
      </div>

      {/* Proof */}
      <div className="mt-5 flex items-start gap-2 border-t border-line/10 pt-4">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="mt-0.5 shrink-0 text-creator-teal"
          aria-hidden="true"
        >
          <path
            d="M13 4.5L6.5 11 3 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-sm text-slate">{proof}</p>
      </div>

      {/* Links */}
      <div className="mt-auto flex flex-wrap gap-4 pt-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-saas-blue transition-colors hover:text-saas-blue/80 lowercase"
          >
            {link.label}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M5 3h8v8M13 3L3 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ))}
      </div>
    </article>
  )
}
