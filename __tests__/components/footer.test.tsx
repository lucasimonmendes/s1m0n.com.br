import { render, screen } from "@testing-library/react"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-context"

describe("Footer Component", () => {
  it("renders the footer texts and links", () => {
    render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    )

    // Título/Logo do footer
    expect(screen.getAllByText("s1m0n")[0]).toBeInTheDocument()

    // Direitos autorais / feito com
    expect(screen.getByText(/made with coffee/i)).toBeInTheDocument()

    // Links sociais base
    const links = screen.getAllByRole("link")
    expect(links.length).toBeGreaterThan(0)
  })
})
