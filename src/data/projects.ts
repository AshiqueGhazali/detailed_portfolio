export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  category: string;
  techStack: string[];
  highlights: string[];
  challenges: string;
  architecture: string;
  impact: string;
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string; // We can use elegant SVG placeholders or icons
}

export const projectsData: Project[] = [
  {
    id: "coinspe",
    title: "CoinsPe",
    role: "Full Stack Developer",
    description: "A high-performance, secure cryptocurrency platform for seamless digital asset trading and portfolio management. Re-engineered backend transaction systems and automated the verification workflow to ensure rapid onboarding.",
    category: "Web3 & Fintech",
    techStack: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "TypeScript", "JWT"],
    highlights: ["Automated KYC Pipeline", "High-Performance Order Matching", "Sleek Trading Dashboards"],
    challenges: "Securing financial transaction data and mitigating race conditions during peak trading volumes. Required implementing database transaction locks and strict concurrency controls.",
    architecture: "State-of-the-art Next.js App Router for server-side rendering, communicating with a stateless Node.js microservice architecture backed by PostgreSQL with transactional pooling.",
    impact: "Reduced user verification time by 85% using automated KYC processes and maintained 99.9% uptime during high trading volume peaks.",
    liveUrl: "https://coinspe.com/",
    imageUrl: "/projects/coinspe.png"
  },
  {
    id: "subhx-hireup",
    title: "Subhux HireUp",
    role: "Lead Full Stack & AI Developer",
    description: "An AI-powered recruitment SaaS platform designed to conduct automated interviews, proctor candidates, and compile dynamic evaluations using generative AI.",
    category: "AI & SaaS",
    techStack: ["Next.js", "Google Gemini AI", "Node.js", "PostgreSQL", "Tailwind CSS", "TypeScript", "WebRTC"],
    highlights: ["AI Assessment Engine", "WebRTC Proctoring", "Automated PDF Report Generator"],
    challenges: "Synchronizing media recordings under bad connection states and optimizing Gemini AI prompts to guarantee structured, non-biased grading outputs.",
    architecture: "Next.js UI paired with WebRTC recorder client, streaming data to S3. Google Gemini API evaluations executed asynchronously via Redis-backed queue worker nodes.",
    impact: "Decreased HR screening cycles by 75% for technical applications and automated mock interview grading with high consistency.",
    liveUrl: "https://hireup.subhx.in/",
    githubUrl: "https://github.com/AshiqueGhazali",
    imageUrl: "/projects/hireup.png"
  },
  {
    id: "subhx-connect",
    title: "SUBHX Connect",
    role: "Frontend Engineer",
    description: "Enterprise broadband and network connectivity platform. Designed high-fidelity dashboards and real-time customer support chat engines to optimize user experience.",
    category: "Network & Telecom",
    techStack: ["React.js", "Redux Toolkit", "Tailwind CSS", "JavaScript", "Socket.io"],
    highlights: ["Real-time Chat Engine", "Interactive ISP Plans Slider", "Optimized Search FAQ"],
    challenges: "Synchronizing real-time websocket connections across mobile/desktop clients while keeping a lightweight bundle footprint and ensuring smooth rendering on low-end mobile devices.",
    architecture: "Redux-driven state manager coupled with persistent Socket.io channels, optimizing state diffs to reduce network overhead.",
    impact: "Boosted client conversion rates by 35% with the interactive plan configurator and trimmed customer service ticketing load by 40%.",
    liveUrl: "https://subhxconnect.com/",
    imageUrl: "/projects/connect.png"
  },
  {
    id: "freshcheck",
    title: "FreshCheck",
    role: "Creator & Lead Architect",
    description: "Digital hotel food safety and compliance monitoring suite. Features automated audit reports, role-based workflows, and automated summary generations via LLMs.",
    category: "Enterprise & AI",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Gemini AI", "Tailwind CSS", "Bootstrap"],
    highlights: ["Generative AI Summaries", "Dynamic Digital Audit Forms", "Granular Access Control"],
    challenges: "Building a highly customizable compliance form engine that allows inspectors to edit and construct dynamic fields without schema mutations.",
    architecture: "MongoDB schemaless storage for audit payloads, combined with a Node.js REST API feeding data to Google Gemini models for compliance reviews.",
    impact: "Digitized 100% of physical inspections, cutting report generation time from 3 hours to under 60 seconds with instant AI analysis.",
    liveUrl: "https://fresh-check-sigma.vercel.app",
    githubUrl: "https://github.com/AshiqueGhazali/FreshCheck",
    imageUrl: "/projects/freshcheck.png"
  },
  {
    id: "subhx-infotech",
    title: "Subhx Infotech Agency Site",
    role: "Lead Frontend Engineer",
    description: "Official web portal for Subhx Infotech. Completely redesigned the digital experience to present premium brand layouts, responsive micro-interactions, and fast load speeds.",
    category: "Design & Brand",
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript", "Vercel Analytics"],
    highlights: ["SaaS Aesthetic", "Smooth Framer Motion Transitions", "Lighthouse Score optimization"],
    challenges: "Optimizing asset sizes, images, and custom animations to guarantee 95+ performance marks across mobile and desktop tests.",
    architecture: "Next.js Static Site Generation (SSG) with optimized image loader configuration and deferred layout animation rendering.",
    impact: "Achieved a 98+ score on Lighthouse Performance and elevated digital customer inquiries by 50%.",
    liveUrl: "https://subhx.in/",
    imageUrl: "/projects/agency.png"
  },
  {
    id: "veew",
    title: "VEEW - Virtual Event Platform",
    role: "Full Stack Trainee Developer",
    description: "An immersive virtual event platform enabling live streaming, networking breakout rooms, and customizable user lobbies.",
    category: "Streaming & Media",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "WebRTC", "Tailwind CSS"],
    highlights: ["Interactive Breakout Rooms", "Low Latency Networking Chat", "Live Broadcast Integration"],
    challenges: "Maintaining state syncing in chat rooms under simulated high user traffic and managing concurrent media streams.",
    architecture: "MERN architecture with Socket.io cluster synchronization for real-time channels and group chatting.",
    impact: "Supported a load-tested concurrency of 500+ participants with low message propagation delay.",
    githubUrl: "https://github.com/AshiqueGhazali/Veew-frontend",
    imageUrl: "/projects/veew.png"
  },
  {
    id: "zephyr",
    title: "ZEPHYR - E-Commerce",
    role: "Full Stack Creator",
    description: "A comprehensive digital commerce storefront featuring sales dashboards, promo code engines, wallet features, and secure checkout systems.",
    category: "E-Commerce",
    techStack: ["Node.js", "Express.js", "MongoDB", "Razorpay API", "Tailwind CSS", "AWS EC2", "Nginx"],
    highlights: ["Razorpay Checkout", "Promotional Engine", "Nginx Reverse Proxy"],
    challenges: "Ensuring atomic database updates for wallet deductions and maintaining secure transactional states in the event of customer payment network losses.",
    architecture: "Express.js MVC engine utilizing MongoDB session transactions and direct Razorpay webhook signature parsing for payment verification.",
    impact: "Successfully integrated automated invoices, refund handlers, and analytics, with zero transaction discrepancies during testing.",
    githubUrl: "https://github.com/AshiqueGhazali/Zephyr-",
    imageUrl: "/projects/zephyr.png"
  }
];
