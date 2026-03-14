"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  glare?: boolean;
  scale?: number;
}

const springConfig = { stiffness: 300, damping: 30 };

export default function Tilt3DCard({
  children,
  className = "",
  tiltAmount = 10,
  glare = true,
  scale = 1.02,
}: Tilt3DCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scaleVal = useMotionValue(1);

  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  const springScale = useSpring(scaleVal, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current || prefersReducedMotion) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      rotateX.set((y - 0.5) * -tiltAmount);
      rotateY.set((x - 0.5) * tiltAmount);
      scaleVal.set(scale);
      setGlarePos({ x: x * 100, y: y * 100 });
    },
    [prefersReducedMotion, tiltAmount, scale, rotateX, rotateY, scaleVal],
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    scaleVal.set(1);
  }, [rotateX, rotateY, scaleVal]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div style={{ perspective: 800 }} className={className}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          scale: springScale,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full"
      >
        {children}
        {glare && (
          <div
            className="pointer-events-none absolute inset-0 rounded-xl z-10 transition-opacity duration-200"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.15), transparent 60%)`,
              opacity: isHovered ? 1 : 0,
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
