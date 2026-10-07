import { useEffect, useRef } from "react";

const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    let frame = 0;
    let maxScroll = 1;

    
    const measure = () => {
      maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
    };

    const update = () => {
      frame = 0;
      const ratio = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      bar.style.transform = `scaleX(${ratio})`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const onLayoutChange = () => {
      measure();
      onScroll();
    };

    measure();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onLayoutChange);

  
    const observer = new ResizeObserver(onLayoutChange);
    observer.observe(document.body);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onLayoutChange);
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-1 pt-[env(safe-area-inset-top)]"
    >
      <div
        ref={barRef}
        className="h-1 origin-left bg-amber-300 will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
};

export default ScrollProgress;