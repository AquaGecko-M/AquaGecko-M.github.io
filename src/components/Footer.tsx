import React, { useState } from 'react';
import { PERSONAL_INFO, GSA_DATA } from '../data/portfolioData';
import { Mail, Check, ArrowUp, Gamepad2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export const Footer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#060608] border-t border-white/[0.08] text-xs text-zinc-400">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          
          {/* Brand & Status */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <span className="font-bold text-base text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-900 border border-white/10 text-[11px] font-mono text-zinc-300">
                michaeltandeas.me
              </span>
            </div>
            <p className="text-zinc-500 max-w-sm leading-relaxed">
              Open to AI, Machine Learning, and Software Engineering internship roles. Feel free to connect or drop an email.
            </p>
          </div>

          {/* Social Icons & Email CTA */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 text-zinc-200 hover:text-white border border-white/10 hover:border-white/20 transition-all text-xs active:scale-95"
              title="Click to copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-mono">Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={GSA_DATA.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram GSA Announcement"
              className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 transition-all"
              title="Google Student Ambassador Post"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.greenfootProfile}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Greenfoot Profile"
              className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 transition-all"
              title="DeNeLauSe Greenfoot Game"
            >
              <Gamepad2 className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-zinc-500 font-mono text-[11px]">
            © {new Date().getFullYear()} Michael Tandeas • Built with React 19, TypeScript & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors font-mono text-[11px] p-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
