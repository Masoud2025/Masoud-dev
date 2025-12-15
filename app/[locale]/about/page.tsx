
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutPage() {
  const t = useTranslations("about"); // فرض می‌کنیم فایل about.json داری

  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-8">
        {/* تصویر */}
        <div className="flex-shrink-0">
          <Image
            src="/profile.jpg" // مسیر عکس خودت
            alt={t("profileAlt")}
            width={200}
            height={200}
            className="rounded-full border border-current"
          />
        </div>

        {/* متن */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">{t("header")}</h1>
          <p className="text-base md:text-lg">{t("paragraph1")}</p>
          <p className="text-base md:text-lg">{t("paragraph2")}</p>

          {/* نکات کلیدی */}
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
            <li>{t("skill1")}</li>
            <li>{t("skill2")}</li>
            <li>{t("skill3")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
