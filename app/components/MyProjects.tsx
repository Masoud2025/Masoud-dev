import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React and modern UI practices.',
    image: '/projects/portfolio.jpg',
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'E-commerce UI',
    description: 'Responsive product pages and shopping flow.',
    image: '/projects/ecommerce.jpg',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Dashboard App',
    description: 'Admin dashboard with charts and clean layout.',
    image: '/projects/dashboard.jpg',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 4,
    title: 'Landing Page',
    description: 'High-conversion landing page design.',
    image: '/projects/landing.jpg',
    liveUrl: '#',
    repoUrl: '#',
  },
];

const MyProjects: React.FC = () => {
  return (
    <section
      aria-labelledby="projects-title"
      className="max-w-6xl mx-auto px-4 py-20"
      id='my-projects'
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
            className={`group relative overflow-hidden rounded-2xl border
              ${project.featured ? 'border-gray-900' : 'border-gray-200'}`}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-1 text-sm text-gray-200">
                {project.description}
              </p>

              <div className="mt-4 flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white px-4 py-2 text-xs font-medium text-gray-900 transition hover:bg-gray-200"
                  >
                    Live Demo
                  </a>
                )}

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white px-4 py-2 text-xs font-medium text-white transition hover:bg-white hover:text-gray-900"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>

            {/* Featured badge */}
            {project.featured && (
              <span className="absolute left-4 top-4 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white">
                Featured
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
