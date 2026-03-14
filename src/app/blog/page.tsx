import { getAllPosts } from "@/lib/notion";
import BlogList from "./BlogList";

export const revalidate = 60;

export const metadata = {
  title: "Blog | John Doe",
  description: "Thoughts on web development, technology, and more.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Blog</h1>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Thoughts on web development, technology, and things I&apos;ve learned along
          the way.
        </p>
        <BlogList posts={posts} />
      </div>
    </div>
  );
}
