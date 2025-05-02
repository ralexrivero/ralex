"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { CustomLink } from "./custom-link"
import { Suspense } from "react"

interface NavItem {
  label: string
  href: string
  feature: string | null
}

interface MobileMenuProps {
  onClose: () => void
  navItems: NavItem[]
}

function MobileMenuInner({ onClose, navItems }: MobileMenuProps) {
  const pathname = usePathname()

  const isActive = (href: string): boolean => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="container-main h-16 flex items-center justify-end">
        <button onClick={onClose} aria-label="Cerrar menú" className="text-text-primary p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav className="container-main mt-8">
        <motion.ul
          className="flex flex-col space-y-6"
          initial="closed"
          animate="open"
          variants={{
            open: {
              transition: {
                staggerChildren: 0.1,
              },
            },
            closed: {
              transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
              },
            },
          }}
        >
          {navItems.map((item) => (
            <motion.li
              key={item.href}
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: 20 },
              }}
              transition={{ duration: 0.2 }}
            >
              <CustomLink
                href={item.href}
                onClick={onClose}
                className={`text-2xl font-space-grotesk font-medium ${
                  isActive(item.href) ? "text-lime-neon" : "text-text-primary"
                }`}
              >
                {item.label}
              </CustomLink>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </motion.div>
  )
}

export default function MobileMenu(props: MobileMenuProps) {
  return (
    <Suspense fallback={null}>
      <MobileMenuInner {...props} />
    </Suspense>
  )
}
