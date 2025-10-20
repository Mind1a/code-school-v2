export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}
export type FooterLink = {
  id: number;
  icon: string;
  alt: string;
  href: string;
  label: string;
  external?: boolean;
};

export type FooterLogo = {
  id: number;
  icon: string;
  alt: string;
  href: string;
  width: number;
  height: number;
};
export type Article = {
  id: string;
  title: string;
  paragraphs: string[];
  fullWidth?: boolean;
};
export type CourseCard = {
  id: string;
  href: string;
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  backgroundColor: string;
  shadowColor: string;
  courseName: string;
  author: string;
  topicsCount: number;
};
