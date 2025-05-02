"use client"

import { usePathname } from "next/navigation"
import { useEffect, Suspense } from "react"

function ScrollRestorationInner(props) {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function ScrollRestoration(props) {
  return (
    <Suspense fallback={null}>
      <ScrollRestorationInner {...props} />
    </Suspense>
  )
}
