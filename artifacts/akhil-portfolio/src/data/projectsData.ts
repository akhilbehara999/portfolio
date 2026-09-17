export type ProjectStatus = 'Completed' | 'In Progress';

export type ProjectData = {
  id: string;
  title: string;
  status: ProjectStatus;
  shortDesc: string;
  longDesc: string;
  tech: string[];
  sourceCode: string;
  demo: string;
};

export const projectsData: ProjectData[] = [
  {
    id: 'vibecoding',
    title: 'VibeCoding Suite',
    status: 'Completed',
    shortDesc: 'A monorepo of privacy-first, client-side web utilities for media processing and secure browser workflows — all 100% serverless.',
    longDesc: 'VibeCoding Suite is an elite monorepo of privacy-first applications. Its browser-based tools handle media conversion, compression, OCR, document parsing, and secure text workflows using WebAssembly and client-side cryptography. No files or private data leave the device.',
    tech: ['React 19', 'Next.js 15', 'TypeScript', 'WebAssembly', 'Tailwind CSS', 'Framer Motion'],
    sourceCode: 'https://github.com/akhilbehara999/vibecodeing',
    demo: '',
  },
  {
    id: 'fileflow',
    title: 'FileFlow',
    status: 'Completed',
    shortDesc: 'Serverless media converter, compressor, document parser, and OCR engine — runs 100% in the browser using WebAssembly.',
    longDesc: 'FileFlow executes high-performance computation inside the browser sandbox using multithreaded WebAssembly. It supports audio/video transcoding (MP4, WEBM, MP3, WAV, OGG) via FFmpeg WASM, on-device OCR via Tesseract.js, document parsing with pdfjs-dist and SheetJS, and batch ZIP export. No files ever leave the device.',
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'FFmpeg WASM', 'Tesseract.js', 'SheetJS'],
    sourceCode: 'https://github.com/akhilbehara999/vibecodeing',
    demo: '',
  },
];