import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

        timeline
          .from(".hero-label", { y: 25, opacity: 0, duration: 0.7 })
          .from(".hero-title", { y: 60, opacity: 0, duration: 0.9 }, "-=0.35")
          .from(".hero-description", { y: 25, opacity: 0, duration: 0.6 }, "-=0.4")
          .from(".hero-buttons", { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
          .from(".hero-bottom", { opacity: 0, duration: 0.5 }, "-=0.2");
      },
      heroRef
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-svh overflow-hidden bg-[#172019] px-6 text-white md:px-12"
    >
      
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=70"
          srcSet="
    https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=70 800w,
    https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=70 1200w,
    https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=70 1800w
  "
          sizes="100vw"
          alt="Main building on the Tula's International School campus"
          width="1800"
          height="1200"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/20" />
      </div>

     
      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-7xl flex-col justify-end pb-8 pt-32 sm:pb-10 md:pb-12 lg:pb-14">
        <div className="max-w-5xl">
          <p className="hero-label mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-amber-300 sm:text-xs md:mb-5">
            Tula&apos;s International School
          </p>

          <h1 className="hero-title max-w-4xl text-[clamp(3.5rem,12vw,8.5rem)] font-medium leading-[0.9] tracking-[-0.05em]">
            Where
            <br />
            <span className="italic">curiosity</span>
            <br />
            leads.
          </h1>

          <p className="hero-description mt-6 max-w-xl text-sm leading-6 text-white/80 sm:text-base md:mt-7 md:leading-7">
            A place where curiosity leads, creativity thrives, and every
            student discovers new possibilities.
          </p>

          <div className="hero-buttons mt-6 flex flex-wrap items-center gap-3 md:mt-7">
            <a
              href="#about"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-amber-300 motion-safe:hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Explore TIS
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
                <ArrowUpRight
                  size={12}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>

            <a
              href="#admissions"
              className="inline-flex items-center rounded-full border border-white/35 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-black motion-safe:hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Admissions
            </a>
          </div>
        </div>

        
        <div className="hero-bottom mt-10 border-t border-white/20 pt-4 md:mt-12 md:pt-5">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-medium leading-none tracking-tight sm:text-4xl">
                22
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/60 sm:text-xs">
                Acres Campus
              </p>
            </div>

            <a
              href="#about"
              aria-label="Scroll to the next section"
              className="hidden items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:flex"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 sm:text-xs">
                Scroll to explore
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25">
                <ArrowDown
                  size={15}
                  aria-hidden="true"
                  className="motion-safe:animate-bounce"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;