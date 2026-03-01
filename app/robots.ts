import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Exemplo se houver páginas futuras
    },
    sitemap: "https://s1m0n.com.br/sitemap.xml",
  }
}
