"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import GithubStats from "@/components/github-stats"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

import StickySkills from "@/components/sticky-skills"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <StickySkills />
      <main>
        <Hero />
        <Skills />
        <About />
        <GithubStats />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
