"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "../ThemToggle";

const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
        className="p-2 rounded  transition"
      >
        {open ? "✖️" : "☰"}
      </button>

      {open && (
        <div className="text-center absolute right-0 mt-2 w-48  shadow-lg rounded-md flex flex-col p-2 z-50">
          <Link href="/" className="p-2  rounded">
            <ThemeToggle />
          </Link>

          <div className="text-center mt-8">
            <a href={"/en"} className="p-4 hover:bg-red-100 rounded-3xl">
              EN
            </a>
            | |
            <Link href={"/fa"} className="p-4 hover:bg-blue-100 rounded-3xl">
              FA
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
