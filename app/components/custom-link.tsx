"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react"

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
  scroll?: boolean
  prefetch?: boolean
}

export const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ href, children, onClick, ...props }, ref) => {
    const router = useRouter()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // If it's an external link or has a modifier key pressed, use default behavior
      if (
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey
      ) {
        if (onClick) onClick(e)
        return
      }

      // Prevent default navigation
      e.preventDefault()

      // If there's an onClick handler, call it
      if (onClick) onClick(e)

      // Use router.push with scroll: false to disable automatic scroll restoration
      router.push(href, { scroll: false })
    }

    return (
      <Link href={href} onClick={handleClick} ref={ref} {...props}>
        {children}
      </Link>
    )
  },
)

CustomLink.displayName = "CustomLink"
