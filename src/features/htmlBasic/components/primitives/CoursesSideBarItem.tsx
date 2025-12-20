'use client';

import { CoursesSideBarItemProps } from '@/features/landing/types';
import { li } from 'framer-motion/client';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const CoursesSideBarItem = ({
  item,
  openId,
  setOpenId,
  activeChapterId,
  courseId,
}: CoursesSideBarItemProps) => {
  const isOpen = openId === item._id;
  const [dropDownOpen, setDropDownOpen] = useState<string | null>(null);

  return (
    <div>
      <div
        className={`flex flex-col justify-between ${
          isOpen ? 'bg-[#D2EBFE]' : 'bg-[#89B9DD]'
        } items-start py-[16px] transition-all duration-300 ease-in-out rounded-[14px] w-full max-w-[358px] min-h-[100px] cursor-pointer`}
      >
        <div className="flex justify-between items-start pr-[35px] pl-[8px] w-full">
          <div className="flex gap-[5px]">
            <p className="font-bold text-[18px] text-black">{item.order}.</p>
            <p className="w-full max-w-[250px] font-bold text-[18px] text-black">
              {item.title}
            </p>
          </div>

          <motion.div
            onClick={() => setOpenId(isOpen ? null : item._id)}
            animate={isOpen ? 'open' : 'closed'}
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
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="w-full overflow-hidden"
            >
              <ul className="flex flex-col mt-[10px] w-full">
                {item.section.map((section: any) =>
                  section.chapter.map((chapter: any) => (
                    <li
                      key={chapter._id}
                      className="flex flex-col w-full min-h-[48px] overflow-hidden font-medium text-[14px] text-black cursor-default"
                    >
                      <div
                        className={`group py-[2px] flex items-center gap-[8px] hover:bg-[#89B9DD70] w-full ${
                          chapter._id === activeChapterId
                            ? 'bg-[#89B9DD70]'
                            : ''
                        }`}
                      >
                        <div
                          className={`bg-[#467DA6] opacity-0 group-hover:opacity-100 rounded-tr-[8px] rounded-br-[8px] w-[5px] h-[45px] transition-opacity duration-200
                          ${
                            chapter._id === activeChapterId ? 'opacity-100' : ''
                          }`}
                        ></div>
                        <div className="flex justify-between pr-[16px] w-full">
                          <Link
                            href={`/courses/${courseId}/chapter/${chapter._id}`}
                          >
                            {chapter.chapterNumber}. {chapter.chapterTitle}
                          </Link>
                          {chapter.homework.length === 0 ? (
                            ''
                          ) : (
                            <motion.button
                              animate={
                                dropDownOpen === chapter._id ? 'open' : 'closed'
                              }
                              variants={{
                                open: { rotate: 180 },
                                closed: { rotate: 0 },
                              }}
                              transition={{ duration: 0.3 }}
                              onClick={() =>
                                setDropDownOpen(
                                  dropDownOpen === chapter._id
                                    ? null
                                    : chapter._id
                                )
                              }
                            >
                              <Image
                                src="/images/svg/dropDownChapter.svg"
                                alt="arrow"
                                width={9}
                                height={6}
                                className="cursor-pointer"
                              />
                            </motion.button>
                          )}
                        </div>
                      </div>
                      <AnimatePresence>
                        {dropDownOpen === chapter._id && (
                          <motion.ul
                            className="pl-[44px] w-full"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'linear' }}
                          >
                            {chapter.homework.map((homeworkItem) => (
                              <li key={homeworkItem._id}>
                                <Link
                                  href={`/courses/${courseId}/chapter/${chapter._id}/homework/${homeworkItem._id}`}
                                  className="text-[#454545] text-[14px]"
                                >
                                  დავალება{' '}
                                  <span className="font-bold">
                                    #{homeworkItem.order}
                                  </span>
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CoursesSideBarItem;
