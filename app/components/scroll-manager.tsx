"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef, Suspense } from "react"

function ScrollManagerInner(props) {
  const pathname = usePathname()
  const scrollPositions = useRef<Record<string, number>>({})
  const isBackOrForward = useRef<boolean>(false)

  // Detect back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      isBackOrForward.current = true
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  // Save scroll position before navigation
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Save the current scroll position for the current path
      scrollPositions.current[pathname] = window.scrollY

      // If it's a back/forward navigation, restore the scroll position
      if (isBackOrForward.current) {
        const savedPosition = scrollPositions.current[pathname] || 0

        // Use requestAnimationFrame to ensure the DOM has updated
        window.requestAnimationFrame(() => {
          window.scrollTo(0, savedPosition)
        })

        isBackOrForward.current = false
      } else {
        // For regular navigation, scroll to top
        window.requestAnimationFrame(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
          })
        })
      }
    }
  }, [pathname])

  return null
}

export default function ScrollManager(props) {
  return (
    <Suspense fallback={null}>
      <ScrollManagerInner {...props} />
    </Suspense>
  )
}
