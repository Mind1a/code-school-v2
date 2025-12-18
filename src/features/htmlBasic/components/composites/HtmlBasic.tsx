'use client';

import { useState } from 'react';
import BackAndNextbuttons from '../primitives/BackAndNextbuttons';
import CoursesSideBar from '../primitives/CoursesSideBar';
import Homework from '../primitives/Homework';

export default function HtmlHomeworkPage() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <div className="flex flex-col gap-[28px] mx-auto mt-[80px] mb-[117px] w-full max-w-[1180px]">
      <div className={`flex ${isSidebarVisible ? 'gap-[20px]' : 'gap-0'}`}>
        <CoursesSideBar isSidebarVisible={isSidebarVisible} />
        <Homework
          setIsSidebarVisible={setIsSidebarVisible}
          isSidebarVisible={isSidebarVisible}
        />
      </div>

      <BackAndNextbuttons />
    </div>
  );
}
