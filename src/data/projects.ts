import type { Project } from "@/types";

const repo = (name: string) => `https://github.com/XuanDu2005/${name}`;

export const projects: Project[] = [
  {
    id: "travelmind",
    title: "TravelMind — AI Travel Planner",
    description:
      "Full-stack AI-powered travel planning platform. Users generate personalized daily itineraries by destination, budget and preferences via Google Gemini. Backend on NestJS + PostgreSQL + Prisma with JWT auth & role-based access (User/Admin). Multi-language frontend on React 18 + TypeScript + TailwindCSS. Containerized with Docker / Docker Compose in a monorepo.",
    tags: [
      "React 18",
      "TypeScript",
      "TailwindCSS",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Gemini API",
      "Docker",
      "JWT",
    ],
    github: repo("PlanTravelingAI"),
    featured: true,
  },
  {
    id: "aura-retinal",
    title: "AURA — Retinal Screening System",
    description:
      "Healthcare platform for clinics and doctors. Built secure Authentication UI (login/register), refined Notification UI for real-time updates, fixed critical UI/UX bugs in User Management, and built comprehensive dashboards for doctors and clinics.",
    tags: ["TypeScript", "C#", "Python", "Docker"],
    github: repo("AURA-Retinal-Screening-System"),
    featured: true,
  },
  {
    id: "bookings-tickets",
    title: "BookingsTickets — Movie Ticket Booking",
    description:
      "Full-stack movie ticket booking website: session management, secure authentication (User/Admin with password hashing), pagination, dynamic homepage and end-to-end booking with combo selection. Refactored frontend by splitting CSS / JS into modular files, improving responsive layout and overall performance.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    github: repo("Bookings-Tickets"),
    featured: true,
  },
];
