"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextProps {
  language: Language
  toggleLanguage: () => void
  changeLanguage: (lang: Language) => void
  t: (key: string) => string
}

// Simple translations
const translations: Record<Language, Record<string, string>> = {
  es: {
    "navbar.home": "HOME",
    "navbar.about": "SOBRE MÍ",
    "navbar.services": "SERVICIOS",
    "navbar.projects": "PROYECTOS",
    "navbar.blog": "BLOG",
    "navbar.contact": "CONTACTO",
    "navbar.themeSwitcher": "Cambiar a tema {{theme}}",
    "common.languageSelector": "Seleccionar idioma",
    dark: "oscuro",
    light: "claro",
    "hero.title": "Código abierto.<br/>Impacto real.",
    "hero.subtitle":
      "desarrollador full‑stack que convierte retos complejos en software libre, y comparte cada línea de aprendizaje.",
    "hero.callButton": "Reserva una llamada de 15 min",
    "hero.exploreButton": "Explora mis proyectos",
    "contactCTA.title": "Trabajemos juntos",
    "contactCTA.subtitle":
      "El primer paso para crear algo increíble es simplemente comenzar una conversación. ¿Qué te gustaría construir?",
    "contactCTA.buttonText": "Agendar una llamada",
    "footer.copyright": "© {{year}} Ralex. Todos los derechos reservados.",
  },
  en: {
    "navbar.home": "HOME",
    "navbar.about": "ABOUT ME",
    "navbar.services": "SERVICES",
    "navbar.projects": "PROJECTS",
    "navbar.blog": "BLOG",
    "navbar.contact": "CONTACT",
    "navbar.themeSwitcher": "Switch to {{theme}} theme",
    "common.languageSelector": "Select language",
    dark: "dark",
    light: "light",
    "hero.title": "Open source.<br/>Real impact.",
    "hero.subtitle":
      "full-stack developer who turns complex challenges into free software, and shares every line of learning.",
    "hero.callButton": "Book a 15-min call",
    "hero.exploreButton": "Explore my projects",
    "contactCTA.title": "Let's work together",
    "contactCTA.subtitle":
      "The first step to creating something amazing is simply starting a conversation. What would you like to build?",
    "contactCTA.buttonText": "Schedule a call",
    "footer.copyright": "© {{year}} Ralex. All rights reserved.",
  },
}

// Create context with undefined initial value to force Provider usage
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Initialize language state from localStorage
  const [language, setLanguage] = useState<Language>("es")

  // Load language preference from localStorage on client side
  useEffect(() => {
    // Client-side only code
    if (typeof window !== "undefined") {
      try {
        const storedLanguage = localStorage.getItem("language") as Language | null
        if (storedLanguage && (storedLanguage === "es" || storedLanguage === "en")) {
          setLanguage(storedLanguage)
        }
      } catch (error) {
        console.error("Error reading language from localStorage", error)
      }
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("language", language)
      } catch (error) {
        console.error("Error saving language to localStorage", error)
      }
    }
  }, [language])

  // Toggle between languages
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"))
  }

  // Change to a specific language
  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
  }

  // Translation function
  const t = (key: string): string => {
    // Replace simple variables like {{year}}
    const translate = (text: string): string => {
      return text
        .replace(/{{year}}/g, new Date().getFullYear().toString())
        .replace(/{{theme}}/g, language === "es" ? translations[language]["dark"] : translations[language]["light"])
    }

    // Get translation or fallback to key
    const translation = translations[language][key] || key
    return translate(translation)
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Custom hook to use language context
export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
