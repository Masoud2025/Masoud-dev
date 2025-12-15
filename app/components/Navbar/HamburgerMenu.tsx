"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "../ThemToggle";

const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
        className="p-2 rounded-full border border-current hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
      >
        {open ? "✖️" : "☰"}
      </button>

      {/* Menu Panel */}
      <div
        className={`absolute right-0 mt-2 w-40 rounded-full border border-current backdrop-blur-sm bg-white/0 dark:bg-neutral-900/0 shadow-md overflow-hidden flex flex-col items-center p-4 transition-all duration-300 transform origin-top ${
          open
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {/* Theme Toggle */}
        <div className="mb-4">
          <ThemeToggle />
        </div>

        {/* Language Switch */}
        <div className="flex gap-4 text-sm font-medium">
          <Link
            href="/en"
            className="px-3 py-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            EN
          </Link>
          <Link
            href="/fa"
            className="px-3 py-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            FA
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
