import type { Capability } from "@/types";

export const capabilities: Capability[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Build responsive, accessible UIs with modern frameworks. Strong focus on component architecture, state management, and pixel-perfect Tailwind styling.",
    icon: "frontend",
    tags: ["React 18", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Vite"],
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Design and build RESTful APIs with authentication, role-based authorization, validation and clean layered architecture. Secure by default.",
    icon: "backend",
    tags: ["Node.js", "NestJS", "PHP", "JavaScript"],
  },
  {
    id: "database",
    title: "Databases",
    description:
      "Data modeling, query optimization, migrations, and relationships across SQL databases. Practical experience with both PostgreSQL and MySQL.",
    icon: "database",
    tags: ["PostgreSQL", "MySQL", "Prisma ORM"],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    description:
      "Containerize applications with Docker / Docker Compose in a monorepo layout. Version control with Git, CI-friendly workflows.",
    icon: "devops",
    tags: ["Git", "Docker", "Docker Compose"],
  },
];
