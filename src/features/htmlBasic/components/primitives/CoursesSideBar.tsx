'use client';
import { CourseByIdApi } from '@/features/common/api/coursesApi';
import { useQuery } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'motion/react';
import { Course } from '../../type';
import Image from 'next/image';
import { useParams } from 'next/navigation';

type CoursesSideBarProps = {
  isSidebarVisible: boolean;
};

const CoursesSideBar = ({ isSidebarVisible }: CoursesSideBarProps) => {
  const { courseId } = useParams();

  const {
    data: course,
    isLoading,
    isError,
  } = useQuery<Course>({
    queryKey: ['course', courseId],
    queryFn: () => CourseByIdApi(courseId as string),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError || !course) return <div>Error loading courses</div>;

  return (
    <AnimatePresence>
      <motion.div
        initial={false}
        animate={{
          width: isSidebarVisible ? 380 : 0,
          opacity: isSidebarVisible ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="flex flex-col flex-shrink-0 gap-[8px] bg-[#f8feff] bg-gradient-to-br p-4 border border-[#b7dae0] rounded-xl min-h-[700px] overflow-hidden"
      >
        {course.tableOfContent.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-start bg-[#89B9DD] py-[16px] pr-[35px] pl-[8px] rounded-[14px] w-full max-w-[358px] min-h-[100px]"
          >
            <div className="flex gap-[5px]">
              <p className="font-bold text-[18px] text-black">{item.order}.</p>
              <p className="w-full max-w-[250px] font-bold text-[18px] text-black">
                {item.title}
              </p>
            </div>
            <Image
              src="/images/svg/dropDownIcon.svg"
              alt="dropDown"
              width={14}
              height={8}
              className="mt-[10px]"
            />
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default CoursesSideBar;
