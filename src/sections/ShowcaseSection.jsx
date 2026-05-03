import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../data/projects";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    gsap.utils.toArray(".project-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.15 * (index % 3),
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=80",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="w-full px-5 md:px-20 py-16 md:py-28">
      <TitleHeader
        title="My Recent Work"
        sub="🚀 Real Projects, Real Results"
      />

      {/* Featured Project — first project is big */}
      <div className="mt-16 mb-12">
        <div className="project-card group relative rounded-2xl overflow-hidden border border-black-50 bg-black-100 hover:border-purple-500/30 transition-all duration-500">
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="relative h-64 md:h-80 xl:h-full overflow-hidden">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent xl:bg-gradient-to-r" />
            </div>
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[0].tags.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                {projects[0].title}
              </h2>
              <p className="text-white-50 text-sm md:text-base mb-3">
                <span className="text-red-400 font-medium">Problem:</span> {projects[0].problem}
              </p>
              <p className="text-white-50 text-sm md:text-base mb-6">
                <span className="text-green-400 font-medium">Solution:</span> {projects[0].solution}
              </p>
              <div className="flex gap-3">
                <a
                  href={projects[0].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-white-50 transition-colors duration-300"
                >
                  View Live ↗
                </a>
                <a
                  href={projects[0].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-black-200 border border-black-50 text-white-50 font-semibold text-sm hover:border-white/20 transition-colors duration-300"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the projects in a grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.slice(1).map((project) => (
          <div
            key={project.id}
            className="project-card group relative rounded-2xl overflow-hidden border border-black-50 bg-black-100 hover:border-purple-500/30 transition-all duration-500 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-48 md:h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-100 to-transparent" />
              {/* Tags floating on image */}
              <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] md:text-xs font-medium rounded-full bg-black/70 backdrop-blur-sm text-white-50 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-0.5 text-[10px] md:text-xs rounded-full bg-black/70 backdrop-blur-sm text-white-50 border border-white/10">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-white-50 text-sm leading-relaxed mb-4 flex-1">
                {project.solution}
              </p>

              {/* Links */}
              <div className="flex items-center gap-3 pt-3 border-t border-black-50">
                <span
                  className="text-sm font-medium text-slate-500 flex items-center gap-1 cursor-not-allowed opacity-60"
                >
                  🚧 Coming Soon
                </span>
                <span className="text-black-50">|</span>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white-50 hover:text-white transition-colors duration-300 flex items-center gap-1"
                >
                  Code
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppShowcase;
