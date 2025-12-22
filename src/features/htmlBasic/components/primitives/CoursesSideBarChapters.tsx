'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CoursesSidebarProps } from '../../type';

const CoursesSideBarChapters = ({
  sections,
  activeChapterId,
  courseId,
}: CoursesSidebarProps) => {
  const [dropDownOpen, setDropDownOpen] = useState<string | null>(null);

  return (
    <ul className="flex flex-col mt-[10px] w-full">
      {sections.map((section) =>
        section.chapter.map((chapter) => (
          <li
            key={chapter._id}
            className="flex flex-col w-full min-h-[48px] text-[14px]"
          >
            <div
              className={`group py-[2px] flex items-center gap-[8px] hover:bg-[#89B9DD70]
              ${chapter._id === activeChapterId ? 'bg-[#89B9DD70]' : ''}`}
            >
              <div
                className={`bg-[#467DA6] w-[5px] h-[45px] rounded-tr-[8px] rounded-br-[8px]
                opacity-0 group-hover:opacity-100
                ${chapter._id === activeChapterId ? 'opacity-100' : ''}`}
              />

              <div className="flex justify-between pr-[16px] w-full text-black">
                <Link
                  className="flex gap-[6px] text-[14px]"
                  href={`/courses/${courseId}/chapter/${chapter._id}`}
                >
                  <span className="font-bold">{chapter.chapterNumber}</span>
                  {chapter.chapterTitle}
                </Link>

                {chapter.homework.length > 0 && (
                  <motion.button
                    className="cursor-pointer"
                    onClick={() =>
                      setDropDownOpen(
                        dropDownOpen === chapter._id ? null : chapter._id
                      )
                    }
                    animate={dropDownOpen === chapter._id ? 'open' : 'closed'}
                    variants={{
                      open: { rotate: -180 },
                      closed: { rotate: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/images/svg/dropDownChapter.svg"
                      alt="arrow"
                      width={9}
                      height={6}
                    />
                  </motion.button>
                )}
              </div>
            </div>

            <AnimatePresence>
              {dropDownOpen === chapter._id && (
                <motion.ul
                  className="flex flex-col gap-[5px] pl-[44px]"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {chapter.homework.map((homework) => (
                    <li key={homework._id}>
                      <Link
                        href={`/courses/${courseId}/chapter/${chapter._id}/homework/${homework._id}`}
                        className="text-[#454545]"
                      >
                        დავალება <b>#{homework.order}</b>
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        ))
      )}
    </ul>
  );
};

export default CoursesSideBarChapters;
