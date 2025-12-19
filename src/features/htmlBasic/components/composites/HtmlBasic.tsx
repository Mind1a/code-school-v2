'use client';
import { useState } from 'react';
import BackAndNextbuttons from '../primitives/BackAndNextbuttons';
import CoursesSideBar from '../primitives/CoursesSideBar';
import Homework from '../primitives/Homework';

type HtmlHomeworkPageProps = {
  courseId: string;
  homeworkId?: string;
};

export default function HtmlHomeworkPage({
  courseId,
  homeworkId,
}: HtmlHomeworkPageProps) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <div className="flex flex-col gap-[28px] mx-auto mt-[80px] mb-[117px] w-full max-w-[1180px]">
      <div className={`flex ${isSidebarVisible ? 'gap-[20px]' : 'gap-0'}`}>
        <CoursesSideBar
          isSidebarVisible={isSidebarVisible}
          courseId={courseId}
        />
        <Homework
          setIsSidebarVisible={setIsSidebarVisible}
          isSidebarVisible={isSidebarVisible}
          homeworkId={homeworkId}
        />
      </div>
      <BackAndNextbuttons />
    </div>
  );
}
