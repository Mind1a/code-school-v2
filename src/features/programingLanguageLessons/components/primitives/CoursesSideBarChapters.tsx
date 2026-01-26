"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CoursesSidebarProps } from "../../type";
import CoursesSideBarChapterItem from "./CoursesSideBarChapterItem";

const CoursesSideBarChapters = ({
  sections,
  courseId,
  sectionOpened,
  dropDownOpen = [],
  setDropDownOpen = () => {},
}: CoursesSidebarProps & {
  dropDownOpen?: string[];
  setDropDownOpen?: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const pathname = usePathname();

  const [animateDropdown, setAnimateDropdown] = useState(false);
  const userActionRef = useRef(false);

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
      .find((chapter) => pathname.includes(chapter._id));

    if (activeChapter && !dropDownOpen.includes(activeChapter._id)) {
      // Open due to navigation: no animation.
      userActionRef.current = false;
      setAnimateDropdown(false);
      setDropDownOpen((prev) => [...prev, activeChapter._id]);
    }
  }, [pathname, sections]);

  // Track if we've already initialized this section
  const initializedRef = useRef(false);

  useEffect(() => {
    // When section opens for the first time, auto-open all chapters in the section
    if (sectionOpened && sections.length > 0 && !initializedRef.current) {
      initializedRef.current = true;
      const allChapterIds = sections.flatMap((section) =>
        section.chapter.map((ch) => ch._id),
      );
      const newIds = allChapterIds.filter((id) => !dropDownOpen.includes(id));
      if (newIds.length > 0) {
        // Programmatic open: no animation.
        userActionRef.current = false;
        setAnimateDropdown(false);
        setDropDownOpen((prev) => [...prev, ...newIds]);
      }
    }
  }, [sectionOpened, sections]);

  const setDropDownOpenFromClick: React.Dispatch<
    React.SetStateAction<string[]>
  > = (updater) => {
    userActionRef.current = true;
    setAnimateDropdown(true);
    setDropDownOpen(updater);
  };

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
            setDropDownOpen={setDropDownOpenFromClick}
            animateDropdown={animateDropdown}
            completedHomework={completedHomework}
          />
        )),
      )}
    </ul>
  );
};

export default CoursesSideBarChapters;
