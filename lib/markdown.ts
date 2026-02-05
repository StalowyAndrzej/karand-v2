import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export interface ArticleMeta {
  title: string;
  slug: string;
  date: string;
  description: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      title: data.title,
      slug: data.slug,
      date: data.date,
      description: data.description,
      content: contentHtml,
    };
  } catch {
    return null;
  }
}

export function getAllArticles(): ArticleMeta[] {
  try {
    const fileNames = fs.readdirSync(articlesDirectory);
    const articles = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
          title: data.title,
          slug: data.slug,
          date: data.date,
          description: data.description,
        };
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1));

    return articles;
  } catch {
    return [];
  }
}

export function getAllSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(articlesDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => fileName.replace(/\.md$/, ""));
  } catch {
    return [];
  }
}
