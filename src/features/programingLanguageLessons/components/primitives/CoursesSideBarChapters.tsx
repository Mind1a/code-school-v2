'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { CoursesSidebarProps } from '../../type';
import CoursesSideBarChapterItem from './CoursesSideBarChapterItem';

const CoursesSideBarChapters = ({
  sections,
  courseId,
}: CoursesSidebarProps) => {
  const pathname = usePathname();

  const [dropDownOpen, setDropDownOpen] = useState<string | null>(null);
  const [completedHomework, setCompletedHomework] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const saved = localStorage.getItem(`completedHomework-${courseId}`);
    if (saved) {
      setCompletedHomework(JSON.parse(saved));
    }
  }, [courseId]);

  useEffect(() => {
    const activeChapter = sections
      .flatMap((section) => section.chapter)
      .find((chapter) =>
        chapter.homework.some((homework) => pathname.includes(homework._id))
      );

    if (activeChapter) {
      setDropDownOpen(activeChapter._id);
    }
  }, [pathname, sections]);

  return (
    <ul className="flex flex-col mt-[10px] w-full">
      {sections.map((section) =>
        section.chapter.map((chapter) => (
          <CoursesSideBarChapterItem
            key={chapter._id}
            chapter={chapter}
            courseId={courseId}
            pathname={pathname}
            dropDownOpen={dropDownOpen}
            setDropDownOpen={setDropDownOpen}
            completedHomework={completedHomework}
          />
        ))
      )}
    </ul>
  );
};

export default CoursesSideBarChapters;
