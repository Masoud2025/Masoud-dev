import { useTranslations } from "next-intl";
import React from "react";

interface Skill {
  id: number;
  title: string;
  description: string;
  highlight?: boolean;
}

const skills: Skill[] = [
  {
    id: 1,
    title: "HTML5",
    description: "Semantic, accessible, and SEO-friendly markup.",
  },
  {
    id: 2,
    title: "CSS3",
    description: "Responsive layouts, Flexbox, Grid, animations.",
  },
  {
    id: 3,
    title: "JavaScript (ES6+)",
    description: "Clean, maintainable, and scalable logic.",
  },
  {
    id: 4,
    title: "React.js",
    description: "Component-driven architecture and state management.",
    highlight: true, // کارت ویژه
  },
  {
    id: 5,
    title: "TypeScript",
    description: "Type-safe, predictable, and scalable applications.",
  },
  {
    id: 6,
    title: "Bootstrap",
    description: "Fast UI development with responsive components.",
  },
  {
    id: 7,
    title: "Git & GitHub",
    description: "Version control, collaboration, clean commits.",
  },
  {
    id: 8,
    title: "Problem Solving",
    description: "Analytical thinking and structured solutions.",
  },
];

const MySkills: React.FC = () => {
  const t = useTranslations("home");

  return (
    <section
      aria-labelledby="my-skills-title"
      className="max-w-6xl mx-auto px-4 py-20"
      id="my-skills"
    >
      <header className="mb-12 text-center">
        <h2
          id="my-skills-title"
          className="text-3xl font-semibold tracking-tight"
        >
          {t("MySkills")}
        </h2>
        <p className="mt-3 ">{t("MySkillsSubtitle")}</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <article
            key={skill.id}
            className={`rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-lg
              ${
                skill.highlight
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-200 bg-white"
              }`}
          >
            <h3 className="mb-3 text-xl font-semibold">{skill.title}</h3>

            <p
              className={`text-sm leading-relaxed ${
                skill.highlight ? "text-gray-200" : "text-gray-600"
              }`}
            >
              {skill.description}
            </p>

            {skill.highlight && (
              <span className="mt-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                Core Skill
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
