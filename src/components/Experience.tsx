"use client";

import ScrollReveal from "./ScrollReveal";
import Tilt3DCard from "./Tilt3DCard";
import { siteData } from "@/content/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-4 text-center">Experience</h2>
          <p className="text-muted-foreground text-center mb-12">
            My professional journey
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Gradient timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-purple-500/50 to-cyan-400/50" />

          {siteData.experience.map((exp, index) => (
            <ScrollReveal
              key={`${exp.company}-${exp.role}`}
              variant={index % 2 === 0 ? "slideLeft" : "slideRight"}
              delay={index * 0.15}
            >
              <div
                className={`relative flex flex-col md:flex-row gap-4 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot with glow */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-6 z-10 ring-4 ring-background shadow-lg shadow-primary/50" />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content card with 3D tilt */}
                <div className="ml-10 md:ml-0 md:w-1/2">
                  <Tilt3DCard tiltAmount={6} scale={1.01}>
                    <div className="p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition-shadow animated-border glow-card">
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                      <h3 className="text-lg font-bold mt-1">{exp.role}</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Tilt3DCard>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
