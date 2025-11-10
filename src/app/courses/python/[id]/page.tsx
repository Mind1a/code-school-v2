"use client";

import ProgressBar from "@/features/common/components/primitives/ProgressBar";
import CoursesSidebar from "@/features/courses/components/composites/CoursesSidebar";
import { sidebarData } from "@/features/courses/data/sidebarData";
import { usePythonProgressStore } from "@/features/store/useProgressStore";

const Page = () => {
  const progress = usePythonProgressStore((s) => s.progress);
  const activeLessonIds = usePythonProgressStore((s) => s.activeLessonIds);
  const toggleLesson = usePythonProgressStore((s) => s.toggleLesson);
  const setTotalLessons = usePythonProgressStore((s) => s.setTotalLessons);

  return (
    <div className="max-w-[1440px] px-[130px] mx-auto w-full">
      <ProgressBar title="Python" progress={progress.toFixed(0)} />
      <CoursesSidebar
        sidebarData={sidebarData}
        activeLessonIds={activeLessonIds}
        toggleLesson={toggleLesson}
        setTotalLessons={setTotalLessons}
      />
    </div>
  );
};

export default Page;
