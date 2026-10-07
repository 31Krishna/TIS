import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Campus", href: "#campus" },
  { label: "Sports", href: "#sports" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");

  const closeMenu = () => setIsOpen(false);

  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => e.matches && setIsOpen(false);

    window.addEventListener("keydown", onKeyDown);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  
  useEffect(() => {
    const sections = document.querySelectorAll("main section");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const desktopLinkClass = (isActive) =>
    `rounded-md text-sm font-medium transition-all duration-300 ${focusRing} ${
      isActive ? "text-amber-300" : "hover:opacity-60"
    }`;

  const mobileLinkClass = (isActive) =>
    `block rounded-xl px-3 py-3 text-sm transition-colors hover:bg-white/10 ${focusRing} ${
      isActive ? "text-amber-300" : ""
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 md:px-5 md:py-4">
      <nav
        aria-label="Primary"
        className={`relative mx-auto w-full max-w-7xl border border-white/15 px-5 py-2.5 text-white backdrop-blur-xl transition-[background-color,border-radius] duration-300 md:px-7 md:py-3 ${
          scrolled || isOpen ? "bg-[#172019]/85" : "bg-black/30"
        } ${isOpen ? "rounded-3xl" : "rounded-full"} md:rounded-full`}
      >
        <div className="flex items-center justify-between">
          
          <a
            href="#home"
            onClick={closeMenu}
            aria-label="Tulas home"
            className={`shrink-0 rounded-md text-lg font-bold tracking-tight md:text-xl ${focusRing}`}
          >
            TULAS<span className="text-amber-400">.</span>
          </a>

        
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeId === href.slice(1);

              return (
                <li key={href}>
                  <a
                    href={href}
                    aria-current={isActive ? "location" : undefined}
                    className={desktopLinkClass(isActive)}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

         
          <a
            href="#admissions"
            className={`group hidden items-center gap-3 rounded-full text-sm font-medium md:flex ${focusRing}`}
          >
            <span className="transition-colors duration-300 group-hover:text-amber-300">
              Apply Now
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover:border-amber-300 group-hover:bg-amber-300 group-hover:text-black">
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>

         
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:bg-white hover:text-black md:hidden ${focusRing}`}
          >
            {isOpen ? (
              <X size={18} aria-hidden="true" />
            ) : (
              <Menu size={18} aria-hidden="true" />
            )}
          </button>
        </div>

        
        <div
          id="mobile-menu"
          className={`grid transition-[grid-template-rows,opacity,visibility] duration-300 md:hidden ${
            isOpen
              ? "visible grid-rows-[1fr] opacity-100"
              : "invisible grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-3 border-t border-white/10 pb-2 pt-3">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map(({ label, href }) => {
                  const isActive = activeId === href.slice(1);

                  return (
                    <li key={href}>
                      <a
                        href={href}
                        onClick={closeMenu}
                        aria-current={isActive ? "location" : undefined}
                        className={mobileLinkClass(isActive)}
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <a
                href="#admissions"
                onClick={closeMenu}
                className={`mt-3 flex items-center justify-between rounded-xl border border-white/15 px-4 py-3 text-sm font-medium transition-colors hover:bg-white hover:text-black ${focusRing}`}
              >
                <span>Apply Now</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;