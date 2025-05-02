"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

interface CircleRingsProps {
  count?: number
  color?: string
  size?: number
  className?: string
  animated?: boolean
}

export default function CircleRings({
  count = 8,
  color = "hsl(var(--lime-neon))",
  size = 40,
  className = "",
  animated = true,
}: CircleRingsProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  return (
    <div className={`relative ${className}`}>
      <svg
        ref={svgRef}
        width={size * 2}
        height={size}
        viewBox={`0 0 ${count * 10 + 20} 50`}
        className="overflow-visible"
        aria-hidden="true"
      >
        {Array.from({ length: count }).map((_, i) => (
          <motion.circle
            key={i}
            cx={10 + i * 10}
            cy="25"
            r="20"
            fill="none"
            stroke={color}
            strokeWidth="0.5"
            strokeOpacity={animated ? 0.3 : 0.5}
            initial={animated ? { scale: 0.8, opacity: 0 } : {}}
            animate={
              animated
                ? {
                    scale: [0.8, 1, 0.8],
                    opacity: [0.2, 0.5, 0.2],
                  }
                : {}
            }
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </svg>
    </div>
  )
}
