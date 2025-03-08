"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

type Skill = {
  name: string
  category: "frontend" | "backend" | "tools" | "other"
}

const skills: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "REST API", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Jest", category: "tools" },
  { name: "Cypress", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "Responsive Design", category: "other" },
  { name: "Accessibility", category: "other" },
  { name: "Performance Optimization", category: "other" },
]

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm a passionate full-stack developer with over 5 years of experience building web applications. I
            specialize in React, Next.js, and Node.js, creating responsive and accessible user interfaces with a focus
            on performance and user experience.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">My Skills</h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 md:gap-3"
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={item}>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  {skill.name}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

