export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  details: string;
}

export const experienceData: Experience[] = [
  {
    id: "subhx",
    role: "Full Stack Developer",
    company: "Subhx Infotech",
    location: "Karnal, Haryana, India",
    duration: "Jan 2025 - Present",
    description: "Architect and scale production full-stack web platforms. Drive end-to-end features from system design, database schemas, to fluid animated frontends.",
    responsibilities: [
      "Engineered stateless Node.js / Express microservices and integrated with Next.js App Router SSR platforms.",
      "Integrated Google Gemini AI for automated candidate evaluations, proctoring systems, and audit summaries.",
      "Optimized query runtimes in PostgreSQL and MongoDB, utilizing indexing, database connection pooling, and caching.",
      "Mentored junior developers, introduced linting standards, CI/CD automated deployments, and run code reviews."
    ],
    technologies: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "TypeScript", "Tailwind CSS", "Redux", "Docker", "AWS"]
  },
  {
    id: "brototype",
    role: "MERN Stack Developer Trainee",
    company: "Brototype",
    location: "Calicut, India",
    duration: "Dec 2024 - Jan 2025",
    description: "Rigorous industry-aligned bootcamp program. Developed full-stack software from scratch, verified via daily standups and weekly technical audits.",
    responsibilities: [
      "Designed and launched Zephyr, a complete payment-integrated E-commerce solution.",
      "Developed Veew, a real-time event-streaming frontend and synchronization server utilizing Socket.io and WebRTC.",
      "Built clean code architectures using MVC patterns, writing secure validation middlewares and secure JWT sessions.",
      "Configured AWS infrastructure including EC2 instances, Nginx routing, and SSL configurations."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Socket.io", "AWS", "Nginx", "Git"]
  }
];

export const educationData: Education[] = [
  {
    id: "ba",
    degree: "Bachelor of Arts in English Literature (BA)",
    institution: "University of Calicut",
    duration: "2020 - 2023",
    details: "Focused on English Literature, Literary Criticism, Linguistics, Communication Skills, and Cultural Studies."
  }
];
