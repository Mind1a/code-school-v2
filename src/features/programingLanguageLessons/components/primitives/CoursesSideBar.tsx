"use client";

import { CourseByIdApi } from "@/features/common/api/coursesApi";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "motion/react";
import { Course } from "../../type";
import CoursesSideBarSkeleton from "./CoursesSideBarSkeleton";
import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import CoursesSideBarItem from "./CoursesSideBarItem";
import { CoursesSideBarProps } from "@/features/landing/types";

const CoursesSideBar = ({
  isSidebarVisible,
  courseId,
  containerHeight,
}: CoursesSideBarProps) => {
  const params = useParams();
  const activeChapterId = params.chapterId as string;

  const [openIds, setOpenIds] = useState<string[]>([]);
  const [dropDownOpenChapters, setDropDownOpenChapters] = useState<string[]>(
    []
  );
  const isRouteChangeRef = useRef(false);

  const {
    data: course,
    isLoading,
    isError,
  } = useQuery<Course>({
    queryKey: ["course", courseId],
    queryFn: () => CourseByIdApi(courseId),
  });

  useEffect(() => {
    if (!activeChapterId || !course) return;

    const opened = course.tableOfContent.find((item) =>
      (item.chapter ?? []).some((ch) => ch._id === activeChapterId)
    );

    if (opened) {
      isRouteChangeRef.current = true;
      setOpenIds((prev) =>
        prev.includes(opened._id) ? prev : [...prev, opened._id]
      );
      // Reset ref after state update to avoid further items being affected
      setTimeout(() => {
        isRouteChangeRef.current = false;
      }, 0);
    }
  }, [activeChapterId, course]);

  return (
    <AnimatePresence>
      {isLoading && <CoursesSideBarSkeleton />}

      {isError && (
        <p className="text-[20px] text-red-500">
          კურსის ჩატვირთვა ვერ მოხერხდა.
        </p>
      )}

      {!isLoading && !isError && (
        <motion.div
          initial={false}
          animate={{
            width: isSidebarVisible ? 380 : 0,
            opacity: isSidebarVisible ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={
            containerHeight && containerHeight > 0
              ? { height: `${containerHeight}px` }
              : undefined
          }
          className="flex flex-col flex-shrink-0 items-center gap-[8px] bg-[#f8feff] pt-[18px] pb-[18px] pr-[4px] pl-[8px] border border-[#b7dae0] rounded-xl max-h-[calc(100vh-140px)] overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#b7dae0] [&::-webkit-scrollbar-thumb]:rounded-full"
        >
          {course?.tableOfContent.map((item) => (
            <CoursesSideBarItem
              key={item._id}
              item={item}
              openIds={openIds}
              setOpenIds={setOpenIds}
              activeChapterId={activeChapterId}
              courseId={courseId}
              isRouteChangeRef={isRouteChangeRef}
              dropDownOpenChapters={dropDownOpenChapters}
              setDropDownOpenChapters={setDropDownOpenChapters}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CoursesSideBar;
