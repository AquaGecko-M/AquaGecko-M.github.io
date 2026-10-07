export interface Project {
  title: string;
  tagline: string;
  description: string;
  category: 'Systems & AI' | 'Full-Stack' | 'Mobile' | 'Game Dev';
  tags: string[];
  metrics?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ResearchItem {
  title: string;
  role: string;
  institution: string;
  period: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export const PERSONAL_INFO = {
  name: "Michael Tandeas",
  preferredName: "Michael",
  handle: "AquaGecko",
  title: "AI Systems • Edge ML Research • Software Engineering",
  oneLiner: "Informatics @ UKRIDA • Google Student Ambassador '26. Building edge AI models, Linux kernel automation, and interactive systems.",
  status: "Open to AI & SWE Internships",
  location: "Jakarta, Indonesia",
  email: "tandeasmichael@gmail.com",
  github: "https://github.com/AquaGecko-M",
  linkedin: "https://www.linkedin.com/in/michael-tandeas-1a4198326/",
  instagramPost: "https://www.instagram.com/p/DeBLYa0k8Z6/",
  greenfootProfile: "https://www.greenfoot.org/scenarios/35760",
  customDomain: "https://michaeltandeas.me",
};

export const GSA_DATA = {
  title: "Google Student Ambassador",
  cohort: "Indonesia — Batch 2 (2026)",
  summary: "Selected as Google Student Ambassador in Indonesia. Driving developer initiatives around Google Cloud, Gemini AI, and campus tech impact.",
  postUrl: "https://www.instagram.com/p/DeBLYa0k8Z6/",
};

export const RESEARCH_EXPERIENCE: ResearchItem[] = [
  {
    title: "Multimodal Pain Recognition on Low-Resource Edge Hardware",
    role: "Undergraduate Research Assistant",
    institution: "Universitas Kristen Krida Wacana (UKRIDA)",
    period: "2024 — Present",
    summary: "Clinical deep learning fusing facial expressions and acoustic vocal distress for automated triage on low-power edge devices.",
    highlights: [
      "Cross-modal attention fusion integrating PyTorch vision cues with TorchAudio distress signals.",
      "Post-training INT8, ONNX Runtime, and TensorRT quantization for rural clinic deployment.",
      "PRISMA Systematic Review screening over 2,400+ clinical and algorithmic studies."
    ],
    tags: ["PyTorch", "TorchAudio", "Edge AI", "ONNX Quantization", "Computer Vision", "PRISMA"]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Momo Developer Workstation",
    tagline: "Autonomous Systems Orchestrator & ReAct Studio",
    description: "Multi-surface autonomous coding workstation with direct Linux /dev/uinput Wayland kernel drivers, multi-tier fallback LLM routing, and native Android companion.",
    category: "Systems & AI",
    tags: ["Python", "FastAPI", "React 19", "Wayland /dev/uinput", "SQLite FTS5", "Android Material 3"],
    metrics: [
      "Zero-sudo Wayland input automation via Python evdev",
      "Multi-tier LLM gateway with automated failover",
      "Asynchronous SQLite FTS5 BM25 memory distillation"
    ],
    githubUrl: "https://github.com/AquaGecko-M/assistant",
    featured: true,
  },
  {
    title: "AWS Sokrates Agentic AI",
    tagline: "Industrial Anomaly Resolution Workflow",
    description: "Autonomous multi-agent pipeline for AWS Sokrates Hackathon '26 (Binus), detecting and remediating manufacturing telemetry anomalies in Indonesia.",
    category: "Systems & AI",
    tags: ["Python", "AWS Cloud", "Multi-Agent Systems", "Industrial AI", "FastAPI"],
    metrics: [
      "Autonomous incident triage and multi-step root-cause analysis",
      "Cloud-native architecture designed for manufacturing scale"
    ],
    githubUrl: "https://github.com/AquaGecko-M/Hackhathon-2026-Aws-Sokrates-Binus",
    featured: true,
  },
  {
    title: "Winson Galon Distribution",
    tagline: "Water Depot Web Platform & Admin CMS",
    description: "Production full-stack web platform with real-time debounced AJAX search, session-authenticated admin dashboard, and RESTful inventory endpoints.",
    category: "Full-Stack",
    tags: ["PHP (PDO)", "MySQL", "JavaScript / AJAX", "Bootstrap 5", "REST API", "Apache"],
    metrics: [
      "Real-time debounced AJAX search without page reloads",
      "Session-authenticated administrative CRUD dashboard"
    ],
    githubUrl: "https://github.com/AquaGecko-M/winson-galon",
    featured: true,
  },
  {
    title: "SnapBudget",
    tagline: "Family Cashflow & Expense Sync Platform",
    description: "Native Android application built in Kotlin with Jetpack Compose connecting to a REST backend for real-time family expense reporting and allowance approvals.",
    category: "Mobile",
    tags: ["Kotlin", "Android SDK", "Jetpack Compose", "Retrofit", "REST API", "Material 3"],
    metrics: [
      "Real-time parent-child transaction sync & allowance flow",
      "Retrofit & OkHttp client with session authentication"
    ],
    githubUrl: "https://github.com/AquaGecko-M/SnapBudget",
    featured: false,
  }
];

export const GAME_PROJECTS: Project[] = [
  {
    title: "DeNeLauSe",
    tagline: "Arcade Survival & Mechanics Lab",
    description: "Interactive arcade survival game exploring Java OOP design patterns, collision physics loops, and real-time input handlers.",
    category: "Game Dev",
    tags: ["Java", "Greenfoot", "OOP Patterns", "Game Physics", "Arcade"],
    githubUrl: "https://github.com/AquaGecko-M/TESTOOP_1",
    liveUrl: "https://www.greenfoot.org/scenarios/35760",
    metrics: [
      "Published live scenario on Greenfoot gallery",
      "Object-oriented architecture with collision math"
    ],
    featured: true,
  },
  {
    title: "What Was Forgotten",
    tagline: "Atmospheric 2D Narrative Adventure",
    description: "Indie passion game project built in GameMaker Studio featuring custom finite state machines, particle systems, and platformer physics.",
    category: "Game Dev",
    tags: ["GameMaker", "GML", "State Machines", "Level Design", "Indie Dev"],
    githubUrl: "https://github.com/AquaGecko-M/GameProject_WWF",
    metrics: [
      "Character state machine architecture & 2D physics",
      "Handcrafted atmospheric visual design"
    ],
    featured: false,
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    description: "Deep learning training, edge quantization, and multimodal models.",
    skills: [
      { name: "PyTorch", highlight: true },
      { name: "TorchAudio", highlight: true },
      { name: "OpenCV / Vision", highlight: true },
      { name: "ONNX / INT8 Quantization", highlight: true },
      { name: "ReAct Agents" },
      { name: "SQLite FTS5" },
      { name: "PRISMA" },
    ]
  },
  {
    name: "Systems & Backend",
    description: "Concurrency, OS kernel automation, and production APIs.",
    skills: [
      { name: "Python (FastAPI, Asyncio)", highlight: true },
      { name: "Linux /dev/uinput (evdev)", highlight: true },
      { name: "Wayland / KDE Plasma" },
      { name: "PHP & MySQL (PDO)", highlight: true },
      { name: "Debian Linux Administration" },
      { name: "WebSockets & REST APIs" },
      { name: "Cloudflare WAN Tunnels" },
      { name: "Git & Version Control" },
    ]
  },
  {
    name: "Mobile & Frontend",
    description: "Native mobile clients and responsive web interfaces.",
    skills: [
      { name: "Kotlin (Android SDK)", highlight: true },
      { name: "Jetpack Compose & Material 3", highlight: true },
      { name: "React 19 & TypeScript", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Vite & Electron" },
      { name: "HTML5 / CSS3 / JavaScript" },
      { name: "Bootstrap 5 & jQuery" },
    ]
  },
  {
    name: "Languages & Tools",
    description: "Core programming languages and developer toolchains.",
    skills: [
      { name: "Python", highlight: true },
      { name: "Kotlin", highlight: true },
      { name: "Java", highlight: true },
      { name: "TypeScript / JavaScript", highlight: true },
      { name: "PHP", highlight: true },
      { name: "C / C++" },
      { name: "SQL" },
      { name: "Bash / Shell" },
    ]
  }
];

export const EDUCATION_DATA = {
  institution: "Universitas Kristen Krida Wacana (UKRIDA)",
  degree: "Bachelor of Computer Science / Informatics (S.Kom candidate)",
  location: "Jakarta, Indonesia",
  period: "2024 — Present",
  coursework: [
    "Computer Vision & Digital Image Processing",
    "Expert Systems & Decision Support Systems",
    "Bioinformatics",
    "Data Mining & Machine Learning",
    "Mobile Device Programming (Android)",
    "Object-Oriented Programming (Java)"
  ]
};
