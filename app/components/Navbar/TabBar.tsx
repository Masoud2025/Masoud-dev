"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/about", label: "About", icon: "👤" },
  { href: "/projects", label: "Work", icon: "💼" },
  { href: "/contact", label: "Contact", icon: "✉️" },
] as const;

export default function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav
      role="navigation"
      aria-label="Mobile Tab Bar"
      className="fixed bottom-4 left-1/2 z-50 w-[92%] -translate-x-1/2 md:hidden"
    >
      <ul
        className="
          relative flex items-center justify-between
          rounded-3xl px-6 py-3
          bg-white/70 dark:bg-zinc-900/70
          backdrop-blur-xl
          shadow-[0_10px_30px_rgba(0,0,0,0.12)]
          border border-white/20 dark:border-white/10
        "
      >
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;

          return (
            <li key={tab.href} className="relative flex-1">
              <Link
                href={tab.href}
                aria-current={isActive ? "page" : undefined}
                className={`
                  group relative flex flex-col items-center justify-center
                  gap-1 py-1
                  transition-all duration-200 ease-out
                  active:scale-95
                  ${
                    isActive
                      ? "text-blue-600 dark:text-blue-500"
                      : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                  }
                `}
              >
                {/* Active background pill */}
                {isActive && (
                  <span
                    className="
                      absolute -inset-x-3 -inset-y-2
                      rounded-2xl
                      bg-blue-500/10 dark:bg-blue-500/15
                      transition-all duration-300
                    "
                  />
                )}

                <span className="relative text-xl leading-none">
                  {tab.icon}
                </span>

                <span className="relative text-[11px] font-medium tracking-wide">
                  {tab.label}
                </span>

                {/* Active indicator */}
                {isActive && (
                  <span
                    className="
                      relative mt-1 h-1 w-5
                      rounded-full
                      bg-blue-600 dark:bg-blue-500
                    "
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
