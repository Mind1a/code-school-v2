"use client";

import { CoursesSideBarItemProps } from "@/features/landing/types";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useRef, useEffect } from "react";
import CoursesSideBarChapters from "./CoursesSideBarChapters";

const CoursesSideBarItem = ({
  item,
  openIds,
  setOpenIds,
  activeChapterId,
  courseId,
  isRouteChangeRef,
  dropDownOpenChapters,
  setDropDownOpenChapters,
}: CoursesSideBarItemProps & {
  isRouteChangeRef: React.MutableRefObject<boolean>;
}) => {
  const isOpen = openIds.includes(item._id);
  const shouldAnimateRef = useRef(false);
  const isInitialRenderRef = useRef(true);
  const userToggledRef = useRef(false);

  useEffect(() => {
    // Skip first render
    if (isInitialRenderRef.current) {
      isInitialRenderRef.current = false;
      return;
    }

    // Animate only when user clicked to toggle.
    // Route changes / programmatic opens should not animate.
    shouldAnimateRef.current =
      userToggledRef.current && !isRouteChangeRef.current;
    userToggledRef.current = false;
  }, [isOpen, isRouteChangeRef]);

  const toggleOpen = () => {
    userToggledRef.current = true;
    shouldAnimateRef.current = true;
    setOpenIds((prev) =>
      isOpen ? prev.filter((id) => id !== item._id) : [...prev, item._id],
    );
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className={`flex flex-col justify-between ${
          isOpen ? "bg-[#D2EBFE]" : "bg-[#89B9DD]"
        } items-start py-[16px] transition-all duration-300 ease-in-out rounded-[14px] w-full max-w-[345px] min-h-[100px]`}
      >
        <div className="flex justify-between items-center pr-[35px] pl-[8px] w-full">
          <button
            onClick={toggleOpen}
            className="flex gap-[5px] cursor-pointer hover:opacity-70 transition-opacity text-left"
          >
            <p className="font-bold text-[18px] text-black">{item.order}.</p>
            <p className="max-w-[250px] font-bold text-[18px] text-black">
              {item.title}
            </p>
          </button>

          <motion.button
            onClick={toggleOpen}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={{ open: { rotate: -180 }, closed: { rotate: 0 } }}
            transition={{ duration: shouldAnimateRef.current ? 0.3 : 0 }}
            className="cursor-pointer px-[8px] py-[4px] -mr-[8px] hover:opacity-70 transition-opacity"
          >
            <Image
              src="/images/svg/dropDownIcon.svg"
              alt="arrow"
              width={12}
              height={7}
            />
          </motion.button>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={
                shouldAnimateRef.current
                  ? { height: 0, opacity: 0 }
                  : { height: "auto", opacity: 1 }
              }
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full overflow-hidden"
            >
              <CoursesSideBarChapters
                sections={[item]}
                activeChapterId={activeChapterId}
                courseId={courseId}
                sectionOpened={isOpen}
                dropDownOpen={dropDownOpenChapters || []}
                setDropDownOpen={setDropDownOpenChapters || (() => {})}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CoursesSideBarItem;
