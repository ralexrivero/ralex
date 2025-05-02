"use client"

import { useEffect, useRef, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"

function NavigationEventsInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const prevPathRef = useRef<string | null>(null)

  useEffect(() => {
    // This effect runs on route changes
    const url = `${pathname}${searchParams ? `?${searchParams}` : ""}`

    // Only scroll to top if the pathname has changed (not just search params)
    if (prevPathRef.current !== pathname) {
      // Use requestAnimationFrame to ensure this runs after Next.js has updated the DOM
      window.requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant", // Use "instant" instead of "auto" or "smooth" for immediate reset
        })
      })
    }

    prevPathRef.current = pathname
    console.log(`Navigation to: ${url}`)
  }, [pathname, searchParams])

  return null
}

export default function NavigationEvents() {
  return (
    <Suspense fallback={null}>
      <NavigationEventsInner />
    </Suspense>
  )
}
