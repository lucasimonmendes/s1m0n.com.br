import { render, screen } from "@testing-library/react"
import { HeroSection } from "@/components/hero-section"
import { LanguageProvider } from "@/components/language-context"

describe("HeroSection Component", () => {
  it("renders the hero title and main dynamic texts", () => {
    render(
      <LanguageProvider>
        <HeroSection />
      </LanguageProvider>
    )

    // O Hero mostra o nome e títulos dinâmicos
    expect(screen.getByText(/Fullstack \(Node · React · TypeScript\)/i)).toBeInTheDocument()
    expect(screen.getByText(/full-stack dev/i)).toBeInTheDocument()

    // Botões de CTA
    expect(screen.getByText("See projects")).toBeInTheDocument()
    expect(screen.getByText("Contact me")).toBeInTheDocument()
  })
})
