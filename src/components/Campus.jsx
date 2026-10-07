import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const campusCards = [
  {
    number: "01",
    title: "Campus Life",
    description:
      "A vibrant environment where students learn, connect and grow beyond the classroom.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85",
    alt: "Students laughing together while working on a laptop in a library",
    href: "#academics",
  },
  {
    number: "02",
    title: "Learning Spaces",
    description:
      "Thoughtfully designed spaces that encourage collaboration, exploration and creativity.",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1400&q=85",
    alt: "A stack of colourful books",
    href: "#academics",
  },
  {
    number: "03",
    title: "Sports & Wellness",
    description:
      "Opportunities to develop discipline, teamwork and confidence through activity.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=85",
    alt: "An athlete in starting blocks on a running track",
    href: "#sports",
  },
];

const Campus = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        gsap.from(".campus-header", {
          scrollTrigger: {
            trigger: ".campus-header",
            start: "top 85%",
            once: true,
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });

        gsap.from(".campus-card", {
          scrollTrigger: {
            trigger: ".campus-grid",
            start: "top 80%",
            once: true,
          },
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 0.18,
          ease: "power3.out",
        });
      },
      sectionRef
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      id="campus"
      ref={sectionRef}
      className="scroll-mt-24 bg-[#f7f5ef] px-6 py-24 text-[#172019] md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        
        <div className="campus-header mb-16 grid gap-6 md:grid-cols-12 md:items-end md:gap-8">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#172019]/60">
              Campus Experience
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="max-w-4xl text-balance text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              Learning doesn&apos;t stop
              <span className="italic"> at the classroom.</span>
            </h2>
          </div>
        </div>

        
        <div className="campus-grid grid gap-5 md:grid-cols-3">
          {campusCards.map((card) => (
            <a
              key={card.number}
              href={card.href}
              className="campus-card group relative block overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5ef]"
            >
              <div className="relative h-[500px] overflow-hidden md:h-[600px]">
                <img
                  src={card.image}
                  alt={card.alt}
                  width="700"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
                />

                
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-black/5 transition-colors duration-500 group-hover:from-black/90" />

                
                <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-xs tabular-nums tracking-[0.2em] text-white/80">
                      {card.number}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </span>
                  </div>

                  <h3 className="text-3xl font-medium tracking-tight md:text-4xl">
                    {card.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/85">
                    {card.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campus;