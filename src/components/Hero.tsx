import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Check, FileText, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="about" className="pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Calls to Action */}
          <div className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1">
            
            {/* Meta Tags / Location */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
                <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                UKRIDA CS '27
              </span>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-zinc-400 tracking-tight">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* One Liner Bio */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
              {PERSONAL_INFO.oneLiner}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all active:scale-95 shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900/90 text-zinc-200 hover:text-white border border-white/10 hover:border-white/20 transition-all text-xs sm:text-sm active:scale-95"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-mono">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-zinc-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 hover:border-white/25 transition-all active:scale-95"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 hover:border-white/25 transition-all active:scale-95"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.08] max-w-lg">
              <div className="flex flex-col">
                <span className="text-xl font-bold font-mono text-white">GSA '26</span>
                <span className="text-xs text-zinc-500">Google Ambassador</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-mono text-white">Sem 5</span>
                <span className="text-xs text-zinc-500">Informatics @ UKRIDA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-mono text-white">Edge AI</span>
                <span className="text-xs text-zinc-500">Multimodal Research</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Contrast B&W Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Subtle back decorative glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
              
              {/* Image Frame */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border border-white/20 bg-zinc-900 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Michael Tandeas"
                  className="w-full h-full object-cover grayscale contrast-110 object-center transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

                {/* Corner ID Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-zinc-300 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10">
                  <span className="font-semibold text-white">Michael Tandeas</span>
                  <span className="text-zinc-400">@AquaGecko</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
