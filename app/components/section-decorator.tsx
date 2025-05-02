"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface SectionDecoratorProps {
  className?: string
  type?: "circles" | "lines" | "dots"
  color?: string
}

export default function SectionDecorator({
  className = "",
  type = "circles",
  color = "hsl(var(--lime-neon))",
}: SectionDecoratorProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45])

  return (
    <motion.div ref={ref} className={`absolute pointer-events-none ${className}`} style={{ opacity }}>
      {type === "circles" && (
        <motion.svg width="120" height="120" viewBox="0 0 120 120" style={{ scale, rotate }}>
          {[...Array(5)].map((_, i) => (
            <circle
              key={i}
              cx="60"
              cy="60"
              r={20 + i * 10}
              fill="none"
              stroke={color}
              strokeWidth="0.5"
              strokeOpacity={0.3 - i * 0.05}
            />
          ))}
        </motion.svg>
      )}

      {type === "lines" && (
        <motion.svg width="200" height="200" viewBox="0 0 200 200" style={{ scale }}>
          <motion.path
            d="M20,100 C60,20 140,180 180,100"
            stroke={color}
            strokeWidth="1"
            fill="none"
            strokeOpacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
          <motion.path
            d="M20,140 C70,180 130,20 180,60"
            stroke={color}
            strokeWidth="1"
            fill="none"
            strokeOpacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
        </motion.svg>
      )}

      {type === "dots" && (
        <motion.svg width="200" height="200" viewBox="0 0 200 200" style={{ scale }}>
          {[...Array(20)].map((_, i) => {
            const x = 20 + (i % 5) * 40
            const y = 20 + Math.floor(i / 5) * 40
            return (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="3"
                fill={color}
                fillOpacity="0.3"
                animate={{
                  r: [3, 5, 3],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2 + (i % 3),
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.1,
                }}
              />
            )
          })}
        </motion.svg>
      )}
    </motion.div>
  )
}
