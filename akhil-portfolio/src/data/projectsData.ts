export type ProjectStatus = 'Completed' | 'In Progress';

export type ProjectDemoLink = {
  label: string;
  url: string;
};

export type ProjectData = {
  id: string;
  title: string;
  status: ProjectStatus;
  shortDesc: string;
  longDesc: string;
  tech: string[];
  sourceCode: string;
  demo: string;
  demoLabel?: string;
  demo2?: string;
  demo2Label?: string;
  demo3?: string;
  demo3Label?: string;
  demos?: ProjectDemoLink[];
};

export function getProjectDemoLinks(project: ProjectData): ProjectDemoLink[] {
  if (project.demos && project.demos.length > 0) {
    return project.demos;
  }
  const links: ProjectDemoLink[] = [];
  if (project.demo) {
    links.push({ label: project.demoLabel ?? 'Live Demo', url: project.demo });
  }
  if (project.demo2) {
    links.push({ label: project.demo2Label ?? 'Live Demo 2', url: project.demo2 });
  }
  if (project.demo3) {
    links.push({ label: project.demo3Label ?? 'Live Demo 3', url: project.demo3 });
  }
  return links;
}

export const projectsData: ProjectData[] = [
  {
    id: 'filegym',
    title: 'FileGym',
    status: 'Completed',
    shortDesc: 'A premium local-first Android file utility suite for converting, resizing, compressing, and stitching files completely offline.',
    longDesc: 'FileGym is a privacy-focused Android file utility suite that processes files entirely on-device with no servers, tracking, or external APIs. It includes universal format conversion, PDF to PPTX, Markdown rendering, PDF page extraction, JSON/CSV/XLSX conversion, image resizing and stitching, local archive creation, background processing, notifications, and dynamic themes.',
    tech: ['Flutter', 'Dart', 'Android', 'Riverpod', 'GoRouter', 'Hive'],
    sourceCode: 'https://github.com/akhilbehara999/FILEGYM',
    demo: '',
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst Portfolio',
    status: 'Completed',
    shortDesc: 'Two data tools: a no-code CSV/Excel cleaning wizard and a salary analysis dashboard for ~9,400 data jobs with ML prediction.',
    longDesc: 'A two-project data portfolio. Data Sanitizer is a Streamlit web app that profiles CSV and Excel files, flags structural issues (missing values, duplicates, outliers, type mismatches), shows cell-level before/after diffs, and exports clean data with an audit ZIP. The Jobs in Data dashboard analyzes ~9,400 data industry job listings from 2020–2024 with salary prediction (Linear Regression, Random Forest, Gradient Boosting), Welch\'s t-test and ANOVA validation, and an interactive salary predictor by role, experience, and location.',
    tech: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn', 'Plotly', 'NumPy'],
    sourceCode: 'https://github.com/akhilbehara999/data-analyst',
    demo: 'https://data-analyst-9xn7xr3jb9qh9talrjmbpb.streamlit.app/',
    demoLabel: 'Salary Dashboard',
    demo2: 'https://data-analyst-2sy2qrn76sjkpttm4c6g8r.streamlit.app/',
    demo2Label: 'Data Sanitizer',
  },
  {
    id: 'vibe-codeing',
    title: 'VibeCoding Suite',
    status: 'Completed',
    shortDesc: 'A monorepo of 3 privacy-first, 100% client-side web tools: FileFlow (media converter + OCR), EmojiCrypt (AES encryption), and Qrix (QR + UPI + NFC).',
    longDesc: 'VibeCoding Suite is an elite monorepo housing three serverless browser applications. FileFlow converts audio/video (MP4, WEBM, MP3, WAV, OGG) using FFmpeg WebAssembly, runs OCR via Tesseract.js, parses PDFs and spreadsheets with SheetJS, and exports batch ZIPs — all without uploading files. EmojiCrypt encrypts text with AES-256-GCM and disguises ciphertexts as emoji sequences, numbers, mixed alphabets, or random English words using Crypto-JS. Qrix is an offline-first PWA that scans QR codes with hardware-accelerated Zbar WASM, generates NFC virtual business cards with vCard export, and splits group bills with canvas-based UPI QR codes stored in IndexedDB.',
    tech: ['React 19', 'Next.js 15', 'TypeScript', 'FFmpeg WASM', 'Tailwind CSS', 'Framer Motion'],
    sourceCode: 'https://github.com/akhilbehara999/vibe-codeing',
    demo: 'https://emojicrypt-gamma.vercel.app/',
    demoLabel: 'EmojiCrypt Demo',
    demo2: 'https://qrix-three.vercel.app/',
    demo2Label: 'QRix Demo',
    demo3: 'https://fileflow-black.vercel.app/',
    demo3Label: 'FileFlow Demo',
    demos: [
      { label: 'EmojiCrypt Demo', url: 'https://emojicrypt-gamma.vercel.app/' },
      { label: 'QRix Demo', url: 'https://qrix-three.vercel.app/' },
      { label: 'FileFlow Demo', url: 'https://fileflow-black.vercel.app/' },
    ],
  },
  {
    id: 'thinkring',
    title: 'Thinkring Smart Campus Bot',
    status: 'Completed',
    shortDesc: 'A Jarvis-inspired multi-module smart campus web app with AI tools, attendance tracking, chatbot, quiz system, and cloud storage.',
    longDesc: 'Thinkring is a comprehensive secure multi-page campus web application built entirely with vanilla HTML, CSS, and JavaScript on the frontend, with a Node.js + Express + MongoDB Atlas backend. It features 8 modules: attendance tracking with CSV/PDF/image processing, an AI-powered book summarizer and text-to-speech system, an intelligent chatbot with a trainable knowledge base, a multi-language code explainer, a lost and found system with image uploads, a quiz engine with external API integration, personal IndexedDB-based file cloud storage, and study group coordination. Security is handled via PBKDF2 password hashing, AES-GCM encryption, JWT authentication, and CORS protection.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express', 'MongoDB Atlas', 'JWT'],
    sourceCode: 'https://github.com/akhilbehara999/thinkring-project',
    demo: '',
  },
  {
    id: 'genz-telugu',
    title: 'GenZ Telugu Translator',
    status: 'Completed',
    shortDesc: 'A Telugu-inspired programming language and playground that lets beginners write Python with familiar Telugu and Gen-Z slang keywords.',
    longDesc: 'GenZ Telugu removes the language barrier for coding beginners by translating Telugu-inspired, Gen-Z-flavored keywords into executable Python. The project includes a pip-installable CLI compiler and REPL, a VS Code extension with syntax highlighting and snippets, an online React playground powered by Pyodide, friendly translated errors, and a test suite for lexical translation and runtime execution.',
    tech: ['Python', 'React', 'Vite', 'TypeScript', 'Pyodide', 'VS Code'],
    sourceCode: 'https://github.com/akhilbehara999/genz-telugu-',
    demo: '',
  },
  {
    id: 'team-55',
    title: 'Team 55 — Hackathon Project',
    status: 'Completed',
    shortDesc: 'A hackathon-built AI career companion with specialized agents for resumes, interviews, contracts, and professional documents.',
    longDesc: 'CareerFlow AI is a GenAI-powered career support platform that combines specialized agents for resume optimization, interview simulation, employment contract review, and professional document generation. It uses shared context to keep career activities connected and delivers personalized recommendations, coaching, risk explanations, and polished documents through a unified workflow.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'LangChain', 'Gemini', 'PostgreSQL'],
    sourceCode: 'https://github.com/akhilbehara999/TEAM-55',
    demo: '',
  },
];