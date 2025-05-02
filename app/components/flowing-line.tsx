"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface FlowingLineProps {
  color?: string
  width?: number
  height?: number
  className?: string
}

export default function FlowingLine({
  color = "hsl(var(--lime-neon))",
  width = 200,
  height = 100,
  className = "",
}: FlowingLineProps) {
  const [mounted, setMounted] = useState(false)
  const [paths, setPaths] = useState<[string, string]>(["", ""])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const generatePath = () => {
      const startX = 0
      const startY = height / 2
      const endX = width
      const endY = height / 2

      const cp1x = width * 0.2 + Math.random() * width * 0.2
      const cp1y = Math.random() * height
      const cp2x = width * 0.6 + Math.random() * width * 0.2
      const cp2y = Math.random() * height

      return `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`
    }

    setPaths([generatePath(), generatePath()])
  }, [mounted, width, height])

  if (!mounted) return null

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
        <motion.path
          d={paths[0]}
          stroke={color}
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d={paths[1]}
          stroke={color}
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />
      </svg>
    </div>
  )
}
