import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const SUBTITLE = 'Software Engineer  |  Front-End Developer  |  Accessibility Specialist'

export default function Home() {
  const [typed, setTyped] = useState('')
  const [showCaret, setShowCaret] = useState(true)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < SUBTITLE.length) {
        setTyped(SUBTITLE.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, 35)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Background */}
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <main
        id="main-content"
        className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Profile photo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-6"
          >
            <img
              src="/Images/Mypfp.jpeg"
              alt="Portrait of Michael Ramos"
              className="w-36 h-36 rounded-full object-cover"
              style={{
                border: '2px solid rgba(187, 134, 252, 0.6)',
                boxShadow: '0 0 30px rgba(187, 134, 252, 0.3)',
              }}
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Michael Ramos
          </motion.h1>

          {/* Typewriter subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-gray-400 mb-8 min-h-[1.75rem]"
            aria-label={SUBTITLE}
          >
            {typed}
            <span className="caret ml-0.5" aria-hidden="true">|</span>
          </motion.p>

          {/* Short bio */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="max-w-xl text-gray-400 text-sm md:text-base leading-relaxed mb-10"
          >
            CS graduate from Cal State LA building accessible, bilingual, and genuinely useful web experiences.
            Passionate about front-end development, AI tools, and inclusive design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            <Link to="/portfolio" className="btn-primary">
              View Portfolio
            </Link>
            <Link to="/resume" className="btn-outline">
              Download Resume
            </Link>
            <Link to="/about" className="btn-ghost">
              About Me
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex items-center gap-6 text-sm text-gray-500"
          >
            <a
              href="https://github.com/mramosr2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors hover-line"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <span aria-hidden="true" className="text-gray-700">·</span>
            <a
              href="https://www.linkedin.com/in/michael-ramos-309108242"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors hover-line"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <span aria-hidden="true" className="text-gray-700">·</span>
            <a
              href="https://www.instagram.com/mr.ramos_1000/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors hover-line"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 flex flex-col items-center gap-1"
          aria-hidden="true"
        >
          <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-0.5 h-6 rounded-full"
            style={{ background: 'linear-gradient(to bottom, #bb86fc, transparent)' }}
          />
        </motion.div>
      </main>
    </>
  )
}
