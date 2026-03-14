"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { siteData } from "@/content/data";

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {siteData.skills.map((group, groupIndex) => (
            <ScrollReveal key={group.category} delay={groupIndex * 0.1}>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-lg font-bold mb-4 text-primary">
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
                      transition={{ duration: 0.3 }}
                      className="text-sm px-3 py-1.5 rounded-full bg-muted text-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
