import type { ExperienceItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    id: "education",
    role: "Information Technology",
    company: "Ho Chi Minh City University of Transport (UTH)",
    period: "2023 — 2027",
    description: [
      "Studying Information Technology at UTH, specializing in software engineering and full-stack web development.",
      "Coursework: Data Structures & Algorithms, Database Systems, OOP, Web Technologies, Software Engineering.",
    ],
    technologies: ["Java", "SQL", "JavaScript", "PHP"],
  },
  {
    id: "personal-projects",
    role: "Full-Stack Developer (Personal Projects)",
    company: "Self-directed",
    period: "2025 — nay",
    description: [
      "TravelMind — AI travel planning platform with NestJS, PostgreSQL, Prisma and React 18; integrates Google Gemini API.",
      "AURA Retinal Screening System — healthcare UI with secure auth, dashboards and notification flows.",
      "BookingsTickets — PHP + MySQL movie ticket booking with role-based admin panel and modular frontend.",
    ],
    technologies: [
      "React 18",
      "TypeScript",
      "NestJS",
      "PHP",
      "PostgreSQL",
      "MySQL",
      "Docker",
    ],
  },
];
