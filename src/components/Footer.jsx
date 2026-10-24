export default function Footer() {
  return (
    <footer
      className="relative z-10 border-t text-sm text-gray-500 py-6 px-6"
      style={{ borderColor: '#1e1e1e', background: 'rgba(10,10,10,0.8)' }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <span>&copy; {new Date().getFullYear()} Michael Ramos</span>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/michael-ramos-309108242"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors hover-line"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mramosr2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors hover-line"
            aria-label="GitHub profile"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/mr.ramos_1000/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors hover-line"
            aria-label="Instagram profile"
          >
            Instagram
          </a>
        </div>

        <span>Developed by Michael Ramos</span>
      </div>
    </footer>
  )
}
