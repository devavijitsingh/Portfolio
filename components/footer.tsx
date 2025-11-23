export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground font-light">
              © {new Date().getFullYear()} Avijit Singh. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Founder & CEO of{" "}
              <a href="https://pageonix.in" target="_blank" rel="noopener noreferrer" className="hover:underline">
                PageoNix
              </a>
            </p>
          </div>
          <p className="text-sm text-muted-foreground font-light">Buil and Managed by PageoNix</p>
        </div>
      </div>
    </footer>
  )
}
