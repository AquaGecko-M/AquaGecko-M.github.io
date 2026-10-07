import React from 'react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Terminal, Globe, Smartphone, ShieldAlert } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectsBento: React.FC = () => {
  return (
    <section id="projects" className="py-20 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-md bg-zinc-900 border border-white/10 text-white">
              <Terminal className="w-4 h-4 text-zinc-300" />
            </span>
            <span className="text-xs font-mono tracking-wider uppercase text-zinc-400">
              Systems & Production Code
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            A selection of production systems, autonomous agent architectures, full-stack applications, and native mobile clients.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Momo Workstation (Large Spotlight - Spans 7 columns) */}
          <div className="lg:col-span-7 rounded-2xl border border-white/15 bg-[#0e0e11] p-7 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-white/30 transition-all duration-300">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-white/10 text-white border border-white/10">
                    <Terminal className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Autonomous Systems Orchestration
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={FEATURED_PROJECTS[0].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 transition-all"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                  {FEATURED_PROJECTS[0].title}
                </h3>
                <p className="text-xs font-mono text-zinc-400">
                  {FEATURED_PROJECTS[0].tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {FEATURED_PROJECTS[0].description}
              </p>

              {/* Technical Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {FEATURED_PROJECTS[0].metrics?.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-6 border-t border-white/[0.08] mt-6">
              {FEATURED_PROJECTS[0].tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: AWS Sokrates Hackathon (Spans 5 columns) */}
          <div className="lg:col-span-5 rounded-2xl border border-white/15 bg-[#0e0e11] p-7 sm:p-8 flex flex-col justify-between shadow-xl group hover:border-white/30 transition-all duration-300">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-white/10 text-white border border-white/10">
                    <ShieldAlert className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Industrial AI
                  </span>
                </div>
                <a
                  href={FEATURED_PROJECTS[1].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 transition-all"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                  {FEATURED_PROJECTS[1].title}
                </h3>
                <p className="text-xs font-mono text-zinc-400">
                  {FEATURED_PROJECTS[1].tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {FEATURED_PROJECTS[1].description}
              </p>

              <div className="flex flex-col gap-2 pt-2">
                {FEATURED_PROJECTS[1].metrics?.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0"></span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-6 border-t border-white/[0.08] mt-6">
              {FEATURED_PROJECTS[1].tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Winson Galon Distribution (Spans 6 columns) */}
          <div className="lg:col-span-6 rounded-2xl border border-white/15 bg-[#0e0e11] p-7 sm:p-8 flex flex-col justify-between shadow-xl group hover:border-white/30 transition-all duration-300">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-white/10 text-white border border-white/10">
                    <Globe className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Full-Stack & CMS
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={FEATURED_PROJECTS[2].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 transition-all"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                  {FEATURED_PROJECTS[2].title}
                </h3>
                <p className="text-xs font-mono text-zinc-400">
                  {FEATURED_PROJECTS[2].tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {FEATURED_PROJECTS[2].description}
              </p>

              <div className="flex flex-col gap-2 pt-2">
                {FEATURED_PROJECTS[2].metrics?.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0"></span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-6 border-t border-white/[0.08] mt-6">
              {FEATURED_PROJECTS[2].tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: SnapBudget (Spans 6 columns) */}
          <div className="lg:col-span-6 rounded-2xl border border-white/15 bg-[#0e0e11] p-7 sm:p-8 flex flex-col justify-between shadow-xl group hover:border-white/30 transition-all duration-300">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-white/10 text-white border border-white/10">
                    <Smartphone className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Android Native
                  </span>
                </div>
                <a
                  href={FEATURED_PROJECTS[3].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 transition-all"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                  {FEATURED_PROJECTS[3].title}
                </h3>
                <p className="text-xs font-mono text-zinc-400">
                  {FEATURED_PROJECTS[3].tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {FEATURED_PROJECTS[3].description}
              </p>

              <div className="flex flex-col gap-2 pt-2">
                {FEATURED_PROJECTS[3].metrics?.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0"></span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-6 border-t border-white/[0.08] mt-6">
              {FEATURED_PROJECTS[3].tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
