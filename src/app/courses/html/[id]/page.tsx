"use client";

import ProgressBar from "@/features/common/components/primitives/ProgressBar";
import CoursesSidebar from "@/features/courses/components/composites/CoursesSidebar";
import { sidebarData } from "@/features/courses/data/sidebarData";
import HtmlHomeworkPage from "@/features/htmlBasic/components/composites/HtmlBasic";
import { useHtmlProgressStore } from "@/features/store/useProgressStore";

const page = () => {
  // TODO: Check Last completed lesson from local storage and redirect to that lesson
  // TODO: Implement course detail page for Python - from backend took params id and fetch course details
  // TODO: /courses/python/2.2 -> for lesson page
  // TODO: /courses/python/2.2/homework/1 -> for homework page
  const progress = useHtmlProgressStore((s) => s.progress);
  const activeLessonIds = useHtmlProgressStore((s) => s.activeLessonIds);
  const toggleLesson = useHtmlProgressStore((s) => s.toggleLesson);
  const setTotalLessons = useHtmlProgressStore((s) => s.setTotalLessons);

  return (
    <div className="max-w-[1440px] px-[130px] mx-auto w-full flex-1">
      <ProgressBar title="HTML" progress={progress.toFixed(0)} />
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

export default page;
