import React, { useEffect } from 'react';
import { PERSONAL_INFO, GSA_DATA, RESEARCH_EXPERIENCE, FEATURED_PROJECTS, GAME_PROJECTS, EDUCATION_DATA } from '../data/portfolioData';
import { X, Printer, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Container */}
      <div className="relative w-full max-w-4xl bg-[#09090b] border border-white/20 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-950 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="font-mono text-xs text-zinc-300 font-semibold tracking-wider uppercase">
              Curriculum Vitae / Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-all active:scale-95 shadow-sm"
              title="Print or Save to PDF via Browser"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-white/10 transition-all"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div id="printable-resume" className="overflow-y-auto p-6 sm:p-10 space-y-8 text-zinc-300 font-sans text-xs sm:text-sm">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <span className="font-mono text-xs text-zinc-400">
                {PERSONAL_INFO.title}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-zinc-400" />
                {PERSONAL_INFO.location}
              </span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1 hover:text-white transition-colors">
                <Mail className="w-3 h-3 text-zinc-400" />
                {PERSONAL_INFO.email}
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                <LinkedinIcon className="w-3 h-3 text-zinc-400" />
                linkedin.com/in/michael-tandeas
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                <GithubIcon className="w-3 h-3 text-zinc-400" />
                github.com/AquaGecko-M
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold mb-3 border-b border-white/10 pb-1">
              Education
            </h2>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <span className="font-bold text-white text-sm">
                  {EDUCATION_DATA.institution}
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  {EDUCATION_DATA.period}
                </span>
              </div>
              <p className="text-xs text-zinc-300">
                {EDUCATION_DATA.degree}
              </p>
              <p className="text-xs text-zinc-400 pt-1">
                <span className="text-zinc-300 font-medium">Relevant Coursework:</span> {EDUCATION_DATA.coursework.join(', ')}.
              </p>
            </div>
          </div>

          {/* Honors & Leadership */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold mb-3 border-b border-white/10 pb-1">
              Honors & Leadership
            </h2>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <span className="font-bold text-white text-sm">
                  {GSA_DATA.title} — {GSA_DATA.cohort}
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  2026
                </span>
              </div>
              <p className="text-xs text-zinc-300 pt-1">
                {GSA_DATA.summary}
              </p>
            </div>
          </div>

          {/* Research Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold mb-3 border-b border-white/10 pb-1">
              Research Experience
            </h2>
            {RESEARCH_EXPERIENCE.map((res, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span className="font-bold text-white text-sm">
                    {res.role} — {res.institution}
                  </span>
                  <span className="font-mono text-xs text-zinc-400">
                    {res.period}
                  </span>
                </div>
                <p className="text-xs font-semibold text-zinc-300">
                  Project: {res.title}
                </p>
                <p className="text-xs text-zinc-400 pt-0.5">
                  {res.summary}
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300 pt-1.5 pl-1">
                  {res.highlights.map((h, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Selected Technical Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold mb-3 border-b border-white/10 pb-1">
              Selected Technical Projects
            </h2>
            <div className="space-y-4">
              {FEATURED_PROJECTS.map((proj) => (
                <div key={proj.title} className="flex flex-col gap-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-bold text-white text-sm">
                      {proj.title} <span className="font-normal font-mono text-xs text-zinc-400">({proj.category})</span>
                    </span>
                    <span className="font-mono text-xs text-zinc-400">
                      {proj.tags.slice(0, 3).join(', ')}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {proj.description}
                  </p>
                  {proj.metrics && (
                    <p className="text-xs text-zinc-400 pt-0.5 font-mono">
                      Key Highlights: {proj.metrics.join(' • ')}
                    </p>
                  )}
                </div>
              ))}

              {/* Game project */}
              <div className="flex flex-col gap-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span className="font-bold text-white text-sm">
                    {GAME_PROJECTS[0].title} <span className="font-normal font-mono text-xs text-zinc-400">(Java OOP Arcade Game)</span>
                  </span>
                  <span className="font-mono text-xs text-zinc-400">
                    Greenfoot Engine, Java
                  </span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {GAME_PROJECTS[0].description} (Live scenario verified on Greenfoot gallery).
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold mb-3 border-b border-white/10 pb-1">
              Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-semibold text-white">Languages: </span>
                <span className="text-zinc-300">Python, Kotlin, Java, TypeScript, JavaScript, PHP, C/C++, SQL, Bash</span>
              </div>
              <div>
                <span className="font-semibold text-white">Machine Learning & AI: </span>
                <span className="text-zinc-300">PyTorch, TorchAudio, OpenCV, ONNX Runtime, INT8 Quantization, ReAct Agents</span>
              </div>
              <div>
                <span className="font-semibold text-white">Systems & Backend: </span>
                <span className="text-zinc-300">FastAPI, Asyncio, Linux Kernel (/dev/uinput, evdev), Wayland, MySQL (PDO), Debian</span>
              </div>
              <div>
                <span className="font-semibold text-white">Mobile & Frontend: </span>
                <span className="text-zinc-300">Android SDK, Jetpack Compose, Material 3, React 19, Tailwind CSS, Vite, Electron</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
