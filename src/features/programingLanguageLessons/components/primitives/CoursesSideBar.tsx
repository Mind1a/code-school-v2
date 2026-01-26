"use client";

import { CourseByIdApi } from "@/features/common/api/coursesApi";
import { useQuery } from "@tanstack/react-query";
import { Course } from "../../type";
import CoursesSideBarSkeleton from "./CoursesSideBarSkeleton";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useParams } from "next/navigation";
import CoursesSideBarItem from "./CoursesSideBarItem";
import { CoursesSideBarProps } from "@/features/landing/types";

// Store scroll position outside React to persist across re-renders
let savedScrollPosition = 0;
let isNavigating = false;

// Helper to get stored state from localStorage
const getStoredSidebarState = (courseId: string) => {
  if (typeof window === "undefined")
    return { openIds: [], dropDownOpenChapters: [] };
  try {
    const stored = localStorage.getItem(`sidebar-state-${courseId}`);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    // ignore
  }
  return { openIds: [], dropDownOpenChapters: [] };
};

// Helper to save state to localStorage
const saveSidebarState = (
  courseId: string,
  openIds: string[],
  dropDownOpenChapters: string[],
) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(
      `sidebar-state-${courseId}`,
      JSON.stringify({ openIds, dropDownOpenChapters }),
    );
  } catch (e) {
    // ignore
  }
};

const CoursesSideBar = ({
  isSidebarVisible,
  courseId,
}: CoursesSideBarProps) => {
  const params = useParams();
  const activeChapterId = params.chapterId as string;

  // Initialize state from localStorage
  const [openIds, setOpenIds] = useState<string[]>(() => {
    return getStoredSidebarState(courseId).openIds;
  });
  const [dropDownOpenChapters, setDropDownOpenChapters] = useState<string[]>(
    () => {
      return getStoredSidebarState(courseId).dropDownOpenChapters;
    },
  );

  const isRouteChangeRef = useRef(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const prevChapterIdRef = useRef(activeChapterId);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    saveSidebarState(courseId, openIds, dropDownOpenChapters);
  }, [courseId, openIds, dropDownOpenChapters]);

  // Detect navigation and lock scroll position
  useEffect(() => {
    if (prevChapterIdRef.current !== activeChapterId) {
      isNavigating = true;
      prevChapterIdRef.current = activeChapterId;

      // Unlock after animations settle
      const timer = setTimeout(() => {
        isNavigating = false;
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [activeChapterId]);

  // Save scroll position when user scrolls (not during navigation)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (!isNavigating) {
        savedScrollPosition = container.scrollTop;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Restore scroll position using useLayoutEffect (runs before paint)
  useLayoutEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || savedScrollPosition <= 0) return;

    container.scrollTop = savedScrollPosition;
  });

  // Also restore after state changes and animations
  useEffect(() => {
    if (savedScrollPosition <= 0) return;

    const restoreScroll = () => {
      const container = scrollContainerRef.current;
      if (container && isNavigating) {
        container.scrollTop = savedScrollPosition;
      }
    };

    // Restore multiple times during animation
    const timers = [
      setTimeout(restoreScroll, 0),
      setTimeout(restoreScroll, 16),
      setTimeout(restoreScroll, 50),
      setTimeout(restoreScroll, 100),
      setTimeout(restoreScroll, 200),
      setTimeout(restoreScroll, 350),
      setTimeout(restoreScroll, 500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [activeChapterId, openIds, dropDownOpenChapters]);

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
      (item.chapter ?? []).some((ch) => ch._id === activeChapterId),
    );

    if (opened) {
      isRouteChangeRef.current = true;
      setOpenIds((prev) =>
        prev.includes(opened._id) ? prev : [...prev, opened._id],
      );
      // Reset ref after state update to avoid further items being affected
      setTimeout(() => {
        isRouteChangeRef.current = false;
      }, 0);
    }
  }, [activeChapterId, course]);

  return (
    <>
      {isLoading && <CoursesSideBarSkeleton />}

      {isError && (
        <p className="text-[20px] text-red-500">
          კურსის ჩატვირთვა ვერ მოხერხდა.
        </p>
      )}

      {!isLoading && !isError && (
        <div
          ref={scrollContainerRef}
          style={{
            width: isSidebarVisible ? 380 : 0,
            opacity: isSidebarVisible ? 1 : 0,
            overflowAnchor: "none",
          }}
          className="flex flex-col flex-shrink-0 items-center gap-[8px] bg-[#f8feff] pt-[18px] pb-[18px] pr-[4px] pl-[8px] border border-[#b7dae0] rounded-xl h-full overflow-y-auto overflow-x-hidden transition-all duration-500 ease-in-out [&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#b7dae0] [&::-webkit-scrollbar-thumb]:rounded-full"
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
        </div>
      )}
    </>
  );
};

export default CoursesSideBar;
