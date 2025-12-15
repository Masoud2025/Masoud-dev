import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-2xl space-y-6">
        <h1 className="text-3xl font-bold">{t("header")}</h1>
        <p className="text-lg">{t("paragraph1")}</p>
        <p className="text-lg">{t("paragraph2")}</p>
        <ul className="list-disc list-inside space-y-2">
          <li>{t("skill1")}</li>
          <li>{t("skill2")}</li>
          <li>{t("skill3")}</li>
        </ul>
      </div>
    </section>
  );
}