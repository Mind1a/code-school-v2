"use client";
import React, { useState } from "react";
import Chapter from "@/features/courses/components/composites/Chapter";
import { sidebarData } from "@/features/courses/data/sidebarData";

export default function CoursesSidebar() {
    const [openChapters, setOpenChapters] = useState<string[]>([]);
    const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);

    const toggleChapter = (chapterId: string) => {
        setOpenChapters(prev =>
            prev.includes(chapterId)
                ? prev.filter(id => id !== chapterId)
                : [...prev, chapterId]
        );
    };

    const selectLesson = (lessonId: string) => {
        setSelectedLessonId((prev: string | null) => (prev === lessonId ? null : lessonId));
    };


    return (
        <div className='rounded-xl border-solid border border-[#b7dae0] py-[18px]  bg-[#f8feff] max-w-[380px] w-full flex flex-col gap-2 px-3'>
            {sidebarData.map((chapter) => (
                <Chapter
                    key={chapter.id}
                    chapter={chapter}
                    isOpen={openChapters.includes(chapter.id)}
                    onToggle={() => toggleChapter(chapter.id)}
                    selectedLessonId={selectedLessonId}
                    onSelectLesson={selectLesson}
                />
            ))}
        </div>
    );
};


