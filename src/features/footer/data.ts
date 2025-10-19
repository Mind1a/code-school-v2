import { FooterLink, FooterLogo } from "./types";

export const contactLinks: FooterLink[] = [
  {
    id: 1,
    icon: "/images/svg/info_icon.svg",
    alt: "Email icon",
    href: "mailto:info@iliauni.edu.ge",
    label: "info@iliauni.edu.ge",
  },
  {
    id: 2,
    icon: "/images/svg/phone_icon.svg",
    alt: "Phone icon",
    href: "tel:+995322220009",
    label: "(+995 32) 222 00 09",
  },
  {
    id: 3,
    icon: "/images/svg/location_icon.svg",
    alt: "Location icon",
    href: "https://maps.app.goo.gl/nvPokDBG7115F1ie9",
    label: "თბილისი ქაქუცა ჩოლოყაშვილის გამზირი 3/5",
    external: true,
  },
];

export const footerLogos: FooterLogo[] = [
  {
    id: 1,
    icon: "/images/svg/logo_unilab.svg",
    alt: "Unilab Logo",
    href: "https://unilab.iliauni.edu.ge/",
  },
  {
    id: 2,
    icon: "/images/svg/logo_iliauni.svg",
    alt: "Iliauni Logo",
    href: "https://iliauni.edu.ge/en/",
  },
];
