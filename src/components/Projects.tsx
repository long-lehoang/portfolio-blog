"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, FolderOpen } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Tilt3DCard from "./Tilt3DCard";
import { siteData } from "@/content/data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve built. Each one taught me
            something new.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteData.projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <Tilt3DCard>
                <div className="group rounded-xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col animated-border glow-card">
                  {/* Animated gradient placeholder */}
                  <div className="h-48 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-cyan-400/20" />
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      style={{ animation: "shimmer 3s ease-in-out infinite" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <FolderOpen
                          size={48}
                          className="text-primary/40 group-hover:text-primary/70 transition-colors duration-300"
                        />
                      </motion.div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <motion.a
                        whileHover={{ x: 2 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source code`}
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                      <motion.a
                        whileHover={{ x: 2 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </Tilt3DCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
