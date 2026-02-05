import Link from "next/link";
import { getAllArticles } from "@/lib/markdown";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <main className="mx-auto max-w-[650px]">
        <h1 className="mb-12 text-3xl font-semibold">Articles</h1>

        <ul className="flex flex-col gap-8">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/${article.slug}`}
                className="group block"
              >
                <h2 className="mb-2 text-xl font-medium underline group-hover:no-underline">
                  {article.title}
                </h2>
                <time className="mb-2 block text-sm text-gray-600">
                  {new Date(article.date).toLocaleDateString("pl-PL", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <p className="text-gray-700">{article.description}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <Link href="/" className="underline hover:no-underline">
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
