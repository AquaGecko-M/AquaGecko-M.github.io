import React from 'react';
import { GSA_DATA } from '../data/portfolioData';
import { Award, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const GsaBadge: React.FC = () => {
  return (
    <section id="recognition" className="py-8 sm:py-10 border-b border-white/[0.06] bg-[#0c0c0e]/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#0d0d10] via-[#121216] to-[#0d0d10] p-5 sm:p-6 shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Left Info */}
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-white text-black shrink-0">
                <Award className="w-5 h-5" />
              </div>

              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {GSA_DATA.title}
                  </h2>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-white/15 text-zinc-300 bg-white/5">
                    {GSA_DATA.cohort}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 pt-0.5 max-w-xl">
                  {GSA_DATA.summary}
                </p>
              </div>
            </div>

            {/* Right Link */}
            <div className="shrink-0 flex items-center gap-2 pt-2 md:pt-0">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={GSA_DATA.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs shadow-sm"
              >
                <span>Announcement</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-black" />
              </motion.a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
