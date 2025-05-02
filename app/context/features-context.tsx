"use client"

import { createContext, useContext, type ReactNode } from "react"

export type Feature =
  | "about"
  | "services"
  | "projects"
  | "blog"
  | "contact"
  // Home sections
  | "home_hero"
  | "home_metrics"
  | "home_about"
  | "home_services"
  | "home_quote"
  | "home_projects"

interface FeaturesContextProps {
  isEnabled: (feature: Feature) => boolean
}

const FeaturesContext = createContext<FeaturesContextProps | undefined>(undefined)

// Configure which features are enabled
const ENABLED_FEATURES: Feature[] = [
  // Home sections - all enabled
  "home_hero",
  "home_metrics",
  "home_about",
  "home_services",
  "home_quote",
  "home_projects",

  // Full pages - disabled
  // "about",
  // "services",
  // "projects",
  // "blog",
  // "contact",
]

interface FeaturesProviderProps {
  children: ReactNode
}

export const FeaturesProvider = ({ children }: FeaturesProviderProps) => {
  const isEnabled = (feature: Feature): boolean => {
    return ENABLED_FEATURES.includes(feature)
  }

  return <FeaturesContext.Provider value={{ isEnabled }}>{children}</FeaturesContext.Provider>
}

export const useFeatures = (): FeaturesContextProps => {
  const context = useContext(FeaturesContext)
  if (context === undefined) {
    throw new Error("useFeatures must be used within a FeaturesProvider")
  }
  return context
}
