import { useTranslations } from "next-intl";
import React from "react";

interface WhoAmIProps {
  onResumeClick?: () => void;
  onProjectsClick?: () => void;
}

const WhoAmI: React.FC<WhoAmIProps> = ({ onResumeClick, onProjectsClick }) => {
  const t = useTranslations("home");

  return (
    <section
      aria-labelledby="who-am-i-title"
      className="max-w-3xl mx-auto px-4 py-16"
      id="who-am-i"
    >
      <header className="mb-6">
        <h1
          id="who-am-i-title"
          className="text-3xl font-semibold tracking-tight"
        >
          {t("WhoAmI")}
        </h1>
      </header>

      <article className="space-y-4 text-base leading-relaxed ">
        {t("AboutMe")}
      </article>

      <div className="mt-8 flex flex-wrap gap-4">
        <button
          type="button"
          onClick={onResumeClick}
          className="rounded-lg border border-gray-900 px-6 py-2 text-sm font-medium transition hover:bg-gray-900 hover:text-white"
        >
          {t("DownloadResume")}
        </button>

        <button
          type="button"
          onClick={onProjectsClick}
          className="rounded-lg bg-gray-900 px-6 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          {t("ViewProjects")}
        </button>
      </div>
    </section>
  );
};

export default WhoAmI;
