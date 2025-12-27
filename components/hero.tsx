import { useEffect, useState } from "react"
import { ArrowRight, Terminal } from "lucide-react"
import { motion } from "framer-motion"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
})

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [text, setText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const roles = ["Backend Developer", "Flask Developer", "Security Engineer", "ML Engineer", "Web Developer"]
  const typingSpeed = 50
  const deletingSpeed = 50
  const pauseTime = 2000

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex]

      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1))
      } else {
        setText(currentRole.substring(0, text.length + 1))
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, roleIndex, roles])

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 overflow-hidden relative bg-background">
      {/* Removed bg-background to let canvas show through */}

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left relative z-10 flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-secondary/50 text-sm font-medium text-secondary-foreground backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for Freelance & Consulting
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter ${poppins.className} leading-tight md:leading-none`}
          >
            <span className="text-muted-foreground block text-lg md:text-2xl font-medium tracking-widest uppercase mb-4">
              Hello there 👋
            </span>
            <span className="text-foreground/90">I&apos;m </span>
            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-muted-foreground bg-clip-text text-transparent">
              AVIJIT SINGH
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 space-y-2 flex flex-col items-center"
          >
            <div className="h-[60px] md:h-[80px] flex items-center justify-center">
              <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground">
                {text}
                <span className="animate-blink ml-1">|</span>
              </h2>
            </div>
            <p className="text-xl md:text-3xl text-muted-foreground font-light">
              & Founder @ <span className="text-foreground font-medium">PageoNix</span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Architecting robust scalable systems and building high-performance web applications.
            Turning complex backend logic into seamless user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#projects"
              className="group px-8 py-4 bg-foreground text-background rounded-full font-semibold text-lg hover:opacity-90 transition-all flex items-center gap-2"
            >
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-background border border-border rounded-full font-semibold text-lg hover:bg-muted transition-colors flex items-center gap-2"
            >
              <Terminal size={20} />
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
