export interface Skill {
  name: string;
  level: number; // 0 to 100
  iconName: string; // Lucide icon mapping name
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Engineering",
    description: "Creating highly performant, responsive, and pixel-perfect interfaces with smooth animations and type safety.",
    skills: [
      { name: "Next.js 15", level: 92, iconName: "Layers" },
      { name: "React.js", level: 95, iconName: "Cpu" },
      { name: "TypeScript", level: 90, iconName: "ShieldAlert" },
      { name: "Tailwind CSS", level: 95, iconName: "Sparkles" },
      { name: "Redux Toolkit", level: 88, iconName: "Workflow" },
      { name: "Framer Motion", level: 85, iconName: "Zap" },
      { name: "JavaScript", level: 95, iconName: "Code2" }
    ]
  },
  {
    category: "Backend & Databases",
    description: "Developing modular microservices, handling real-time communications, and database query optimizations.",
    skills: [
      { name: "Node.js", level: 90, iconName: "Server" },
      { name: "Express.js", level: 92, iconName: "Activity" },
      { name: "PostgreSQL", level: 85, iconName: "Database" },
      { name: "MongoDB", level: 90, iconName: "FileSpreadsheet" },
      { name: "Google Gemini AI", level: 88, iconName: "BrainCircuit" },
      { name: "Socket.io", level: 85, iconName: "Radio" },
      { name: "WebRTC", level: 80, iconName: "Video" }
    ]
  },
  {
    category: "DevOps & Infrastructure",
    description: "Setting up reliable build steps, server configurations, reverse proxies, and continuous delivery systems.",
    skills: [
      { name: "AWS (EC2 / S3)", level: 82, iconName: "Cloud" },
      { name: "Nginx", level: 80, iconName: "Shuffle" },
      { name: "Docker", level: 78, iconName: "Box" },
      { name: "Git / GitHub", level: 92, iconName: "GitBranch" },
      { name: "CI / CD", level: 75, iconName: "RefreshCw" }
    ]
  },
  {
    category: "Core Philosophy",
    description: "Methodologies that drive development quality, page ranking, and user experience.",
    skills: [
      { name: "Clean Architecture", level: 90, iconName: "FolderGit" },
      { name: "Lighthouse Audit (95+)", level: 95, iconName: "Gauge" },
      { name: "SEO Optimization", level: 90, iconName: "Search" },
      { name: "W3C Accessibility", level: 88, iconName: "Eye" }
    ]
  }
];
