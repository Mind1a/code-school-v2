'use client';
import { CourseByIdApi } from '@/features/common/api/coursesApi';
import { useQuery } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'motion/react';
import { Course } from '../../type';
import Image from 'next/image';
import CoursesSideBarSkeleton from './CoursesSideBarSkeleton';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type CoursesSideBarProps = {
  isSidebarVisible: boolean;
  courseId: string;
};

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

    setOpenId(
      course.tableOfContent.find((item) =>
        item.section.some((s) =>
          s.chapter.some((ch) => ch._id === activeChapterId)
        )
      )?._id ?? null
    );
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
          className="flex flex-col flex-shrink-0 gap-[8px] bg-[#f8feff] p-4 border border-[#b7dae0] rounded-xl min-h-[700px] overflow-hidden"
        >
          {course?.tableOfContent.map((item) => (
            <div key={item._id}>
              <div
                className={`flex flex-col justify-between ${
                  openId === item._id ? 'bg-[#D2EBFE]' : 'bg-[#89B9DD]'
                } items-start py-[16px] transition-all duration-300 ease-in-out rounded-[14px] w-full max-w-[358px] min-h-[100px] cursor-pointer`}
              >
                <div className="flex justify-between items-start pr-[35px] pl-[8px] w-full">
                  <div className="flex gap-[5px]">
                    <p className="font-bold text-[18px] text-black">
                      {item.order}.
                    </p>
                    <p className="w-full max-w-[250px] font-bold text-[18px] text-black">
                      {item.title}
                    </p>
                  </div>
                  <motion.div
                    onClick={() =>
                      setOpenId(openId === item._id ? null : item._id)
                    }
                    animate={openId === item._id ? 'open' : 'closed'}
                    variants={{ open: { rotate: -180 }, closed: { rotate: 0 } }}
                    transition={{ duration: 0.3 }}
                    className="mt-[10px]"
                  >
                    <Image
                      src="/images/svg/dropDownIcon.svg"
                      alt="arrow"
                      width={12}
                      height={7}
                    />
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {openId === item._id && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                      className="w-full overflow-hidden"
                    >
                      <ul className="flex flex-col mt-[10px] w-full">
                        {item.section.map((section) =>
                          section.chapter.map((chapter) => (
                            <li
                              key={chapter._id}
                              className={`hover:bg-[#89B9DD70] px-[8px] py-[15px] cursor-default w-full font-medium text-[14px] text-black ${
                                chapter._id === activeChapterId &&
                                'bg-[#89B9DD70]'
                              }`}
                            >
                              <Link
                                href={`/courses/${courseId}/chapter/${chapter._id}`}
                              >
                                {chapter.chapterNumber}. {chapter.chapterTitle}
                              </Link>
                            </li>
                          ))
                        )}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CoursesSideBar;
