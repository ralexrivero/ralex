"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "./ui/button"
import { useLanguage } from "../context/language-context"
import AnimatedBackground from "./animated-background"
import CircleRings from "./circle-rings"
import FlowingLine from "./flowing-line"

export default function HeroSection() {
  const { t } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="bg-background py-16 md:py-24 relative overflow-hidden">
      <AnimatedBackground opacity={0.15} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <CircleRings className="absolute -top-12 -left-16 opacity-30" />
              <h1
                className="font-space-grotesk text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
                dangerouslySetInnerHTML={{ __html: t("hero.title") }}
              />
              <FlowingLine className="absolute -bottom-8 left-0" width={150} height={50} />
            </div>

            <motion.p
              className="text-body-l text-text-secondary md:pr-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button asChild size="lg" className="group">
                <Link href="/proyectos">
                  {t("hero.exploreButton")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/sobre-mi">Sobre mí</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div className="flex justify-center relative" style={{ y, opacity }}>
            <motion.div
              className="absolute -z-10 w-full h-full"
              animate={{
                background: [
                  "radial-gradient(circle at 30% 40%, rgba(132, 204, 22, 0.1) 0%, rgba(0, 0, 0, 0) 70%)",
                  "radial-gradient(circle at 70% 60%, rgba(132, 204, 22, 0.1) 0%, rgba(0, 0, 0, 0) 70%)",
                  "radial-gradient(circle at 30% 40%, rgba(132, 204, 22, 0.1) 0%, rgba(0, 0, 0, 0) 70%)",
                ],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-border-gray md:h-80 md:w-80">
              <Image src="/ronald_rivero_profile_hd.jpg" alt="Ralex" fill className="object-cover" priority />
              <CircleRings className="absolute -bottom-12 -right-12 opacity-30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
