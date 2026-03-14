"use client";

import ScrollReveal from "./ScrollReveal";
import { siteData } from "@/content/data";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-muted-foreground leading-relaxed text-lg text-center max-w-2xl mx-auto">
            {siteData.about}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
