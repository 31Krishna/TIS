import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const academicItems = [
  {
    number: "01",
    title: "Academic Excellence",
    description:
      "A strong academic foundation that encourages students to question, understand and apply what they learn.",
  },
  {
    number: "02",
    title: "Experiential Learning",
    description:
      "Learning through exploration, projects and experiences that connect ideas with the world around students.",
  },
  {
    number: "03",
    title: "Holistic Development",
    description:
      "A broader approach to education that gives students opportunities to grow academically, creatively and personally.",
  },
];

const Academics = () => {
  const sectionRef = useRef(null);
  const [activeItem, setActiveItem] = useState(0);

  
  const handleHover = (index) => {
    if (window.matchMedia("(hover: hover)").matches) setActiveItem(index);
  };

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        gsap.from(".academics-intro", {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".academics-intro",
            start: "top 85%",
            once: true,
          },
        });

        gsap.from(".academic-row", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".academics-list",
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
      id="academics"
      ref={sectionRef}
      className="scroll-mt-24 bg-[#f7f5ef] px-6 py-24 text-[#172019] md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
       
        <div className="academics-intro grid gap-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#172019]/60">
              Academics
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="max-w-4xl text-balance text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              Education that creates
              <span className="italic"> possibility.</span>
            </h2>
          </div>
        </div>

        
        <div className="academics-list mt-16 border-t border-[#172019]/15 md:mt-24">
          {academicItems.map((item, index) => {
            const isActive = activeItem === index;
            const buttonId = `academic-button-${index}`;
            const panelId = `academic-panel-${index}`;

            return (
              <div
                key={item.number}
                className="academic-row border-b border-[#172019]/15"
                onMouseEnter={() => handleHover(index)}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    onClick={() => setActiveItem(index)}
                    className={`group grid w-full grid-cols-12 items-center gap-4 pt-8 text-left transition-[padding] duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 md:pt-10 ${
                      isActive ? "pb-4 md:pb-5" : "pb-8 md:pb-10"
                    }`}
                  >
                    <span className="col-span-2 text-xs tabular-nums tracking-[0.2em] text-[#172019]/60 md:col-span-1">
                      {item.number}
                    </span>

                    <span className="col-span-8 text-2xl font-medium tracking-tight md:col-span-10 md:text-4xl">
                      {item.title}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`col-span-2 flex h-10 w-10 shrink-0 items-center justify-center justify-self-end rounded-full border transition-all duration-500 md:col-span-1 ${
                        isActive
                          ? "rotate-45 border-[#172019] bg-[#172019] text-white"
                          : "border-[#172019]/25"
                      }`}
                    >
                      <ArrowUpRight size={17} />
                    </span>
                  </button>
                </h3>

                
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isActive}
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 pb-8 md:pb-10">
                      <p className="col-span-8 col-start-3 max-w-2xl text-sm leading-6 text-[#172019]/70 md:col-span-9 md:col-start-2 md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Academics;