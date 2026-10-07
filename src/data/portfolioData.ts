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
  oneLiner: "Informatics student and Google Student Ambassador bridging deep learning research with production Linux, Android, and web systems.",
  status: "Open to AI & Software Engineering Internships",
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
  summary: "Selected into the Google Student Ambassador program in Indonesia. Advocating developer technologies, Google Cloud, AI innovations (Gemini ecosystem), and digital literacy across campus communities.",
  postUrl: "https://www.instagram.com/p/DeBLYa0k8Z6/",
};

export const RESEARCH_EXPERIENCE: ResearchItem[] = [
  {
    title: "Multimodal Pain Recognition on Low-Resource Edge Hardware",
    role: "Undergraduate Research Assistant",
    institution: "Universitas Kristen Krida Waskita (UKRIDA)",
    period: "2024 — Present",
    summary: "Conducting clinical multimodal deep learning research fusing facial expression cues with acoustic vocal distress signals for automated triage in rural healthcare environments.",
    highlights: [
      "Cross-modal attention fusion integrating PyTorch visual feature extractors and TorchAudio distress encoders.",
      "Developing post-training INT8, ONNX Runtime, and TensorRT quantization pipelines targeting resource-constrained edge hardware.",
      "Executing rigorous PRISMA Systematic Literature Review methodology across 2,400+ indexed clinical and algorithmic studies.",
      "Enforcing strict clinical data privacy guardrails with synthetic tensor prototyping."
    ],
    tags: ["PyTorch", "TorchAudio", "Edge AI", "ONNX Quantization", "Computer Vision", "PRISMA"]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Momo Developer Workstation",
    tagline: "Autonomous Multi-Surface Systems Orchestrator & Coding Studio",
    description: "An autonomous developer workspace and system orchestrator. Features direct Linux kernel /dev/uinput Wayland virtual input drivers, multi-tier fallback LLM gateway routing, ReAct agent loops with self-healing compiler verification, and cognitive SQLite FTS5 BM25 memory distillation.",
    category: "Systems & AI",
    tags: ["Python", "FastAPI", "React 19", "Wayland /dev/uinput", "SQLite FTS5", "Android Material 3"],
    metrics: [
      "Zero-sudo Wayland kernel automation via Python evdev",
      "Multi-tier LLM gateway with automated failover",
      "Asynchronous SQLite FTS5 cognitive memory distillation",
      "Full companion parity across Linux, Android, and Web"
    ],
    githubUrl: "https://github.com/AquaGecko-M/assistant",
    featured: true,
  },
  {
    title: "AWS Sokrates Agentic AI",
    tagline: "Industrial Manufacturing Anomaly Resolution Workflow",
    description: "An agentic AI pipeline engineered for the AWS Sokrates Hackathon 2026 (Binus). Designed to autonomously ingest telemetry, isolate industrial anomalies, and coordinate automated root-cause resolutions across manufacturing plants in Indonesia.",
    category: "Systems & AI",
    tags: ["Python", "AWS Cloud", "Multi-Agent Systems", "Industrial AI", "FastAPI"],
    metrics: [
      "Autonomous triage and multi-step root-cause analysis",
      "Cloud-native architecture designed for manufacturing scale",
      "Telemetry anomaly classification"
    ],
    githubUrl: "https://github.com/AquaGecko-M/Hackhathon-2026-Aws-Sokrates-Binus",
    featured: true,
  },
  {
    title: "Winson Galon Distribution",
    tagline: "Water Depot Distribution Web Platform & Admin CMS",
    description: "A production full-stack web application and content management system built for Winson Galon, an operational water depot distribution enterprise. Built with real-time debounced AJAX search, secure session-based authentication, administrative inventory control, and RESTful endpoints.",
    category: "Full-Stack",
    tags: ["PHP (PDO)", "MySQL", "JavaScript / AJAX", "Bootstrap 5", "REST API", "Apache"],
    metrics: [
      "Real-time debounced AJAX catalog search without reload",
      "Session-authenticated administrative CRUD dashboard",
      "Dynamic RESTful JSON endpoints for client consumption"
    ],
    githubUrl: "https://github.com/AquaGecko-M/winson-galon",
    featured: true,
  },
  {
    title: "SnapBudget",
    tagline: "Mobile Cashflow & Expense Management",
    description: "A native Android mobile application built in Kotlin focused on transparent cashflow tracking, budgeting categorization, and family expense reporting.",
    category: "Mobile",
    tags: ["Kotlin", "Android SDK", "Jetpack Compose", "Material 3", "SQLite"],
    metrics: [
      "100% Native Kotlin architecture",
      "Offline-first local persistence",
      "Intuitive Material 3 user experience"
    ],
    githubUrl: "https://github.com/AquaGecko-M/SnapBudget",
    featured: false,
  }
];

export const GAME_PROJECTS: Project[] = [
  {
    title: "DeNeLauSe",
    tagline: "Arcade Survival & Mechanics Laboratory",
    description: "An interactive arcade survival game built in Java Greenfoot exploring core Object-Oriented Design patterns, collision physics loops, state logic, and customized keyboard/mouse input controllers.",
    category: "Game Dev",
    tags: ["Java", "Greenfoot Engine", "OOP Patterns", "Game Physics", "Arcade"],
    githubUrl: "https://github.com/AquaGecko-M/TESTOOP_1",
    liveUrl: "https://www.greenfoot.org/scenarios/35760",
    metrics: [
      "Published live scenario on Greenfoot gallery",
      "Full Java OOP architecture with custom collision logic",
      "Real-time keyboard and mouse event dispatching"
    ],
    featured: true,
  },
  {
    title: "What Was Forgotten",
    tagline: "Atmospheric 2D Narrative Adventure",
    description: "An indie passion game project built with GameMaker Studio, exploring custom finite state machines, particle systems, environmental storytelling, and dynamic platformer physics.",
    category: "Game Dev",
    tags: ["GameMaker", "GML", "State Machines", "Level Design", "Indie Dev"],
    githubUrl: "https://github.com/AquaGecko-M/GameProject_WWF",
    metrics: [
      "Custom character state machine architecture",
      "Handcrafted atmospheric level design",
      "Optimized 2D sprite rendering loop"
    ],
    featured: false,
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    description: "Deep learning model training, edge quantization, and multimodal inference.",
    skills: [
      { name: "PyTorch", highlight: true },
      { name: "TorchAudio", highlight: true },
      { name: "OpenCV / Computer Vision", highlight: true },
      { name: "ONNX Runtime & INT8 Quantization", highlight: true },
      { name: "ReAct Agent Frameworks" },
      { name: "SQLite FTS5 / Vector Search" },
      { name: "PRISMA Methodology" },
    ]
  },
  {
    name: "Systems & Backend",
    description: "Concurreny, OS kernel automation, and production APIs.",
    skills: [
      { name: "Python (FastAPI, Asyncio)", highlight: true },
      { name: "Linux Kernel (/dev/uinput, evdev)", highlight: true },
      { name: "Wayland / KDE Plasma Architecture" },
      { name: "PHP & MySQL (PDO)", highlight: true },
      { name: "Debian Linux Administration" },
      { name: "WebSockets & REST APIs" },
      { name: "Cloudflare WAN Tunnels" },
      { name: "Git & Version Control" },
    ]
  },
  {
    name: "Mobile & Frontend",
    description: "Native mobile clients and high-performance web interfaces.",
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
    description: "Primary programming languages and developer toolchains.",
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
  institution: "Universitas Kristen Krida Waskita (UKRIDA)",
  degree: "Bachelor of Computer Science / Informatics (S.Kom candidate)",
  location: "Jakarta, Indonesia",
  period: "2023 — Present (Semester 5)",
  coursework: [
    "Computer Vision & Digital Image Processing",
    "Expert Systems & Decision Support Systems (DSS)",
    "Bioinformatics",
    "Data Mining & Machine Learning",
    "Mobile Device Programming (Android)",
    "Research Methodology",
    "Object-Oriented Programming (Java)"
  ]
};
