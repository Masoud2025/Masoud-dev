import { useTranslations } from "next-intl";
import Link from "next/link";
import { ThemeToggle } from "../components/ThemToggle";
import Navbar from "../components/Navbar/Navbar";
import MobileTabBar from "../components/Navbar/TabBar";
import Hero from "../components/Hero";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className=" ">
      {/* <div className="text-center text-4xl font-bold">
        <h1 className="rounded-2xl border-2 p-8 font-extrabold  mb-16">
          {t("header")}
        </h1>
        <p className="rounded-2xl border-2 p-8 font-extrabold">
          {t("paragraphs")}
        </p>
        <br />
        <h1 className="rounded-2xl border-2 p-8 font-extrabold  mb-16">
          {t("Data")}
        </h1>
      </div>
      <div className="text-center mt-8">
        <a href={"/en"} className="p-4 hover:bg-red-100 rounded-3xl">
          EN
        </a>
        | |
        <Link href={"/fa"} className="p-4 hover:bg-blue-100 rounded-3xl">
          FA
        </Link>
      </div> */}
      <br />
      <div className="text-center text-5xl ">
        {/* Them switcher button */}
        {/* <ThemeToggle></ThemeToggle> */}
      </div>
      {/* Navbar */}
      {/* <Navbar/> */}
      {/* <MobileTabBar/> */}
      <Hero/>
    </div>
  );
}
