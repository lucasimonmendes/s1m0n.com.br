import { render, screen } from "@testing-library/react"
import { ProcessSection } from "@/components/process-section"
import { LanguageProvider } from "@/components/language-context"

describe("ProcessSection Component", () => {
  it("renders the process steps and title", () => {
    render(
      <LanguageProvider>
        <ProcessSection />
      </LanguageProvider>
    )

    // Título da seção
    expect(screen.getByText(/how i work/i)).toBeInTheDocument()

    // Passos do processo
    expect(screen.getByText("understand")).toBeInTheDocument()
    expect(screen.getByText("design")).toBeInTheDocument()
    expect(screen.getByText("implement")).toBeInTheDocument()
    expect(screen.getByText("test")).toBeInTheDocument()
  })
})
