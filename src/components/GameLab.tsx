import React from 'react';
import { GAME_PROJECTS } from '../data/portfolioData';
import { Gamepad2, ArrowUpRight, Sparkles, Play } from 'lucide-react';
import { GithubIcon } from './Icons';

export const GameLab: React.FC = () => {
  return (
    <section id="gamedev" className="py-20 border-b border-white/[0.06] bg-[#0c0c0e]/30">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-md bg-zinc-900 border border-white/10 text-white">
              <Gamepad2 className="w-4 h-4 text-zinc-300" />
            </span>
            <span className="text-xs font-mono tracking-wider uppercase text-zinc-400">
              Creative Lab & Explorations
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Game Development & Interactive Media
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            Where logic meets creative mechanics. Exploring collision algorithms, state machines, and real-time input handling as an ongoing hobby and passion.
          </p>
        </div>

        {/* Game Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Game 1: DeNeLauSe */}
          <div className="rounded-2xl border border-white/15 bg-[#0e0e11] p-7 sm:p-8 flex flex-col justify-between shadow-xl group hover:border-white/30 transition-all duration-300">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-white/10 text-white border border-white/10">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Java OOP & Physics
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={GAME_PROJECTS[0].githubUrl}
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
                  {GAME_PROJECTS[0].title}
                </h3>
                <p className="text-xs font-mono text-zinc-400">
                  {GAME_PROJECTS[0].tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {GAME_PROJECTS[0].description}
              </p>

              <div className="flex flex-col gap-2 pt-2">
                {GAME_PROJECTS[0].metrics?.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0"></span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08] mt-6">
              <div className="flex flex-wrap gap-1.5">
                {GAME_PROJECTS[0].tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {GAME_PROJECTS[0].liveUrl && (
                <a
                  href={GAME_PROJECTS[0].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all active:scale-95 shrink-0"
                >
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>Play Scenario</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Game 2: What Was Forgotten */}
          <div className="rounded-2xl border border-white/15 bg-[#0e0e11] p-7 sm:p-8 flex flex-col justify-between shadow-xl group hover:border-white/30 transition-all duration-300">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-white/10 text-white border border-white/10">
                    <Gamepad2 className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    GameMaker Studio
                  </span>
                </div>

                <a
                  href={GAME_PROJECTS[1].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 transition-all"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                  {GAME_PROJECTS[1].title}
                </h3>
                <p className="text-xs font-mono text-zinc-400">
                  {GAME_PROJECTS[1].tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {GAME_PROJECTS[1].description}
              </p>

              <div className="flex flex-col gap-2 pt-2">
                {GAME_PROJECTS[1].metrics?.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0"></span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-6 border-t border-white/[0.08] mt-6">
              {GAME_PROJECTS[1].tags.map((t) => (
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

        {/* Thought Note */}
        <div className="mt-8 p-5 rounded-xl border border-white/10 bg-zinc-900/40 flex items-start gap-3">
          <div className="p-1 rounded bg-white/10 text-white shrink-0 mt-0.5">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            <span className="font-semibold text-zinc-200">Engineering Philosophy:</span> Game architecture teaches rigorous performance discipline—managing game loops at 60 FPS, memory footprint, and deterministic state transitions translates directly into clean concurrent backend systems and responsive mobile engineering.
          </p>
        </div>

      </div>
    </section>
  );
};
