import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Check, FileText, MapPin, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  onOpenResume: () => void;
}

const ROLES = [
  "Autonomous Agent Systems",
  "Multimodal Edge AI & PyTorch",
  "Google Student Ambassador '26",
  "Native Kotlin Android & Systems",
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="about" className="relative pt-32 pb-14 sm:pt-40 sm:pb-20 border-b border-white/[0.06] overflow-hidden">
      
      {/* Ambient background glow dots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Bio & Calls to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-5 order-2 lg:order-1"
          >
            
            {/* Meta Tags / Location */}
            <div className="flex flex-wrap items-center gap-2">
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
            <div className="flex flex-col gap-1.5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {PERSONAL_INFO.name}
              </h1>

              {/* Animated Rotating Ticker */}
              <div className="h-7 flex items-center overflow-hidden">
                <span className="font-mono text-xs text-zinc-500 mr-2 flex items-center gap-1 shrink-0">
                  <Terminal className="w-3 h-3 text-zinc-400" />
                  focus:
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="font-mono text-xs sm:text-sm font-semibold text-white tracking-tight"
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Punchy Bio */}
            <p className="text-sm text-zinc-400 leading-relaxed max-w-lg">
              {PERSONAL_INFO.oneLiner}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black font-semibold text-xs sm:text-sm shadow-md transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 text-zinc-200 hover:text-white border border-white/10 hover:border-white/20 transition-all text-xs sm:text-sm"
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
              </motion.button>

              <div className="flex items-center gap-2 pl-1">
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 hover:border-white/25 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 hover:border-white/25 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.08] max-w-md">
              <div className="flex flex-col">
                <span className="text-lg font-bold font-mono text-white">GSA '26</span>
                <span className="text-[11px] text-zinc-500">Google Ambassador</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold font-mono text-white">Sem 5</span>
                <span className="text-[11px] text-zinc-500">Informatics @ UKRIDA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold font-mono text-white">Edge AI</span>
                <span className="text-[11px] text-zinc-500">Multimodal Research</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Natural Full-Color Portrait with Ambient Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Ambient backdrop glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-white/15 via-white/5 to-transparent blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Natural Full-Color Image Frame */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border border-white/20 bg-zinc-900 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
                <img
                  src="/profile.jpg"
                  alt="Michael Tandeas"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Subtle vignette gradient at base for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none"></div>

                {/* ID Pill Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-zinc-200 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/15">
                  <span className="font-semibold text-white">Michael Tandeas</span>
                  <span className="text-zinc-400">@AquaGecko</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
