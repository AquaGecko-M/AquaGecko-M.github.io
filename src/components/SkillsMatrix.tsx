import React from 'react';
import { SKILL_CATEGORIES, EDUCATION_DATA } from '../data/portfolioData';
import { Code2, GraduationCap, CheckCircle2 } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-md bg-zinc-900 border border-white/10 text-white">
              <Code2 className="w-4 h-4 text-zinc-300" />
            </span>
            <span className="text-xs font-mono tracking-wider uppercase text-zinc-400">
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Capabilities & Core Stack
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            A breakdown of technologies, frameworks, and academic coursework applied across production projects and research.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="rounded-2xl border border-white/15 bg-[#0e0e11] p-6 flex flex-col justify-between shadow-xl"
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1 pb-3 border-b border-white/[0.08]">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-snug">
                    {cat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all ${
                        skill.highlight
                          ? 'bg-zinc-800 text-white border border-white/20 font-medium'
                          : 'bg-zinc-900/80 text-zinc-400 border border-white/5'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Coursework Spotlight */}
        <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-[#0e0e11] via-[#111115] to-[#0e0e11] p-7 sm:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-white text-black">
                <GraduationCap className="w-5 h-5" />
              </span>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {EDUCATION_DATA.institution}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  {EDUCATION_DATA.degree} • <span className="font-mono text-zinc-300">{EDUCATION_DATA.period}</span>
                </p>
              </div>
            </div>

            <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 w-fit">
              📍 {EDUCATION_DATA.location}
            </div>
          </div>

          <div className="pt-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Key Academic Coursework & Disciplines
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {EDUCATION_DATA.coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-zinc-900/60 border border-white/5 text-xs text-zinc-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
