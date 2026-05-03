import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";

const TechStack = () => {
  useGSAP(() => {
    // Staggered entrance animation
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );

    // Continuous subtle bounce for each icon
    document.querySelectorAll(".tech-icon-img").forEach((icon, i) => {
      gsap.to(icon, {
        y: -8,
        duration: 1.5 + (i * 0.3),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      });
    });
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="tech-grid">
          {techStackImgs.map((techStackIcon, index) => (
            <div key={index} className="flex flex-col items-center gap-4 tech-card">
              <div
                className="card-border overflow-hidden group rounded-full cursor-pointer aspect-square flex items-center justify-center w-28 h-28 md:w-36 md:h-36 relative"
              >
                <div className="tech-card-animated-bg rounded-full" />
                <div className="flex items-center justify-center relative z-10">
                  <img 
                    src={techStackIcon.imgPath} 
                    alt={techStackIcon.name} 
                    className="tech-icon-img w-14 h-14 md:w-18 md:h-18 object-contain drop-shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_25px_rgba(139,92,246,0.7)]" 
                  />
                </div>
              </div>
              <p className="text-white-50 text-sm md:text-base font-medium text-center transition-colors duration-300 hover:text-violet-400">{techStackIcon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
