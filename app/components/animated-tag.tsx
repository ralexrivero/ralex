"use client"

import type React from "react"

import { motion } from "framer-motion"

interface AnimatedTagProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function AnimatedTag({ children, className = "", delay = 0 }: AnimatedTagProps) {
  return (
    <motion.span
      className={`inline-block rounded-full bg-border-gray px-3 py-1 text-xs font-medium text-text-secondary hover:bg-lime-neon/20 hover:text-lime-neon transition-colors duration-300 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      {children}
    </motion.span>
  )
}
