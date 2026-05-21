import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'

const FILTERS = ['all', 'web', 'ai']
const FILTER_LABELS = { all: 'All Projects', web: 'Web', ai: 'AI Tools' }

function Carousel({ images, alts }) {
  const [idx, setIdx] = useState(0)

  if (!images || images.length === 0) return null

  const prev = (e) => {
    e.stopPropagation()
    setIdx(i => (i - 1 + images.length) % images.length)
  }
  const next = (e) => {
    e.stopPropagation()
    setIdx(i => (i + 1) % images.length)
  }

  return (
    <div className="carousel-container">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alts?.[i] || `Project screenshot ${i + 1}`}
          className={`carousel-img ${i !== idx ? 'hidden' : ''}`}
          loading="lazy"
        />
      ))}

      {images.length > 1 && (
        <>
          <button className="carousel-btn prev" onClick={prev} aria-label="Previous image">
            ‹
          </button>
          <button className="carousel-btn next" onClick={next} aria-label="Next image">
            ›
          </button>
          <div className="carousel-dots" aria-hidden="true">
            {images.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === idx ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setIdx(i) }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35 }}
      className="project-card flex flex-col"
    >
      <Carousel images={project.images} alts={project.alts} />

      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Title */}
        <div>
          <h2 className="text-white font-semibold text-base leading-snug">{project.title}</h2>
          {project.subtitle && (
            <p className="text-accent text-xs mt-0.5 font-medium">{project.subtitle}</p>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span key={t} className="badge-pill">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-3">
              Live Site
            </a>
          )}
          {project.gptUrl && (
            <a href={project.gptUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-3">
              Open GPT
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-2 px-3">
              GitHub
            </a>
          )}
          {project.extraLinks?.map(link => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs py-2 px-3">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Portfolio() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <motion.main
      id="main-content"
      className="relative z-10 min-h-screen pt-24 pb-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="section-title">Portfolio</h1>
          <p className="section-subtitle">Projects I've built, shipped, and maintained</p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter projects">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-tab ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {FILTER_LABELS[f]}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-gray-500 text-center py-20">No projects found.</p>
        )}
      </div>
    </motion.main>
  )
}
