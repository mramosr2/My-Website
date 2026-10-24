import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/resume', label: 'Resume' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled || menuOpen
            ? 'rgba(10, 10, 10, 0.92)'
            : 'rgba(10, 10, 10, 0.3)',
          backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'blur(4px)',
          borderBottom: scrolled || menuOpen ? '1px solid #1e1e1e' : '1px solid transparent',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="font-display font-bold text-white text-lg hover:text-accent transition-colors"
            aria-label="Michael Ramos - Home"
          >
            <span style={{ color: '#bb86fc' }}>M</span>R
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-all hover-line ${
                      isActive
                        ? 'text-accent'
                        : 'text-gray-300 hover:text-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className="block w-5 h-0.5 bg-white transition-transform duration-200"
              style={{ transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-5 h-0.5 bg-white transition-opacity duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-0.5 bg-white transition-transform duration-200"
              style={{ transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: menuOpen ? '300px' : '0' }}
        >
          <ul className="flex flex-col px-6 pb-4 gap-1 list-none m-0 p-0">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-accent/10 text-accent'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
