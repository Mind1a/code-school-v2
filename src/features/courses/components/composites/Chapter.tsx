import ChapterHeader from "@/features/courses/components/primitives/ChapterHeader";
import LessonRow from "@/features/courses/components/primitives/LessonRow";
import SubsectionList from "@/features/courses/components/primitives/SubsectionList";
import { ChapterProps } from "@/features/courses/types";
import { AnimatePresence, motion } from "motion/react";

export default function Chapter({
  chapter,
  isOpen,
  onToggle,
  selectedLessonIds,
  onToggleLesson,
}: ChapterProps) {
  return (
    <div className={`rounded-xl ${isOpen ? "bg-[#d2ebfe]" : "bg-[#89b9dd]"} `}>
      <ChapterHeader
        chapterId={chapter.id}
        title={chapter.title}
        isOpen={isOpen}
        onToggle={onToggle}
      />

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="mt-2  flex flex-col "
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            {chapter.lessons.map((lesson, index) => {
              const isSelected = selectedLessonIds.includes(lesson.id);
              const chapterIndexLabel = `${chapter.id}.${index + 1}`;
              return (
                <div key={lesson.id}>
                  <LessonRow
                    chapterIndexLabel={chapterIndexLabel}
                    title={lesson.title}
                    isSelected={isSelected}
                    hasSubsections={!!lesson.subsections}
                    onClick={() => onToggleLesson(lesson.id)}
                  />
                  <AnimatePresence initial={false}>
                    {lesson.subsections && isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <SubsectionList
                          lessonId={lesson.id}
                          subsections={lesson.subsections}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
