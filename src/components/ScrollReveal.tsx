"use client";

import { useRef, useSyncExternalStore, useEffect, useState } from "react";
import { motion, useReducedMotion, type Variant } from "framer-motion";

const emptySubscribe = () => () => {};
const returnTrue = () => true;
const returnFalse = () => false;

type AnimationVariant = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleUp";

const variants: Record<AnimationVariant, { hidden: Variant; visible: Variant }> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.5,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const mounted = useSyncExternalStore(emptySubscribe, returnTrue, returnFalse);
  const [isInView, setIsInView] = useState(false);

  // Manual IntersectionObserver instead of Framer Motion's useInView.
  // When `mounted` flips true, ScrollReveal swaps <div> → <motion.div> using
  // the same ref object. Framer Motion's useInView never re-observes because
  // the ref object reference stays the same, so isInView stays false forever.
  // Running the effect after `mounted` changes ensures we observe the correct
  // DOM node (the motion.div) after the swap.
  useEffect(() => {
    if (!mounted || !ref.current) return;
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [mounted]);

  // Before mount, render a plain div to avoid hydration mismatch
  // (Framer Motion adds inline styles on server that don't match client)
  if (!mounted || prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
