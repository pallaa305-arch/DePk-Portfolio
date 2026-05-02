import { ChevronDown, ArrowRight } from 'lucide-react';
import { developerInfo } from '../data/projects';

export default function Hero() {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="hero-gradient noise-overlay min-h-screen flex flex-col items-center justify-center text-center relative px-4 pt-20 pb-12"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 10s ease-in-out infinite 2s',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-indigo-300 border border-indigo-500/30 bg-indigo-500/10"
          style={{ animation: 'fadeInUp 0.5s ease-out forwards' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse-slow" />
          Available for work
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] glow-text"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.1s forwards', opacity: 0 }}
        >
          Hi, I'm{' '}
          <span className="gradient-text">{developerInfo.name}</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium max-w-xl leading-relaxed"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.2s forwards', opacity: 0 }}
        >
          {developerInfo.tagline}
        </p>

        {/* Sub-description */}
        <p
          className="text-sm sm:text-base text-slate-500 max-w-md leading-relaxed"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.3s forwards', opacity: 0 }}
        >
          {developerInfo.role} · Real projects · Real results
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.4s forwards', opacity: 0 }}
        >
          <button
            id="hero-view-work-btn"
            onClick={() => scrollToSection('#projects')}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 touch-target text-base"
          >
            View My Work
            <ArrowRight size={16} />
          </button>
          <button
            id="hero-contact-btn"
            onClick={() => scrollToSection('#contact')}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 touch-target text-base border border-white/10 hover:bg-white/5 hover:border-white/20"
          >
            Contact Me
          </button>
        </div>

        {/* Trust line */}
        <p
          className="text-xs text-slate-600 mt-4 flex items-center gap-2"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.5s forwards', opacity: 0 }}
        >
          <span className="w-8 h-px bg-slate-700" />
          No fake stats. No inflated claims. Just real work.
          <span className="w-8 h-px bg-slate-700" />
        </p>
      </div>

      {/* Scroll hint */}
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-slate-400 transition-colors touch-target"
        onClick={() => scrollToSection('#about')}
        aria-label="Scroll down"
        style={{ animation: 'float 2.5s ease-in-out infinite' }}
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
