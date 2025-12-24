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

export type Homework = {
  _id: string;
  order: number;
};

export type Chapter = {
  _id: string;
  chapterNumber: number;
  chapterTitle: string;
  order: number;
  title: string;
  homework: Homework[];
};

export type Section = {
  _id: string;
  order: number;
  title: string;
  chapter: Chapter[];
};

export type TableOfContentItem = {
  _id: string;
  order: number;
  title: string;
  section: Section[];
  chapter: Chapter[];
  homework: Homework[];
};

export type Course = {
  _id: string;
  name: string;
  author: string;
  sectionCount: number;
  description: string;
  projectPicture: string;
  tableOfContent: TableOfContentItem[];
  stack: string;
};

export type CoursesSideBarItemProps = {
  item: Section;
  openId: string | null;
  setOpenId: (id: string | null) => void;
  activeChapterId?: string;
  courseId: string;
};

export type CoursesSideBarProps = {
  isSidebarVisible: boolean;
  courseId: string;
};
