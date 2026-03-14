"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/lib/notion";

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <p className="text-muted-foreground text-center">
        No posts yet. Check back soon!
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <Link href={`/blog/${post.slug}`}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group rounded-xl bg-card border border-border p-6 h-full flex flex-col shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar size={14} />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {post.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                Read more
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </motion.article>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
