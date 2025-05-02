"use client"

import { motion } from "framer-motion"
import FlowingLine from "./flowing-line"
import SectionDecorator from "./section-decorator"

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="py-20 bg-dark-panel mb-16 relative overflow-hidden">
      <SectionDecorator className="top-10 right-10" type="circles" />
      <SectionDecorator className="bottom-10 left-10" type="lines" />

      <div className="container-main relative z-10">
        <motion.div className="relative">
          <motion.h1
            className="font-space-grotesk font-medium text-5xl md:text-6xl text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          <FlowingLine className="absolute -bottom-4 left-0" width={200} height={30} />
        </motion.div>

        {subtitle && (
          <motion.p
            className="text-xl md:text-2xl text-text-secondary max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  )
}
