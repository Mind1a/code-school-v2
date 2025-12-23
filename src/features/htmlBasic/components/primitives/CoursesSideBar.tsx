'use client';

import { CourseByIdApi } from '@/features/common/api/coursesApi';
import { useQuery } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'motion/react';
import { Course } from '../../type';
import CoursesSideBarSkeleton from './CoursesSideBarSkeleton';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import CoursesSideBarItem from './CoursesSideBarItem';
import { CoursesSideBarProps } from '@/features/landing/types';

const CoursesSideBar = ({
  isSidebarVisible,
  courseId,
}: CoursesSideBarProps) => {
  const params = useParams();
  const activeChapterId = params.chapterId as string;

  const [openId, setOpenId] = useState<string | null>(null);

  const {
    data: course,
    isLoading,
    isError,
  } = useQuery<Course>({
    queryKey: ['course', courseId],
    queryFn: () => CourseByIdApi(courseId),
  });

  useEffect(() => {
    if (!activeChapterId || !course) return;

    const opened = course.tableOfContent.find((item) =>
      (item.chapter ?? []).some((ch) => ch._id === activeChapterId)
    );

    setOpenId(opened?._id ?? null);
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
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={`flex flex-col flex-shrink-0 gap-[8px] bg-[#f8feff] items-center pt-[18px] border border-[#b7dae0] rounded-xl min-h-[700px] overflow-hidden`}
        >
          {course?.tableOfContent.map((item) => (
            <CoursesSideBarItem
              key={item._id}
              item={item}
              openId={openId}
              setOpenId={setOpenId}
              activeChapterId={activeChapterId}
              courseId={courseId}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CoursesSideBar;
