/* eslint-disable @next/next/no-img-element */
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  technologies?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Online Shop UI",
    description: "Personal portfolio built with React and modern UI practices.",
    image: "onlineShopUI.png",
    liveUrl: "https://portfolio-git-main-mwano521-gmailcoms-projects.vercel.app/showcase/demo1",
    repoUrl: "#",
    featured: true,
    technologies: ["React", "Tailwind", "TypeScript"],
  },
  {
    id: 2,
    title: "Hashtiva platform",
    description: "Responsive product pages and shopping flow.",
    image: "hastiva.png",
    liveUrl:
      "https://hashtiva-git-main-mwano521-gmailcoms-projects.vercel.app/",
    repoUrl: "#",
    technologies: ["Next.js", "CSS", "Redux"],
  },
  {
    id: 3,
    title: "3D Platform ",
    description: "Admin dashboard with charts and clean layout.",
    image: "3D.png",
    liveUrl:
      "https://portfolio-git-main-mwano521-gmailcoms-projects.vercel.app/",
    repoUrl: "#",
    technologies: ["React", "Chart.js", "Node.js"],
  },
  {
    id: 4,
    title: "Landing Page UI",
    description: "High-conversion landing page design.",
    image:
      "websiteUI.png",
    liveUrl: "https://portfolio-git-main-mwano521-gmailcoms-projects.vercel.app/showcase/demo5",
    repoUrl: "#",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const MyProjects = () => {
  return (
    <section
      id="my-projects"
      aria-labelledby="projects-title"
      className="max-w-6xl mx-auto px-4 py-20"
    >
      <header className="mb-12 text-center">
        <h2
          id="projects-title"
          className="text-3xl font-semibold tracking-tight"
        >
          My Projects
        </h2>
        <p className="mt-3 text-gray-600">
          Selected projects that showcase my frontend skills
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`group relative overflow-hidden rounded-2xl border bg-white
              ${project.featured ? "border-gray-900" : "border-gray-200"}`}
          >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-top transition-all duration-[4000ms] ease-linear group-hover:object-bottom"
              />

              {/* Featured badge */}
              {project.featured && (
                <span className="absolute left-4 top-4 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white">
                  Featured
                </span>
              )}
            </div>

            {/* Content - Always Visible */}
            <div className="p-5 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              {project.technologies && (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-gray-800"
                  >
                    Live Demo
                  </a>
                )}

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-gray-900 px-4 py-2 text-xs font-medium text-gray-900 transition hover:bg-gray-100"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
