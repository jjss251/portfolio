"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const spot = spotRef.current;
    const parent = container?.parentElement;
    if (!container || !spot || !parent) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.set(spot, { xPercent: -50, yPercent: -50 });

    const moveX = gsap.quickTo(spot, "x", { duration: 1.1, ease: "power3.out" });
    const moveY = gsap.quickTo(spot, "y", { duration: 1.1, ease: "power3.out" });
    const scaleTo = gsap.quickTo(spot, "scale", {
      duration: 1.6,
      ease: "power3.out",
    });

    const rect = parent.getBoundingClientRect();
    moveX(rect.width / 2);
    moveY(rect.height * 0.45);

    let idleTimer: ReturnType<typeof setTimeout>;

    const handleMove = (event: PointerEvent) => {
      const bounds = parent.getBoundingClientRect();
      moveX(event.clientX - bounds.left);
      moveY(event.clientY - bounds.top);
      scaleTo(1.15);

      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => scaleTo(1), 400);
    };

    parent.addEventListener("pointermove", handleMove);
    return () => {
      parent.removeEventListener("pointermove", handleMove);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden mix-blend-soft-light"
    >
      <div
        ref={spotRef}
        className="absolute left-0 top-0 h-[42rem] w-[42rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.35) 38%, rgba(255,255,255,0) 70%)",
        }}
      />
    </div>
  );
}
