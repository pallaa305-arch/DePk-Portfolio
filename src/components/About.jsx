import { useInView } from '../hooks/useInView';
import { developerInfo } from '../data/projects';
import { Code2, Layers, Zap } from 'lucide-react';

const skills = [
  { icon: <Code2 size={16} />, label: 'Frontend', desc: 'React, Next.js, Tailwind' },
  { icon: <Layers size={16} />, label: 'Backend', desc: 'Node.js, Express, PostgreSQL' },
  { icon: <Zap size={16} />, label: 'Deploy', desc: 'Vercel, Docker, CI/CD' },
];

export default function About() {
  const { ref: sectionRef, isInView } = useInView();

  return (
    <section id="about" ref={sectionRef} className="bg-dark-900 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className={`reveal ${isInView ? 'visible' : ''} mb-4`}>
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
            // about me
          </span>
        </div>

        {/* Main content — image + text */}
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
          {/* Profile Image */}
          <div className={`reveal ${isInView ? 'visible' : ''} flex-shrink-0 flex justify-center md:justify-start`}>
            <div className="relative">
              {/* Ring decoration */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
                  padding: '3px',
                  borderRadius: '50%',
                }}
              >
                <div className="w-full h-full rounded-full bg-dark-900" />
              </div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=280&h=280&fit=crop&q=80&auto=format"
                alt="Alex Dev — Frontend Developer"
                loading="lazy"
                width={180}
                height={180}
                className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full object-cover"
                style={{ border: '3px solid transparent', outline: '3px solid #4f46e5' }}
              />
              {/* Status badge */}
              <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-dark-800 border border-white/10 rounded-full px-3 py-1 text-xs font-medium text-green-400 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to work
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5">
            <h2 className={`reveal reveal-delay-1 ${isInView ? 'visible' : ''} text-3xl sm:text-4xl font-bold text-white leading-tight`}>
              Building apps that{' '}
              <span className="gradient-text">actually work.</span>
            </h2>

            <p className={`reveal reveal-delay-2 ${isInView ? 'visible' : ''} text-slate-400 text-base sm:text-lg leading-relaxed`}>
              {developerInfo.bio}
            </p>

            <p className={`reveal reveal-delay-3 ${isInView ? 'visible' : ''} text-slate-500 text-sm leading-relaxed`}>
              I care about performance, accessibility, and writing code that the next developer can understand. I've shipped apps used by real people — and I stand behind every line.
            </p>

            {/* Skill chips */}
            <div className={`reveal reveal-delay-4 ${isInView ? 'visible' : ''} flex flex-wrap gap-3 mt-1`}>
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="glass-card flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm"
                >
                  <span className="text-indigo-400">{skill.icon}</span>
                  <div>
                    <div className="text-white font-medium text-xs">{skill.label}</div>
                    <div className="text-slate-500 text-xs">{skill.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
