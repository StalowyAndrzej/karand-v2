import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllSlugs } from "@/lib/markdown";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <article className="mx-auto max-w-[650px]">
        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-semibold">{article.title}</h1>
          <time className="text-sm text-gray-600">
            {new Date(article.date).toLocaleDateString("pl-PL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-12">
          <Link href="/articles" className="underline hover:no-underline">
            ← Back to articles
          </Link>
        </div>
      </article>
    </div>
  );
}
