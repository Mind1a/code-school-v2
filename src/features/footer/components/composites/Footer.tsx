"use client";

import Image from "next/image";
import Link from "next/link";
import { contactLinks, footerLogos } from "../../data";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-6 py-10">
        {/* Contact Info */}
        <div className="w-full md:w-auto">
          <ul className="flex flex-col gap-4">
            {contactLinks.map(({ id, icon, alt, href, label, external }) => (
              <li key={id} className="flex items-center gap-3 text-gray-700">
                <Image
                  src={icon}
                  alt={alt}
                  width={20}
                  height={20}
                  className="flex-shrink-0"
                />
                {external ? (
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    {label}
                  </Link>
                ) : (
                  <Link
                    href={href}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-8">
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
                width={120}
                height={40}
                className="object-contain hover:opacity-80 transition-opacity"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
