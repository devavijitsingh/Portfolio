"use client"

import { useState } from "react"
import { ExternalLink, Github, Lock } from "lucide-react"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      title: "PageoNix",
      category: "web",
      description:
        "A modern no-code platform for creating dynamic, responsive web pages with drag-and-drop builder, real-time collaboration, and premium hosting features.",
      tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js"],
      links: {
        website: "https://pageonix.in",
        github: "https://github.com",
      },
      isPrivate: false,
    },
    {
      title: "Kuber Mail",
      category: "web",
      description:
        "A lightweight, email-driven payment gateway enabling businesses and freelancers to accept UPI payments without bank account or API integration.",
      tags: ["Flask", "Python", "UPI", "Email Integration"],
      links: {
        github: "https://github.com/DevLord-Avijit/kuber-mail",
      },
      isPrivate: false,
    },
    {
      title: "Mark AI",
      category: "ai",
      description:
        "An intelligent virtual assistant powered by AI, designed to automate tasks, boost productivity, and provide AI-powered interactions with cutting-edge technology.",
      tags: ["AI", "Automation", "ChatBot", "GenAI"],
      links: {
        website: "https://mark.avijitsingh.ct.ws",
      },
      isPrivate: true,
    },
    {
      title: "Key-Miners",
      category: "python",
      description:
        "A Python-powered toolkit to scrape, mine, verify, and store API keys from public GitHub repositories. Built for security research and educational purposes.",
      tags: ["Python", "Web Scraping", "GitHub API", "Security"],
      links: {
        github: "https://github.com/DevLord-Avijit/key-miners",
      },
      isPrivate: false,
    },
    {
      title: "To-Do List App",
      category: "python",
      description:
        "A simple and intuitive task management application built with Python and Flask. Features persistent storage, real-time updates, and a clean UI.",
      tags: ["Flask", "Python", "SQLite", "HTML/CSS"],
      links: {
        website: "https://tasks.avijitsingh.ct.ws/",
        github: "https://github.com/DevLord-Avijit/To-do-list",
      },
      isPrivate: false,
    },
    {
      title: "WhatsApp Automater",
      category: "python",
      description:
        "A Python-based automation tool that streamlines WhatsApp communications and interactions using pyautogui. Perfect for bulk messaging and workflow automation.",
      tags: ["Python", "PyAutoGUI", "Automation", "WhatsApp"],
      links: {
        github: "https://github.com/DevLord-Avijit/Whatsapp-Automatomation-Script",
      },
      isPrivate: false,
    },
    {
      title: "GitHub Bot",
      category: "ai",
      description:
        "An intelligent bot that automates GitHub workflows including issue management, pull request handling, code review assistance, and repository maintenance.",
      tags: ["GitHub API", "Python", "Automation", "Bot"],
      links: {},
      isPrivate: true,
    },
    {
      title: "Firebase Real-time Systems",
      category: "web",
      description:
        "Multiple full-stack applications leveraging Firebase for real-time database, authentication, and OAuth-based login systems with seamless integration.",
      tags: ["Firebase", "React", "Authentication", "Realtime DB"],
      links: {
        github: "https://github.com/DevLord-Avijit",
      },
      isPrivate: false,
    },
  ]

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "python", label: "Python Projects" },
    { id: "ai", label: "AI & Automation" },
  ]

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-20 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Selected Work</h2>
          <p className="text-base text-muted-foreground max-w-2xl font-light">
            A diverse collection of projects showcasing expertise in full-stack development, Python backends, AI
            solutions, and modern web technologies.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-foreground text-background"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-card rounded-lg border border-border hover:border-muted-foreground transition-all hover:shadow-lg group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  {project.isPrivate && <Lock size={20} className="text-muted-foreground flex-shrink-0" />}
                </div>

                <p className="text-muted-foreground font-light leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 flex-wrap">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
                    >
                      <ExternalLink size={16} />
                      Visit Project
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                  {project.isPrivate && !project.links.github && (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <Lock size={16} />
                      Private Repository
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
