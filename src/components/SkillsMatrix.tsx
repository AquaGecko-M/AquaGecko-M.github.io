import React, { useState } from 'react';
import { SKILL_CATEGORIES, EDUCATION_DATA } from '../data/portfolioData';
import { Code2, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SkillsMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const filteredCategories = activeTab === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.name.toLowerCase().includes(activeTab.toLowerCase()));

  const tabs = ['All', 'AI & Machine Learning', 'Systems & Backend', 'Mobile & Frontend', 'Languages & Tools'];

  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-zinc-900 border border-white/10 text-white">
                <Code2 className="w-3.5 h-3.5 text-zinc-300" />
              </span>
              <span className="text-xs font-mono tracking-wider uppercase text-zinc-400">
                Stack & Knowledge
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Technical Arsenal
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-zinc-900 border border-white/10 w-fit">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  activeTab === tab
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat) => (
              <motion.div
                layout
                key={cat.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-white/10 bg-[#0e0e11] p-5 flex flex-col justify-between shadow-xl"
              >
                <div className="flex flex-col gap-3">
                  <div className="pb-2.5 border-b border-white/[0.08]">
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] text-zinc-400 leading-snug pt-0.5">
                      {cat.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-2 py-0.5 rounded text-xs font-mono transition-all ${
                          skill.highlight
                            ? 'bg-zinc-800 text-white border border-white/15 font-medium'
                            : 'bg-zinc-900 text-zinc-400 border border-white/5'
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Education Spotlight */}
        <div className="rounded-2xl border border-white/10 bg-[#0e0e11] p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-white text-black shrink-0">
              <GraduationCap className="w-4 h-4" />
            </span>
            <div className="flex flex-col">
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                {EDUCATION_DATA.institution}
              </h3>
              <p className="text-xs text-zinc-400">
                {EDUCATION_DATA.degree} • <span className="font-mono text-zinc-300">{EDUCATION_DATA.period}</span>
              </p>
            </div>
          </div>

          <div className="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 w-fit">
            {EDUCATION_DATA.location}
          </div>
        </div>

      </div>
    </section>
  );
};
