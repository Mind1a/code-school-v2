"use client";
import { useEffect, useRef, useState, useMemo, memo } from "react";
import useMeasure from "react-use-measure";
import BackAndNextbuttons from "../primitives/BackAndNextbuttons";
import CoursesSideBar from "../primitives/CoursesSideBar";
import Homework from "../primitives/Homework";
import Chapter from "../primitives/Chapter";
import {
  useHtmlProgressStore,
  usePythonProgressStore,
} from "@/features/store/useProgressStore";
import ProgressBar from "@/features/common/components/primitives/ProgressBar";
import { useIsFetching, useQuery } from "@tanstack/react-query";
import { CourseByIdApi } from "@/features/common/api/coursesApi";
import { Course, HtmlHomeworkPageProps } from "../../type";

const MemoizedCoursesSideBar = memo(CoursesSideBar);

export default function HtmlHomeworkPage({
  courseId,
  homeworkId,
  chapterId,
}: HtmlHomeworkPageProps) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [rightPanelRef, { height: rightPanelHeight }] = useMeasure();

  // Prevent layout "jump" on navigation by freezing to the last stable height
  // while the next chapter/homework is fetching.
  const [stableRightHeight, setStableRightHeight] = useState(0);
  const isInitialNavRef = useRef(true);

  const fetchingChapter = useIsFetching({ queryKey: ["chapter", chapterId] });
  const fetchingHomework = useIsFetching({
    queryKey: ["homework", homeworkId],
  });
  const isFetchingRight = fetchingChapter > 0 || fetchingHomework > 0;

  const { data: course } = useQuery<Course>({
    queryKey: ["course", courseId],
    queryFn: () => CourseByIdApi(courseId),
  });

  const stack = course?.stack ?? "html";
  const isHtmlCourse = stack === "html";

  const htmlStore = useHtmlProgressStore();
  const pythonStore = usePythonProgressStore();
  const { setProgress } = isHtmlCourse ? htmlStore : pythonStore;

  useEffect(() => {
    if (!course || !chapterId) return;

    const allChapters = course.tableOfContent.flatMap((item) =>
      (item.chapter ?? []).map((chapter) => chapter._id),
    );

    const current = allChapters.indexOf(chapterId) + 1;
    setProgress(current, allChapters.length);
  }, [course, chapterId, setProgress]);

  useEffect(() => {
    // First meaningful measurement marks initial mount as complete.
    if (isInitialNavRef.current && rightPanelHeight > 0 && !isFetchingRight) {
      isInitialNavRef.current = false;
    }

    // Update stable height only after the right panel finishes fetching.
    if (!isFetchingRight && rightPanelHeight > 0) {
      setStableRightHeight(rightPanelHeight);
    }
  }, [rightPanelHeight, isFetchingRight]);

  const freezeHeight =
    !isInitialNavRef.current && isFetchingRight && stableRightHeight > 0;

  const sidebarHeight = freezeHeight ? stableRightHeight : rightPanelHeight;

  return (
    <div className="flex flex-col gap-[28px] mx-auto mt-[80px] mb-[30px] w-full max-w-[1180px]">
      <ProgressBar
        title={isHtmlCourse ? "HTML ის საფუძვლები" : "Python ის საფუძვლები"}
        storeType={isHtmlCourse ? "html" : "python"}
      />
      <div
        className={`flex items-start transition-all duration-300 ease-in-out ${
          isSidebarVisible ? "gap-[20px]" : "gap-0 "
        }`}
        style={{
          height: "calc(100dvh - 250px)",
        }}
      >
        <MemoizedCoursesSideBar
          isSidebarVisible={isSidebarVisible}
          courseId={courseId}
        />
        <div ref={rightPanelRef} className="flex-1 h-full">
          {!homeworkId ? (
            <Chapter
              setIsSidebarVisible={setIsSidebarVisible}
              isSidebarVisible={isSidebarVisible}
              chapterId={chapterId}
            />
          ) : (
            <Homework
              setIsSidebarVisible={setIsSidebarVisible}
              isSidebarVisible={isSidebarVisible}
              homeworkId={homeworkId}
              stack={stack}
            />
          )}
        </div>
      </div>
      <BackAndNextbuttons chapterId={chapterId} courseId={courseId} />
    </div>
  );
}
