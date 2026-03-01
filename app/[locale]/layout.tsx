import React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Lucas Simon Mendes | Full-stack JavaScript Developer",
  description:
    "Full-stack JavaScript developer focused on product. React, Node, TypeScript, PostgreSQL. Building reliable SaaS with proof-driven results.",
  metadataBase: new URL("https://s1m0n.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lucas Simon Mendes | s1m0n",
    description: "Full-stack JS (React/Node) focused on product.",
    url: "https://s1m0n.com.br",
    siteName: "s1m0n",
    type: "website",
  },
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Lucas Simon Mendes",
              url: "https://s1m0n.com.br",
              jobTitle: "Full-stack Developer",
              sameAs: [
                "https://github.com/lucasimonmendes",
                "https://linkedin.com/in/lucasimonmendes",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
