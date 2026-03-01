# Portfolio - Lucas Simon Mendes (s1m0n.com.br)

Bem-vindo ao repositório do meu portfólio pessoal/profissional. Este projeto foi desenvolvido para apresentar meus projetos, processos de trabalho e facilitar o contato profissional.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e bibliotecas:

- **[Next.js](https://nextjs.org/)** (App Router) - Framework React
- **[React 19](https://react.dev/)** - Biblioteca JavaScript para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utilitário
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes de interface reutilizáveis baseados no Radix UI
- **[Lucide React](https://lucide.dev/)** - Ícones
- **[React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)** - Validação e gerenciamento de formulários
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Suporte a Dark Mode

## 📁 Estrutura do Projeto

Abaixo está a estrutura principal do projeto:

- `app/`: Contém as páginas, layouts e o roteamento da aplicação (App Router do Next.js).
- `components/`: Componentes reutilizáveis da interface (Header, Footer, Sections, componentes do shadcn/ui).
- `hooks/`: Hooks customizados do React.
- `lib/`: Funções utilitárias e configurações globais.
- `public/`: Arquivos estáticos como imagens e ícones.
- `styles/`: Arquivos globais de estilização CSS.

## 🛠️ Como executar o projeto localmente

Para rodar o projeto em sua máquina, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior recomendada)
- Um gerenciador de pacotes (npm, yarn, pnpm ou bun). Este projeto parece utilizar **pnpm** (devido ao `pnpm-lock.yaml`).

### Instalação

1. Clone o repositório (caso ainda não tenha clonado):

   ```bash
   git clone <url-do-repositorio>
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd s1m0n.com.br
   ```

3. Instale as dependências:

   ```bash
   pnpm install
   # ou npm install / yarn install
   ```

4. Execute o servidor de desenvolvimento:

   ```bash
   pnpm dev
   # ou npm run dev / yarn dev
   ```

5. Abra o navegador e acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

## 🌐 Funcionalidades

- **Internacionalização/Múltiplos Idiomas:** O projeto possui um `LanguageProvider` para suportar diferentes idiomas.
- **Design Responsivo:** Interface adaptada para dispositivos móveis e desktops.
- **Dark Mode:** Suporte a tema claro e escuro.
- **Seções principais:**
  - Hero (Apresentação Inicial)
  - Projetos (Exibição de trabalhos)
  - Processo (Metodologia de trabalho)
  - Contato (Formulário/Links de contato)

## 📄 Scripts Disponíveis

No diretório do projeto, você pode rodar os seguintes comandos:

- `pnpm dev`: Inicia o servidor de desenvolvimento.
- `pnpm build`: Cria a versão de produção otimizada da aplicação.
- `pnpm start`: Inicia a aplicação construída para produção.
- `pnpm lint`: Executa a verificação de linting no código.
