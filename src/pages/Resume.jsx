import { motion } from 'framer-motion'

const resumeVersions = [
  {
    title: 'Software Engineering',
    description:
      'Tailored for SWE, front-end, and developer roles. Highlights the Unbox3D capstone (DEVCOM ARL), React projects, OpenGL viewport work, and accessibility tooling.',
    filename: 'Michael_Ramos_SWE_Resume - Spring 2026.pdf',
    tags: ['React', 'C# / WPF', 'OpenGL', 'Accessibility', 'JAWS / WAVE'],
    accent: '#bb86fc',
  },
  {
    title: 'IT Support',
    description:
      'Tailored for IT support and helpdesk roles. Focuses on Tier 1 support experience, Jira ticket workflows, macOS/Windows troubleshooting, WCAG auditing, and bilingual communication.',
    filename: 'Michael_Ramos_IT_Resume - Spring 2026.pdf',
    tags: ['Jira', 'Windows 10/11', 'macOS', 'WCAG / Section 508', 'Bilingual'],
    accent: '#64b5f6',
  },
  {
    title: 'Office & Administration',
    description:
      'Tailored for office support, admin, and coordination roles. Highlights document tracking, stakeholder communication, Excel, Microsoft 365, and multi-team coordination.',
    filename: 'Michael_Ramos_Office_Resume - Spring 2026.pdf',
    tags: ['Excel', 'Microsoft 365', 'Documentation', 'Coordination', 'Bilingual'],
    accent: '#81c784',
  },
]

const experience = [
  {
    role: 'ITS Accessibility Tester',
    org: 'California State University, Los Angeles',
    dates: 'Aug 2023 – Present',
    bullets: [
      'Managed 20+ concurrent support cases with a 100% file completion rate',
      'Conducted Section 508 / WCAG 2.2 audits using JAWS, WAVE, Equidox, and axe-core',
      'Advised developers on ARIA patterns and accessible front-end components',
    ],
  },
  {
    role: 'Front-End Lead & Communications',
    org: 'Unbox3D — DEVCOM Army Research Laboratory Capstone',
    dates: 'Aug 2025 – May 2026',
    bullets: [
      'Led a 3-person front-end team on a 12,508-line C# / WPF / OpenTK codebase',
      'Owned Stage 1: built the interactive OpenGL viewport, camera, gizmos, and mesh selection',
      'Served as primary contact between 10-person team and U.S. Army liaison (DEVCOM ARL)',
    ],
  },
  {
    role: 'Student Ambassador',
    org: 'OpenAI (ChatGPT)',
    dates: 'Sept – Dec 2025',
    bullets: [
      'Selected for the inaugural CSU-wide ChatGPT Ambassador program (23 campuses)',
      'Co-coordinated 2+ workshops with 20–50 participants each',
    ],
  },
]

const skills = [
  { label: 'Languages', items: 'C#, JavaScript, Python, Swift, HTML, CSS' },
  { label: 'Frameworks', items: 'React, WPF / .NET 8, Tailwind CSS, Bootstrap' },
  { label: 'Accessibility', items: 'WCAG 2.1/2.2, Section 508, ARIA, JAWS, WAVE, axe-core' },
  { label: 'Tools', items: 'Git, Jira, MeisterTask, GitHub Actions, Visual Studio' },
  { label: 'Systems', items: 'macOS, Windows 10/11, Unix/Linux CLI' },
  { label: 'Languages Spoken', items: 'English (native), Spanish (fluent)' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: 'easeOut' },
})

export default function Resume() {
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
        <motion.div {...fadeUp(0)} className="mb-12">
          <h1 className="section-title">Resume</h1>
          <p className="section-subtitle">
            Three tailored versions below — download the one that fits the role you're looking at.
          </p>
        </motion.div>

        {/* Download cards */}
        <motion.div {...fadeUp(0.1)} className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {resumeVersions.map((v) => (
            <div
              key={v.title}
              className="skill-group flex flex-col gap-3 hover:border-opacity-60 transition-all"
              style={{ borderColor: `${v.accent}30` }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: v.accent }}>
                  Resume Version
                </p>
                <h2 className="text-white font-semibold text-base">{v.title}</h2>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed flex-1">{v.description}</p>
              <div className="flex flex-wrap gap-1">
                {v.tags.map(t => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full border"
                    style={{
                      background: `${v.accent}12`,
                      color: v.accent,
                      borderColor: `${v.accent}30`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={`/Documents/${v.filename}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs mt-1 justify-center"
                style={{ borderColor: `${v.accent}50`, color: v.accent }}
              >
                Download
              </a>
            </div>
          ))}
        </motion.div>

        {/* Web resume preview */}
        <motion.div {...fadeUp(0.2)} className="mb-12">
          <h2 className="text-white font-semibold text-lg mb-1">Profile Overview</h2>
          <p className="text-gray-500 text-sm mb-8">
            CS graduate from Cal State LA with front-end, accessibility, and IT support experience.
          </p>

          {/* Education */}
          <div className="mb-8">
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-4 pb-2 border-b"
              style={{ color: '#bb86fc', borderColor: '#1e1e1e' }}
            >
              Education
            </h3>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
              <div>
                <p className="text-white font-medium text-sm">California State University, Los Angeles</p>
                <p className="text-gray-400 text-sm">B.S. in Computer Science</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-xs">Graduated May 2026</p>
                <p className="text-accent text-xs font-medium">GPA: 3.4</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-4 pb-2 border-b"
              style={{ color: '#bb86fc', borderColor: '#1e1e1e' }}
            >
              Experience
            </h3>
            <div className="flex flex-col gap-6">
              {experience.map((exp) => (
                <div key={exp.role}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-0.5 mb-2">
                    <div>
                      <p className="text-white font-medium text-sm">{exp.role}</p>
                      <p className="text-accent text-xs">{exp.org}</p>
                    </div>
                    <p className="text-gray-600 text-xs whitespace-nowrap">{exp.dates}</p>
                  </div>
                  <ul className="flex flex-col gap-1">
                    {exp.bullets.map((b) => (
                      <li key={b} className="text-gray-400 text-xs flex gap-2">
                        <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-4 pb-2 border-b"
              style={{ color: '#bb86fc', borderColor: '#1e1e1e' }}
            >
              Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map(({ label, items }) => (
                <div key={label} className="flex gap-2 text-xs">
                  <span className="text-accent font-medium whitespace-nowrap min-w-[110px]">{label}</span>
                  <span className="text-gray-400">{items}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.main>
  )
}
