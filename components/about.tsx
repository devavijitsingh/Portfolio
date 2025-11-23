import { Code2, Lightbulb, Zap } from "lucide-react"

export default function About() {
  const activities = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Exploring cutting-edge technologies and frameworks",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building fast, optimized applications and systems",
    },
  ]

  return (
    <section id="about" className="py-20 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <p className="text-base text-muted-foreground max-w-3xl font-light leading-relaxed">
            I'm a passionate full-stack developer with expertise in Python, Flask, Django, JavaScript, and React. With a
            strong foundation in problem-solving and open-source contributions, I create web applications that blend
            functionality with elegant design. As founder of PageoNix, I'm committed to building innovative digital
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <div
                key={index}
                className="p-6 bg-card rounded-lg border border-border hover:border-muted-foreground transition-colors"
              >
                <Icon className="w-6 h-6 mb-3 text-foreground" />
                <h3 className="font-semibold mb-2">{activity.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
