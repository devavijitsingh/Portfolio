"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Mail, Linkedin, Github, Twitter, Instagram, Send, MapPin, AtSign } from "lucide-react"

interface CaptchaResponse {
  success: boolean
  error?: string
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    captchaText: "",
  })
  const [captchaImage, setCaptchaImage] = useState("")
  const [captchaId, setCaptchaId] = useState("")
  const [status, setStatus] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    loadCaptcha()
  }, [])

  const loadCaptcha = async () => {
    try {
      const response = await fetch("https://flask-email-api.onrender.com/captcha")
      const captchaIdHeader = response.headers.get("Captcha-ID")
      if (captchaIdHeader) {
        setCaptchaId(captchaIdHeader)
      }
      const blob = await response.blob()
      setCaptchaImage(URL.createObjectURL(blob))
    } catch (error) {
      console.error("Failed to load CAPTCHA:", error)
      setStatus("Failed to load CAPTCHA")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus("")

    try {
      const response = await fetch("https://flask-email-api.onrender.com/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          captchaText: formData.captchaText.trim(),
          captchaId: captchaId,
        }),
      })

      const result: CaptchaResponse = await response.json()

      if (result.success) {
        setStatus("Message sent successfully! I'll get back to you soon.")
        setFormData({ name: "", email: "", message: "", captchaText: "" })
        loadCaptcha()
        setTimeout(() => setStatus(""), 5000)
      } else {
        setStatus("Failed to send message: " + (result.error || "Unknown error"))
        loadCaptcha()
      }
    } catch (error) {
      setStatus("Error sending message. Please try again.")
      console.error("Error:", error)
      loadCaptcha()
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "avijit@pageonix.in",
      href: "mailto:avijit@pageonix.in",
      color: "hover:text-red-500",
    },
    {
      icon: Twitter,
      label: "Twitter / X",
      value: "@DevLord_Avijit",
      href: "https://x.com/DevLord_Avijit",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@devlord_avijit",
      href: "https://instagram.com/devlord_avijit",
      color: "hover:text-pink-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/avijit-singh-%E2%80%8E-0b9a0b293/",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "DevLord-Avijit",
      href: "https://github.com/DevLord-Avijit",
      color: "hover:text-foreground",
    },
  ]

  return (
    <section id="contact" className="py-24 px-6 relative bg-background/50 scroll-mt-36">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss backend architecture? I'm just a message away.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* LEFT COLUMN: Contact Info */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-8 space-y-6 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 text-muted-foreground transition-colors ${item.color}`}
                  >
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <item.icon size={20} className="text-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider opacity-70">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <MapPin size={20} className="text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Based in</h4>
                  <p className="text-muted-foreground">India 🇮🇳</p>
                  <p className="text-sm text-muted-foreground mt-1">Available for remote work worldwide.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Message Form */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-lg relative overflow-hidden">

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <div className="bg-secondary/20 p-4 rounded-lg border border-border/50">
                <label className="block text-xs font-semibold uppercase mb-3 opacity-70">Human Verification</label>
                {captchaImage && (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="bg-white p-2 rounded border flex-shrink-0 flex items-center justify-center">
                      <img src={captchaImage} alt="CAPTCHA" className="h-10 w-auto" />
                    </div>
                    <input
                      type="text"
                      name="captchaText"
                      value={formData.captchaText}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none uppercase tracking-widest text-center"
                      placeholder="CAPTCHA"
                      required
                    />
                    <button type="button" onClick={loadCaptcha} className="p-2 hover:bg-muted rounded-lg transition-colors" title="Refresh">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 16h5v5" /></svg>
                    </button>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? <Loader2 className="animate-spin" /> : <><Send size={20} /> Send Message</>}
              </button>

              {status && (
                <div className={`p-4 rounded-lg text-sm text-center font-medium ${status.includes("success") ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Loader2({ className }: { className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
}
