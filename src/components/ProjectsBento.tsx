import React from 'react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Terminal, Globe, Smartphone, ShieldAlert } from 'lucide-react';
import { GithubIcon } from './Icons';
import { motion } from 'framer-motion';

export const ProjectsBento: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-1.5 mb-10">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-zinc-900 border border-white/10 text-white">
              <Terminal className="w-3.5 h-3.5 text-zinc-300" />
            </span>
            <span className="text-xs font-mono tracking-wider uppercase text-zinc-400">
              Featured Work
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Systems & Applications
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Selected autonomous agent workflows, kernel automations, full-stack web, and mobile apps.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          
          {/* Card 1: Momo Workstation (7 cols) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#0e0e11] p-6 sm:p-7 flex flex-col justify-between shadow-xl group hover:border-white/25 transition-colors relative overflow-hidden"
          >
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-md bg-white/10 text-white border border-white/10">
                    <Terminal className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    Autonomous Developer Workstation
                  </span>
                </div>
                <a
                  href={FEATURED_PROJECTS[0].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 hover:border-white/25 transition-all"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span>{FEATURED_PROJECTS[0].title}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </h3>
                <p className="text-xs font-mono text-zinc-400 pt-0.5">
                  {FEATURED_PROJECTS[0].tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {FEATURED_PROJECTS[0].description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 pt-1">
                {FEATURED_PROJECTS[0].metrics?.map((m, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-white/5 text-[11px] font-mono text-zinc-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-white"></span>
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/[0.08] mt-5">
              {FEATURED_PROJECTS[0].tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-zinc-900/80 border border-white/5 text-[11px] font-mono text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: AWS Sokrates Hackathon (5 cols) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#0e0e11] p-6 sm:p-7 flex flex-col justify-between shadow-xl group hover:border-white/25 transition-colors"
          >
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-md bg-white/10 text-white border border-white/10">
                    <ShieldAlert className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    Industrial AI
                  </span>
                </div>
                <a
                  href={FEATURED_PROJECTS[1].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 hover:border-white/25 transition-all"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {FEATURED_PROJECTS[1].title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 pt-0.5">
                  {FEATURED_PROJECTS[1].tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {FEATURED_PROJECTS[1].description}
              </p>

              <div className="flex flex-col gap-1.5 pt-1">
                {FEATURED_PROJECTS[1].metrics?.map((m, idx) => (
                  <span key={idx} className="text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                    <span className="text-zinc-500">›</span> {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/[0.08] mt-5">
              {FEATURED_PROJECTS[1].tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-zinc-900/80 border border-white/5 text-[11px] font-mono text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Winson Galon Distribution (6 cols) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-6 rounded-2xl border border-white/10 bg-[#0e0e11] p-6 sm:p-7 flex flex-col justify-between shadow-xl group hover:border-white/25 transition-colors"
          >
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-md bg-white/10 text-white border border-white/10">
                    <Globe className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    Commercial Web & CMS
                  </span>
                </div>
                <a
                  href={FEATURED_PROJECTS[2].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 hover:border-white/25 transition-all"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {FEATURED_PROJECTS[2].title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 pt-0.5">
                  {FEATURED_PROJECTS[2].tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {FEATURED_PROJECTS[2].description}
              </p>

              <div className="flex flex-col gap-1.5 pt-1">
                {FEATURED_PROJECTS[2].metrics?.map((m, idx) => (
                  <span key={idx} className="text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                    <span className="text-zinc-500">›</span> {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/[0.08] mt-5">
              {FEATURED_PROJECTS[2].tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-zinc-900/80 border border-white/5 text-[11px] font-mono text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 4: SnapBudget (6 cols) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-6 rounded-2xl border border-white/10 bg-[#0e0e11] p-6 sm:p-7 flex flex-col justify-between shadow-xl group hover:border-white/25 transition-colors"
          >
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-md bg-white/10 text-white border border-white/10">
                    <Smartphone className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    Android Native
                  </span>
                </div>
                <a
                  href={FEATURED_PROJECTS[3].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 hover:border-white/25 transition-all"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {FEATURED_PROJECTS[3].title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 pt-0.5">
                  {FEATURED_PROJECTS[3].tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {FEATURED_PROJECTS[3].description}
              </p>

              <div className="flex flex-col gap-1.5 pt-1">
                {FEATURED_PROJECTS[3].metrics?.map((m, idx) => (
                  <span key={idx} className="text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                    <span className="text-zinc-500">›</span> {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/[0.08] mt-5">
              {FEATURED_PROJECTS[3].tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-zinc-900/80 border border-white/5 text-[11px] font-mono text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
