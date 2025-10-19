"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "../data";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="relative z-10 bg-white shadow-[0_4px_30px_10px_rgba(0,0,0,0.05)] font-[NotoSansGeorgian,Arial,Helvetica,sans-serif]">
      <div className="max-w-[1440px] h-[118px] flex items-center px-[130px] mx-auto">
        <nav
          aria-label="Header Navigation"
          className="flex items-center justify-between w-full"
        >
          <Link href="/" className="logo block">
            <Image
              src="/images/svg/logo.svg"
              alt="header main logo"
              width={215}
              height={62}
              priority
            />
          </Link>

          <ul className="flex gap-[44px] font-semibold">
            {navLinks.map(({ label, href, external }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);

              if (external) {
                return (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[17.8px] leading-[20px] text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                );
              }

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-[17.8px] leading-[20px] transition-colors ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
