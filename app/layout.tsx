import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://avijitsingh.pageonix.in"),
  title: {
    default: "Avijit Singh | Full Stack Developer & PageoNix Founder",
    template: "%s | Avijit Singh",
  },
  description:
    "Avijit Singh - Full Stack Developer, Python, Flask, React expert. Founder & CEO of PageoNix. Building modern web applications and innovative solutions.",
  keywords: [
    "Avijit Singh",
    "Full Stack Developer",
    "Python Developer",
    "Flask",
    "React",
    "Web Development",
    "PageoNix",
    "Web3",
    "JavaScript",
    "Next.js",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Avijit Singh", url: "https://avijitsingh.pageonix.in" }],
  creator: "Avijit Singh",
  publisher: "Avijit Singh",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Avijit Singh | Full Stack Developer & PageoNix Founder",
    description:
      "Explore the portfolio of Avijit Singh - Full Stack Developer, Python expert, and founder of PageoNix. Specializing in modern web applications.",
    url: "https://avijitsingh.pageonix.in",
    siteName: "Avijit Singh Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png", // Ensure this file exists in public/
        width: 1200,
        height: 630,
        alt: "Avijit Singh - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avijit Singh | Full Stack Developer & PageoNix Founder",
    description:
      "Full Stack Developer specializing in Python, Flask, React, and modern web technologies. Founder of PageoNix.",
    creator: "@DevLord_Avijit",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicons/favicon.ico" },
      { url: "/favicons/favicon.svg", type: "image/svg+xml" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicons/favicon.ico",
    apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/favicons/apple-touch-icon.png",
      },
    ],
  },
  manifest: "/favicons/site.webmanifest",
  verification: {
    google: "google-site-verification-code", // Update this with your actual code
  },
  alternates: {
    canonical: "https://avijitsingh.pageonix.in",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://avijitsingh.in" />
        <meta name="apple-mobile-web-app-capable" content="true" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${_geist.className} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
