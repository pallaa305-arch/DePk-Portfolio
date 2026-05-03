import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import { developerInfo } from "../data/projects";

const Hero = () => {
  const imgRef = useRef(null);
  const glowRef = useRef(null);

  useGSAP(() => {
    // Text entrance animation
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );

    // Hero image entrance - scale up from small
    gsap.fromTo(
      imgRef.current,
      { scale: 0.6, opacity: 0, y: 80 },
      { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "back.out(1.7)", delay: 0.5 }
    );

    // Continuous floating animation
    gsap.to(imgRef.current, {
      y: -15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.7
    });

    // Glow pulse animation
    gsap.to(glowRef.current, {
      opacity: 0.6,
      scale: 1.15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Subtle rotation wobble
    gsap.to(imgRef.current, {
      rotateZ: 2,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.7
    });
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 text-base md:text-xl relative z-10 pointer-events-none">
              Hi, I'm {developerInfo.name}. {developerInfo.role}
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
              onClick={() => {
                document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>
        </header>

        {/* RIGHT: Cartoon Character */}
        <figure className="flex items-center justify-center xl:w-[45%] w-full mt-10 xl:mt-0 relative z-20">
          <div className="relative">
            {/* Glow effect behind character */}
            <div 
              ref={glowRef}
              className="absolute inset-0 bg-gradient-to-r from-violet-600/30 via-blue-500/20 to-purple-600/30 rounded-full blur-[80px] scale-110"
            />
            <img 
              ref={imgRef}
              src="/images/hero-cartoon.png" 
              alt="Developer Character" 
              className="w-full max-w-[550px] h-auto object-contain relative z-10 drop-shadow-[0_20px_60px_rgba(139,92,246,0.4)] opacity-85"
              style={{ maskImage: 'radial-gradient(circle at center, black 40%, transparent 65%)', WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 65%)' }}
            />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
