import { useEffect, useRef } from "react";
import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import type { CSS } from "../types";

type RevealOwnProps<T extends ElementType> = {
  as?: T;
  /** Stagger delay in ms, mirrors the original site's up-to-3-items cascade. */
  delay?: number;
  style?: CSS;
  children?: ReactNode;
};

type RevealProps<T extends ElementType> = RevealOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof RevealOwnProps<T>>;

/**
 * Fade/rise-in on scroll, equivalent to the original `data-reveal` +
 * IntersectionObserver behaviour (support.js `initReveal`).
 */
export function Reveal<T extends ElementType = "div">({
  as,
  delay = 0,
  style,
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(28px) scale(0.988)";
    el.style.transition =
      "opacity 1000ms cubic-bezier(.16,.84,.24,1), transform 1000ms cubic-bezier(.16,.84,.24,1)";
    el.style.willChange = "opacity, transform";
    el.style.transitionDelay = `${delay}ms`;

    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      el.style.opacity = "1";
      el.style.transform = "none";
      window.setTimeout(() => {
        el.style.willChange = "auto";
      }, 1100 + delay);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            io.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -14% 0px", threshold: 0.12 },
    );
    io.observe(el);

    const raf = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9 && r.bottom > 0) {
        show();
        io.unobserve(el);
      }
    });

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [delay]);

  return (
    <Tag ref={ref} style={style} {...rest}>
      {children}
    </Tag>
  );
}
