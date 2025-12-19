import { ArrowRight, Github, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import devGuy from "../../public/devGuynoSmile.png";
import devGuyWithSmile from "../../public/devGuyWithSmile.png";

export default function Hero() {
  const t = useTranslations("home");

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-16 flex flex-col md:flex-row items-center gap-12">

        {/* Left - Text */}
        <div className="flex-1 flex flex-col justify-center space-y-6 text-center md:text-left">
          <span className="inline-block rounded-full px-4 py-1 text-sm border border-current">
            {t("Data")}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {t("header")}
          </h1>

          <p className="max-w-md mx-auto md:mx-0 text-base sm:text-lg">
            {t("paragraphs")}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 pt-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-current px-6 py-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition"
            >
              {t("PortfolioNavLink")}
              <ArrowRight size={16} />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-current px-6 py-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition"
            >
              {t("ContactNavLink")}
            </Link>
          </div>

          <div className="flex justify-center md:justify-start items-center gap-4 pt-6">
            <Link href="https://github.com/your-username" target="_blank" aria-label="GitHub">
              <Github size={20} />
            </Link>
            <Link href="https://linkedin.com/in/your-username" target="_blank" aria-label="LinkedIn">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Center - Image */}
        <div className="flex-1 relative w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 group">
          <Image
            src={devGuy}
            alt="Dev guy"
            fill
            className="object-cover rounded-3xl transition-opacity duration-300 group-hover:opacity-0 "
          />
          <Image
            src={devGuyWithSmile}
            alt="Dev guy with smile"
            className="object-cover rounded-3xl absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 w-[30rem] h-[30.8rem]" 
          />
        </div>

        {/* Right - Skills */}
        <div className="flex-1 w-full md:w-80 rounded-3xl border border-current p-6">
          <p className="text-sm mb-2">{t("Data")}</p>
          <ul className="space-y-2 font-medium">
            <li>Next.js (App Router)</li>
            <li>React & TypeScript</li>
            <li>Tailwind CSS</li>
            <li>REST APIs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
