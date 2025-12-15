import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

// --- Types ---
export interface CardProps {
  title: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
  delay?: number;
}

// --- 3D Card Component ---
export const TiltCard: React.FC<CardProps> = ({ title, children, icon: Icon, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, type: "spring" }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full rounded-xl bg-gradient-to-br from-brand-card to-slate-900 border border-slate-800 p-6 shadow-xl hover:shadow-brand-secondary/20 transition-shadow ${className}`}
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10 h-full flex flex-col">
        {Icon && (
          <div className="mb-4 w-12 h-12 rounded-lg bg-brand-secondary/20 flex items-center justify-center text-brand-secondary">
            <Icon size={24} />
          </div>
        )}
        <h3 className="text-xl font-display font-bold text-white mb-2">{title}</h3>
        <div className="text-slate-400 text-sm leading-relaxed flex-grow">
          {children}
        </div>
      </div>
      
      {/* Glossy Overlay */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)'
        }}
      />
    </motion.div>
  );
};

// --- Section Title ---
export const SectionTitle: React.FC<{ number: string; title: string; subtitle?: string }> = ({ number, title, subtitle }) => (
  <div className="mb-12 md:mb-20 text-center md:text-left">
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-4 justify-center md:justify-start"
    >
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary font-bold border border-brand-primary/20">
        {number}
      </span>
      <div className="h-px w-20 bg-gradient-to-r from-brand-primary/50 to-transparent"></div>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-slate-400 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// --- Glowing Button ---
export const GlowButton: React.FC<{ children: React.ReactNode; onClick?: () => void; primary?: boolean }> = ({ children, onClick, primary = true }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`relative px-8 py-3 rounded-full font-bold text-sm tracking-wide uppercase transition-all
      ${primary 
        ? 'bg-brand-primary text-white shadow-[0_0_20px_rgba(255,79,89,0.3)] hover:shadow-[0_0_30px_rgba(255,79,89,0.5)]' 
        : 'bg-transparent border border-brand-secondary text-brand-secondary hover:bg-brand-secondary/10'
      }
    `}
  >
    {children}
  </motion.button>
);