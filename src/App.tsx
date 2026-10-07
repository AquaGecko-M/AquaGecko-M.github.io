import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GsaBadge } from './components/GsaBadge';
import { ResearchSection } from './components/ResearchSection';
import { ProjectsBento } from './components/ProjectsBento';
import { GameLab } from './components/GameLab';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col font-sans selection:bg-white selection:text-black relative bg-grid-pattern">
      {/* Top Navbar */}
      <Header onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <GsaBadge />
        <ResearchSection />
        <ProjectsBento />
        <GameLab />
        <SkillsMatrix />
      </main>

      {/* Footer */}
      <Footer />

      {/* In-Browser ATS Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

export default App;
