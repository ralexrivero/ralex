"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, CreditCard } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border-gray bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="font-space-grotesk text-xl font-bold">
              Ralex
            </Link>
            <p className="mt-4 text-text-secondary">
              Desarrollador full-stack que convierte retos complejos en software libre, y comparte cada línea de
              aprendizaje.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-space-grotesk text-lg font-semibold">Sitio</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-text-secondary hover:text-text-primary">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-text-secondary hover:text-text-primary">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-text-secondary hover:text-text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-space-grotesk text-lg font-semibold">Acerca</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/sobre-mi" className="text-text-secondary hover:text-text-primary">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-text-secondary hover:text-text-primary">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-space-grotesk text-lg font-semibold">Conecta</h3>
            <div className="mt-4 flex space-x-4">
              <Link href="https://github.com/ralexrivero" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6 text-text-secondary hover:text-text-primary" />
              </Link>
              <Link href="https://twitter.com/ralex_uy" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-text-secondary hover:text-text-primary" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ronald-rivero/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-text-secondary hover:text-text-primary" />
              </Link>
              <Link href="mailto:ralexrivero@gmail.com" aria-label="Email">
                <Mail className="h-6 w-6 text-text-secondary hover:text-text-primary" />
              </Link>
              <Link href="https://ralex.works/probusinesscard" target="_blank" rel="noopener noreferrer" aria-label="Business Card">
                <CreditCard className="h-6 w-6 text-text-secondary hover:text-text-primary" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border-gray pt-8 text-center text-sm text-text-secondary">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
