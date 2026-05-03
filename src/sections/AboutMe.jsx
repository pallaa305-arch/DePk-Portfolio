import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { developerInfo } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const skillsRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".skill-pill",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.05,
        duration: 0.4,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full px-5 md:px-20 py-20 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-50 text-sm md:text-base uppercase tracking-widest mb-3">
            👋 Get to know me
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
          </h2>
        </div>

        {/* Main Content */}
        <div
          ref={cardRef}
          className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start"
        >
          {/* Photo + Quick Info */}
          <div className="xl:col-span-4 flex flex-col items-center">
            {/* Photo placeholder — will be replaced with actual photo */}
            <div className="relative group mb-6">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-black-200 shadow-2xl shadow-purple-500/10 group-hover:border-purple-500/50 transition-all duration-500 bg-black-200">
                <img
                  id="about-photo"
                  src="/images/profile.png"
                  alt="DePk KaTaRia"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
              {developerInfo.name}
            </h3>
            <p className="text-blue-50 text-sm md:text-base mt-2 text-center max-w-xs">
              {developerInfo.role}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={developerInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-black-100 border border-black-50 flex items-center justify-center hover:bg-black-200 hover:border-purple-500/40 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-white-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={developerInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-black-100 border border-black-50 flex items-center justify-center hover:bg-black-200 hover:border-blue-500/40 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-white-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={`mailto:${developerInfo.email}`}
                className="w-10 h-10 rounded-lg bg-black-100 border border-black-50 flex items-center justify-center hover:bg-black-200 hover:border-red-500/40 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-white-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href={developerInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-black-100 border border-black-50 flex items-center justify-center hover:bg-black-200 hover:border-green-500/40 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-white-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bio + About Points + Skills */}
          <div className="xl:col-span-8 flex flex-col gap-8">
            {/* Bio */}
            <div className="bg-black-100 border border-black-50 rounded-2xl p-6 md:p-8">
              <p className="text-white-50 text-base md:text-lg leading-relaxed">
                {developerInfo.bio}
              </p>
            </div>

            {/* About Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {developerInfo.about.map((point, index) => (
                <div
                  key={index}
                  className="bg-black-100 border border-black-50 rounded-xl p-4 hover:border-purple-500/30 transition-all duration-300 hover:bg-black-200"
                >
                  <p className="text-white-50 text-sm md:text-base">{point}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div ref={skillsRef}>
              <h4 className="text-white text-lg font-semibold mb-4">
                🛠️ Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {developerInfo.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill px-3 py-1.5 text-xs md:text-sm font-medium rounded-full bg-black-200 border border-black-50 text-white-50 hover:border-purple-500/40 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-5">
              <p className="text-white-50 text-sm md:text-base italic">
                ⚡ <span className="text-white font-medium">Fun Fact:</span>{" "}
                "{developerInfo.tagline}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
