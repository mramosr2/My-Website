export const projects = [
  {
    id: 'chatgames',
    title: 'The Chat Games',
    subtitle: 'CSU Outreach Website',
    category: 'web',
    description:
      'Selected by OpenAI for the inaugural CSU-wide ChatGPT Student Ambassador program. Co-founded and co-host live sessions teaching ethical, effective AI use across 23 campuses. Built the official site with Bootstrap 5, accessible UI, Formspree RSVPs, and captioned demos.',
    tech: ['Bootstrap 5', 'Accessible UI', 'Formspree', 'OpenAI EDU'],
    images: [
      '/Images/chatgames-signup.png',
      '/Images/chatgames-about.png',
      '/Images/chatgames-events.png',
    ],
    alts: [
      'Join The Chat Games modal over a CSU campus photo.',
      'About Chat Games page with team photos.',
      'Sign Up section with event cards.',
    ],
    liveUrl: 'https://thechatgames.com',
    githubUrl: 'https://github.com/mramosr2/the-chat-games-site',
  },
  {
    id: 'montesion',
    title: 'Monte Sion Center',
    subtitle: 'Food Bank Website',
    category: 'web',
    description:
      'Full redesign and rebuild of a nonprofit food bank website into a modern bilingual (EN/ES) React app. Features a donation flow with PayPal, Venmo, and Zelle options, a working contact form, i18n JSON for easy staff updates, and GitHub Actions deployment to GitHub Pages.',
    tech: ['React + Vite', 'Tailwind CSS', 'i18n (EN/ES)', 'GitHub Actions'],
    images: [
      '/Images/MSC1.png',
      '/Images/MSC2.png',
      '/Images/MSC3.png',
      '/Images/MSC4.png',
    ],
    alts: [
      'Monte Sion homepage hero section.',
      'Contact page with bilingual form.',
      'Donate page with payment options.',
      'Donation modal with QR codes.',
    ],
    liveUrl: 'https://montesioncenter.org',
    githubUrl: 'https://github.com/mramosr2/monte-sion-center-website',
  },
  {
    id: 'swiftgpt',
    title: 'Swift Playground Assistant',
    subtitle: 'iOS App Dev GPT',
    category: 'ai',
    description:
      'A custom GPT that pairs with Swift Playgrounds to fix Swift/SwiftUI code in plain English and guide you step by step. Compiles and tests uploaded Swift Packages via a GPT Action and returns minimal diffs you can paste in. Accessibility built in: Dynamic Type, VoiceOver labels, large tap targets.',
    tech: ['Swift + SwiftUI', 'GPT Action', 'Accessible iOS'],
    images: ['/Images/GPT6.jpg', '/Images/GPT5.jpg', '/Images/GPT4.jpg'],
    alts: [
      'Swift Playground Assistant logo.',
      'Store listing with title and description.',
      'Builder preview creating a SwiftUI MVVM starter.',
    ],
    gptUrl:
      'https://chatgpt.com/g/g-68d21dcbb3008191b941ef16ba86df49-swift-playground-assistant-ios-app-dev-assist',
    extraLinks: [
      { label: 'Privacy Policy', url: 'https://swift-build-action.onrender.com/privacy' },
      { label: 'API Schema', url: 'https://swift-build-action.onrender.com/openapi.json' },
    ],
  },
  {
    id: 'a11yauditor',
    title: 'Web Accessibility Auditor',
    subtitle: 'Alt Text + WCAG GPT',
    category: 'ai',
    description:
      'A custom GPT that generates high-quality alt text and audits full web pages for WCAG 2.1/2.2. Flags contrast issues, keyboard traps, and focus order problems. Calls a headless Playwright + axe-core Action and merges results into strict JSON with copy-paste fixes.',
    tech: ['WCAG 2.1/2.2', 'Playwright + axe-core', 'GPT Action', 'JSON output'],
    images: ['/Images/GPT1_hero.jpg', '/Images/GPT2_hero.jpg', '/Images/GPT3_hero_plain.jpg'],
    alts: [
      'Web Accessibility Auditor homepage.',
      'JSON output with alt text fields.',
      'WCAG violation results listing missing attributes.',
    ],
    gptUrl:
      'https://chatgpt.com/g/g-68ce4a19c7848191a9192ef08018e523-web-accessibility-auditor-alt-text-wcag',
    extraLinks: [
      { label: 'Privacy Policy', url: 'https://a11y-scan.onrender.com/privacy' },
      { label: 'API Schema', url: 'https://a11y-scan.onrender.com/openapi.json' },
    ],
  },
  {
    id: 'salmaggi',
    title: 'Salmaggi Architects',
    subtitle: 'First Client Project',
    category: 'web',
    description:
      'My first complete website built for a real client in architecture. Features a homepage carousel, project showcase gallery, and an embedded portfolio viewer. Styled for clarity, structure, and accessibility using semantic HTML and WCAG-compliant markup.',
    tech: ['HTML5', 'CSS3', 'Bootstrap', 'WCAG', 'Accessible UI'],
    images: ['/Images/SS1.png', '/Images/SS2.png', '/Images/SS3.png'],
    alts: [
      'Salmaggi Architects homepage design.',
      'Architecture projects layout.',
      'Embedded architecture portfolio PDF.',
    ],
    githubUrl: 'https://github.com/mramosr2/Salmaggi-Architects-Website',
  },
  {
    id: 'bookexchange',
    title: 'Book Exchange Platform',
    subtitle: 'CS3337 Full-Stack App',
    category: 'web',
    description:
      'Led a team to build a Django-powered full-stack web app for community book sharing. Features user authentication, real-time ratings and comments, favorites, and an admin panel. Follows MVC architecture with a Bootstrap front-end and full technical documentation.',
    tech: ['Django', 'Python', 'Bootstrap', 'Full-Stack', 'Team Lead'],
    images: ['/Images/SS4.png', '/Images/SS5.png', '/Images/SS6.png'],
    alts: [
      'Display Books UI showing book ratings.',
      'Django admin panel interface.',
      'User registration page.',
    ],
    githubUrl: 'https://github.com/mramosr2/CS3337-Project',
    extraLinks: [
      {
        label: 'SRS Document',
        url: '/Documents/Software Requirements Specification Document for Group 2.pdf',
      },
      {
        label: 'Design Spec',
        url: '/Documents/Software Design Specification Document for Group 2.pdf',
      },
    ],
  },
]
