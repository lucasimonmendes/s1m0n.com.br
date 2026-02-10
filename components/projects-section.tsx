"use client"

import { ProjectCard } from "./project-card"
import { useLanguage } from "./language-context"

export function ProjectsSection() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t("proj.1.title"),
      description: t("proj.1.desc"),
      tags: ["React", "Node.js", "PostgreSQL", "Auth", "Testing"],
      highlightTags: ["Auth"],
      proof: t("proj.1.proof"),
      links: [
        { label: t("proj.link.demo"), href: "#" },
        { label: t("proj.link.github"), href: "#" },
      ],
      tilt: -0.8,
    },
    {
      title: t("proj.2.title"),
      description: t("proj.2.desc"),
      tags: ["TypeScript", "Node.js", "PostgreSQL", "CI/CD", "Observability"],
      highlightTags: ["Observability"],
      proof: t("proj.2.proof"),
      links: [
        { label: t("proj.link.case"), href: "#" },
        { label: t("proj.link.github"), href: "#" },
      ],
      tilt: 1.2,
    },
    {
      title: t("proj.3.title"),
      description: t("proj.3.desc"),
      tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "Testing"],
      highlightTags: ["Testing"],
      proof: t("proj.3.proof"),
      links: [
        { label: t("proj.link.demo"), href: "#" },
        { label: t("proj.link.github"), href: "#" },
      ],
      tilt: -0.5,
    },
  ]

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading -- human */}
        <div className="mb-12 flex items-baseline gap-4 flex-wrap">
          <h2 className="font-heading text-2xl font-bold text-cloud sm:text-3xl lowercase">
            {t("projects.heading")}
          </h2>
          <span className="font-mono text-xs text-slate/50 italic">
            {t("projects.aside")}
          </span>
          <span className="h-px flex-1 bg-line/10" />
        </div>

        {/* Project grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 stagger-children">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
