"use client"

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

export default function Skills() {
  const halfLength = Math.ceil(skills.length / 2)
  const firstRow = skills.slice(0, halfLength)
  const secondRow = skills.slice(halfLength)

  return (
    <section id="skills" className="py-10 bg-background overflow-hidden border-b border-border/50">
      <div className="flex flex-col gap-8">
        {/* Row 1: Left to Right */}
        <div className="flex relative overflow-hidden">
          <div className="flex gap-12 sm:gap-20 items-center whitespace-nowrap animate-scroll-reverse will-change-transform">
            {[...firstRow, ...firstRow, ...firstRow, ...firstRow].map((skill, index) => (
              <div key={index} className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
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

        {/* Row 2: Right to Left */}
        <div className="flex relative overflow-hidden">
          <div className="flex gap-12 sm:gap-20 items-center whitespace-nowrap animate-scroll will-change-transform">
            {[...secondRow, ...secondRow, ...secondRow, ...secondRow].map((skill, index) => (
              <div key={index} className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
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
    </section>
  )
}
