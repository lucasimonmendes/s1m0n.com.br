import { render, screen } from "@testing-library/react"
import { ProjectsSection } from "@/components/projects-section"
import { LanguageProvider } from "@/components/language-context"

describe("ProjectsSection Component", () => {
  it("renders the projects section title", () => {
    render(
      <LanguageProvider>
        <ProjectsSection />
      </LanguageProvider>
    )

    // O título deve aparecer na tela (pode estar dividido)
    expect(screen.getByText(/things i built/i)).toBeInTheDocument()
    expect(screen.getByText(/multi-tenant dashboard/i)).toBeInTheDocument()
    expect(screen.getByText(/observability pipeline/i)).toBeInTheDocument()
  })
})
