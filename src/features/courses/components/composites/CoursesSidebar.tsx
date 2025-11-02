"use client";
import React, { useState } from "react";
import Chapter from "@/features/courses/components/composites/Chapter";
import { sidebarData } from "@/features/courses/data/sidebarData";

export default function CoursesSidebar() {
    const [openChapters, setOpenChapters] = useState<string[]>([]);
    const [selectedLessonIds, setSelectedLessonIds] = useState<string[]>([]);

    const toggleChapter = (chapterId: string) => {
        setOpenChapters(prev =>
            prev.includes(chapterId)
                ? prev.filter(id => id !== chapterId)
                : [...prev, chapterId]
        );
    };

    const toggleLesson = (lessonId: string) => {
        setSelectedLessonIds(prev =>
            prev.includes(lessonId)
                ? prev.filter(id => id !== lessonId)
                : [...prev, lessonId]
        );
    };

    return (
        <div className='rounded-xl border-solid border border-[#b7dae0] py-[18px]  bg-[#f8feff] max-w-[380px] w-full flex flex-col gap-2 px-3'>
            {sidebarData.map((chapter) => (
                <Chapter
                    key={chapter.id}
                    chapter={chapter}
                    isOpen={openChapters.includes(chapter.id)}
                    onToggle={() => toggleChapter(chapter.id)}
                    selectedLessonIds={selectedLessonIds}
                    onToggleLesson={toggleLesson}
                />
            ))}
        </div>
    );
};


