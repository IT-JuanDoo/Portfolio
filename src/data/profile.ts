import type { NavLink, Profile } from "@/types";

export const GITHUB_USERNAME = "XuanDu2005";
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

export const siteConfig = {
  name: "CXD.DEV",
  handle: "Cao Xuan Du",
  monogram: "CXD",
  description:
    "Portfolio của Cao Xuân Dự — Full-Stack Developer Intern (React, TypeScript, Node.js, NestJS, PHP)",
  url: "https://portfolio.vercel.app",
};

export const navLinks: NavLink[] = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Projects", href: "#projects" },
  { label: "Approach", href: "#approach" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const profile: Profile = {
  name: "Cao Xuan Du",
  title: "Full-Stack Developer Intern",
  badge: "CXD · DEVELOPER",
  tagline: "Information Technology",
  typingPhrases: [
    "Student at Ho Chi Minh City University of Transport (UTH)",
    "Full-Stack Developer Intern — React, TypeScript, Node.js & PHP.",
    "Building scalable, secure web apps with NestJS & PostgreSQL.",
  ],
  focusLine: "Information Technology · UTH",
  email: "pherocaodu@gmail.com",
  phone: "0336 797 260",
  location: "TP. Hồ Chí Minh, Việt Nam",
  birthday: "20/05/2005",
  socials: [
    { label: "GitHub", href: GITHUB_URL, icon: "github" },
    {
      label: "Email",
      href: "mailto:pherocaodu@gmail.com",
      icon: "email",
    },
  ],
};
