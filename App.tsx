import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Background from './components/Background';
import { 
  Section1, 
  Section2, 
  Section3, 
  Section4, 
  Section5, 
  Section6, 
  Section7, 
  Section8 
} from './sections/GuideSections';
import { ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative bg-brand-dark min-h-screen text-white selection:bg-brand-primary selection:text-white">
      <Background />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero / Intro */}
      <header className="h-screen flex flex-col items-center justify-center relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-sm font-bold uppercase tracking-widest">
            Detailed Masterclass
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight">
            Complete AI Startup<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Guide With N8n
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
            A comprehensive, step-by-step roadmap from ideation to production. Learn how to build image generators and chatbots with no-code tools.
          </p>
          <button 
            onClick={scrollToNext}
            className="animate-bounce p-4 rounded-full bg-slate-800/50 border border-slate-700 hover:border-white transition-colors"
          >
            <ChevronDown size={24} />
          </button>
        </motion.div>
      </header>

      {/* Content Sections */}
      <main className="relative z-10 flex flex-col gap-32 pb-32">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 text-sm relative z-10 bg-black">
        <p>&copy; 2024 AI Startup Guide. All concepts belong to their respective creators.</p>
      </footer>
    </div>
  );
};

export default App;