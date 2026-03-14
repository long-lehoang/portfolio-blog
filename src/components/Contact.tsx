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
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
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
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                href={social.url}
                target={social.name === "email" ? undefined : "_blank"}
                rel={social.name === "email" ? undefined : "noopener noreferrer"}
                className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-muted transition-colors group"
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
