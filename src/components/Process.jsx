import { useInView } from '../hooks/useInView';
import { processSteps } from '../data/projects';

export default function Process() {
  const { ref, isInView } = useInView();

  return (
    <section id="process" className="bg-dark-950">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="mb-12 text-center">
          <span className={`reveal ${isInView ? 'visible' : ''} block text-xs font-mono text-indigo-400 uppercase tracking-widest mb-3`}>
            // my process
          </span>
          <h2 className={`reveal reveal-delay-1 ${isInView ? 'visible' : ''} text-3xl sm:text-4xl font-bold text-white`}>
            How I work
          </h2>
          <p className={`reveal reveal-delay-2 ${isInView ? 'visible' : ''} mt-3 text-slate-400 text-base max-w-md mx-auto`}>
            Simple. Transparent. No surprises.
          </p>
        </div>

        {/* Steps — vertical on mobile, horizontal on desktop */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-0 relative">
          {/* Vertical connector line on mobile */}
          <div className="absolute left-7 top-12 bottom-12 w-px bg-gradient-to-b from-indigo-600/40 via-violet-600/40 to-transparent md:hidden" />

          {processSteps.map((step, i) => (
            <div
              key={step.title}
              className={`reveal ${isInView ? 'visible' : ''} process-connector flex md:flex-col items-start md:items-center gap-5 md:gap-4 flex-1 p-5 md:p-6 text-left md:text-center relative`}
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              {/* Step number + icon */}
              <div className="flex-shrink-0 relative">
                {/* Outer ring */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-violet-600/20 border border-indigo-500/20 flex items-center justify-center text-2xl relative z-10">
                  {step.icon}
                </div>
                {/* Step number badge */}
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold z-20">
                  {i + 1}
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1">
                <h3 className="text-white font-semibold text-base">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop connecting arrow line */}
        <div className="hidden md:block mt-0 relative">
          <div className="absolute -top-24 left-0 right-0 flex items-center px-28 pointer-events-none">
            <div
              className="flex-1 h-px"
              style={{
                background: 'linear-gradient(90deg, transparent, #4f46e5 20%, #7c3aed 80%, transparent)',
                opacity: 0.25,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
