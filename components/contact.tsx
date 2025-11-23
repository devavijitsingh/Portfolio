"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

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
      const response = await fetch("https://flask-email-api-w0xd.onrender.com/captcha")
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
      const response = await fetch("https://flask-email-api-w0xd.onrender.com/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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

  const socials = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/DevLord-Avijit",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/avijit-singh-%E2%80%8E-0b9a0b293/",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/DevLord_Avijit",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:avijitsingh@pageonix.in",
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Let's Connect</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light">
            Whether you have a project in mind, want to collaborate, or just say hello—I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                required
              />
            </div>

            <div className="bg-card border border-border p-4 rounded-lg">
              <label className="block text-sm font-medium mb-3">Verify you're human</label>
              {captchaImage && (
                <div className="space-y-3">
                  <div className="border border-border rounded p-2 flex justify-center bg-background">
                    <img src={captchaImage || "/placeholder.svg"} alt="CAPTCHA" className="max-h-24" />
                  </div>
                  <input
                    type="text"
                    name="captchaText"
                    placeholder="Enter CAPTCHA text"
                    value={formData.captchaText}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    required
                  />
                  <button
                    type="button"
                    onClick={loadCaptcha}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Refresh CAPTCHA
                  </button>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity font-medium disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="text-sm text-center text-muted-foreground">{status}</p>}
          </form>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground text-center">Connect with me on social media</p>
            <div className="flex justify-center gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg hover:bg-muted transition-colors hover:border-muted-foreground"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
