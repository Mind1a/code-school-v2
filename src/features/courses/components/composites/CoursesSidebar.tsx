"use client";

import React, { useEffect, useState } from "react";
import Chapter from "@/features/courses/components/composites/Chapter";
import { sidebarData } from "@/features/courses/data/sidebarData";
import { usePythonProgressStore } from "@/features/store/useProgressStore";

export default function CoursesSidebar() {
  const [openChapters, setOpenChapters] = useState<string[]>([]);

  const activeLessonIds = usePythonProgressStore((s) => s.activeLessonIds);
  const toggleLesson = usePythonProgressStore((s) => s.toggleLesson);
  const setTotalLessons = usePythonProgressStore((s) => s.setTotalLessons);
  const progress = usePythonProgressStore((s) => s.progress);

  useEffect(() => {
    const total = sidebarData.reduce((acc, ch) => acc + ch.lessons.length, 0);
    setTotalLessons(total);
  }, [setTotalLessons]);

  const toggleChapter = (chapterId: string) => {
    setOpenChapters((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  return (
    <div className="rounded-xl border-solid border border-[#b7dae0] py-[18px] bg-[#f8feff] max-w-[380px] w-full flex flex-col gap-2 px-3">
      <div className="px-3 text-sm">Progress: {progress.toFixed(0)}%</div>

      {sidebarData.map((chapter) => (
        <Chapter
          key={chapter.id}
          chapter={chapter}
          isOpen={openChapters.includes(chapter.id)}
          onToggle={() => toggleChapter(chapter.id)}
          activeLessonIds={activeLessonIds}
          onToggleLesson={(lessonId: string) => toggleLesson(lessonId)}
        />
      ))}
    </div>
  );
}
