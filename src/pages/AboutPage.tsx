import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ContactCTA from '../components/ContactCTA';

// Componente de sección para la biografía
const BiographySection: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/images/about-full.webp"
                alt="Ronald Rivero - Desarrollador Full Stack"
                className="w-full aspect-[4/5] object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-gilroy font-medium text-3xl md:text-4xl text-text-primary">
                De la calidad al código libre
              </h2>

              <div className="space-y-4 text-text-secondary">
                <p>
                  Mi trayectoria profesional comenzó en el mundo de la gestión de calidad, donde aprendí la importancia de los procesos estructurados, la mejora continua y la precisión. Durante 8 años, optimicé sistemas en industrias que iban desde manufactura hasta servicios financieros.
                </p>

                <p>
                  La transformación llegó cuando me di cuenta que podía multiplicar ese impacto a través del desarrollo de software. Lo que comenzó como automatización de tareas repetitivas se convirtió en una pasión por crear herramientas que realmente resolvieran problemas complejos.
                </p>

                <p>
                  Decidí hacer una transición completa hacia el desarrollo, especializándome en tecnologías como Python, C y arquitecturas cloud-native. Mi formación en calidad me otorgó una ventaja única: la capacidad de pensar en términos de sistemas completos, escalabilidad y experiencia de usuario final.
                </p>

                <p className="font-medium">
                  Hoy, combino esas capacidades técnicas con mi pasión por compartir conocimiento. Como instructor y mentor, ayudo a la próxima generación de desarrolladores a formarse, mientras continúo construyendo soluciones de código abierto para problemas reales.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-6 bg-dark-panel rounded-xl border border-border-gray">
                <h3 className="font-gilroy font-medium text-xl text-text-primary mb-2">Filosofía técnica</h3>
                <p className="text-text-secondary">Creo en el poder del software libre como acelerador de innovación. El código es un medio para un fin: resolver problemas reales de las personas y organizaciones.</p>
              </div>

              <div className="p-6 bg-dark-panel rounded-xl border border-border-gray">
                <h3 className="font-gilroy font-medium text-xl text-text-primary mb-2">Filosofía educativa</h3>
                <p className="text-text-secondary">Aprender haciendo. La mejor forma de dominar una tecnología es construyendo soluciones reales, resolviendo problemas concretos y compartiendo ese conocimiento.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente de sección de habilidades técnicas
const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: ["Python", "FastAPI", "Django", "Node.js", "C", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "TailwindCSS", "Next.js", "Framer Motion"]
    },
    {
      title: "DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux"]
    },
    {
      title: "Data",
      skills: ["ETL", "Pandas", "Airflow", "Spark", "SQL", "Data Modeling"]
    }
  ];

  return (
    <section className="py-16 bg-dark-panel">
      <div className="container-main">
        <motion.h2
          className="font-gilroy font-medium text-3xl md:text-4xl text-text-primary mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Habilidades técnicas
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-background rounded-xl p-6 border border-border-gray"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-gilroy font-medium text-2xl text-lime-neon mb-4">
                {category.title}
              </h3>

              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-lime-neon rounded-full mr-2"></span>
                    <span className="text-text-secondary">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente de sección de experiencia laboral
const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      period: "2020 - Presente",
      role: "Desarrollador Full Stack & Instructor de Cloud",
      company: "Holberton School",
      description: "Desarrollo de soluciones cloud-native y enseñanza de Python, C y AWS a estudiantes de ingeniería de software."
    },
    {
      period: "2018 - 2020",
      role: "Data Engineer",
      company: "AFAP",
      description: "Implementación de pipelines ETL para análisis financiero y automatización de reportes regulatorios."
    },
    {
      period: "2015 - 2018",
      role: "Desarrollador Backend",
      company: "Itaú",
      description: "Desarrollo de APIs y microservicios para plataformas de banca digital."
    },
    {
      period: "2010 - 2015",
      role: "Consultor de Calidad",
      company: "Ceibal",
      description: "Optimización de procesos y gestión de calidad para programa nacional de inclusión digital."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-main">
        <motion.h2
          className="font-gilroy font-medium text-3xl md:text-4xl text-text-primary mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experiencia profesional
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.period + exp.company}
              className="mb-8 pb-8 border-b border-border-gray last:border-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="font-gilroy font-medium text-xl text-text-primary">
                  {exp.role}
                </h3>
                <span className="px-3 py-1 bg-dark-panel rounded-full text-sm text-text-secondary">
                  {exp.period}
                </span>
              </div>

              <h4 className="font-gilroy text-lg text-lime-neon mb-2">
                {exp.company}
              </h4>

              <p className="text-text-secondary">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Página completa
const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Sobre Mí"
        subtitle="Desarrollador full-stack que transforma retos complejos en software libre, con 15 años de experiencia"
      />
      <BiographySection />
      <SkillsSection />
      <ExperienceSection />
      <ContactCTA />
    </>
  );
};

export default AboutPage;