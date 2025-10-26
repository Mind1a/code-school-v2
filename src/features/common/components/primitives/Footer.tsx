"use client";

import Image from "next/image";
import Link from "next/link";
import { contactLinks, footerLogos } from "../../../landing/data/data";

const Footer = () => {
  return (
    <footer className="w-full bg-[#3e3e3e] flex flex-col gap-[37px] py-[59px] text-white">
      <div className="max-w-[1440px] w-full mx-auto flex justify-between items-center px-[130px] gap-[37px]">
        <div className="">
          <ul className="flex flex-col gap-3">
            {contactLinks.map(({ id, icon, alt, href, label, external }) => (
              <li
                key={id}
                className="flex items-center gap-4 leading-[130%] text-sm font-light"
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
                    className=" transition-colors text-[20px]"
                  >
                    {label}
                  </Link>
                ) : (
                  <Link href={href} className="transition-colors text-[20px]">
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-[29.6px]">
          {footerLogos.map(({ id, icon, alt, href, width, height }) => (
            <Link
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={icon} alt={alt} width={width} height={height} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
