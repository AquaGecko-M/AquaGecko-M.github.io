import React from 'react';
import { GSA_DATA } from '../data/portfolioData';
import { Award, ArrowUpRight, Globe, Users } from 'lucide-react';

export const GsaBadge: React.FC = () => {
  return (
    <section id="recognition" className="py-12 border-b border-white/[0.06] bg-[#0c0c0e]/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-r from-zinc-950 via-[#111115] to-zinc-950 p-6 sm:p-8 shadow-xl">
          
          {/* Subtle background ambient ring */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-white/[0.03] blur-2xl pointer-events-none"></div>

          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Left: Content */}
            <div className="flex flex-col gap-3 max-w-2xl">
              <div className="flex items-center gap-2.5">
                <span className="p-2 rounded-lg bg-white text-black">
                  <Award className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono tracking-wider uppercase text-zinc-400">
                  Featured Leadership & Community
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span>{GSA_DATA.title}</span>
                  <span className="text-xs font-mono font-normal px-2.5 py-0.5 rounded-full border border-white/20 text-zinc-300 bg-white/5">
                    {GSA_DATA.cohort}
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-1">
                  {GSA_DATA.summary}
                </p>
              </div>

              {/* Pillars */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-[11px] font-mono text-zinc-300">
                  <Globe className="w-3 h-3 text-zinc-400" />
                  Google Cloud & AI
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-[11px] font-mono text-zinc-300">
                  <Users className="w-3 h-3 text-zinc-400" />
                  Campus Developer Impact
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-[11px] font-mono text-zinc-300">
                  Gemini API & LLM Workflows
                </span>
              </div>
            </div>

            {/* Right: Instagram Announcement CTA */}
            <div className="flex md:flex-col items-center justify-end shrink-0">
              <a
                href={GSA_DATA.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all active:scale-95 shadow-md group"
              >
                <span>View Announcement</span>
                <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
