// Central content for the SoberDev studio site.
// Studio copy is preserved from the original site; the project catalogue
// merges the real shipped work (with live links + screenshots in /public/assets).

export const SITE = {
  name: "SoberDev",
  tagline: "Software development studio",
  location: "Delhi, India",
  email: "Contact@soberdev.in",
  phone: "+91 8595105597",
  phoneHref: "tel:+918595105597",
  maps: "https://maps.app.goo.gl/D67JebTSFPXe7iPN7",
  socials: [
    { label: "GitHub", href: "https://github.com/soberdev" },
    { label: "LinkedIn", href: "https://linkedin.com/in/soberdev" },
    { label: "Email", href: "mailto:Contact@soberdev.in" },
  ],
} as const;

export const NAV = [
  { label: "Work", id: "projects" },
  { label: "Studio", id: "about" },
  { label: "Services", id: "services" },
  { label: "FAQ", id: "faq" },
] as const;

export const HERO = {
  kicker: "Software development studio, Delhi",
  // headline rendered word-by-word for the kinetic reveal
  line1: ["We", "build"],
  line2: ["products", "that"],
  line3: ["actually", "ship."],
  sub: "A Development studio shipping fast landing pages, full-stack web apps, and AI tools, design to deployment.",
} as const;

export type Stat = { num: number; suffix?: string; glyph?: string; dec?: boolean; label: string };

export const STATS: Stat[] = [
  { num: 15, suffix: "+", label: "Projects shipped" },
  { num: 1.5, suffix: " yrs", dec: true, label: "Building together" },
  { num: 2, label: "Team members" },
  { num: 0, glyph: "∞", label: "Hackathons led" },
];

export const MARQUEE = [
  "Web Platforms", "Experience Design", "Cross-Platform Apps", "Deploy & DevOps",
  "JavaScript", "TypeScript", "Python", "React", "Next.js", "Node.js",
  "Express", "MongoDB", "MySQL", "Firebase", "Django", "Socket.io",
  "Tailwind", "Docker", "AWS", "GSAP",
];

export const STUDIO = {
  lead:
    "We are a development studio in Delhi building fast, reliable web products for startups and small businesses.",
  body:
    "You get a working product, not a design that never ships. We handle design, development, and deployment end to end, with direct communication and zero agency fluff.",
};

export const TEAM = [
  {
    name: "Sahil Bajaj",
    role: "Co-Founder, Software Developer",
    bio: "Full-stack developer focused on shipping clean, scalable products for founders and small teams.",
    href: "https://github.com/sahilbajaj2004",
    image: "/assets/founderSahilbajaj.png",
  },
  {
    name: "Adarsh Shrivastava",
    role: "Co-Founder, Engineer",
    bio: "Full-stack developer focused on shipping clean, scalable products for founders and small teams.",
    href: "https://github.com/AdarshKumarSr",
    image: "/assets/founderAdarshShri.jpg",
  },
  {
    name: "Deepak Rawat",
    role: "Marketing + Developer",
    bio: "Full-stack developer focused on shipping clean, scalable products for founders and small teams.",
    href: "https://github.com/dpkrwt21",
    image: "/assets/deepak.jpeg",
  },
  {
    name: "Comming Soon",
    role: "Comming Soon",
    bio: "Comming Soon",
    // href: "https://github.com/dpkrwt21",
    image: "/assets/placeholder.png",
  },
  

] as const;

export type Service = { no: string; title: string; description: string };

export const SERVICES: Service[] = [
  {
    no: "01",
    title: "Web Platforms",
    description:
      "High-performance digital products built with React, Next.js, and modern engineering.",
  },
  {
    no: "02",
    title: "Experience Design",
    description:
      "Distinctive UI and motion that prioritizes character and emotional connection.",
  },
  {
    no: "03",
    title: "Cross-Platform Apps",
    description:
      "React Native and responsive PWAs that run smoothly across iOS and Android.",
  },
  {
    no: "04",
    title: "Deploy & DevOps",
    description:
      "Vercel, Render, Railway, MongoDB Atlas, and CI/CD setup for reliable shipping.",
  },
];

export type Project = {
  index: string;
  title: string;
  kind: string;
  blurb: string;
  tags: string[];
  image: string;
  year: string;
  link: string;
  featured?: boolean;
};

const PORTFOLIO = "https://soberdev.in";

export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "RepoSignal",
    kind: "AI DevTool",
    blurb:
      "Paste a GitHub URL and decode a repo in one pass: architecture diagram, schema points, API flow, folder map, and a learning roadmap.",
    tags: ["Next.js", "AI", "DevTool"],
    image: "/assets/githubreverser.png",
    year: "2025",
    link: "https://bajajgithubreverse.vercel.app/",
    featured: true,
  },
  {
    index: "02",
    title: "CodeToResume",
    kind: "Product",
    blurb:
      "Your code writes your resume. Parses commits, stacks, and shipped work into an export-ready resume, from GitHub, GitLab, Bitbucket, or a .zip.",
    tags: ["Next.js", "Git", "Resume"],
    image: "/assets/codetoresume.png",
    year: "2025",
    link: "https://codetoresume.vercel.app/",
    featured: true,
  },
  {
    index: "03",
    title: "ResumeTailor",
    kind: "AI Product",
    blurb:
      "Paste a job description once and get an ATS-aligned resume, plus a LaTeX export and portfolio page, all from a single source of truth.",
    tags: ["Next.js", "AI", "ATS"],
    image: "/assets/resumetailor.png",
    year: "2025",
    link: "https://bajajresumetailor.vercel.app/",
    featured: true,
  },
  {
    index: "04",
    title: "TextToSQL",
    kind: "AI Product",
    blurb:
      "Ask your database in plain English. Schema-aware and read-only by design: every question becomes a validated SELECT, run in a sandbox.",
    tags: ["Python", "AI", "SQL"],
    image: "/assets/txttosql.png",
    year: "2025",
    link: "https://bajajtexttosql.vercel.app/",
    featured: true,
  },
  {
    index: "05",
    title: "AlgoAnalyzer",
    kind: "Full-stack",
    blurb:
      "A full-stack algorithm visualizer. Step through every operation while the exact line of code highlights in real time, in Java and C++.",
    tags: ["React", "Express", "Visualizer"],
    image: "/assets/algo.png",
    year: "2025",
    link: "https://algo-analyzer.vercel.app/",
    featured: true,
  },
  {
    index: "06",
    title: "Pi 3.14",
    kind: "Brand site",
    blurb:
      "Where developers orbit innovation. A community landing with a glowing cosmic hero, animated starfield, and event-led sections.",
    tags: ["React", "Motion", "Community"],
    image: "/assets/pi.png",
    year: "2025",
    link: "https://picommunity.vercel.app/",
    featured: true,
  },
  {
    index: "07",
    title: "Amrit Place",
    kind: "Front-end",
    blurb:
      "Flavors that stay. A warm, full-bleed site for an Indian restaurant with a cinematic hero, reservations, and a live Google-rating badge.",
    tags: ["React", "Tailwind", "Restaurant"],
    image: "/assets/amritplace.png",
    year: "2025",
    link: PORTFOLIO,
  },
  {
    index: "08",
    title: "Favicon.OS",
    kind: "Tool",
    blurb:
      "Pixel-perfect browser favicons. Drop a PNG, get eight sizes, client-side, no server, no signup. Brutalist mono UI.",
    tags: ["React", "Canvas", "Tool"],
    image: "/assets/facicon.png",
    year: "2025",
    link: "https://favicongenerator-neon.vercel.app/",
  },
  {
    index: "09",
    title: "Prerna Institution",
    kind: "Web app",
    blurb:
      "A polished site for a NEET / JEE / NDA coaching institute: calm editorial hero, course explorer, outcome stats, and trust badges.",
    tags: ["React", "Node.js", "Web app"],
    image: "/assets/Prerna.png",
    year: "2024",
    link: "https://prernainstitution.vercel.app/",
  },
  {
    index: "10",
    title: "DevCrafter",
    kind: "Brand site",
    blurb:
      "A studio landing experience with a constellation hero and scroll-choreographed sections. Built to feel crafted, not templated.",
    tags: ["React", "Canvas", "Animation"],
    image: "/assets/DevCrafter.png",
    year: "2025",
    link: PORTFOLIO,
  },
  {
    index: "11",
    title: "Burrow AI",
    kind: "E-commerce",
    blurb:
      "A healthcare-focused storefront with product discovery and detail pages. Designed for trust, clarity, and conversion.",
    tags: ["React", "Tailwind", "Commerce"],
    image: "/burrow.png",
    year: "2024",
    link: "https://burrow-3.onrender.com/",
  },
  {
    index: "12",
    title: "Dhruv Sharma",
    kind: "Portfolio",
    blurb:
      "A developer portfolio to showcase full-stack work, resume, and contact flow. Optimized for fast load and clear hiring visibility.",
    tags: ["React", "Tailwind", "Portfolio"],
    image: "/dhruv.png",
    year: "2024",
    link: "https://dhruvsharmadev.vercel.app/",
  },
];

export type Testimonial = { name: string; role: string; content: string; image: string };

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sahil Gupta",
    role: "Founder, Varchasv Institute",
    content:
      "SoberDev turned our vision into a stunning digital reality. The attention to detail and technical depth exceeded every expectation.",
    image: "/SahilGupta.jpg",
  },
  {
    name: "Bhumit Rajotiya",
    role: "Founder, StartupHub",
    content:
      "Working with SoberDev was a game-changer for our startup. They delivered a flawless MVP that helped us secure our seed funding.",
    image: "/BhumitRajotiya.jpg",
  },
  {
    name: "Anjali Verma",
    role: "Product Manager, CloudFlow",
    content:
      "The craftsmanship and care SoberDev brought to our project was phenomenal. They understood our requirements perfectly.",
    image: "/anjali.jpg",
  },
];

export const PRICING = [
  "Landing pages, from ₹12,000",
  "Portfolio / personal sites, from ₹8,000",
  "Full-stack web apps, from ₹35,000",
  "Custom scope? Let's talk.",
];

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "What services do you offer?",
    answer:
      "Full-stack website development, landing pages, MVPs, and cross-platform apps. We also handle deployment and CI/CD for smooth launches.",
  },
  {
    question: "Do you work with clients across India?",
    answer:
      "Yes. We are based in Delhi and work with startups and small businesses across India and internationally.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Landing pages start at ₹12,000, portfolios at ₹8,000, and full-stack web apps at ₹35,000. Final pricing depends on scope.",
  },
  {
    question: "Can you build Android apps?",
    answer:
      "We build cross-platform mobile apps using React Native and responsive PWAs, which run smoothly on Android and iOS.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Landing pages usually take 1 to 2 weeks, while full-stack apps typically take 4 to 8 weeks depending on complexity.",
  },
  {
    question: "What is your process?",
    answer:
      "Discovery, design direction, build, and deployment. You work directly with the founders and get weekly updates.",
  },
];
