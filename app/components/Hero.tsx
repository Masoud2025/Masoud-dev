
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("home");

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <span className="inline-block rounded-full px-4 py-1 text-sm border border-current">
            {t("Data")}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {t("header")}
          </h1>

          <p className="max-w-xl text-base sm:text-lg">
            {t("paragraphs")}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-current px-6 py-3 text-sm font-medium hover:bg-current hover:text-white transition"
            >
              {t("PortfolioNavLink")}
              <ArrowRight size={16} />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-current px-6 py-3 text-sm font-medium hover:bg-current hover:text-white transition"
            >
              {t("ContactNavLink")}
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4 pt-6">
            <Link
              href="https://github.com/your-username"
              target="_blank"
              className="hover:text-current transition"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>

            <Link
              href="https://linkedin.com/in/your-username"
              target="_blank"
              className="hover:text-current transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative hidden md:flex justify-center">
          <div className="absolute -inset-4 rounded-3xl opacity-10 border border-current" />
          <div className="relative rounded-3xl border border-current p-6 md:p-8">
            <p className="text-sm mb-2">{t("Data")}</p>
            <ul className="space-y-2 font-medium">
              <li>Next.js (App Router)</li>
              <li>React & TypeScript</li>
              <li>Tailwind CSS</li>
              <li>REST APIs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
