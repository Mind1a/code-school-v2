"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "../../../landing/data/data";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="relative z-10 bg-white shadow-[0_4px_30px_10px_rgba(0,0,0,0.05)]">
      <div className="max-w-[1440px] h-[118px] flex items-center px-[130px] mx-auto">
        <nav
          aria-label="Header Navigation"
          className="flex items-center justify-between w-full"
        >
          {/* Logo */}
          <Link href="/" className="block">
            <Image
              src="/images/svg/logo.svg"
              alt="საიტის მთავარი ლოგო"
              width={215}
              height={62}
              priority
            />
          </Link>

          {/* Navigation Links */}
          <ul className="flex gap-[44px] font-semibold">
            {navLinks.map(({ label, href, external }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);

              // External link
              if (external) {
                return (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[17.8px] leading-[20px] text-[#4B5563] transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                );
              }

              // Internal link
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-[17.8px] leading-[20px] transition-colors ${
                      isActive ? "text-[#000000]" : "text-[#4B5563]"
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
