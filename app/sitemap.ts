import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  // Como o site é um portfólio de página única (no momento),
  // retornamos apenas a página principal.
  return [
    {
      url: "https://s1m0n.com.br",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
