"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Send, Github, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="section-container">
      <div className="mb-12 max-w-3xl">
        <h1 className="mb-6 font-space-grotesk text-4xl font-bold md:text-5xl">Contacto</h1>
        <p className="text-body-l text-text-secondary">
          ¿Tienes alguna pregunta, propuesta o simplemente quieres charlar? No dudes en contactarme. Estoy abierto a
          colaboraciones, oportunidades y conversaciones interesantes.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <Card>
            <CardHeader>
              <CardTitle>Envíame un mensaje</CardTitle>
              <CardDescription>Completa el formulario y te responderé lo antes posible.</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="mb-4 rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                    <Send className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">¡Mensaje enviado!</h3>
                  <p className="text-text-secondary">Gracias por contactarme. Te responderé lo antes posible.</p>
                  <Button className="mt-6" variant="outline" onClick={() => setIsSubmitted(false)}>
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre</Label>
                      <Input id="name" name="name" value={formState.name} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input id="subject" name="subject" value={formState.subject} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-5">
          <Card>
            <CardHeader>
              <CardTitle>Información de contacto</CardTitle>
              <CardDescription>Otras formas de contactarme.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="mt-1 h-5 w-5 text-text-secondary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:ralexrivero@gmail.com" className="text-text-secondary hover:text-text-primary">
                    ralexrivero@gmail.com
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Redes sociales</h3>
                <div className="flex flex-col space-y-4">
                  <a
                    href="https://github.com/ralexrivero"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-text-secondary hover:text-text-primary"
                  >
                    <Github className="h-5 w-5" />
                    <span>github.com/ralexrivero</span>
                  </a>
                  <a
                    href="https://twitter.com/ralex_uy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-text-secondary hover:text-text-primary"
                  >
                    <Twitter className="h-5 w-5" />
                    <span>twitter.com/ralex_uy</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ronald-rivero/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-text-secondary hover:text-text-primary"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>linkedin.com/in/ronald-rivero</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
