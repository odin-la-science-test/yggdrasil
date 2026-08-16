import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import type { CSS } from "../types";

type TiltCardProps = {
  style: CSS;
  children: ReactNode;
};

/**
 * Card wrapper with pointer-driven orb/CTA parallax, equivalent to the
 * original `[data-card]` / `[data-card-orb]` / `[data-card-cta]` behaviour.
 */
export function TiltCard({ style, children }: TiltCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const orb = card.querySelector<HTMLElement>("[data-card-orb]");
    const cta = card.querySelector<HTMLElement>("[data-card-cta]");

    const onMove = (e: PointerEvent) => {
      const r = card.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width - 0.5;
      const dy = (e.clientY - r.top) / r.height - 0.5;
      if (orb) orb.style.transform = `translate(${dx * 34}px,${dy * 34}px)`;
      if (cta) cta.style.transform = `translate(${dx * 10}px,${dy * 6}px)`;
    };
    const onLeave = () => {
      if (orb) orb.style.transform = "translate(0,0)";
      if (cta) cta.style.transform = "translate(0,0)";
    };

    card.addEventListener("pointermove", onMove);
    card.addEventListener("pointerleave", onLeave);
    return () => {
      card.removeEventListener("pointermove", onMove);
      card.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <article ref={cardRef} data-card="" className="ygg-card" style={style}>
      {children}
    </article>
  );
}
