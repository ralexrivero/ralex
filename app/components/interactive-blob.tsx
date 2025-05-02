"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface InteractiveBlobProps {
  color?: string
  size?: number
  className?: string
}

export default function InteractiveBlob({
  color = "hsl(var(--lime-neon))",
  size = 200,
  className = "",
}: InteractiveBlobProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-opacity-20"
        style={{ backgroundColor: color }}
        animate={{
          scale: isHovered ? 1.1 : 1,
          borderRadius: isHovered ? "40% 60% 60% 40% / 60% 30% 70% 40%" : "50%",
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-opacity-10"
        style={{ backgroundColor: color }}
        animate={{
          scale: isHovered ? 1.2 : 0.8,
          borderRadius: isHovered ? "50% 50% 30% 70% / 50% 50% 50% 50%" : "50%",
        }}
        transition={{ duration: 0.7, delay: 0.1 }}
      />
    </div>
  )
}
