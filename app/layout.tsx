import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { DM_Sans, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./components/theme-provider"
import { LanguageProvider } from "./context/language-context"
import { FeaturesProvider } from "./context/features-context"
import { Toaster } from "./components/ui/toaster"
import ScrollManager from "./components/scroll-manager"
import NavigationEvents from "./components/navigation-events"
import Header from "./components/header"
import Footer from "./components/footer"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Ralex - Desarrollador Web",
  description: "Desarrollador web especializado en React, Next.js y TypeScript",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} font-standerd`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <FeaturesProvider>
              <ScrollManager />
              <NavigationEvents />
              <Header />
              {children}
              <Footer />
              <Toaster />
            </FeaturesProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
