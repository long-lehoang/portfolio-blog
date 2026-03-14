import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import type {
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  description: string;
  tags: string[];
  published: boolean;
  coverImage: string | null;
}

export interface BlogPostWithContent extends BlogPost {
  markdown: string;
}

function getPropertyValue(
  page: PageObjectResponse,
  propertyName: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  const prop = page.properties[propertyName];
  if (!prop) return null;

  switch (prop.type) {
    case "title":
      return (prop.title as RichTextItemResponse[])
        .map((t) => t.plain_text)
        .join("");
    case "rich_text":
      return (prop.rich_text as RichTextItemResponse[])
        .map((t) => t.plain_text)
        .join("");
    case "date":
      return prop.date?.start || null;
    case "multi_select":
      return prop.multi_select.map((s) => s.name);
    case "checkbox":
      return prop.checkbox;
    default:
      return null;
  }
}

function pageToPost(page: PageObjectResponse): BlogPost {
  const cover = page.cover;
  let coverImage: string | null = null;
  if (cover) {
    coverImage =
      cover.type === "external" ? cover.external.url : cover.file.url;
  }

  return {
    id: page.id,
    title: getPropertyValue(page, "Title") || "Untitled",
    slug: getPropertyValue(page, "Slug") || page.id,
    date: getPropertyValue(page, "Date") || page.created_time.split("T")[0],
    description: getPropertyValue(page, "Description") || "",
    tags: getPropertyValue(page, "Tags") || [],
    published: getPropertyValue(page, "Published") ?? false,
    coverImage,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!databaseId) return getDemoPostsList();

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Published",
        checkbox: { equals: true },
      },
      sorts: [{ property: "Date", direction: "descending" }],
    });

    return response.results.map((page) =>
      pageToPost(page as PageObjectResponse)
    );
  } catch {
    return getDemoPostsList();
  }
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPostWithContent | null> {
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!databaseId) return getDemoPost(slug);

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          { property: "Slug", rich_text: { equals: slug } },
          { property: "Published", checkbox: { equals: true } },
        ],
      },
    });

    if (response.results.length === 0) return getDemoPost(slug);

    const page = response.results[0] as PageObjectResponse;
    const post = pageToPost(page);

    const mdBlocks = await n2m.pageToMarkdown(page.id);
    const markdown = n2m.toMarkdownString(mdBlocks).parent;

    return { ...post, markdown };
  } catch {
    return getDemoPost(slug);
  }
}

// Demo data when Notion is not configured
function getDemoPostsList(): BlogPost[] {
  return [
    {
      id: "1",
      title: "How I Built My Portfolio Site",
      slug: "how-i-built-my-portfolio",
      date: "2026-03-10",
      description:
        "A walkthrough of how I designed and built this portfolio site using Next.js, Tailwind CSS, and Framer Motion.",
      tags: ["Next.js", "React", "Tailwind CSS"],
      published: true,
      coverImage: null,
    },
    {
      id: "2",
      title: "Why I Love TypeScript",
      slug: "why-i-love-typescript",
      date: "2026-02-22",
      description:
        "TypeScript has changed the way I think about writing JavaScript. Here's why I think every developer should give it a try.",
      tags: ["TypeScript", "JavaScript", "DX"],
      published: true,
      coverImage: null,
    },
    {
      id: "3",
      title: "My Journey Into Open Source",
      slug: "my-journey-into-open-source",
      date: "2026-01-15",
      description:
        "Contributing to open source taught me more than any course ever could. Here's how I got started and what I learned.",
      tags: ["Open Source", "Career", "Community"],
      published: true,
      coverImage: null,
    },
  ];
}

function getDemoPost(slug: string): BlogPostWithContent | null {
  const posts: Record<string, BlogPostWithContent> = {
    "how-i-built-my-portfolio": {
      id: "1",
      title: "How I Built My Portfolio Site",
      slug: "how-i-built-my-portfolio",
      date: "2026-03-10",
      description:
        "A walkthrough of how I designed and built this portfolio site.",
      tags: ["Next.js", "React", "Tailwind CSS"],
      published: true,
      coverImage: null,
      markdown: `
# How I Built My Portfolio Site

Building a personal portfolio site has been on my to-do list for a while. I finally decided to build it using **Next.js**, **Tailwind CSS**, and **Framer Motion**.

## Why These Technologies?

### Next.js
Next.js provides an excellent developer experience with features like App Router, server-side rendering, and static site generation. It's perfect for a portfolio site that needs to be fast and SEO-friendly.

### Tailwind CSS
Tailwind CSS allows me to rapidly build custom designs without writing custom CSS. The utility-first approach makes it easy to maintain consistency across the site.

### Framer Motion
Adding smooth animations and transitions makes the site feel more polished and professional. Framer Motion integrates seamlessly with React.

## Key Features

- **Dark/Light mode** — Automatic theme detection with manual toggle
- **Scroll animations** — Sections animate in as you scroll
- **Blog powered by Notion** — Write posts in Notion, they appear on the site automatically
- **Responsive design** — Looks great on mobile, tablet, and desktop

## What I Learned

Building this site reinforced the importance of planning before coding. I spent time designing the layout and choosing the right tools before writing any code, which saved me a lot of time in the long run.
`,
    },
    "why-i-love-typescript": {
      id: "2",
      title: "Why I Love TypeScript",
      slug: "why-i-love-typescript",
      date: "2026-02-22",
      description: "TypeScript has changed the way I think about JavaScript.",
      tags: ["TypeScript", "JavaScript", "DX"],
      published: true,
      coverImage: null,
      markdown: `
# Why I Love TypeScript

After years of writing plain JavaScript, switching to TypeScript was one of the best decisions I've made as a developer.

## Type Safety

The most obvious benefit is catching bugs at compile time rather than runtime. How many times have you seen \`Cannot read property of undefined\`? TypeScript helps prevent these errors before they happen.

## Better Developer Experience

- **Autocomplete** — Your editor knows exactly what methods and properties are available
- **Refactoring** — Rename a variable and TypeScript updates all references
- **Documentation** — Types serve as living documentation for your code

## Real-World Example

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
}

function getUserName(user: User): string {
  return user.name; // TypeScript knows this exists
}
\`\`\`

## The Investment Pays Off

Yes, there's a learning curve. Yes, you write a bit more code. But the time saved debugging and the confidence in your code makes it absolutely worth it.
`,
    },
    "my-journey-into-open-source": {
      id: "3",
      title: "My Journey Into Open Source",
      slug: "my-journey-into-open-source",
      date: "2026-01-15",
      description: "How I got started with open source contributions.",
      tags: ["Open Source", "Career", "Community"],
      published: true,
      coverImage: null,
      markdown: `
# My Journey Into Open Source

Contributing to open source was intimidating at first, but it turned out to be one of the most rewarding experiences of my career.

## Getting Started

I started small — fixing typos in documentation, adding tests, and resolving simple issues labeled "good first issue". This helped me understand the contribution workflow without the pressure of tackling complex features.

## What I Learned

1. **Reading code** — Understanding others' code is a crucial skill
2. **Communication** — Clear PR descriptions and issue discussions matter
3. **Git workflow** — Branching, rebasing, and squashing commits
4. **Code review** — Both giving and receiving feedback

## My Advice

If you're thinking about contributing to open source, just start. Find a project you use and care about, look for beginner-friendly issues, and don't be afraid to ask questions. The community is more welcoming than you think.
`,
    },
  };

  return posts[slug] || null;
}
