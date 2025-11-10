export type Subsection = {
  id: string;
  title: string;
};

export type Lesson = {
  id: string;
  title: string;
  subsections?: Subsection[];
};

export type Chapter = {
  id: string;
  title: string;
  lessons: Lesson[];
};

export type ChapterProps = {
  chapter: Chapter;
  isOpen: boolean;
  onToggle: () => void;
  activeLessonIds: string[];
  onToggleLesson: (lessonId: string) => void;
};

export type CoursesSidebarProps = {
  data: Chapter[];
};

export type ChapterHeaderProps = {
  chapterId: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
};

export type LessonRowProps = {
  chapterIndexLabel: string;
  title: string;
  isSelected: boolean;
  hasSubsections: boolean;
  onClick: () => void;
};

export type SubsectionListProps = {
  lessonId: string;
  subsections: Subsection[];
};
