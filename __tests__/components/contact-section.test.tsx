import { render, screen } from "@testing-library/react"
import { ContactSection } from "@/components/contact-section"
import { LanguageProvider } from "@/components/language-context"

describe("ContactSection Component", () => {
  it("renders the contact section and form elements", () => {
    render(
      <LanguageProvider>
        <ContactSection />
      </LanguageProvider>
    )

    // Título da seção
    expect(screen.getByText(/wanna build/i)).toBeInTheDocument()
    expect(screen.getByText(/something\?/i)).toBeInTheDocument()

    // Botão de envio (agora é e-mail)
    expect(screen.getByRole("link", { name: /send me an email/i })).toBeInTheDocument()
  })
})
