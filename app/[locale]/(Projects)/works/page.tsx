import Link from "next/link";

interface Work {
  id: string;
  title: string;
  description: string;
}

const works: Work[] = [
  {
    id: "00",
    title: "Portfolio Website",
    description: "Personal portfolio with modern UI and animations.",
  },
  {
    id: "01",
    title: "Dashboard App",
    description: "Admin dashboard with charts and data visualization.",
  },
  {
    id: "02",
    title: "E-commerce UI",
    description: "Clean e-commerce interface focused on UX.",
  },
];

export default function WorksPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <section className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight">Selected Works</h1>
          <p className="mt-4 text-muted-foreground max-w-xl">
            A curated selection of projects showcasing design, development, and
            attention to detail.
          </p>
        </header>

        {/* Works List */}
        <div className="space-y-12">
          {works.map((work) => (
            <Link
              key={work.id}
              href={`/works/${work.id}`}
              className="group block border-b pb-8 transition-colors hover:border-foreground"
            >
              <div className="flex items-start gap-6">
                {/* Index */}
                <span className="text-xl font-mono text-muted-foreground group-hover:text-foreground transition">
                  {work.id}
                </span>

                {/* Content */}
                <div>
                  <h2 className="text-2xl font-semibold group-hover:underline">
                    {work.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground max-w-lg">
                    {work.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
