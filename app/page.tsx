import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <main className="mx-auto max-w-[650px]">
        <p className="mb-12 text-lg leading-relaxed">
          Hi, I'm Karand. I build software and think about AI agents, Rails, and
          modern web development.
        </p>

        <nav>
          <ul className="flex flex-col gap-3 text-lg">
            <li>
              <Link href="/articles" className="underline hover:no-underline">
                Articles
              </Link>
            </li>
            <li>
              <Link href="/projects" className="underline hover:no-underline">
                Projects
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/StalowyAndrzej"
                className="underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/karanddev"
                className="underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@karand.dev"
                className="underline hover:no-underline"
              >
                Email
              </a>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}
