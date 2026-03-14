"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import Tilt3DCard from "./Tilt3DCard";
import { siteData } from "@/content/data";

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
          <p className="text-muted-foreground text-center mb-12">
            Technologies and tools I work with
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {siteData.skills.map((group, groupIndex) => (
            <ScrollReveal key={group.category} delay={groupIndex * 0.1}>
              <Tilt3DCard tiltAmount={8}>
                <div className="p-6 rounded-xl bg-card border border-border animated-border glow-card h-full">
                  <h3 className="text-lg font-bold mb-4 gradient-text inline-block">
                    {group.category}
                  </h3>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
                    className="flex flex-wrap gap-2"
                  >
                    {group.items.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={badgeVariants}
                        transition={{
                          duration: 0.3,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="text-sm px-3 py-1.5 rounded-full bg-muted text-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default border border-transparent hover:border-primary/20"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </Tilt3DCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
