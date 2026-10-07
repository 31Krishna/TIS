import { useEffect, useRef } from "react";
import gsap from "gsap";

const INTERACTIVE = "a, button, [role='button'], summary";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    
    mm.add("(hover: hover) and (pointer: fine)", () => {
      const dot = dotRef.current;
      const ring = ringRef.current;
      const root = document.documentElement;
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      gsap.set([dot, ring], { xPercent: -50, yPercent: -50, autoAlpha: 0 });

      const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power2.out" });
      const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power2.out" });
      const ringDuration = reduceMotion ? 0 : 0.45;
      const ringX = gsap.quickTo(ring, "x", { duration: ringDuration, ease: "power3.out" });
      const ringY = gsap.quickTo(ring, "y", { duration: ringDuration, ease: "power3.out" });

      let visible = false;
      let hovered = false;

      const show = (x, y) => {
        visible = true;
        gsap.set([dot, ring], { x, y });
        gsap.to([dot, ring], { autoAlpha: 1, duration: 0.2 });
      };

      const hide = () => {
        visible = false;
        gsap.to([dot, ring], { autoAlpha: 0, duration: 0.2 });
      };

      const setHovered = (next) => {
        if (next === hovered) return;
        hovered = next;
        gsap.to(dot, { scale: next ? 1.8 : 1, duration: 0.25, ease: "power2.out" });
        gsap.to(ring, { scale: next ? 1.5 : 1, duration: 0.25, ease: "power2.out" });
      };

      const onMove = (e) => {
        if (!visible) show(e.clientX, e.clientY);
        dotX(e.clientX);
        dotY(e.clientY);
        ringX(e.clientX);
        ringY(e.clientY);
      };

      const onOver = (e) => setHovered(Boolean(e.target.closest?.(INTERACTIVE)));

     
      root.classList.add("has-custom-cursor");

      window.addEventListener("mousemove", onMove);
      document.addEventListener("mouseover", onOver);
      root.addEventListener("mouseleave", hide);

      return () => {
        root.classList.remove("has-custom-cursor");
        window.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseover", onOver);
        root.removeEventListener("mouseleave", hide);
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none invisible fixed left-0 top-0 z-[9998] h-8 w-8 rounded-full border border-white mix-blend-difference"
      />

      
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none invisible fixed left-0 top-0 z-[9999] h-2.5 w-2.5 rounded-full bg-amber-300"
      />
    </>
  );
};

export default CustomCursor;