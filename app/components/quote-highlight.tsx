"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import CircleRings from "./circle-rings"
import FlowingLine from "./flowing-line"

export default function QuoteHighlight() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-dark-panel overflow-hidden relative"
      aria-label="Quote highlight section"
    >
      {/* Decorative circles */}
      <motion.div
        className="absolute left-8 top-8 opacity-30"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="39" stroke="hsl(var(--lime-neon))" strokeWidth="2" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute right-8 bottom-8 opacity-30"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="39" stroke="hsl(var(--lime-neon))" strokeWidth="2" />
        </svg>
      </motion.div>

      <CircleRings className="absolute -left-20 bottom-20 opacity-20" count={10} size={80} />
      <FlowingLine className="absolute right-20 top-20" width={300} height={100} />

      <div className="container-main relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Stylized quotes */}
          <motion.div
            className="mb-8 text-lime-neon opacity-70"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 0.7, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 11.5H6.5C5.67157 11.5 5 10.8284 5 10V8.5C5 7.67157 5.67157 7 6.5 7H8C8.27614 7 8.5 6.77614 8.5 6.5V5.5C8.5 5.22386 8.27614 5 8 5H6.5M17.5 11.5H14C13.1716 11.5 12.5 10.8284 12.5 10V8.5C12.5 7.67157 13.1716 7 14 7H15.5C15.7761 7 16 6.77614 16 6.5V5.5C16 5.22386 15.7761 5 15.5 5H14M6.5 19H17.5"
                stroke="hsl(var(--lime-neon))"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          {/* Quote text */}
          <motion.blockquote
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="font-space-grotesk font-bold text-lime-neon text-2xl md:text-4xl leading-tight mb-8">
              "El software libre no se trata solo de compartir código, sino de compartir conocimiento. Cada línea que
              liberamos es una oportunidad para que alguien más construya algo extraordinario."
            </p>

            <footer className="mt-6">
              <cite className="font-standerd text-text-secondary not-italic">— Mi filosofía de desarrollo</cite>
            </footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  )
}
