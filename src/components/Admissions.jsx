import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// TODO: replace with your real admissions form and campus-visit booking links
const APPLY_URL = "#";
const VISIT_URL = "#";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#172019]";

const Admissions = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        gsap.from(".admissions-content", {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        });

        gsap.from(".admissions-image", {
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        });

        // Zoom the photo inside its frame, not the frame itself
        gsap.from(".admissions-image img", {
          scale: 1.12,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
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
      id="admissions"
      ref={sectionRef}
      aria-labelledby="admissions-heading"
      className="relative overflow-hidden bg-[#172019] text-white"
    >
      
      <div className="px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="admissions-content flex flex-col justify-between md:min-h-[calc(80svh_-_14rem)] md:w-1/2 md:pr-12 lg:pr-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                Admissions
              </p>

              <h2
                id="admissions-heading"
                className="mt-8 max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.045em] md:text-6xl lg:text-7xl xl:text-8xl"
              >
                Begin your
                <br />
                <span className="italic text-amber-300">journey.</span>
              </h2>

              <p className="mt-8 max-w-lg text-base leading-7 text-white/70 md:text-lg">
                Discover a learning environment where curiosity, confidence and
                character can grow together.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={APPLY_URL}
                  className={`group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#172019] transition-all duration-300 hover:bg-amber-300 motion-safe:hover:-translate-y-1 ${focusRing}`}
                >
                  Apply Now
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href={VISIT_URL}
                  className={`inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:bg-white hover:text-[#172019] motion-safe:hover:-translate-y-1 ${focusRing}`}
                >
                  <MapPin size={16} aria-hidden="true" />
                  Visit Campus
                </a>
              </div>
            </div>

            <div className="mt-20 border-t border-white/15 pt-5">
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                Tula&apos;s International School
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="admissions-image relative h-[500px] overflow-hidden md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1600&q=85"
          alt="A bright library with floor-to-ceiling glass windows, tall bookshelves and round reading tables"
          width="1600"
          height="1067"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />

        
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent" />

        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
          <p className="text-xs uppercase tracking-[0.25em] text-white/80">
            Your next chapter
          </p>
          <p className="mt-2 text-2xl font-medium md:text-4xl">Starts here.</p>
        </div>
      </div>
    </section>
  );
};

export default Admissions;