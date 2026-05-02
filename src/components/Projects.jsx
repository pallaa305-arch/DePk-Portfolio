import { useInView } from '../hooks/useInView';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="bg-dark-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className="mb-12 text-center sm:text-left">
          <span className={`reveal ${isInView ? 'visible' : ''} block text-xs font-mono text-indigo-400 uppercase tracking-widest mb-3`}>
            // projects
          </span>
          <h2 className={`reveal reveal-delay-1 ${isInView ? 'visible' : ''} text-3xl sm:text-4xl font-bold text-white leading-tight`}>
            Things I've actually built
          </h2>
          <p className={`reveal reveal-delay-2 ${isInView ? 'visible' : ''} mt-3 text-slate-400 text-base max-w-xl`}>
            Each one is live, functional, and built from scratch. Click the live demo links — they work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`reveal ${isInView ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>

        {/* CTA to GitHub */}
        <div className={`reveal ${isInView ? 'visible' : ''} mt-10 text-center`} style={{ transitionDelay: '0.5s' }}>
          <p className="text-slate-500 text-sm mb-4">Want to see the code behind these?</p>
          <a
            href="https://github.com/alexdev"
            target="_blank"
            rel="noopener noreferrer"
            id="projects-github-btn"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white glass-card rounded-xl hover:bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-200 touch-target"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
