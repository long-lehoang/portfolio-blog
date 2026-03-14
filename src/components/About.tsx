"use client";

import ScrollReveal from "./ScrollReveal";
import { siteData } from "@/content/data";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[100px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="relative p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
            <div className="absolute top-4 left-6 text-6xl text-primary/10 font-serif leading-none">
              &ldquo;
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg text-center max-w-2xl mx-auto relative z-10">
              {siteData.about}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
