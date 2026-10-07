import React from 'react';
import { RESEARCH_EXPERIENCE } from '../data/portfolioData';
import { Microscope, Cpu, ShieldCheck, BookOpen, Layers } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  const research = RESEARCH_EXPERIENCE[0];

  return (
    <section id="research" className="py-20 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-md bg-zinc-900 border border-white/10 text-white">
              <Microscope className="w-4 h-4 text-zinc-300" />
            </span>
            <span className="text-xs font-mono tracking-wider uppercase text-zinc-400">
              Academic Research Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Multimodal Edge AI & Deep Learning
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            Undergraduate Research Assistant at UKRIDA developing lightweight clinical diagnostic models engineered for resource-constrained edge hardware.
          </p>
        </div>

        {/* Main Research Card */}
        <div className="rounded-2xl border border-white/15 bg-[#0e0e11] p-7 sm:p-9 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                <span>{research.institution}</span>
                <span>•</span>
                <span>{research.period}</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {research.title}
              </h3>
              <p className="text-xs font-mono text-emerald-400">
                {research.role}
              </p>
            </div>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-1.5 shrink-0">
              {research.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Research Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-7">
            
            {/* Column 1: Modality Fusion */}
            <div className="flex flex-col gap-3 p-5 rounded-xl bg-zinc-900/60 border border-white/5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <Layers className="w-4 h-4 text-zinc-300" />
                <span>Cross-Modal Fusion</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Dual-branch PyTorch architecture combining visual Action Unit (AU) detection with TorchAudio acoustic strain representations to ensure accurate triage when visual cues are occluded.
              </p>
            </div>

            {/* Column 2: Edge Quantization */}
            <div className="flex flex-col gap-3 p-5 rounded-xl bg-zinc-900/60 border border-white/5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <Cpu className="w-4 h-4 text-zinc-300" />
                <span>Low-Resource Quantization</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Post-training INT8, ONNX Runtime, and TensorRT compilation pipelines targeting low-power embedded processors in rural clinic settings with zero cloud dependency.
              </p>
            </div>

            {/* Column 3: PRISMA Literature Review */}
            <div className="flex flex-col gap-3 p-5 rounded-xl bg-zinc-900/60 border border-white/5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <BookOpen className="w-4 h-4 text-zinc-300" />
                <span>PRISMA Systematic Review</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Rigorous multi-stage screening across 2,400+ clinical and deep learning publications to establish state-of-the-art benchmarks for multimodal behavioral diagnostics.
              </p>
            </div>

          </div>

          {/* Key Engineering Accomplishments */}
          <div className="mt-7 pt-6 border-t border-white/[0.08]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
              <span>Core Methodological Principles</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300">
              {research.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-zinc-500 font-mono select-none">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
