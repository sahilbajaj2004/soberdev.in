// Central content for the SoberDev studio site.
// Studio copy is preserved from the original site; the project catalogue
// merges the real shipped work (with live links + screenshots in /public/assets).

export const SITE = {
  name: "SoberDev",
  tagline: "Software development studio",
  location: "Delhi, India",
  // Canonical contact address. Kept lowercase and identical to the value in
  // src/lib/site.ts (NAP) and the legal pages. Mismatched contact details across
  // a site weaken local ranking and confuse answer engines.
  email: "contact@soberdev.in",
  phone: "+91 8595105597",
  phoneHref: "tel:+918595105597",
  maps: "https://maps.app.goo.gl/D67JebTSFPXe7iPN7",
  socials: [
    { label: "GitHub", href: "https://github.com/soberdev" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/soberdev" },
    { label: "Email", href: "mailto:contact@soberdev.in" },
  ],
} as const;

export const NAV = [
  { label: "Work", id: "projects" },
  { label: "Studio", id: "about" },
  { label: "Services", id: "services" },
  { label: "FAQ", id: "faq" },
] as const;

export const HERO = {
  // Rendered inside the <h1> so the heading carries the search-intent phrase as
  // well as the brand line. Previously this sat in a sibling <span>, leaving the
  // h1 as "We build products that actually ship.", carrying zero keywords.
  kicker: "Software development studio in Delhi, India",
  // headline rendered word-by-word for the kinetic reveal
  line1: ["We", "build"],
  line2: ["products", "that"],
  line3: ["actually", "ship."],
  // Opening body sentence, written as a definition: subject, category, location,
  // then offering. This is the sentence an LLM lifts when asked "what is
  // SoberDev", so it names the entity explicitly instead of saying "we".
  sub: "SoberDev is a software development studio in Delhi, India, shipping fast landing pages, full-stack web apps, and AI tools, from design through deployment.",
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
    bio: "Full-stack developer working across React, Next.js and Node. Leads architecture and takes products from first commit to production.",
    href: "https://github.com/sahilbajaj2004",
    image: "/assets/founderSahilbajaj.webp",
  },
  {
    name: "Adarsh Shrivastava",
    role: "Co-Founder, Engineer",
    bio: "Engineer focused on backend systems, APIs and databases. Builds the parts that have to stay reliable once real users arrive.",
    href: "https://github.com/AdarshKumarSr",
    image: "/assets/founderAdarshShri.jpg",
  },
  {
    name: "Deepak Rawat",
    role: "Marketing + Developer",
    bio: "Developer who also runs growth. Handles SEO, analytics and the launch side of every project we ship.",
    href: "https://github.com/dpkrwt21",
    image: "/assets/deepak.jpeg",
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
    title: "Lets Meet",
    kind: "Video Conferencing",
    blurb:
      "User-friendly video conferencing platform with real-time chat, screen sharing, and meeting scheduling.",
    tags: ["Next.js", "AI", "DevTool"],
    image: "/assets/letsmeet.webp",
    year: "2025",
    link: "https://bajajletsmeet.vercel.app/",
    featured: true,
  },
  {
    index: "02",
    title: "RepoSignal",
    kind: "AI DevTool",
    blurb:
      "Paste a GitHub URL and decode a repo in one pass: architecture diagram, schema points, API flow, folder map, and a learning roadmap.",
    tags: ["Next.js", "AI", "DevTool"],
    image: "/assets/githubreverser.webp",
    year: "2025",
    link: "https://bajajgithubreverse.vercel.app/",
    featured: true,
  },
  {
    index: "03",
    title: "CodeToResume",
    kind: "Product",
    blurb:
      "Your code writes your resume. Parses commits, stacks, and shipped work into an export-ready resume, from GitHub, GitLab, Bitbucket, or a .zip.",
    tags: ["Next.js", "Git", "Resume"],
    image: "/assets/codetoresume.webp",
    year: "2025",
    link: "https://codetoresume.vercel.app/",
    featured: true,
  },
  {
    index: "04",
    title: "ResumeTailor",
    kind: "AI Product",
    blurb:
      "Paste a job description once and get an ATS-aligned resume, plus a LaTeX export and portfolio page, all from a single source of truth.",
    tags: ["Next.js", "AI", "ATS"],
    image: "/assets/resumetailor.webp",
    year: "2025",
    link: "https://bajajresumetailor.vercel.app/",
    featured: true,
  },
  {
    index: "05",
    title: "TextToSQL",
    kind: "AI Product",
    blurb:
      "Ask your database in plain English. Schema-aware and read-only by design: every question becomes a validated SELECT, run in a sandbox.",
    tags: ["Python", "AI", "SQL"],
    image: "/assets/txttosql.webp",
    year: "2025",
    link: "https://bajajtexttosql.vercel.app/",
    featured: true,
  },
  {
    index: "06",
    title: "AlgoAnalyzer",
    kind: "Full-stack",
    blurb:
      "A full-stack algorithm visualizer. Step through every operation while the exact line of code highlights in real time, in Java and C++.",
    tags: ["React", "Express", "Visualizer"],
    image: "/assets/algo.webp",
    year: "2025",
    link: "https://algo-analyzer.vercel.app/",
    featured: true,
  },
  {
    index: "07",
    title: "Dhruv Sharma",
    kind: "Portfolio",
    blurb:
      "A developer portfolio to showcase full-stack work, resume, and contact flow. Optimized for fast load and clear hiring visibility.",
    tags: ["React", "Tailwind", "Portfolio"],
    image: "/dhruv.webp",
    year: "2024",
    link: "https://dhruvsharmadev.vercel.app/",
  },
  {
    index: "08",
    title: "Pi 3.14",
    kind: "Brand site",
    blurb:
      "Where developers orbit innovation. A community landing with a glowing cosmic hero, animated starfield, and event-led sections.",
    tags: ["React", "Motion", "Community"],
    image: "/assets/pi.webp",
    year: "2025",
    link: "https://picommunity.vercel.app/",
    featured: true,
  },
  {
    index: "09",
    title: "Amrit Place",
    kind: "Front-end",
    blurb:
      "Flavors that stay. A warm, full-bleed site for an Indian restaurant with a cinematic hero, reservations, and a live Google-rating badge.",
    tags: ["React", "Tailwind", "Restaurant"],
    image: "/assets/amritplace.webp",
    year: "2025",
    link: PORTFOLIO,
  },
  {
    index: "10",
    title: "Favicon.OS",
    kind: "Tool",
    blurb:
      "Pixel-perfect browser favicons. Drop a PNG, get eight sizes, client-side, no server, no signup. Brutalist mono UI.",
    tags: ["React", "Canvas", "Tool"],
    image: "/assets/facicon.webp",
    year: "2025",
    link: "https://favicongenerator-neon.vercel.app/",
  },
  {
    index: "11",
    title: "Prerna Institution",
    kind: "Web app",
    blurb:
      "A polished site for a NEET / JEE / NDA coaching institute: calm editorial hero, course explorer, outcome stats, and trust badges.",
    tags: ["React", "Node.js", "Web app"],
    image: "/assets/Prerna.webp",
    year: "2024",
    link: "https://prernainstitution.vercel.app/",
  },
  {
    index: "12",
    title: "DevCrafter",
    kind: "Brand site",
    blurb:
      "A studio landing experience with a constellation hero and scroll-choreographed sections. Built to feel crafted, not templated.",
    tags: ["React", "Canvas", "Animation"],
    image: "/assets/DevCrafter.webp",
    year: "2025",
    link: PORTFOLIO,
  },
  {
    index: "13",
    title: "Burrow AI",
    kind: "E-commerce",
    blurb:
      "A healthcare-focused storefront with product discovery and detail pages. Designed for trust, clarity, and conversion.",
    tags: ["React", "Tailwind", "Commerce"],
    image: "/burrow.webp",
    year: "2024",
    link: "https://burrow-3.onrender.com/",
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

export type PriceTier = { label: string; from: number };

/**
 * Structured price tiers. Concrete figures are what both featured snippets and
 * AI answers quote back when someone asks "how much does a landing page cost in
 * Delhi", so they are modelled as data and marked up as schema.org Offers rather
 * than living only as display strings.
 */
export const PRICING_TIERS: PriceTier[] = [
  { label: "Landing pages", from: 12000 },
  { label: "Portfolio / personal sites", from: 8000 },
  { label: "Full-stack web apps", from: 35000 },
];

export const PRICING = [
  ...PRICING_TIERS.map(
    (tier) => `${tier.label}, from ₹${tier.from.toLocaleString("en-IN")}`,
  ),
  "Custom scope? Let's talk.",
];

export type Faq = { question: string; answer: string };

/**
 * FAQs are written answer-first: the first sentence is a complete, standalone
 * answer that makes sense with zero surrounding context, followed by detail.
 * That shape is what featured snippets and AI answer engines extract: a reply
 * that opens with preamble ("Great question! At SoberDev we...") gets skipped.
 * Concrete nouns, prices and timeframes are kept in the text, not implied.
 */
export const FAQS: Faq[] = [
  {
    question: "What services does SoberDev offer?",
    answer:
      "SoberDev builds full-stack websites, landing pages, MVPs, and cross-platform mobile apps. We cover design, development, and deployment end to end, including CI/CD setup so releases are repeatable after launch.",
  },
  {
    question: "Where is SoberDev based?",
    answer:
      "SoberDev is a software development studio based in Delhi, India. We work remotely with startups and small businesses across India and internationally, and you can reach us at contact@soberdev.in or +91 8595105597.",
  },
  {
    question: "How much does a website cost in India?",
    answer:
      "At SoberDev, landing pages start at ₹12,000, portfolio sites at ₹8,000, and full-stack web apps at ₹35,000. Final pricing depends on scope, number of screens, and whether the build needs custom backend work or third-party integrations.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Landing pages take 1 to 2 weeks and full-stack web apps take 4 to 8 weeks. Timelines depend on complexity and how quickly feedback comes back, and we confirm a schedule in writing before the build starts.",
  },
  {
    question: "Do you work with clients across India?",
    answer:
      "Yes. SoberDev is based in Delhi and works with startups and small businesses throughout India, including Mumbai, Bangalore, Pune, and Hyderabad, as well as international clients. Every engagement runs remotely with direct access to the founders.",
  },
  {
    question: "Can you build Android and iOS apps?",
    answer:
      "Yes. We build cross-platform mobile apps with React Native and responsive progressive web apps, so a single codebase runs on both Android and iOS. This keeps build cost and ongoing maintenance lower than two separate native apps.",
  },
  {
    question: "What technologies does SoberDev use?",
    answer:
      "Our core stack is React, Next.js, and TypeScript on the front end, with Node.js and Express APIs backed by MongoDB or MySQL. We also work with Python, Django, React Native, Tailwind CSS, Docker, and AWS, and deploy to Vercel, Render, or Railway.",
  },
  {
    question: "What is your development process?",
    answer:
      "Four stages: discovery, design direction, build, and deployment. You work directly with the founders rather than an account manager, receive weekly progress updates, and review working software instead of static mockups.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Every project includes a post-launch window for fixes, plus handover documentation and deployment access so you own the product outright. Ongoing maintenance and feature work can be arranged as a monthly retainer.",
  },
  {
    question: "How do I start a project with SoberDev?",
    answer:
      "Email contact@soberdev.in or use the contact form with a short description of what you want built, your rough budget, and your target launch date. We reply to every genuine enquiry, usually within one working day, with next steps and an estimate.",
  },
];
