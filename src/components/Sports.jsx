import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const sports = [
  "Archery",
  "Cycling",
  "Hockey",
  "Swimming",
  "Taekwondo",
  "Football",
  "Shooting",
  "Horse Riding",
  "Squash",
  "Volleyball",
  "Basketball",
  "Cricket",
  "Lawn Tennis",
  "Badminton",
  "Table Tennis",
];

const Sports = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        gsap.from(".sports-intro", {
          y: 70,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".sports-intro",
            start: "top 85%",
            once: true,
          },
        });

        gsap.from(".sports-image", {
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".sports-image",
            start: "top 85%",
            once: true,
          },
        });

        
        gsap.from(".sports-image img", {
          scale: 1.12,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".sports-image",
            start: "top 85%",
            once: true,
          },
        });

        gsap.from(".sport-name", {
          y: 24,
          opacity: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".sports-list",
            start: "top 85%",
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
      id="sports"
      ref={sectionRef}
      className="scroll-mt-24 overflow-hidden bg-[#172019] px-6 py-24 text-white md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
       
        <div className="sports-intro grid gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Sports
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="max-w-5xl text-balance text-4xl font-medium leading-[1.02] tracking-[-0.04em] md:text-6xl lg:text-8xl">
              It&apos;s not just a facility.
              <span className="block italic text-amber-300">
                It&apos;s a foundation.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/70 md:text-lg">
              Sports at TIS are designed to build discipline, teamwork,
              confidence and well-being alongside academic growth.
            </p>
          </div>
        </div>

   
        <a
          href="#admissions"
          className="sports-image group relative mt-16 block h-[55svh] min-h-[420px] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#172019] md:mt-20 md:h-[70svh]"
        >
          <img
            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1800&q=85"
            alt="A sprinter crouched in the starting blocks on a red running track"
            width="1800"
            height="1200"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
          />

          
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/5" />

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 md:p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/75">
                TIS Sports
              </p>
              <p className="mt-2 text-3xl font-medium md:text-5xl">
                Train. Compete. Grow.
              </p>
            </div>

            <span
              aria-hidden="true"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-black transition-colors duration-300 group-hover:bg-amber-300"
            >
              <ArrowUpRight size={22} />
            </span>
          </div>
        </a>

       
        <ul className="sports-list mt-16 grid border-t border-white/15 md:mt-20 md:grid-cols-2">
          {sports.map((sport, index) => (
            <li
              key={sport}
              className="sport-name group flex items-center gap-5 border-b border-white/15 py-5 md:odd:pr-8 md:even:pl-8"
            >
              <span className="w-6 text-xs tabular-nums text-white/50">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-xl transition-transform duration-300 motion-safe:group-hover:translate-x-2 md:text-2xl">
                {sport}
              </span>
            </li>
          ))}

         
          {sports.length % 2 !== 0 && (
            <li
              aria-hidden="true"
              className="hidden border-b border-white/15 md:block"
            />
          )}
        </ul>
      </div>
    </section>
  );
};

export default Sports;