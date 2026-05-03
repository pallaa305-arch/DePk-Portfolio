import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  const formRef = useRef(null);
  const characterRef = useRef(null);
  const glowRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useGSAP(() => {
    // Character entrance
    gsap.fromTo(
      characterRef.current,
      { x: 100, opacity: 0, scale: 0.8 },
      { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.4)",
        scrollTrigger: { trigger: "#contact", start: "top center" }
      }
    );

    // Floating animation
    gsap.to(characterRef.current, {
      y: -12,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.2
    });

    // Glow pulse
    gsap.to(glowRef.current, {
      opacity: 0.5,
      scale: 1.1,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      );

      // Trigger default email client
      window.location.href = `mailto:Seepallaa@gmail.com?subject=${subject}&body=${body}`;

      // Reset form and show success state
      setForm({ name: "", email: "", message: "" });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error opening email client:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let's Connect"
          sub="💬 Have questions or ideas? Let's talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className={`cta-button group ${success ? 'border-emerald-500/50' : ''}`}>
                    <div className={success ? "bg-emerald-500/10 absolute inset-0 rounded-full" : "bg-circle"} />
                    <p className={`text ${success ? 'text-emerald-400' : ''}`}>
                      {loading ? "Preparing..." : success ? "Opening Email App 🚀" : "Send Message"}
                    </p>
                    {!success && (
                      <div className="arrow-wrapper">
                        <img src="/images/arrow-down.svg" alt="arrow" />
                      </div>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full rounded-3xl overflow-hidden flex items-center justify-center relative bg-gradient-to-br from-violet-900/30 via-slate-900/50 to-blue-900/30">
              {/* Glow effect */}
              <div 
                ref={glowRef}
                className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-blue-500/20 rounded-3xl blur-[60px]"
              />
              <img 
                ref={characterRef}
                src="/images/contact-cartoon.png" 
                alt="Contact Character" 
                className="absolute inset-0 w-full h-full object-cover z-10 drop-shadow-[0_15px_50px_rgba(139,92,246,0.35)] opacity-85 scale-110"
                style={{ maskImage: 'radial-gradient(ellipse 80% 80% at center, black 50%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at center, black 50%, transparent 100%)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
