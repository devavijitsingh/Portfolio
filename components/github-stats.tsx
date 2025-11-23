"use client"

export default function GithubStats() {
  return (
    <section id="github" className="py-20 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">GitHub Activity</h2>
          <p className="text-base text-muted-foreground max-w-2xl font-light">
            Passionate about open source and continuous coding. Check out my GitHub stats and contributions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* GitHub Streak */}
          <div className="bg-card rounded-lg border border-border p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Current Streak</h3>
            <img
              src="https://streak-stats.demolab.com?user=DevLord-Avijit"
              alt="GitHub Streak"
              className="w-full h-auto"
            />
          </div>

          {/* GitHub Stats */}
          <div className="bg-card rounded-lg border border-border p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">GitHub Stats</h3>
            <img
              src="https://github-readme-stats.vercel.app/api?username=DevLord-Avijit&show=followers,stars&theme=default"
              alt="GitHub Stats"
              className="w-full h-auto"
            />
          </div>

          {/* Commits History */}
          <div className="bg-card rounded-lg border border-border p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Commits Over Time</h3>
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=DevLord-Avijit&theme=default"
              alt="Commits Summary"
              className="w-full h-auto"
            />
          </div>

          {/* Languages */}
          <div className="bg-card rounded-lg border border-border p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Languages</h3>
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=DevLord-Avijit&theme=default"
              alt="Repos by Language"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
