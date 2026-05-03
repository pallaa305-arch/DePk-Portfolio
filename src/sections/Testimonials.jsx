import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        <div className="relative mt-16 w-full">
          <div className="gradient-edge z-10" />
          <div className="gradient-edge z-10 right-0 left-auto" />
          
          <div className="marquee h-[400px] md:h-[350px]">
            <div className="marquee-box gap-5">
              {testimonials.map((testimonial, index) => (
                <div key={`first-${index}`} className="w-[300px] sm:w-[450px] flex-none">
                  <GlowCard card={testimonial} index={index}>
                    <div className="flex items-center gap-3">
                      <div>
                        <img src={testimonial.imgPath} alt="" />
                      </div>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-white-50">{testimonial.mentions}</p>
                      </div>
                    </div>
                  </GlowCard>
                </div>
              ))}
              {testimonials.map((testimonial, index) => (
                <div key={`second-${index}`} className="w-[300px] sm:w-[450px] flex-none">
                  <GlowCard card={testimonial} index={index}>
                    <div className="flex items-center gap-3">
                      <div>
                        <img src={testimonial.imgPath} alt="" />
                      </div>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-white-50">{testimonial.mentions}</p>
                      </div>
                    </div>
                  </GlowCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
