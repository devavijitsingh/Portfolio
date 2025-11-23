"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const ROLES = [
  "Full Stack Developer",
  "Python & Flask Expert",
  "React Developer",
  "Backend Architect",
  "Web3 Enthusiast",
  "PageoNix Founder",
]

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < ROLES[roleIndex].length) {
            setDisplayText(ROLES[roleIndex].substring(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            setIsDeleting(true)
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(ROLES[roleIndex].substring(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            setIsDeleting(false)
            setRoleIndex((roleIndex + 1) % ROLES.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, roleIndex])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-border">
            <Image
              src="https://avatars.githubusercontent.com/u/113085967?v=4"
              alt="Avijit Singh - Full Stack Developer"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Hello, I'm Avijit</h1>

          <div className="min-h-16 flex items-center justify-center">
            <p className="text-xl md:text-3xl text-muted-foreground font-light">
              {displayText}
              <span className="animate-pulse ml-1">|</span>
            </p>
          </div>
        </div>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
          Crafting elegant solutions to complex problems with modern technologies. I specialize in full-stack
          development, Python backends, and innovative web applications. Passionate about building products that make an
          impact.
        </p>

        <div className="bg-card border border-border rounded-lg p-4 max-w-md mx-auto">
          <p className="text-sm text-muted-foreground mb-2">Currently Leading:</p>
          <a
            href="https://pageonix.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold hover:underline text-foreground"
          >
            PageoNix - Founder & CEO
          </a>
          <p className="text-xs text-muted-foreground mt-2">
            Creating innovative no-code solutions for modern web development
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            View My Work
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
