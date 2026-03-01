import { render, screen } from "@testing-library/react"
import Page from "@/app/page"
import { ThemeProvider } from "next-themes"

// Sub-componentes que podem precisar de mock ou que usam hooks que não funcionam bem no JSDOM de primeira
jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}))

// IntersectionObserver mock (usado por componentes animados possivelmente)
class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.IntersectionObserver = IntersectionObserver as any

describe("Home Page", () => {
  it("renders the main page with all sections", () => {
    // Renderezia a página inteira dentro do ThemeProvider para evitar erros do next-themes
    render(
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Page />
      </ThemeProvider>
    )

    // Header logo
    expect(screen.getAllByText("s1m0n")[0]).toBeInTheDocument()

    // Hero title
    expect(screen.getByText(/Fullstack \(Node · React · TypeScript\)/i)).toBeInTheDocument()

    // Projects title
    expect(screen.getByText(/things i built/i)).toBeInTheDocument()

    // Process title
    expect(screen.getAllByText(/how i work/i)[0]).toBeInTheDocument()

    // Contact CTA
    expect(screen.getByRole("link", { name: /send me an email/i })).toBeInTheDocument()
  })
})
