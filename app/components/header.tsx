"use client"

import type React from "react"
import { Suspense } from "react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { AnimatePresence, motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { useFeatures, type Feature } from "@/context/features-context"
import MobileMenu from "./mobile-menu"
import { CustomLink } from "./custom-link"

function HeaderInner(props) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, changeLanguage, t } = useLanguage()
  const { isEnabled } = useFeatures()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isLanguageMenuOpen && !target.closest(".language-selector")) {
        setIsLanguageMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isLanguageMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const toggleLanguageMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsLanguageMenuOpen(!isLanguageMenuOpen)
  }

  const handleLanguageChange = (lang: "es" | "en") => {
    changeLanguage(lang)
    setIsLanguageMenuOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const navItems = [
    { label: t("navbar.home"), href: "/", feature: null },
    { label: t("navbar.about"), href: "/sobre-mi", feature: "about" },
    { label: t("navbar.services"), href: "/servicios", feature: "services" },
    { label: t("navbar.projects"), href: "/proyectos", feature: "projects" },
    { label: t("navbar.blog"), href: "/blog", feature: "blog" },
    { label: t("navbar.contact"), href: "/contacto", feature: "contact" },
  ] as const

  const isActive = (href: string): boolean => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border-gray/60 shadow-md"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="container-main h-16 flex items-center justify-between">
          <CustomLink
            href="/"
            className="flex items-center gap-2 text-lg font-semibold font-space-grotesk text-text-primary"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-lime-neon"
            >
              <path
                d="M25.76 26.2H20.27a.39.39 0 0 1-.28-.13L12.82 18l-1-1.18a.38.38 0 0 1 0-.52L14 14.07l5.28-5.28A.38.38 0 0 0 19 8.15H4.51a.37.37 0 0 1-.37-.38V6.18a.37.37 0 0 1 .37-.38H24.09a.37.37 0 0 1 .27.64l-8.68 8.69a.37.37 0 0 0 0 .53L26 25.55a.38.38 0 0 1-.24.65z"
                fill="currentColor"
              />
            </svg>
            Ralex
          </CustomLink>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(
              (item) =>
                (item.feature === null || isEnabled(item.feature as Feature)) && (
                  <CustomLink
                    key={item.href}
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors duration-200 hover:text-text-primary/80 navbar-item ${
                      isActive(item.href) ? "text-text-primary" : "text-text-secondary"
                    }`}
                  >
                    {item.label}
                  </CustomLink>
                ),
            )}

            {/* Language selector */}
            <div className="language-selector relative">
              <button
                onClick={toggleLanguageMenu}
                aria-label={t("common.languageSelector")}
                aria-expanded={isLanguageMenuOpen}
                aria-haspopup="true"
                className="p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-dark-panel/40 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer flex items-center gap-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                  />
                </svg>
                <span className="font-space-grotesk font-medium text-sm">{language === "es" ? "ES" : "EN"}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform duration-300 ${isLanguageMenuOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-background/80 backdrop-blur-md border border-border-gray/60 ring-1 ring-black ring-opacity-5 z-50"
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <button
                        onClick={() => handleLanguageChange("es")}
                        className={`w-full flex items-center justify-between px-4 py-2 text-sm cursor-pointer transition-colors duration-200 ${
                          language === "es"
                            ? "text-lime-neon font-medium bg-dark-panel/40"
                            : "text-text-primary hover:bg-dark-panel/30 hover:text-lime-neon"
                        }`}
                        role="menuitem"
                      >
                        <span>Español</span>
                        {language === "es" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                      <button
                        onClick={() => handleLanguageChange("en")}
                        className={`w-full flex items-center justify-between px-4 py-2 text-sm cursor-pointer transition-colors duration-200 ${
                          language === "en"
                            ? "text-lime-neon font-medium bg-dark-panel/40"
                            : "text-text-primary hover:bg-dark-panel/30 hover:text-lime-neon"
                        }`}
                        role="menuitem"
                      >
                        <span>English</span>
                        {language === "en" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label={t("navbar.themeSwitcher", { theme: theme === "light" ? t("dark") : t("light") })}
                className="p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-dark-panel/40 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
              >
                {theme === "light" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center">
            {/* Mobile language selector */}
            <div className="language-selector relative">
              <button
                onClick={toggleLanguageMenu}
                aria-label={t("common.languageSelector")}
                aria-expanded={isLanguageMenuOpen}
                aria-haspopup="true"
                className="p-2 mr-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-dark-panel/40 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                  />
                </svg>
                <span className="font-space-grotesk font-medium text-sm">{language === "es" ? "ES" : "EN"}</span>
              </button>

              {/* Dropdown menu for mobile */}
              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-background/80 backdrop-blur-md border border-border-gray/60 ring-1 ring-black ring-opacity-5 z-50"
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <button
                        onClick={() => handleLanguageChange("es")}
                        className={`w-full flex items-center justify-between px-4 py-2 text-sm ${
                          language === "es"
                            ? "text-lime-neon bg-dark-panel/40"
                            : "text-text-primary hover:bg-dark-panel/30"
                        }`}
                        role="menuitem"
                      >
                        <span>Español</span>
                        {language === "es" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                      <button
                        onClick={() => handleLanguageChange("en")}
                        className={`w-full flex items-center justify-between px-4 py-2 text-sm ${
                          language === "en"
                            ? "text-lime-neon bg-dark-panel/40"
                            : "text-text-primary hover:bg-dark-panel/30"
                        }`}
                        role="menuitem"
                      >
                        <span>English</span>
                        {language === "en" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile theme toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label={t("navbar.themeSwitcher", { theme: theme === "light" ? t("dark") : t("light") })}
                className="p-2 mr-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-dark-panel/40 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
              >
                {theme === "light" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            )}

            {/* Mobile menu button */}
            <button onClick={toggleMobileMenu} aria-label="Abrir menú" className="text-text-primary p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            onClose={closeMobileMenu}
            navItems={navItems.filter((item) => item.feature === null || isEnabled(item.feature as Feature))}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default function Header(props) {
  return (
    <Suspense fallback={null}>
      <HeaderInner {...props} />
    </Suspense>
  )
}
