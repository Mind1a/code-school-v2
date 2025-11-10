"use client";

import ProgressBar from "@/features/common/components/primitives/ProgressBar";
import CoursesSidebar from "@/features/courses/components/composites/CoursesSidebar";
import { usePythonProgressStore } from "@/features/store/useProgressStore";

const Page = () => {
  const progress = usePythonProgressStore((s) => s.progress);

  return (
    <div className="max-w-[1440px] px-[130px] mx-auto w-full">
      <ProgressBar title="Python" progress={progress.toFixed(0)} />
      <CoursesSidebar />
    </div>
  );
};

export default Page;
