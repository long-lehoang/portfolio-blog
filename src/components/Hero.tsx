"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Download, Mail, Github, Linkedin, Twitter, ArrowDown } from "lucide-react";
import { siteData } from "@/content/data";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.5 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const floatingShapes = [
  { size: 60, x: "10%", y: "20%", delay: 0, duration: 15, rotate: 360 },
  { size: 40, x: "85%", y: "15%", delay: 2, duration: 20, rotate: -360 },
  { size: 50, x: "75%", y: "70%", delay: 1, duration: 18, rotate: 360 },
  { size: 35, x: "15%", y: "75%", delay: 3, duration: 22, rotate: -360 },
  { size: 45, x: "50%", y: "10%", delay: 1.5, duration: 16, rotate: 360 },
  { size: 30, x: "90%", y: "50%", delay: 2.5, duration: 19, rotate: -360 },
];

const orbs = [
  { size: 500, x: "-10%", y: "-20%", color: "var(--primary)", duration: 20 },
  { size: 400, x: "70%", y: "-10%", color: "#a855f7", duration: 25 },
  { size: 350, x: "50%", y: "60%", color: "#06b6d4", duration: 22 },
  { size: 300, x: "-5%", y: "50%", color: "#ec4899", duration: 18 },
];

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  twitter: <Twitter size={20} />,
};

export default function Hero() {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, prefersReducedMotion ? 1 : 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden"
    >
      {/* Gradient Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {orbs.map((orb, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full opacity-15 dark:opacity-10 blur-[120px] will-change-transform"
            style={{
              width: orb.size,
              height: orb.size,
              background: orb.color,
              left: orb.x,
              top: orb.y,
            }}
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    x: [0, 60, -40, 50, 0],
                    y: [0, -50, 40, -30, 0],
                    scale: [1, 1.2, 0.9, 1.15, 1],
                  }
            }
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Dot Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {!prefersReducedMotion &&
          floatingShapes.map((shape, i) => (
            <motion.div
              key={`shape-${i}`}
              className="absolute"
              style={{ left: shape.x, top: shape.y }}
              animate={{
                y: [0, -20, 0, 20, 0],
                x: [0, 15, 0, -15, 0],
                rotate: [0, shape.rotate],
              }}
              transition={{
                duration: shape.duration,
                delay: shape.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {i % 3 === 0 ? (
                <svg
                  width={shape.size}
                  height={shape.size}
                  viewBox="0 0 100 100"
                  className="text-primary/20"
                  aria-hidden="true"
                >
                  <polygon
                    points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              ) : i % 3 === 1 ? (
                <svg
                  width={shape.size}
                  height={shape.size}
                  viewBox="0 0 100 100"
                  className="text-primary/15"
                  aria-hidden="true"
                >
                  <polygon
                    points="50,10 90,85 10,85"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              ) : (
                <div
                  className="rounded-full border border-primary/15"
                  style={{ width: shape.size, height: shape.size }}
                />
              )}
            </motion.div>
          ))}
      </div>

      {/* Main Content with parallax */}
      <motion.div style={{ y, opacity }}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl relative z-10"
        >
          {/* 3D Avatar */}
          <motion.div variants={item} className="mb-8">
            <motion.div
              className="relative w-32 h-32 mx-auto"
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { rotateY: 15, rotateX: -10, scale: 1.05 }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              style={{ perspective: 600, transformStyle: "preserve-3d" }}
            >
              {/* Orbiting ring */}
              {!prefersReducedMotion && (
                <motion.div
                  className="absolute inset-[-12px] rounded-full border-2 border-primary/30 border-dashed"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              )}
              {/* Glow behind avatar */}
              <div className="absolute inset-[-20px] rounded-full bg-primary/20 blur-2xl" />
              {/* Avatar */}
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary via-purple-500 to-cyan-400 flex items-center justify-center text-4xl font-bold text-white shadow-2xl shadow-primary/25">
                {siteData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </motion.div>
          </motion.div>

          {/* Name with gradient text */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{siteData.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl sm:text-2xl text-muted-foreground mb-4"
          >
            {siteData.title}
          </motion.p>

          <motion.p
            variants={item}
            className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed"
          >
            {siteData.tagline}
          </motion.p>

          {/* CTA Buttons with glow */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={siteData.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:shadow-xl transition-shadow"
            >
              <Download size={18} />
              Download CV
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary/50 hover:bg-muted transition-colors font-medium glow-card"
            >
              <Mail size={18} />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={item}
            className="flex items-center justify-center gap-4"
          >
            {siteData.socialLinks
              .filter((s) => s.name !== "email")
              .map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10"
                  aria-label={social.name}
                >
                  {socialIcons[social.name]}
                </motion.a>
              ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-muted-foreground/50" />
        </motion.div>
      )}
    </section>
  );
}
