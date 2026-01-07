'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { CoursesSidebarChapterItemProps } from '../../type';

const CoursesSideBarChapterItem = ({
  chapter,
  courseId,
  pathname,
  dropDownOpen,
  setDropDownOpen,
  completedHomework,
}: CoursesSidebarChapterItemProps) => {
  return (
    <li className="flex flex-col w-full min-h-[48px] text-[14px]">
      <div
        className={`group py-[2px] flex items-center gap-[8px] hover:bg-[#89B9DD70]
        ${pathname.includes(chapter._id) ? 'bg-[#89B9DD70]' : ''}`}
      >
        <div
          className={`bg-[#467DA6] w-[5px] h-[45px] rounded-tr-[8px] rounded-br-[8px]
          opacity-0 group-hover:opacity-100
          ${pathname.includes(chapter._id) ? 'opacity-100' : ''}`}
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
            {chapter.homework.map((homework) => {
              const isCheckedFromUrl = pathname.includes(
                `/homework/${homework._id}`
              );
              return (
                <li key={homework._id} className="flex items-center gap-2">
                  <Link
                    className="flex items-center gap-[6px]"
                    href={`/courses/${courseId}/chapter/${chapter._id}/homework/${homework._id}`}
                  >
                    <input
                      type="checkbox"
                      checked={
                        isCheckedFromUrl || completedHomework[homework._id]
                      }
                      readOnly
                      className="flex justify-center items-center bg-transparent checked:after:bg-black border border-black rounded-full checked:after:rounded-full w-[14px] checked:after:w-[6px] h-[14px] checked:after:h-[6px] checked:after:content-[''] appearance-none cursor-pointer"
                    />

                    <div
                      className={`text-[#454545] ${
                        completedHomework[homework._id]
                      }`}
                    >
                      დავალება <b>#{homework.order}</b>
                    </div>
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

export default CoursesSideBarChapterItem;
