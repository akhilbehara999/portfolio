# 📱 Akhil Behara — Interactive Multi-Device Portfolio

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live_Demo-akhil--portfolio--rho.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://akhil-portfolio-rho.vercel.app/)
[![Vite](https://img.shields.io/badge/Vite-6.4+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12+-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**A high-performance, responsive portfolio engineered with adaptive device modes (Mobile Phone Simulator, Tablet Split View, and Desktop Studio), interactive data visualizations, and fluid micro-animations.**

### 🌐 Live Demo: [https://akhil-portfolio-rho.vercel.app/](https://akhil-portfolio-rho.vercel.app/)

[🚀 View Live Demo](https://akhil-portfolio-rho.vercel.app/) • [Explore Projects](#-featured-projects) • [View Experience](#-experience--internships) • [Local Setup](#-getting-started) • [Contact](#-connect-with-me)

</div>

---

## 🌟 Overview

This portfolio is an interactive personal showcase designed to break away from traditional static portfolio templates. Built from the ground up using **React**, **TypeScript**, and **Tailwind CSS v4**, it dynamically adapts between three distinct viewing experiences:

- 📱 **Mobile Phone Simulator Canvas**: An authentic smartphone shell with dynamic status bar, notch, and bottom gesture bar.
- 💻 **Tablet Split View**: Dual-panel responsive layout optimized for medium screens and touch interactions.
- 🖥️ **Desktop Studio**: A widescreen 3-column control center with quick navigation, detailed inspect panels, and real-time project metrics.

---

## 🚀 Key Features

- 🌓 **Dynamic Theme Engine**: Seamless instant switching between light mode and high-contrast dark mode across all device viewports.
- 📊 **Interactive Analytics with Recharts**:
  - **My Journey Chart**: Visual academic performance trajectory and milestones.
  - **Tech Stack & Projects Chart**: Interactive bar charts highlighting technology distribution per project on hover.
- 🪐 **Interactive Social Orbit**: Physics-inspired floating interactive social nodes (GitHub, LinkedIn, Instagram, Certifications).
- 📜 **Verified Credentials & Embedded Previews**: High-resolution interactive previews for industry internships and verified credentials with one-click full-view modals.
- ⚡ **Optimized Performance**: Production bundle powered by Vite with tree-shaking, code splitting, and zero lag 60fps Framer Motion transitions.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 18](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/), Custom Vanilla CSS Variables |
| **Motion & Gestures** | [Framer Motion](https://www.framer.com/motion/) |
| **Data Visualization** | [Recharts](https://recharts.org/) |
| **Icons & Typography** | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/), Google Fonts (Space Grotesk & Inter) |
| **Build Tooling** | [Vite](https://vitejs.dev/) |

---

## 💼 Featured Projects

### 1. 🛡️ Privacy-First Browser Ad-Blocker
- **Tech**: TypeScript, WebExtension APIs, Declarative Net Request
- Client-side declarative content filtering engine delivering zero-latency tracker blocking without collecting user data.

### 2. 📊 Data Sanitizer & Jobs in Data Analytics
- **Tech**: Python, Streamlit, Pandas, Scikit-Learn, Statsmodels
- Interactive data profiling web app with cell-level change audit diffs and statistical salary prediction across 9,400+ listings using regression & ANOVA tests.

### 3. 🏫 Smart Campus Hub
- **Tech**: React, TypeScript, Tailwind CSS, Supabase
- Centralized academic and campus services dashboard streamlining student notices, timetables, and resource management.

### 4. 🌐 Telugu NLP Translation Engine
- **Tech**: Python, PyTorch, Hugging Face Transformers, FastAPIs
- Neural machine translation and linguistic tool tuned for regional Telugu-to-English contextual fidelity.

### 5. 🤖 CareerFlow AI
- **Tech**: React, TypeScript, OpenAI API, LangChain
- Hackathon-winning career support platform deploying specialized agents for resume ATS optimization, mock interview feedback, and contract review.

### 6. 🤝 Collaborative Hackathon Suite
- **Tech**: React, WebSockets, Tailwind CSS, Node.js
- Real-time team collaboration platform built for competitive rapid-prototyping hackathon sprints.

---

## 🎓 Experience & Certifications

### Professional Experience
- **Data Analyst Intern** — *Bluestock Fintech* (Remote · Verification ID: `BFDA37224`)
  - Conducted financial market data analysis, stock metrics processing, and exploratory data reporting.
- **Data Analytics Intern** — *ExcelR EdTech & APSCHE* (Hybrid · Cert No: `EXCELR-I-89760`)
  - Completed intensive government-accredited data analytics internship with 3 academic credits.
- **Data Analytics & Forensic Technology** — *Deloitte Australia* (Virtual Experience · Verification: `eNxoQ8kECqApZbXfD`)
  - Built Tableau dashboards and performed structured data validation for forensic audit intelligence.

### Education
- **B.Tech in Computer Science (AI & Data Science)** — *Chaitanya Engineering College* (2023–2027) | **CGPA: 8.17**
- **Intermediate (MPC)** — *A.P Model College, Sompeta* (2021–2023) | **CGPA: 7.1**
- **Secondary School Certificate (SSC)** — *A.P Model School, Sompeta* (2020–2021) | **CGPA: 8.6**

---

## 📂 Project Structure

```bash
Akhil-Mobile-Portfolio/
├── .vscode/               # Workspace editor settings
├── akhil-portfolio/       # Main portfolio application
│   ├── public/            # Static assets (Resume PDF, Certificate JPGs, Favicon)
│   │   ├── Akhil_Behara_Resume.pdf
│   │   ├── bluestock-internship.jpg
│   │   ├── deloitte-certificate.jpg
│   │   └── excelr-internship.jpg
│   ├── src/
│   │   ├── components/    # Reusable UI components & section screens
│   │   │   ├── contact/   # Interactive Social Orbit & contact forms
│   │   │   └── sections/  # About, Skills, Projects, Experience, Education, Certs
│   │   ├── data/          # Project data, charts metrics & skills data
│   │   ├── desktop/       # Desktop Studio 3-panel layout & screens
│   │   ├── tablet/        # Tablet layout & responsive split containers
│   │   ├── App.tsx        # Main application root with responsive mode switcher
│   │   ├── index.css      # Core theme tokens, dark mode variables & styling
│   │   └── main.tsx       # Application entry point
│   ├── package.json       # Project dependencies & npm scripts
│   ├── tsconfig.json      # TypeScript compiler configuration
│   └── vite.config.ts     # Vite configuration
└── README.md              # Project documentation
```

---

## 💻 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or newer) and `npm` installed.

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/akhilbehara999/portfolio.git
   cd portfolio/akhil-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📬 Connect with Me

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-akhilbehara999-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/akhilbehara999)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Pondara_Akhil_Behara-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pondara-akhil-behara-016126381)
[![Instagram](https://img.shields.io/badge/Instagram-@Akhil__majunu-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/Akhil_majunu)
[![Email](https://img.shields.io/badge/Email-akhilbehara999%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:akhilbehara999@gmail.com)

</div>

---

<div align="center">
  <sub>Designed &amp; Built with ❤️ by <b>Akhil Behara</b> © 2026. All rights reserved.</sub>
</div>
