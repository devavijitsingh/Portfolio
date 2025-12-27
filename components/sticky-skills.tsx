"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const skills = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  
]

export default function StickySkills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const skillsSection = document.getElementById("skills")
          if (skillsSection) {
            const rect = skillsSection.getBoundingClientRect()
            // If the bottom of the skills section is above the top of the viewport (plus some buffer for navbar), show sticky
            // Navbar is fixed ~65px. 
            // If rect.bottom < 80, the section has scrolled up past the navbar area.
            const isScrolledPast = rect.bottom < 80
            setIsVisible(isScrolledPast)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-[65px] left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50 py-3 overflow-hidden shadow-sm transition-all duration-300 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
    >
      <div className="flex relative overflow-hidden max-w-7xl mx-auto">
        <div className="flex gap-12 items-center whitespace-nowrap animate-scroll-reverse will-change-transform">
          {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
            <div key={index} className="relative w-8 h-8 flex-shrink-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <Image
                src={skill.logo}
                alt={skill.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
