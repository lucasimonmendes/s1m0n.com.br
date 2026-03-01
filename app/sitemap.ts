import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "pt", "es"]
  const baseUrl = "https://s1m0n.com.br"

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }))
}
