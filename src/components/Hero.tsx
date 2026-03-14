"use client";

import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { siteData } from "@/content/data";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  const socialIcons: Record<string, React.ReactNode> = {
    github: <Github size={20} />,
    linkedin: <Linkedin size={20} />,
    twitter: <Twitter size={20} />,
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center max-w-3xl"
      >
        <motion.div variants={item} className="mb-6">
          <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-primary to-indigo-400 flex items-center justify-center text-4xl font-bold text-primary-foreground">
            {siteData.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="text-primary">{siteData.name}</span>
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

        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={siteData.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Download size={18} />
            Download CV
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
          >
            <Mail size={18} />
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4"
        >
          {siteData.socialLinks
            .filter((s) => s.name !== "email")
            .map((social) => (
              <motion.a
                key={social.name}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.name}
              >
                {socialIcons[social.name]}
              </motion.a>
            ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
