"use client";

import Image from "next/image";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  images: string[];
  liveLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    shortDesc: "A mobile-first responsive web app.",
    fullDesc:
      "Full technical details about Project One. Built with Next.js, Tailwind, and TypeScript.",
    images: ["/projects/p1-1.png", "/projects/p1-2.png"],
    liveLink: "https://example.com/project1",
    githubLink: "https://github.com/username/project1",
  },
  {
    id: 2,
    title: "Project Two",
    shortDesc: "E-commerce platform prototype.",
    fullDesc:
      "Full technical details about Project Two. Features shopping cart, REST APIs, and responsive design.",
    images: ["/projects/p2-1.png", "/projects/p2-2.png"],
    liveLink: "https://example.com/project2",
    githubLink: "https://github.com/username/project2",
  },
  {
    id: 3,
    title: "Project Three",
    shortDesc: "Portfolio showcase website.",
    fullDesc:
      "Full technical details about Project Three. Includes dark mode toggle, animations, and SEO optimization.",
    images: ["/projects/p3-1.png", "/projects/p3-2.png"],
    liveLink: "https://example.com/project3",
    githubLink: "https://github.com/username/project3",
  },
];

export default function ProjectsPage() {
  const [openAcc, setOpenAcc] = useState<number | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <section className="md:hidden px-4 py-8 mt-11">
      {/* <h1 className="text-2xl font-bold mb-6 text-center">Projects</h1> */}

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-current rounded-xl overflow-hidden"
          >
            <button
              className="w-full text-left px-4 py-3 flex justify-between items-center font-medium"
              onClick={() =>
                setOpenAcc(openAcc === project.id ? null : project.id)
              }
            >
              <span>{project.title}</span>
              <span>{openAcc === project.id ? "▲" : "▼"}</span>
            </button>

            {openAcc === project.id && (
              <div className="px-4 pb-4 space-y-3">
                <p>{project.shortDesc}</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    className="px-3 py-1 border border-current rounded-full text-sm hover:bg-current hover:text-white transition"
                    onClick={() => setModalProject(project)}
                  >
                    Details
                  </button>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="px-3 py-1 border border-current rounded-full text-sm hover:bg-current hover:text-white transition"
                  >
                    Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="px-3 py-1 border border-current rounded-full text-sm hover:bg-current hover:text-white transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalProject && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-start overflow-auto z-50 py-16 px-4">
          <div className="bg-white dark:bg-neutral-900 rounded-xl max-w-md w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-xl font-bold hover:text-red-500 transition"
              onClick={() => setModalProject(null)}
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-2">{modalProject.title}</h2>
            <p className="mb-4">{modalProject.fullDesc}</p>
            <div className="flex flex-col gap-2 mb-4">
              {modalProject.images.map((src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt={`${modalProject.title} screenshot ${idx + 1}`}
                  width={400}
                  height={250}
                  className="rounded-lg"
                />
              ))}
            </div>
            <div className="flex gap-2">
              <a
                href={modalProject.liveLink}
                target="_blank"
                className="px-4 py-2 border border-current rounded-full text-sm hover:bg-current hover:text-white transition"
              >
                Live Demo
              </a>
              <a
                href={modalProject.githubLink}
                target="_blank"
                className="px-4 py-2 border border-current rounded-full text-sm hover:bg-current hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
