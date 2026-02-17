"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Locale = "en" | "pt" | "es"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Header
    "nav.projects": "projects",
    "nav.process": "how i work",
    "nav.about": "about",
    "nav.contact": "contact me",

    // Hero
    "hero.label": "full-stack dev, human being",
    "hero.headline": "Fullstack (Node \u00b7 React \u00b7 TypeScript) ",
    "hero.subheadline": "I deliver scalable APIs, tests and automated deploys \u2014 clarity and end\u2011to\u2011end delivery.",
    "hero.cta.primary": "Contact me",
    "hero.cta.secondary": "See projects",
    "hero.microcopy": "Available for Jr\u2192Pleno roles \u2014 open to CLT (Brazil), contractor and freelance.",
    "hero.aside": "* yes, i also drink too much coffee",

    // Proof bullets
    "hero.proof.1": "APIs with tests and CI/CD \u2014 e.g.: reduced regressions by {metric}",
    "hero.proof.2": "End\u2011to\u2011end delivery: design \u2192 deploy \u2192 monitoring (Postgres, Docker, GitHub Actions)",
    "hero.proof.3": "Build\u2011in\u2011public: posts with before/after and data \u2014 links to cases in portfolio",

    // Metrics
    "hero.metric.latency": "api latency p95",
    "hero.metric.incidents": "less incidents",
    "hero.metric.tests": "test coverage",

    // Projects
    "projects.heading": "things i built",
    "projects.aside": "(that i can actually show you)",
    "proj.1.title": "multi-tenant dashboard",
    "proj.1.context": "User management platform with RBAC. The kind of thing you don't notice until it breaks.",
    "proj.1.did.1": "Modeled multi-tenant API and implemented JWT authentication.",
    "proj.1.did.2": "CI/CD pipelines and automatic staging deploy.",
    "proj.1.did.3": "Basic monitoring and alerts.",
    "proj.1.proof": "Result: Average deploy time: {X} min | P95 API < 200ms",
    "proj.2.title": "observability pipeline",
    "proj.2.context": "Monitoring system that made on-call less painful. Structured logs, custom metrics, actual sleep.",
    "proj.2.did.1": "Modeled multi-tenant API and implemented JWT authentication.",
    "proj.2.did.2": "CI/CD pipelines and automatic staging deploy.",
    "proj.2.did.3": "Basic monitoring and alerts.",
    "proj.2.proof": "Result: -35% incidents in 4 weeks. Custom dashboards + alerting.",
    "proj.3.title": "auth service & api gateway",
    "proj.3.context": "JWT, refresh tokens, rate limiting. The boring-but-critical stuff that keeps everything alive.",
    "proj.3.did.1": "Modeled multi-tenant API and implemented JWT authentication.",
    "proj.3.did.2": "CI/CD pipelines and automatic staging deploy.",
    "proj.3.did.3": "Basic monitoring and alerts.",
    "proj.3.proof": "Result: 90%+ test coverage. Zero auth incidents since deploy.",
    "proj.link.demo": "View demo",
    "proj.link.github": "GitHub",
    "proj.link.case": "read more",

    // Process (6 steps)
    "process.heading": "how i work",
    "process.aside": "(more or less)",
    "process.1.title": "understand",
    "process.1.desc": "what do you actually need? not what you think you need. we talk.",
    "process.2.title": "design",
    "process.2.desc": "architecture, data models, api contracts. boring stuff that saves months.",
    "process.3.title": "implement",
    "process.3.desc": "clean code, types, tests, CI/CD from day one. ship fast, fix faster.",
    "process.4.title": "test",
    "process.4.desc": "unit, integration, e2e. if it compiles but doesn't work, it's not done.",
    "process.5.title": "deploy",
    "process.5.desc": "automated pipelines, staging first. zero yolo deploys on friday.",
    "process.6.title": "measure",
    "process.6.desc": "if you can't measure it, you're just guessing. observability > opinions.",

    // About
    "about.heading": "about me",
    "about.aside": "(the human behind the code)",
    "about.bio": "I'm Lucas Simon Mendes \u2014 a Fullstack developer (Node, React, TypeScript) with a backend focus. I'm studying ADS (Descomplica) and have been self\u2011teaching programming for 3 years. I turn product problems into solid, testable and observable APIs. Seeking Jr\u2192Pleno opportunities.",
    "about.controversial": "More features aren't a sign of a mature product \u2014 they're a sign of technical debt.",

    // Contact
    "contact.heading": "wanna build something?",
    "contact.body": "i'm available for projects, collaborations, or just a good conversation about tech and life. no forms, just email me.",
    "contact.cta": "send me an email",
    "contact.or": "or find me at",

    // CV Button
    "cv.button": "Download CV (PDF)",
    "cv.aria": "Download resume as PDF",

    // Footer
    "footer.bio": "Lucas Simon Mendes \u2014 Fullstack (Node \u00b7 React \u00b7 TypeScript). s1m0n.com.br",
    "footer.made": "made with coffee and questionable decisions",
    "footer.location": "somewhere in brazil",
  },
  pt: {
    // Header
    "nav.projects": "projetos",
    "nav.process": "como trabalho",
    "nav.about": "sobre",
    "nav.contact": "fala comigo",

    // Hero
    "hero.label": "dev full-stack, ser humano",
    "hero.headline": "Fullstack (Node \u00b7 React \u00b7 TypeScript) \u2014 foco em backend",
    "hero.subheadline": "Entrego APIs escal\u00e1veis, testes e deploys automatizados \u2014 clareza e entrega end\u2011to\u2011end.",
    "hero.cta.primary": "Falar comigo",
    "hero.cta.secondary": "Ver projetos",
    "hero.microcopy": "Dispon\u00edvel para vagas Jr\u2192Pleno \u2014 aberto a CLT (Brasil), PJ/contrato e freelance.",
    "hero.aside": "* sim, tambem tomo cafe demais",

    // Proof bullets
    "hero.proof.1": "APIs com testes e CI/CD \u2014 ex.: redu\u00e7\u00e3o de regress\u00f5es em {metric}",
    "hero.proof.2": "Delivery end\u2011to\u2011end: design \u2192 deploy \u2192 monitoramento (Postgres, Docker, GitHub Actions)",
    "hero.proof.3": "Build\u2011in\u2011public: posts com before/after e dados \u2014 links para cases no portf\u00f3lio",

    // Metrics
    "hero.metric.latency": "latencia api p95",
    "hero.metric.incidents": "menos incidentes",
    "hero.metric.tests": "cobertura de testes",

    // Projects
    "projects.heading": "coisas que constru\u00ed",
    "projects.aside": "(que posso mostrar)",
    "proj.1.title": "dashboard multi-tenant",
    "proj.1.context": "Plataforma de gest\u00e3o de usu\u00e1rios com RBAC. O tipo de coisa que voc\u00ea s\u00f3 nota quando quebra.",
    "proj.1.did.1": "Modelei API multi\u2011tenant e implementei autentica\u00e7\u00e3o JWT.",
    "proj.1.did.2": "Pipelines CI/CD e deploy autom\u00e1tico em staging.",
    "proj.1.did.3": "Monitoramento b\u00e1sico e alertas.",
    "proj.1.proof": "Resultado: Tempo m\u00e9dio de deploy: {X} min | P95 API < 200ms",
    "proj.2.title": "pipeline de observabilidade",
    "proj.2.context": "Sistema de monitoramento que tornou o plant\u00e3o menos sofrido. Logs estruturados, m\u00e9tricas custom, sono de verdade.",
    "proj.2.did.1": "Modelei API multi\u2011tenant e implementei autentica\u00e7\u00e3o JWT.",
    "proj.2.did.2": "Pipelines CI/CD e deploy autom\u00e1tico em staging.",
    "proj.2.did.3": "Monitoramento b\u00e1sico e alertas.",
    "proj.2.proof": "Resultado: -35% incidentes em 4 semanas. Dashboards custom + alertas.",
    "proj.3.title": "servi\u00e7o de auth & api gateway",
    "proj.3.context": "JWT, refresh tokens, rate limiting. O trabalho chato-mas-cr\u00edtico que mant\u00e9m tudo vivo.",
    "proj.3.did.1": "Modelei API multi\u2011tenant e implementei autentica\u00e7\u00e3o JWT.",
    "proj.3.did.2": "Pipelines CI/CD e deploy autom\u00e1tico em staging.",
    "proj.3.did.3": "Monitoramento b\u00e1sico e alertas.",
    "proj.3.proof": "Resultado: 90%+ cobertura de testes. Zero incidentes de auth desde o deploy.",
    "proj.link.demo": "Ver demo",
    "proj.link.github": "GitHub",
    "proj.link.case": "leia mais",

    // Process (6 steps)
    "process.heading": "como eu trabalho",
    "process.aside": "(mais ou menos)",
    "process.1.title": "entender",
    "process.1.desc": "o que voc\u00ea realmente precisa? n\u00e3o o que acha que precisa. a gente conversa.",
    "process.2.title": "desenhar",
    "process.2.desc": "arquitetura, modelos de dados, contratos de API. coisa chata que economiza meses.",
    "process.3.title": "implementar",
    "process.3.desc": "c\u00f3digo limpo, tipos, testes, CI/CD desde o dia um. entrega r\u00e1pido, corrige mais r\u00e1pido.",
    "process.4.title": "testar",
    "process.4.desc": "unit, integra\u00e7\u00e3o, e2e. se compila mas n\u00e3o funciona, n\u00e3o t\u00e1 pronto.",
    "process.5.title": "deploy",
    "process.5.desc": "pipelines automatizados, staging primeiro. zero deploy yolo na sexta.",
    "process.6.title": "medir",
    "process.6.desc": "se voc\u00ea n\u00e3o mede, t\u00e1 s\u00f3 chutando. observabilidade > opini\u00f5es.",

    // About
    "about.heading": "sobre mim",
    "about.aside": "(o humano por tr\u00e1s do c\u00f3digo)",
    "about.bio": "Sou Lucas Simon Mendes \u2014 desenvolvedor Fullstack (Node, React e TypeScript) com foco em backend. Estudo ADS (Descomplica) e programo de forma autodidata h\u00e1 3 anos. Transformo problemas de produto em APIs s\u00f3lidas, test\u00e1veis e observ\u00e1veis. Buscando oportunidades Jr\u2192Pleno.",
    "about.controversial": "Mais features n\u00e3o s\u00e3o sinal de produto maduro \u2014 \u00e9 sinal de d\u00edvida t\u00e9cnica.",

    // Contact
    "contact.heading": "bora construir algo?",
    "contact.body": "t\u00f4 dispon\u00edvel pra projetos, colabora\u00e7\u00f5es, ou s\u00f3 uma boa conversa sobre tech e vida. sem formul\u00e1rio, me manda email.",
    "contact.cta": "me manda um email",
    "contact.or": "ou me acha em",

    // CV Button
    "cv.button": "Baixar CV (PDF)",
    "cv.aria": "Baixar curr\u00edculo em PDF",

    // Footer
    "footer.bio": "Lucas Simon Mendes \u2014 Fullstack (Node \u00b7 React \u00b7 TypeScript). s1m0n.com.br",
    "footer.made": "feito com caf\u00e9 e decis\u00f5es question\u00e1veis",
    "footer.location": "em algum lugar do brasil",
  },
  es: {
    // Header
    "nav.projects": "proyectos",
    "nav.process": "como trabajo",
    "nav.about": "sobre m\u00ed",
    "nav.contact": "hablame",

    // Hero
    "hero.label": "dev full-stack, ser humano",
    "hero.headline": "Fullstack (Node \u00b7 React \u00b7 TypeScript) \u2014 con foco en backend",
    "hero.subheadline": "Entrego APIs escalables, tests y despliegues autom\u00e1ticos \u2014 claridad y entrega end\u2011to\u2011end.",
    "hero.cta.primary": "Contactarme",
    "hero.cta.secondary": "Ver proyectos",
    "hero.microcopy": "Disponible para vacantes Jr\u2192Pleno \u2014 abierto a CLT (Brasil), contrato y freelance.",
    "hero.aside": "* s\u00ed, tambi\u00e9n tomo demasiado caf\u00e9",

    // Proof bullets
    "hero.proof.1": "APIs con tests y CI/CD \u2014 p.ej.: reducci\u00f3n de regresiones en {metric}",
    "hero.proof.2": "Entrega end\u2011to\u2011end: dise\u00f1o \u2192 despliegue \u2192 monitorizaci\u00f3n (Postgres, Docker, GitHub Actions)",
    "hero.proof.3": "Build\u2011in\u2011public: posts con before/after y datos \u2014 enlaces a casos en el portafolio",

    // Metrics
    "hero.metric.latency": "latencia api p95",
    "hero.metric.incidents": "menos incidentes",
    "hero.metric.tests": "cobertura de tests",

    // Projects
    "projects.heading": "cosas que constru\u00ed",
    "projects.aside": "(que puedo mostrarte)",
    "proj.1.title": "dashboard multi-tenant",
    "proj.1.context": "Plataforma de gesti\u00f3n de usuarios con RBAC. El tipo de cosa que no notas hasta que se rompe.",
    "proj.1.did.1": "Model\u00e9 API multi\u2011tenant e implement\u00e9 autenticaci\u00f3n JWT.",
    "proj.1.did.2": "Pipelines CI/CD y despliegue autom\u00e1tico en staging.",
    "proj.1.did.3": "Monitorizaci\u00f3n b\u00e1sica y alertas.",
    "proj.1.proof": "Resultado: Tiempo medio de despliegue: {X} min | P95 API < 200ms",
    "proj.2.title": "pipeline de observabilidad",
    "proj.2.context": "Sistema de monitoreo que hizo la guardia menos dolorosa. Logs estructurados, m\u00e9tricas custom, sue\u00f1o real.",
    "proj.2.did.1": "Model\u00e9 API multi\u2011tenant e implement\u00e9 autenticaci\u00f3n JWT.",
    "proj.2.did.2": "Pipelines CI/CD y despliegue autom\u00e1tico en staging.",
    "proj.2.did.3": "Monitorizaci\u00f3n b\u00e1sica y alertas.",
    "proj.2.proof": "Resultado: -35% incidentes en 4 semanas. Dashboards custom + alertas.",
    "proj.3.title": "servicio de auth & api gateway",
    "proj.3.context": "JWT, refresh tokens, rate limiting. Lo aburrido-pero-cr\u00edtico que mantiene todo vivo.",
    "proj.3.did.1": "Model\u00e9 API multi\u2011tenant e implement\u00e9 autenticaci\u00f3n JWT.",
    "proj.3.did.2": "Pipelines CI/CD y despliegue autom\u00e1tico en staging.",
    "proj.3.did.3": "Monitorizaci\u00f3n b\u00e1sica y alertas.",
    "proj.3.proof": "Resultado: 90%+ cobertura de tests. Cero incidentes de auth desde el deploy.",
    "proj.link.demo": "Ver demo",
    "proj.link.github": "GitHub",
    "proj.link.case": "leer m\u00e1s",

    // Process (6 steps)
    "process.heading": "como trabajo",
    "process.aside": "(m\u00e1s o menos)",
    "process.1.title": "entender",
    "process.1.desc": "\u00bfqu\u00e9 necesitas realmente? no lo que crees que necesitas. hablamos.",
    "process.2.title": "dise\u00f1ar",
    "process.2.desc": "arquitectura, modelos de datos, contratos de API. lo aburrido que ahorra meses.",
    "process.3.title": "implementar",
    "process.3.desc": "c\u00f3digo limpio, tipos, tests, CI/CD desde el d\u00eda uno. entrega r\u00e1pido, arregla m\u00e1s r\u00e1pido.",
    "process.4.title": "testear",
    "process.4.desc": "unit, integraci\u00f3n, e2e. si compila pero no funciona, no est\u00e1 listo.",
    "process.5.title": "desplegar",
    "process.5.desc": "pipelines automatizados, staging primero. cero deploy yolo en viernes.",
    "process.6.title": "medir",
    "process.6.desc": "si no lo mides, solo est\u00e1s adivinando. observabilidad > opiniones.",

    // About
    "about.heading": "sobre m\u00ed",
    "about.aside": "(el humano detr\u00e1s del c\u00f3digo)",
    "about.bio": "Soy Lucas Simon Mendes \u2014 desarrollador Fullstack (Node, React, TypeScript) con foco en backend. Estudio ADS (Descomplica) y llevo 3 a\u00f1os aprendiendo programaci\u00f3n por mi cuenta. Transformo problemas de producto en APIs s\u00f3lidas, testeables y observables. Buscando oportunidades Jr\u2192Pleno.",
    "about.controversial": "M\u00e1s features no son se\u00f1al de un producto maduro \u2014 son se\u00f1al de deuda t\u00e9cnica.",

    // Contact
    "contact.heading": "\u00bfquieres construir algo?",
    "contact.body": "estoy disponible para proyectos, colaboraciones, o solo una buena conversaci\u00f3n sobre tech y vida. sin formularios, m\u00e1ndame email.",
    "contact.cta": "m\u00e1ndame un email",
    "contact.or": "o encu\u00e9ntrame en",

    // CV Button
    "cv.button": "Descargar CV (PDF)",
    "cv.aria": "Descargar curr\u00edculum en PDF",

    // Footer
    "footer.bio": "Lucas Simon Mendes \u2014 Fullstack (Node \u00b7 React \u00b7 TypeScript). s1m0n.com.br",
    "footer.made": "hecho con caf\u00e9 y decisiones cuestionables",
    "footer.location": "en alg\u00fan lugar de brasil",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  const t = (key: string): string => {
    return translations[locale][key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within LanguageProvider")
  return context
}
