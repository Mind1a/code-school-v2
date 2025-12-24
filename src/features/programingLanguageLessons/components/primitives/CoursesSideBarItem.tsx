'use client';

import { CoursesSideBarItemProps } from '@/features/landing/types';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import CoursesSideBarChapters from './CoursesSideBarChapters';

const CoursesSideBarItem = ({
  item,
  openId,
  setOpenId,
  activeChapterId,
  courseId,
}: CoursesSideBarItemProps) => {
  const isOpen = openId === item._id;

  return (
    <div>
      <div
        className={`flex flex-col justify-between ${
          isOpen ? 'bg-[#D2EBFE]' : 'bg-[#89B9DD]'
        } items-start py-[16px] transition-all duration-300 ease-in-out rounded-[14px] w-[345px] min-h-[100px]`}
      >
        <div className="flex justify-between items-start pr-[35px] pl-[8px] w-full">
          <div className="flex gap-[5px]">
            <p className="font-bold text-[18px] text-black">{item.order}.</p>
            <p className="max-w-[250px] font-bold text-[18px] text-black">
              {item.title}
            </p>
          </div>

          <motion.div
            onClick={() => setOpenId(isOpen ? null : item._id)}
            animate={isOpen ? 'open' : 'closed'}
            variants={{ open: { rotate: -180 }, closed: { rotate: 0 } }}
            transition={{ duration: 0.3 }}
            className="mt-[10px] cursor-pointer"
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
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full overflow-hidden"
            >
              <CoursesSideBarChapters
                sections={[item]}
                activeChapterId={activeChapterId}
                courseId={courseId}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CoursesSideBarItem;
