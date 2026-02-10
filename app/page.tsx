"use client"

import { LanguageProvider } from "@/components/language-context"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
