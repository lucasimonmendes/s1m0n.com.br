
import { LanguageProvider } from "@/components/language-context"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <LanguageProvider initialLocale={locale as any}>
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
