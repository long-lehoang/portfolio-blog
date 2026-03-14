"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

interface BlogPostContentProps {
  markdown: string;
}

export default function BlogPostContent({ markdown }: BlogPostContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="prose"
    >
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </motion.div>
  );
}
