// Navbar.tsx
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ThemeToggle } from "../ThemToggle";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";

// Responsive Navbar  With TabBar on mobile
const Navbar: React.FC = () => {
  const t = useTranslations("home");
  return (
    <header className="w-full flex items-center justify-between p-4 shadow-md fixed top-0 z-50">
      <Logo />
      {/* Desktop Links */}
      <nav className="hidden md:flex space-x-3">
        <Link href="/" className="hover:text-blue-500 transition">
          {t("HomeLink")}
        </Link>
        <Link href="/about" className="hover:text-blue-500 transition">
          {t("AboutNavLink")}
        </Link>
        <Link href="/portfolio" className="hover:text-blue-500 transition">
          {t("PortfolioNavLink")}
        </Link>
        <Link href="/contact" className="hover:text-blue-500 transition">
          {t("ContactNavLink")}
        </Link>
      </nav>
      <div className="flex items-center space-x-2">
        <HamburgerMenu />
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
        <div className="text-center hidden md:block ">
          <a href={"/en"} className="p-4 hover:bg-red-100 rounded-3xl">
            EN
          </a>
          | |
          <Link href={"/fa"} className="p-4 hover:bg-blue-100 rounded-3xl">
            FA
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
