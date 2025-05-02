"use client"

import { useRef } from "react"
import { motion, useInView, useSpring, useMotionValue, useAnimationFrame } from "framer-motion"
import React from "react"

interface Metric {
  value: string
  label: string
}

const metrics: Metric[] = [
  { value: "30+", label: "Proyectos Productivos" },
  { value: "5000+", label: "Estudiantes Formados" },
  { value: "120+", label: "Repos Open-source" },
  { value: "12", label: "Años de Optimización" },
]

function getTargetNumber(value: string) {
  // Extrae el número antes del '+' o usa el valor tal cual
  const match = value.match(/(\d+)/)
  return match ? parseInt(match[1], 10) : 0
}

function AnimatedNumber({ value, isActive }: { value: string; isActive: boolean }) {
  const target = getTargetNumber(value)
  const hasPlus = value.endsWith("+")
  const [renderValue, setRenderValue] = React.useState("0")
  const [showPlus, setShowPlus] = React.useState(false)

  React.useEffect(() => {
    if (!isActive) return
    setRenderValue("0")
    setShowPlus(false)
    let start = 0
    const duration = 1200 // ms
    const startTime = performance.now()

    function animate(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.round(progress * target)
      setRenderValue(current.toLocaleString())
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setShowPlus(hasPlus)
      }
    }
    requestAnimationFrame(animate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, target, hasPlus])

  return (
    <span>
      {renderValue}
      {showPlus ? "+" : ""}
    </span>
  )
}

export default function ImpactMetrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="border-y border-border-gray bg-dark-panel py-16 md:py-20"
      aria-label="Impact metrics section"
    >
      <div className="container-main">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="font-space-grotesk text-4xl font-bold text-lime-neon md:text-5xl">
                <AnimatedNumber value={metric.value} isActive={isInView} />
              </span>
              <span className="mt-2 text-sm text-text-secondary md:text-base">{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
