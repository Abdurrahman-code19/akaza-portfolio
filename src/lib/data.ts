export const profile = {
  name: "Abdurrahman Oriolowo",
  brand: "AKAZA",
  role: "Frontend Developer & Product Builder",
  secondary: "Frontend Development Tutor · Computer Science Undergraduate",
  tagline: "Code with purpose. Build with impact.",
  location: "Lagos, Nigeria",
  email: "abefeori@gmail.com",
  github: "https://github.com/Abdurrahman-code19",
  linkedin: "https://www.linkedin.com/in/abdurrahman-oriolowo-aba188352",
  whatsapp: "https://wa.me/2348120211441",
  site: "https://akaza-portfolio-self.vercel.app/",
};

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#identity", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#capabilities", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const capabilities = [
  {
    index: "01",
    title: "Interfaces",
    summary: "Responsive, accessible interfaces built from the component up.",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "Responsive UI"],
  },
  {
    index: "02",
    title: "Applications",
    summary: "Bringing structure to data, state and the systems behind the screen.",
    items: ["Node.js", "Express", "REST APIs", "Supabase"],
  },
  {
    index: "03",
    title: "Workflow",
    summary: "A deliberate process for shipping and maintaining real work.",
    items: ["Git", "GitHub", "VS Code", "npm", "Browser DevTools"],
  },
  {
    index: "04",
    title: "People",
    summary: "Teaching, mentoring and communicating ideas clearly.",
    items: ["Teaching", "Mentoring", "Communication", "Problem Solving", "Collaboration"],
  },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  year: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  layout: "right" | "left" | "wide" | "split";
  variant: "ajo" | "agritech" | "zerolimit" | "portfolio";
  caseStudy: {
    overview: string;
    problem: string;
    approach: string;
    solution: string;
    role: string;
  };
};

export const projects: Project[] = [
  {
    id: "ajo",
    index: "01",
    title: "AJO.NG",
    subtitle: "Digital Contribution Savings",
    category: "Fintech",
    status: "Concept / Planned",
    year: "Concept",
    description:
      "A digital savings-group concept designed to coordinate private contribution groups, payment schedules, reminders and rotating payouts.",
    tech: ["React", "TypeScript", "Node.js"],
    layout: "right",
    variant: "ajo",
    caseStudy: {
      overview:
        "AJO.ng explores how traditional contribution groups — where members pool money and take turns receiving the total — could be supported by a clear, modern digital product.",
      problem:
        "Informal savings groups often rely on memory, chat threads and manual records. Members can lose track of schedules, contributions and whose turn it is to receive a payout.",
      approach:
        "I mapped the core group rituals first: joining a group, contributing on schedule, tracking the pool and receiving a rotating payout. That flow became the backbone of the interface concept.",
      solution:
        "A concept product where groups, contribution schedules, reminders and payout slots live in one calm dashboard, with a mobile-first view for members checking in on the move.",
      role: "Product concept, interface design and frontend planning.",
    },
  },
  {
    id: "agritech",
    index: "02",
    title: "Agritech",
    subtitle: "Smart Farming Dashboard",
    category: "Agritech",
    status: "Completed",
    year: "Build",
    description:
      "An agricultural technology application exploring responsive digital tools for farmers and agricultural businesses.",
    tech: ["React", "Supabase", "Tailwind CSS", "REST API"],
    github: "https://github.com/Abdurrahman-code19/Agritech-app-",
    layout: "left",
    variant: "agritech",
    caseStudy: {
      overview:
        "A dashboard concept that presents farming and field data through a clear, responsive interface built for people who need answers quickly rather than dense tables.",
      problem:
        "Agricultural data is often scattered or presented in forms that are hard to scan. A useful dashboard has to surface the few numbers that matter and keep the rest one step away.",
      approach:
        "I built the interface around a small set of status cards, a visual trend area and a field overview, then wired the data layer with Supabase and a REST API.",
      solution:
        "A responsive dashboard where soil, temperature and humidity signals, a visual trend chart and field status can be read at a glance on desktop or mobile.",
      role: "Frontend development, responsive layout and data integration.",
    },
  },
  {
    id: "zero-limit",
    index: "03",
    title: "Zero Limit",
    subtitle: "E-commerce Store",
    category: "E-commerce",
    status: "In Progress",
    year: "Build",
    description:
      "A premium clothing and accessories brand with a minimal dark identity, considered product presentation and responsive storefront.",
    tech: ["HTML", "CSS", "JavaScript"],
    layout: "wide",
    variant: "zerolimit",
    caseStudy: {
      overview:
        "Zero Limit is a storefront concept for a premium clothing and accessories brand, built around restraint: dark surfaces, generous space and product imagery doing the talking.",
      problem:
        "Premium fashion needs a storefront that feels as considered as the product. Busy templates and loud layouts undercut the brand rather than support it.",
      approach:
        "I started from a minimal dark identity and built the layout around product presentation — large imagery, quiet navigation and a clear path from collection to product.",
      solution:
        "A responsive storefront concept with a minimal identity, product-forward sections and subtle luxury detailing. It remains a work in progress.",
      role: "Frontend development and visual direction.",
    },
  },
  {
    id: "portfolio",
    index: "04",
    title: "AKAZA",
    subtitle: "Digital Experience",
    category: "Portfolio",
    status: "Live",
    year: "Now",
    description:
      "An evolving personal digital experience designed around development, product thinking and continuous learning.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "/",
    layout: "split",
    variant: "portfolio",
    caseStudy: {
      overview:
        "This site is itself a project: a personal digital experience that presents my work, process and growth without overstating them.",
      problem:
        "Most developer portfolios collapse into a template — a grid of cards and a list of badges. The work deserves a clearer story and a more deliberate experience.",
      approach:
        "I designed a dark, editorial system built from reusable tokens and components, then layered motion and interaction only where they help understanding.",
      solution:
        "A continuously evolving site with an editorial identity, project case studies, an accessible motion system and a focus on performance.",
      role: "Design, frontend development and ongoing iteration.",
    },
  },
];

export const experience = [
  {
    role: "Frontend Development Tutor",
    company: "RIIT GLOBAL TECH",
    period: "2026 — Present",
    current: true,
    summary:
      "Teaching frontend development fundamentals and guiding learners from first principles to working interfaces.",
    points: [
      "Teaching HTML, CSS, JavaScript, Bootstrap, Tailwind CSS and React.",
      "Guiding learners through Git, GitHub and collaborative workflows.",
      "Supporting assignments, debugging sessions and project work.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Independent Projects",
    period: "Ongoing",
    current: true,
    summary:
      "Designing and building responsive interfaces and product concepts, from layout systems to interactive components.",
    points: [
      "Building responsive interfaces with React, Next.js and Tailwind CSS.",
      "Exploring product ideas across fintech, agritech and e-commerce.",
      "Turning designs into accessible, component-driven frontends.",
    ],
  },
];

export const education = [
  {
    institution: "Miva Open University",
    qualification: "B.Sc. Computer Science",
    meta: "Undergraduate · 100 Level · 2026 — Present",
  },
  {
    institution: "Muslim Kids and Teens College",
    qualification: "Secondary Education",
    meta: "Graduated 2024",
  },
];

export const certificates = [
  {
    name: "Software Development Certificate",
    issuer: "PLP Academy",
    image: "/assets/certs/plp cert.png",
    alt: "PLP Academy Software Development Certificate",
  },
  {
    name: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    image: "/assets/certs/freeCodeCamp Responsive Web Design Certificate.png",
    alt: "freeCodeCamp Responsive Web Design Certificate",
  },
];

export const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "WhatsApp", href: profile.whatsapp },
];

export const coreStack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "Supabase",
  "Git",
  "GitHub",
];
