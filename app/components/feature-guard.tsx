"use client"

import { useFeatures, type Feature } from "@/context/features-context"
import { useRouter } from "next/navigation"
import { useEffect, type ReactNode } from "react"

interface FeatureGuardProps {
  feature: Feature
  children: ReactNode
  fallback?: ReactNode
}

export default function FeatureGuard({ feature, children, fallback = null }: FeatureGuardProps) {
  const { isEnabled } = useFeatures()
  const router = useRouter()

  useEffect(() => {
    if (!isEnabled(feature)) {
      router.push("/")
    }
  }, [feature, isEnabled, router])

  if (!isEnabled(feature)) {
    return <>{fallback}</>
  }

  return <>{children}</>
}
