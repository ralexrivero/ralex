"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedBackgroundProps {
  color?: string
  opacity?: number
  density?: number
  speed?: number
  className?: string
}

export default function AnimatedBackground({
  color = "hsl(var(--lime-neon))",
  opacity = 0.2,
  density = 3,
  speed = 0.5,
  className = "",
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let points: { x: number; y: number; vx: number; vy: number; path: Path2D }[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initPoints()
    }

    const initPoints = () => {
      points = []
      const numPoints = Math.floor((canvas.width * canvas.height) / (30000 / density))

      for (let i = 0; i < numPoints; i++) {
        const path = new Path2D()
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        path.moveTo(x, y)

        points.push({
          x,
          y,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          path,
        })
      }
    }

    const drawLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = color
      ctx.lineWidth = 1
      ctx.globalAlpha = opacity

      // Update points position
      points.forEach((point) => {
        point.x += point.vx
        point.y += point.vy

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1

        // Add to path
        point.path.lineTo(point.x, point.y)
      })

      // Draw paths
      points.forEach((point) => {
        ctx.stroke(point.path)
      })

      // Connect nearby points
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x
          const dy = points[i].y - points[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(points[i].x, points[i].y)
            ctx.lineTo(points[j].x, points[j].y)
            ctx.globalAlpha = opacity * (1 - distance / 150)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawLines)
    }

    window.addEventListener("resize", resize)
    resize()
    drawLines()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [color, opacity, density, speed, mounted])

  return <canvas ref={canvasRef} className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true" />
}
