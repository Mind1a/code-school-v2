export type Chapter = {
  _id: string;
  title: string;
  order: number;
  chapterNumber: number;
  chapterTitle: string;
  homework: Homework[];
};

export type Section = {
  _id: string;
  order: number;
  title: string;
  chapter: Chapter[];
};

export type Homework = {
  _id: string;
  order: number;
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
  createdAt: string;
  updatedAt: string;
  stack: string;
  __v: number;
};

export type Params = {
  courseId?: string;
  chapterId?: string;
  homeworkId?: string;
};

export type HomeworkProps = {
  setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarVisible: boolean;
  chapterId?: string;
  homeworkId?: string;
  stack?: string;
};

export type AnswerToggleProps = {
  title?: string;
  children: React.ReactNode;
};
export type ProgressState = {
  progress: number;
  setProgress: (current: number, total: number) => void;
  resetProgress: () => void;
};
export type HtmlHomeworkPageProps = {
  courseId: string;
  homeworkId?: string;
  chapterId?: string;
};
export type CoursesSidebarProps = {
  sections: Section[];
  activeChapterId?: string;
  courseId: string;
};
export type CursesSidebarProps = {
  chapter: Chapter;
  courseId: string;
  pathname: string;
  dropDownOpen: string | null;
  setDropDownOpen: (id: string | null) => void;
  completedHomework: Record<string, boolean>;
  toggleHomework: (id: string) => void;
};
export type CoursesSidebarChapterItemProps = {
  chapter: Chapter;
  courseId: string;
  pathname: string;
  dropDownOpen: string | null;
  setDropDownOpen: (id: string | null) => void;
  completedHomework: Record<string, boolean>;
  toggleHomework: (id: string) => void;
};
