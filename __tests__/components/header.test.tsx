import { render, screen } from "@testing-library/react"
import { Header } from "@/components/header"
import { LanguageProvider } from "@/components/language-context"
import { ThemeProvider } from "next-themes"

// Mock do hook usePathname do next/navigation
jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}))

describe("Header Component", () => {
  it("renders the logo and navigation links", () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <LanguageProvider>
          <Header />
        </LanguageProvider>
      </ThemeProvider>
    )

    // Verifica se a logo está presente
    expect(screen.getAllByText("s1m0n")[0]).toBeInTheDocument()

    // Verifica se os links de navegação estão presentes
    expect(screen.getByText("projects")).toBeInTheDocument()
    expect(screen.getByText("how i work")).toBeInTheDocument()
    expect(screen.getByText("contact me")).toBeInTheDocument()
  })

  it("renders language and theme toggle buttons", () => {
    const { container } = render(
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <LanguageProvider>
          <Header />
        </LanguageProvider>
      </ThemeProvider>
    )

    // Os botões usam ícones, testar acesso a botões que abrem dropdowns
    const buttons = container.querySelectorAll("button")
    // Pelo menos dois botões: 1 para idioma, 1 para tema (e possivelmente mais caso haja menu mobile)
    expect(buttons.length).toBeGreaterThanOrEqual(2)
  })
})
