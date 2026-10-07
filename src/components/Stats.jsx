import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 22, suffix: "+", label: "Acres Campus" },
  { value: 16, suffix: "+", label: "Olympic Sports" },
  { value: 24, suffix: "/7", label: "Medical Assistance" },
];

const Stats = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const numbers = gsap.utils.toArray(".stat-number", section);

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });

      tl.from(".stats-heading", { y: 60, opacity: 0, duration: 1 }).from(
        ".stat-item",
        { y: 50, opacity: 0, duration: 0.8, stagger: 0.15 },
        "-=0.6"
      );

      // Counters: start at 0, count up to the real value in the markup
      numbers.forEach((el, i) => {
        const counter = { value: 0 };
        el.textContent = "0";

        tl.to(
          counter,
          {
            value: Number(el.dataset.value),
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = Math.round(counter.value);
            },
          },
          0.6 + i * 0.15
        );
      });

      // Restore real values if the animation is reverted
      return () => {
        numbers.forEach((el) => {
          el.textContent = el.dataset.value;
        });
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#172019] px-6 py-24 text-white md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="stats-heading mb-16 max-w-3xl md:mb-20">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/60">
            TIS at a glance
          </p>

          <h2 className="text-balance text-4xl font-medium leading-[1.05] tracking-[-0.035em] md:text-6xl">
            An environment built for
            <span className="italic text-amber-300"> curiosity.</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid border-t border-white/15 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-item border-b border-white/15 py-10 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:py-12 md:first:pl-0 md:last:border-r-0"
            >
            
              <span className="sr-only">
                {stat.value}
                {stat.suffix}
              </span>

              <div className="flex items-baseline" aria-hidden="true">
                <span
                  className="stat-number text-7xl font-medium tabular-nums tracking-[-0.05em] md:text-8xl"
                  data-value={stat.value}
                >
                  {stat.value}
                </span>

                <span className="ml-1 text-3xl font-medium text-amber-300 md:text-4xl">
                  {stat.suffix}
                </span>
              </div>

              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;