"use client";

import React, { useEffect, useState } from "react";
import Chapter from "@/features/courses/components/composites/Chapter";
import { ChapterType } from "../../types";

export default function CoursesSidebar({
  sidebarData,
  activeLessonIds,
  toggleLesson,
  setTotalLessons,
  toggleChapter,
  openChapters,
}: {
  sidebarData: ChapterType[];
  activeLessonIds: string[];
  toggleLesson: (lessonId: string) => void;
  setTotalLessons: (n: number) => void;
  toggleChapter: (chapterId: string) => void;
  openChapters: string[];
}) {
  useEffect(() => {
    const total = sidebarData.reduce((acc, ch) => acc + ch.lessons.length, 0);
    setTotalLessons(total);
  }, [setTotalLessons]);

  return (
    <div className="rounded-xl border-solid border border-[#b7dae0] py-[18px] bg-[#f8feff] max-w-[380px] w-full flex flex-col gap-2 px-3">
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
