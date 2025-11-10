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
    <div className="max-w-[1440px] px-[130px] mx-auto w-full flex-1">
      <ProgressBar title="Python" progress={progress.toFixed(0)} />
      <div className="flex gap-5 mb-20 mt-7">
        <CoursesSidebar
          sidebarData={sidebarData}
          activeLessonIds={activeLessonIds}
          toggleLesson={toggleLesson}
          setTotalLessons={setTotalLessons}
        />
        <div className="text-black rounded-xl border-solid border border-[#b7dae0] py-[18px] bg-[#f8feff] w-full flex flex-col px-3">
          Hello
        </div>
      </div>
    </div>
  );
};

export default Page;
