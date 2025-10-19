"use client";

import Image from "next/image";
import Link from "next/link";
import { contactLinks, footerLogos } from "../../data/data";

const Footer = () => {
  return (
    <footer className="w-full bg-[#3e3e3e] flex flex-col gap-[37px] py-[59px] text-white md:text-base">
      <div className="max-w-[1440px] w-full mx-auto flex justify-between items-center px-[130px] gap-[37px] flex-col md:flex-row md:gap-8 md:items-start lg:px-[130px] sm:px-6">
        <div className="w-full md:w-auto">
          <ul className="flex flex-col gap-2.5 sm:gap-4">
            {contactLinks.map(({ id, icon, alt, href, label, external }) => (
              <li
                key={id}
                className="flex items-center gap-4 sm:gap-3 leading-[130%] text-sm sm:text-base font-light"
              >
                <Image
                  src={icon}
                  alt={alt}
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
                {external ? (
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors"
                  >
                    {label}
                  </Link>
                ) : (
                  <Link
                    href={href}
                    className="hover:text-blue-500 transition-colors"
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-7 sm:gap-6">
          {footerLogos.map(({ id, icon, alt, href }) => (
            <Link
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={icon}
                alt={alt}
                width={alt.includes("Unilab") ? 57 : 75}
                height={alt.includes("Unilab") ? 76 : 76}
                className="object-contain sm:w-[49px] sm:h-[64px] xs:w-[44px] xs:h-[61px] hover:opacity-80 transition-opacity"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
