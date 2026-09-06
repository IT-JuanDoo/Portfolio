import type { Dictionary } from "./vi";

// English dictionary — same shape as Vietnamese, different strings
export const en: Dictionary = {
  meta: {
    title: "Cao Xuan Du — Full-Stack Developer Intern",
    description:
      "Portfolio of Cao Xuan Du — Full-Stack Developer Intern with React, TypeScript, Node.js, NestJS, PHP.",
  },

  header: {
    connect: "Connect",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  footer: {
    builtBy: "Designed & built by CXD · Next.js",
    rights: "All rights reserved",
  },

  nav: {
    capabilities: "Capabilities",
    projects: "Projects",
    approach: "Approach",
    experience: "Experience",
    contact: "Contact",
  },

  hero: {
    badge: "CXD · DEVELOPER",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
  },

  interactive: {
    windowTitle: "~/cxd.dev — bash",
    promptUser: "guest",
    prompt: "$",
    whoamiPrompt: "whoami",
    whoamiResult: "cao-xuan-du  // full-stack developer",
    aboutPrompt: "cat about.txt",
    aboutName: "name    : Cao Xuan Du",
    aboutRole: "role    : Full-Stack Developer Intern",
    aboutStack: "stack   : React, TypeScript, Node.js, PHP",
    aboutFocus: "focus   : APIs · databases · scalable systems",
    lsPrompt: "ls projects/",
    lsTravelmind: "drwxr-xr-x  travelmind/",
    lsAura: "drwxr-xr-x  aura-screening/",
    lsBookings: "drwxr-xr-x  bookings-tickets/",
    shortcut: "Press ⌘ + K · Ctrl + K · to open command palette",
  },

  sections: {
    capabilities: {
      index: "01",
      label: "capabilities",
      title: "Skill & Tool",
      description:
        "The skills and programming languages I have used in my projects.",
    },
    projects: {
      index: "02",
      label: "projects",
      title: "Featured Projects",
      description:
        "Full-stack projects I have built to practice and demonstrate my skills.",
      featured: "★ featured",
      repo: "repo",
      otherProjects: "Other Projects",
      code: "Code",
      demo: "Demo",
    },
    approach: {
      index: "03",
      label: "approach",
      title: "Approach",
      description:
        "The process of working when receiving tasks or building new features.",
    },
    experience: {
      index: "04",
      label: "experience",
      title: "Experience & Education",
      description:
        "My journey in learning and working in the field of web development.",
    },
    contact: {
      index: "05",
      label: "contact",
      title: "Contact",
      description:
        "Do you have a project, internship opportunity, or want to discuss? Send me a message.",
    },
  },

  capabilities: {
    frontend: {
      title: "Frontend Development",
      description:
        "Build responsive, accessible UIs with modern frameworks. Strong focus on component architecture, state management, and pixel-perfect Tailwind styling.",
    },
    backend: {
      title: "Backend Development",
      description:
        "Design and build RESTful APIs with authentication, role-based authorization, validation and clean layered architecture. Secure by default.",
    },
    database: {
      title: "Databases",
      description:
        "Data modeling, query optimization, migrations, and relationships across SQL databases. Practical experience with both PostgreSQL and MySQL.",
    },
    devops: {
      title: "DevOps & Tools",
      description:
        "Containerize applications with Docker / Docker Compose in a monorepo layout. Version control with Git, CI-friendly workflows.",
    },
  },

  approachSteps: {
    understand: {
      title: "Understand Requirements",
      description:
        "Clarify business logic, edge cases, and technical constraints before writing code.",
    },
    design: {
      title: "Design First",
      description:
        "Design database schema, API contracts, and layer architecture to avoid costly refactors later.",
    },
    build: {
      title: "Build Incrementally",
      description:
        "Implement features incrementally, test early, and integrate continuously.",
    },
    review: {
      title: "Review & Optimize",
      description:
        "Code review, profiling queries, and optimization based on actual metrics.",
    },
  },

  projectsData: {
    travelmind: {
      title: "TravelMind — AI Travel Planner",
      description:
        "Full-stack AI-powered travel planning platform. Users generate personalized daily itineraries by destination, budget and preferences via Google Gemini. Backend on NestJS + PostgreSQL + Prisma with JWT auth & role-based access (User/Admin). Multi-language frontend on React 18 + TypeScript + TailwindCSS. Containerized with Docker / Docker Compose in a monorepo.",
    },
    aura: {
      title: "AURA — Retinal Screening System",
      description:
        "Healthcare platform for clinics and doctors. Built secure Authentication UI (login/register), refined Notification UI for real-time updates, fixed critical UI/UX bugs in User Management, and built comprehensive dashboards for doctors and clinics.",
    },
    bookings: {
      title: "BookingsTickets — Movie Ticket Booking",
      description:
        "Full-stack movie ticket booking website: session management, secure authentication (User/Admin with password hashing), pagination, dynamic homepage and end-to-end booking with combo selection. Refactored frontend by splitting CSS / JS into modular files, improving responsive layout and overall performance.",
    },
  },

  experienceData: {
    education: {
      role: "Information Technology",
      company:
        "Ho Chi Minh City University of Transport (UTH)",
      period: "2023 — 2027",
      description: [
        "Studying Information Technology at UTH, specializing in software engineering and full-stack web development.",
        "Coursework: Data Structures & Algorithms, Database Systems, OOP, Web Technologies, Software Engineering.",
      ],
    },
    personal: {
      role: "Full-Stack Developer (Personal Projects)",
      company: "Self-directed",
      period: "2025 — present",
      description: [
        "TravelMind — AI travel planning platform with NestJS, PostgreSQL, Prisma and React 18; integrates Google Gemini API.",
        "AURA Retinal Screening System — healthcare UI with secure auth, dashboards and notification flows.",
        "BookingsTickets — PHP + MySQL movie ticket booking with role-based admin panel and modular frontend.",
      ],
    },
  },

  contactFields: {
    email: "Email",
    phone: "Phone",
    location: "Location",
    locationValue: "Ho Chi Minh City, Vietnam",
    availability: "Availability",
    availabilityValue: "Open to internships & junior full-stack roles",
  },

  profile: {
    typingPhrases: [
      "Student at Ho Chi Minh City University of Transport (UTH)",
      "Full-Stack Developer Intern — React, TypeScript, Node.js & PHP.",
      "Building scalable, secure web apps with NestJS & PostgreSQL.",
    ],
    focusLine: "Information Technology · UTH",
  },

  logo: {
    subtitle: "full stack developer intern",
  },

  languageSwitcher: {
    label: "Language",
    english: "EN",
    vietnamese: "VI",
  },
};
