# Portfolio - Lucas Simon Mendes (s1m0n.com.br)

Bem-vindo ao repositório do meu portfólio pessoal/profissional. Este projeto foi desenvolvido para apresentar meus projetos, processos de trabalho e facilitar o contato profissional.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e bibliotecas:

- **[Next.js 15](https://nextjs.org/)** (App Router) - Framework React Server Components
- **[React 19](https://react.dev/)** - Biblioteca JavaScript para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework de CSS utilitário
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes de interface reutilizáveis
- **[Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)** - Suíte de testes e componentes
- **i18n (App Router)** - Internacionalização dinâmica via rotas (`@formatjs/intl-localematcher`)
- **SEO & Security** - Gerações dinâmicas de Sitemaps, JSON-LD Schemas e Headers HTTP estritos.

## 📁 Estrutura do Projeto

Abaixo está a arquitetura estrutural da aplicação:

- `app/[locale]/`: Layouts e páginas da aplicação renderizadas de acordo com o idioma da rota (`/en`, `/pt`, `/es`).
- `components/`: Componentes reutilizáveis (Hero, Projects, Process, Footer) e Contextos (Language Provider Client-Side).
- `proxy.ts`: Middleware de redirecionamento que analisa os _headers_ do usuário e força o idioma correto baseado em localidade.
- `__tests__/`: Cobertura de Testes Unitários e de Integração usando `Jest` iterando React Server Components e Client Components em conjunto.
- `lib/` & `hooks/`: Funções e custom hooks globais.
- `public/assets/`: Ficam armazenados os arquivos servidos para download explícito (como currículos).

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

## 🌐 Funcionalidades e Arquitetura

- **Roteamento Internacional (i18n):** Estrutura no App Router baseada em sub-diretórios (`/[locale]`) suportando ativamente `pt-br`, `en` e `es`. O idioma é inferido via Request Headers pelo arquivo `proxy.ts`.
- **Testes Abrangentes (Jest + RTL):** O projeto cobre validação de renderização dos componentes Server-side (`Page`), e seus Clients provendo contextos globais.
- **Segurança e SEO:**
  - Canonical URLs implementados nativamente na tag html de acordo com o idioma.
  - WebCores: `sitemap.xml` dinâmico pelas rotas e arquivo `robots.txt` orientando WebCrawlers.
  - JSON-LD injetado no base layout (`Person` & `WebSite` Schema).
  - Configuração rigorosa de HTTP Headers (HSTS, Anti-Clickjacking via `X-Frame-Options` e etc).
- **Design:** Tema escuro estrito usando TailwindCSS 4, totalmente responsivo do mobile ultrawide.

## 📄 Scripts Disponíveis

No diretório do projeto, você pode rodar os seguintes comandos:

- `pnpm dev` ou `npm run dev`: Inicia o servidor de desenvolvimento.
- `pnpm build`: Cria a versão de produção otimizada da aplicação.
- `pnpm start`: Inicia a aplicação construída para produção.
- `pnpm lint`: Executa a verificação de linting no código via ESLint preconfigurado no Next.
- `npm run test`: Executa o pacote de testes do Jest passando em cima dos componentes críticos.
