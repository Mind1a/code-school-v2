"use client";

import ProgressBar from "@/features/common/components/primitives/ProgressBar";
import { sidebarData } from "@/features/courses/data/sidebarData";
import { useHtmlProgressStore } from "@/features/store/useProgressStore";

export default function Course() {
  const progress = useHtmlProgressStore((s) => s.progress);
  const increaseProgress = useHtmlProgressStore((s) => s.increaseProgress);
  const reset = useHtmlProgressStore((s) => s.resetProgress);

  const subChaptersLength = sidebarData.reduce((acc, curr) => {
    return (acc += curr.lessons.length);
  }, 0);

  return (
    <div className="max-w-[1180px] mx-auto flex flex-1 flex-col text-black w-full">
      <ProgressBar title="HTML ის საფუძვლები" progress={progress.toFixed(0)} />
      <button onClick={reset}>reset</button>
      {/* Accordion */}
      <div className="flex flex-col gap-3 max-w-[380px]">
        {sidebarData.map((chapter) => (
          <div
            key={chapter.id}
            className="bg-blue-500 flex flex-col items-start gap-3"
          >
            <button>
              {chapter.id}. {chapter.title}
            </button>
            <ul className="flex flex-col gap-3 bg-blue-200 w-full">
              {chapter.lessons.map((lesson) => (
                <li key={lesson.id}>
                  <button
                    onClick={() => increaseProgress(100 / subChaptersLength)}
                  >
                    {lesson.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
