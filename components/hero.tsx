"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="py-24 md:py-32 flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Chinmay Dhal</h1>
        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">Full Stack Developer</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
          Building beautiful, functional, and accessible web applications with modern technologies.
        </p>
        <Button size="lg" onClick={scrollToContact}>
          Contact Me
        </Button>
      </motion.div>
    </section>
  )
}

