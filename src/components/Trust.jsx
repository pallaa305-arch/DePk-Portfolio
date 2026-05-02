import { useInView } from '../hooks/useInView';
import { ShieldCheck, ExternalLink, Quote } from 'lucide-react';
import { developerInfo } from '../data/projects';

const trustItems = [
  {
    id: 'github-link',
    label: 'GitHub Profile',
    desc: 'Browse all my repositories and commit history',
    href: developerInfo.github,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: 'hover:border-white/20 hover:bg-white/5',
  },
  {
    id: 'live-deploy-link',
    label: 'Live Deployments',
    desc: 'Every project shown has a working live URL',
    href: '#projects',
    icon: <ExternalLink size={20} />,
    color: 'hover:border-indigo-500/40 hover:bg-indigo-500/5',
  },
];

const testimonials = [
  {
    name: 'Sarah T.',
    role: 'Startup Founder',
    text: "Alex delivered exactly what he promised — on time, no excuses. The app actually works and looks great on mobile.",
  },
  {
    name: 'Marco R.',
    role: 'E-commerce Owner',
    text: "Finally a developer who doesn't over-promise. Clean code, fast site, and he explained every decision.",
  },
];

export default function Trust() {
  const { ref, isInView } = useInView();

  return (
    <section id="trust" className="bg-dark-900">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="mb-12 text-center">
          <span className={`reveal ${isInView ? 'visible' : ''} block text-xs font-mono text-indigo-400 uppercase tracking-widest mb-3`}>
            // proof & trust
          </span>
          <h2 className={`reveal reveal-delay-1 ${isInView ? 'visible' : ''} text-3xl sm:text-4xl font-bold text-white`}>
            Why trust me?
          </h2>
          <p className={`reveal reveal-delay-2 ${isInView ? 'visible' : ''} mt-3 text-slate-400 text-base max-w-lg mx-auto`}>
            Good question. Here's the evidence — not just words.
          </p>
        </div>

        {/* Trust Statement Banner */}
        <div className={`reveal reveal-delay-3 ${isInView ? 'visible' : ''} mb-10`}>
          <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left border border-indigo-500/20">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-400">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-white font-semibold text-base sm:text-lg">
                All projects shown here are real and built by me.
              </p>
              <p className="text-slate-400 text-sm mt-1">
                Every screenshot, every live link, every line of code — mine. You can verify on GitHub.
              </p>
            </div>
          </div>
        </div>

        {/* Proof links */}
        <div className={`reveal ${isInView ? 'visible' : ''} grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12`} style={{ transitionDelay: '0.35s' }}>
          {trustItems.map((item) => (
            <a
              key={item.id}
              id={item.id}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`glass-card rounded-xl p-5 flex items-start gap-4 border border-white/5 transition-all duration-200 touch-target group ${item.color}`}
            >
              <span className="text-slate-400 group-hover:text-indigo-400 transition-colors mt-0.5">
                {item.icon}
              </span>
              <div>
                <p className="text-white font-medium text-sm">{item.label}</p>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-4">
          <p className={`reveal ${isInView ? 'visible' : ''} text-xs font-mono text-slate-600 uppercase tracking-widest mb-6 text-center`} style={{ transitionDelay: '0.4s' }}>
            What clients say
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`reveal ${isInView ? 'visible' : ''} glass-card rounded-2xl p-6 relative`}
                style={{ transitionDelay: `${0.45 + i * 0.1}s` }}
              >
                <Quote size={20} className="text-indigo-500/40 mb-3" />
                <p className="text-slate-300 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white text-xs font-medium">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
