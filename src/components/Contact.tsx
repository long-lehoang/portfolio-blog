"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { siteData } from "@/content/data";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={24} />,
  linkedin: <Linkedin size={24} />,
  twitter: <Twitter size={24} />,
  email: <Mail size={24} />,
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            I&apos;m always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex items-center justify-center gap-6">
            {siteData.socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                href={social.url}
                target={social.name === "email" ? undefined : "_blank"}
                rel={social.name === "email" ? undefined : "noopener noreferrer"}
                className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-muted transition-all group glow-card border border-transparent hover:border-border"
                aria-label={social.name}
              >
                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  {iconMap[social.name]}
                </span>
                <span className="text-xs text-muted-foreground capitalize">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
