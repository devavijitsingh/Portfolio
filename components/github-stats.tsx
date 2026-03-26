"use client"

import { useEffect, useState } from "react"
import { Github, Star, GitFork, Users, BookOpen, ExternalLink, Loader2 } from "lucide-react"

interface GithubUser {
  login: string
  avatar_url: string
  html_url: string
  name: string
  bio: string
  public_repos: number
  followers: number
  following: number
}

interface GithubRepo {
  id: number
  name: string
  html_url: string
  description: string
  stargazers_count: number
  forks_count: number
  language: string
}

export default function GithubStats() {
  const [user, setUser] = useState<GithubUser | null>(null)
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await fetch("https://api.github.com/users/DevAvijitsingh")
        if (!userRes.ok) throw new Error("Failed to fetch user")
        const userData = await userRes.json()
        setUser(userData)

        const reposRes = await fetch("https://api.github.com/users/DevAvijitsingh/repos?sort=updated&per_page=6")
        if (!reposRes.ok) throw new Error("Failed to fetch repos")
        const reposData = await reposRes.json()
        setRepos(reposData)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (error) return null

  return (
    <section id="github" className="py-20 px-6 border-t border-border bg-muted/30 scroll-mt-36">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <Github className="w-10 h-10" />
            <h2 className="text-4xl md:text-5xl font-bold">Open Source</h2>
          </div>
          <p className="text-base text-muted-foreground max-w-2xl font-light mx-auto md:mx-0">
            Building in public. My contributions and statistics from GitHub.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : user ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center space-y-4 hover:shadow-lg transition-all">
                <div>
                  <h3 className="text-2xl font-bold">{user.name}</h3>
                  <p className="text-muted-foreground">@{user.login}</p>
                </div>
                <p className="text-sm text-muted-foreground italic">"{user.bio}"</p>

                <div className="grid grid-cols-3 gap-4 w-full pt-4 border-t border-border">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-xl">{user.followers}</span>
                    <span className="text-xs text-muted-foreground">Followers</span>
                  </div>
                  <div className="flex flex-col items-center px-4 border-x border-border">
                    <span className="font-bold text-xl">{user.following}</span>
                    <span className="text-xs text-muted-foreground">Following</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-xl">{user.public_repos}</span>
                    <span className="text-xs text-muted-foreground">Repos</span>
                  </div>
                </div>

                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-foreground text-background rounded-md font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  View Profile <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Repos Grid */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-xl p-5 hover:border-foreground/50 transition-colors flex flex-col justify-between group h-full"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <BookOpen size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="font-semibold truncate max-w-[150px]">{repo.name}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 min-h-[40px]">
                      {repo.description || "No description available"}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      {repo.language && (
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-primary/70"></span>
                          {repo.language}
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Star size={12} />
                        {repo.stargazers_count}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={12} />
                        {repo.forks_count}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
