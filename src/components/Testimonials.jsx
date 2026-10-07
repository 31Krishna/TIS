import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "We feel supported in what we do and nudged further to do more.",
    text: "At Tulas, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. With the right support and inspiration, creativity finds its way.",
    author: "TIS Community",
  },
  {
    quote: "Tulas helped me thrive and become the best version of myself.",
    text: "When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine.",
    author: "TIS Student",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        gsap.from(".testimonial-heading", {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonial-heading",
            start: "top 85%",
            once: true,
          },
        });

        gsap.from(".testimonial-card", {
          y: 70,
          opacity: 0,
          duration: 1,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonial-grid",
            start: "top 80%",
            once: true,
          },
        });
      },
      sectionRef
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      aria-labelledby="testimonials-heading"
      className="scroll-mt-24 bg-[#f7f5ef] px-6 py-24 text-[#172019] md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        
        <div className="testimonial-heading grid gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#172019]/60">
              Voices of TIS
            </p>
          </div>

          <div className="md:col-span-8">
            <h2
              id="testimonials-heading"
              className="max-w-5xl text-balance text-4xl font-medium leading-[1.02] tracking-[-0.04em] md:text-6xl lg:text-7xl"
            >
              A place to learn,
              <span className="italic"> belong and grow.</span>
            </h2>
          </div>
        </div>

        
        <div className="testimonial-grid mt-16 grid gap-5 md:mt-20 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <figure
              key={item.quote}
              className="testimonial-card group relative flex flex-col overflow-hidden rounded-[2rem] bg-[#172019] p-8 text-white md:p-12"
            >
              <div className="flex items-start justify-between">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-300 text-[#172019]"
                >
                  <Quote size={20} />
                </span>

                <span
                  aria-hidden="true"
                  className="text-xs tabular-nums tracking-[0.2em] text-white/50"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <blockquote className="mt-16 max-w-xl text-balance text-3xl font-medium leading-tight tracking-[-0.025em] md:text-4xl">
                “{item.quote}”
              </blockquote>

              <p className="mt-8 max-w-lg text-sm leading-7 text-white/70 md:text-base">
                {item.text}
              </p>

              
              <figcaption className="mt-auto pt-12">
                <div className="border-t border-white/15 pt-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                    {item.author}
                  </p>
                </div>
              </figcaption>

             
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full border border-white/10 transition-transform duration-700 motion-safe:group-hover:scale-125"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;