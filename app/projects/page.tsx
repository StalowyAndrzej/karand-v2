import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      name: "karand.dev",
      description: "Personal blog built with Next.js and Tailwind CSS",
      url: "https://github.com/StalowyAndrzej/karand-v2",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <main className="mx-auto max-w-[650px]">
        <h1 className="mb-12 text-3xl font-semibold">Projects</h1>

        <ul className="flex flex-col gap-8">
          {projects.map((project) => (
            <li key={project.name}>
              <a
                href={project.url}
                className="group block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-2 text-xl font-medium underline group-hover:no-underline">
                  {project.name}
                </h2>
                <p className="text-gray-700">{project.description}</p>
              </a>
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
