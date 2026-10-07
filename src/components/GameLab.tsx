import React from 'react';
import { GAME_PROJECTS } from '../data/portfolioData';
import { Gamepad2, ArrowUpRight, Sparkles, Play } from 'lucide-react';
import { GithubIcon } from './Icons';
import { motion } from 'framer-motion';

export const GameLab: React.FC = () => {
  return (
    <section id="gamedev" className="py-16 sm:py-20 border-b border-white/[0.06] bg-[#0c0c0e]/30">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-1.5 mb-10">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-zinc-900 border border-white/10 text-white">
              <Gamepad2 className="w-3.5 h-3.5 text-zinc-300" />
            </span>
            <span className="text-xs font-mono tracking-wider uppercase text-zinc-400">
              Creative Lab
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Game Development & Mechanics
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Exploring collision math, physics loops, and state machines as a creative hobby.
          </p>
        </div>

        {/* Game Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Game 1: DeNeLauSe */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-white/10 bg-[#0e0e11] p-6 sm:p-7 flex flex-col justify-between shadow-xl group hover:border-white/25 transition-colors"
          >
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-md bg-white/10 text-white border border-white/10">
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    Java OOP & Physics
                  </span>
                </div>

                <a
                  href={GAME_PROJECTS[0].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 transition-all"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {GAME_PROJECTS[0].title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 pt-0.5">
                  {GAME_PROJECTS[0].tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {GAME_PROJECTS[0].description}
              </p>

              <div className="flex flex-col gap-1 pt-1">
                {GAME_PROJECTS[0].metrics?.map((m, idx) => (
                  <span key={idx} className="text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                    <span className="text-zinc-500">›</span> {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 pt-5 border-t border-white/[0.08] mt-5">
              <div className="flex flex-wrap gap-1.5">
                {GAME_PROJECTS[0].tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-zinc-900/80 border border-white/5 text-[11px] font-mono text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>

              {GAME_PROJECTS[0].liveUrl && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={GAME_PROJECTS[0].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-black font-semibold text-xs shadow-sm shrink-0"
                >
                  <Play className="w-3 h-3 fill-black" />
                  <span>Play</span>
                  <ArrowUpRight className="w-3 h-3" />
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Game 2: What Was Forgotten */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-white/10 bg-[#0e0e11] p-6 sm:p-7 flex flex-col justify-between shadow-xl group hover:border-white/25 transition-colors"
          >
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-md bg-white/10 text-white border border-white/10">
                    <Gamepad2 className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    GameMaker Studio
                  </span>
                </div>

                <a
                  href={GAME_PROJECTS[1].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 transition-all"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {GAME_PROJECTS[1].title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 pt-0.5">
                  {GAME_PROJECTS[1].tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {GAME_PROJECTS[1].description}
              </p>

              <div className="flex flex-col gap-1 pt-1">
                {GAME_PROJECTS[1].metrics?.map((m, idx) => (
                  <span key={idx} className="text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                    <span className="text-zinc-500">›</span> {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/[0.08] mt-5">
              {GAME_PROJECTS[1].tags.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-zinc-900/80 border border-white/5 text-[11px] font-mono text-zinc-400">
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
