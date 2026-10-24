import { useState } from 'react'
import { motion } from 'framer-motion'

const skills = {
  'Helpdesk & Support': ['Tier 1 Support', 'Hardware Troubleshooting', 'Remote Support', 'Ticket Management', 'SLA Adherence'],
  'Systems & OS': ['Windows 10/11', 'Windows Server', 'macOS', 'Linux / Unix CLI', 'Active Directory', 'Microsoft Intune'],
  'Networking': ['TCP/IP', 'DNS', 'DHCP', 'VPN', 'SonicWall Firewall', 'Wi-Fi Troubleshooting'],
  'Software & Productivity': ['Microsoft 365', 'Google Workspace', 'Adobe Acrobat', 'GoToConnect', 'SharePoint', 'Freshservice'],
  'Access Management': ['Active Directory', 'Domain Join / Disjoin', 'Account Provisioning', 'Password Resets', 'Microsoft Intune'],
  'Languages Spoken': ['English (native)', 'Spanish (fluent)'],
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export default function About() {
  const [alertMsg, setAlertMsg] = useState('')
  const [alertType, setAlertType] = useState('success')
  const [submitting, setSubmitting] = useState(false)

  function showAlert(msg, type = 'success') {
    setAlertMsg(msg)
    setAlertType(type)
    setTimeout(() => setAlertMsg(''), 5000)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const email = form.email.value.trim()
    const subject = form.subject.value.trim()
    const message = form.message.value.trim()

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(email)) return showAlert('Please enter a valid email address.', 'error')
    if (subject.length < 5) return showAlert('Subject must be at least 5 characters.', 'error')
    if (message.length < 5) return showAlert('Message must be at least 5 characters.', 'error')

    setSubmitting(true)
    try {
      const res = await fetch('https://formsubmit.co/ajax/michaelramosdev1@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (res.ok) {
        showAlert('Message sent successfully. Thank you!', 'success')
        form.reset()
      } else {
        showAlert('Something went wrong. Please try again.', 'error')
      }
    } catch {
      showAlert('Network error. Please try again.', 'error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <motion.main
      id="main-content"
      className="relative z-10 min-h-screen pt-24 pb-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div {...fadeUp} className="mb-12">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">Background, skills, and how to reach me</p>
        </motion.div>

        {/* Bio section */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid md:grid-cols-3 gap-10 mb-16"
        >
          {/* Photo */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/Images/IMG_5966.jpg"
              alt="Portrait of Michael Ramos"
              className="w-64 h-auto rounded-xl object-cover"
              style={{ border: '1px solid #252525' }}
            />
          </div>

          {/* Bio text */}
          <div className="md:col-span-2 flex flex-col gap-4 text-gray-300 leading-relaxed text-sm md:text-base">
            <p>
              Hi, I'm Michael Ramos, a Computer Science graduate from Cal State LA (Class of 2026, GPA 3.4).
              I work in IT support at National Polytechnic College in Lakewood, CA — managing user accounts,
              troubleshooting hardware and software issues, and keeping day-to-day operations running smoothly
              as the sole on-site IT resource.
            </p>
            <p>
              Before NPCollege, I spent three years as an ITS Accessibility Tester at CSULA supporting students
              and staff with technical issues, setting up workstations, and documenting everything in a ticketing
              system. I also served as a Student Ambassador for OpenAI, providing real-time technical support
              to 20-50 people per session at live campus events.
            </p>
            <p>
              I'm comfortable in Windows and Mac environments, working with Active Directory, SonicWall, GoToConnect,
              and Microsoft 365. I communicate clearly with non-technical users and I'm bilingual in English and Spanish
              — which comes up more than you'd think in helpdesk work.
            </p>
            <p>
              Outside of work, I've volunteered since 2016 with Monte Sion's Food Bank and I play guitar.
              Both keep me grounded.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="https://github.com/mramosr2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/michael-ramos-309108242"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-white font-semibold text-lg mb-6">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-group">
                <div className="skill-group-title">{category}</div>
                <div className="flex flex-wrap gap-1.5">
                  {items.map(item => (
                    <span key={item} className="badge-pill">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-white font-semibold text-lg mb-2">Get in Touch</h2>
          <p className="text-gray-500 text-sm mb-6">
            Open to IT opportunities, collaborations, or just a good conversation about tech support and systems.
          </p>

          {alertMsg && (
            <div
              className={`mb-5 px-4 py-3 rounded-lg text-sm border ${
                alertType === 'success'
                  ? 'bg-green-900/20 border-green-500/30 text-green-300'
                  : 'bg-red-900/20 border-red-500/30 text-red-300'
              }`}
              role="alert"
              aria-live="assertive"
            >
              {alertMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 max-w-xl">
            <div>
              <label className="form-label" htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label className="form-label" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="What's this about?"
                required
              />
            </div>
            <div>
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-input"
                rows={5}
                placeholder="Write your message..."
                required
              />
            </div>
            <div>
              <button type="submit" className="btn-primary" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.main>
  )
}
