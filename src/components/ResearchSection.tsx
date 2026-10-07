import React from 'react';
import { RESEARCH_EXPERIENCE } from '../data/portfolioData';
import { Microscope, Cpu, Layers, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export const ResearchSection: React.FC = () => {
  const research = RESEARCH_EXPERIENCE[0];

  return (
    <section id="research" className="py-16 sm:py-20 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-1.5 mb-10">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-zinc-900 border border-white/10 text-white">
              <Microscope className="w-3.5 h-3.5 text-zinc-300" />
            </span>
            <span className="text-xs font-mono tracking-wider uppercase text-zinc-400">
              Academic Research
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Multimodal Edge AI
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Lightweight clinical diagnostic models designed for resource-constrained edge hardware.
          </p>
        </div>

        {/* Main Card */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl border border-white/10 bg-[#0e0e11] p-6 sm:p-8 shadow-xl relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
            <div>
              <span className="text-xs font-mono text-zinc-400">
                {research.institution} • {research.period}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-1">
                {research.title}
              </h3>
              <p className="text-xs font-mono text-emerald-400 pt-0.5">
                {research.role}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 shrink-0">
              {research.tags.slice(0, 4).map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
            
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm">
                <Layers className="w-4 h-4 text-zinc-400" />
                <span>Cross-Modal Fusion</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                PyTorch visual Action Unit cues fused with TorchAudio acoustic strain signals.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm">
                <Cpu className="w-4 h-4 text-zinc-400" />
                <span>Edge Quantization</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Post-training INT8, ONNX, and TensorRT compilation for low-power edge triage.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm">
                <BookOpen className="w-4 h-4 text-zinc-400" />
                <span>PRISMA Review</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Systematic screening across 2,400+ clinical and algorithmic studies.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
