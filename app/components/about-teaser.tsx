"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutTeaser() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Parallax horizontal para la imagen
  const imgContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: imgContainerRef,
    offset: ["start end", "end start"],
  })
  // De 45% (izquierda) a 55% (derecha) según el scroll
  const objectPositionX = useTransform(scrollYProgress, [0, 1], ["45%", "55%"])

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background" aria-label="About teaser section">
      <div className="container-main">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-6">
              Desarrollador con pasión por el <span className="text-lime-neon">código abierto</span>
            </h2>

            <p className="text-text-secondary mb-6">
              Llevo más de 8 años convirtiendo ideas complejas en soluciones de software elegantes y accesibles. Mi
              enfoque combina sólidos conocimientos técnicos con una visión práctica orientada a resultados.
            </p>

            <p className="text-text-secondary mb-8">
              Creo firmemente que el software libre no solo democratiza la tecnología, sino que también impulsa la
              innovación colectiva y el aprendizaje compartido.
            </p>

            <Link href="/sobre-mi" className="btn-primary inline-flex items-center gap-2">
              Conoce más sobre mí
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            ref={imgContainerRef}
          >
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-xl overflow-hidden border-4 border-border-gray">
              <motion.img
                src="/ronald_rivero_conference.jpeg"
                alt="Ralex en conferencia"
                className="object-cover object-left md:object-center w-full h-full"
                style={{ objectPosition: objectPositionX }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
