'use client';
import { useState, useEffect } from 'react';
import BackAndNextbuttons from '../primitives/BackAndNextbuttons';
import CoursesSideBar from '../primitives/CoursesSideBar';
import Homework from '../primitives/Homework';
import Chapter from '../primitives/Chapter';
import {
  useHtmlProgressStore,
  usePythonProgressStore,
} from '@/features/store/useProgressStore';
import ProgressBar from '@/features/common/components/primitives/ProgressBar';
import { useQuery } from '@tanstack/react-query';
import { CourseByIdApi } from '@/features/common/api/coursesApi';
import { Course, HtmlHomeworkPageProps } from '../../type';

export default function HtmlHomeworkPage({
  courseId,
  homeworkId,
  chapterId,
}: HtmlHomeworkPageProps) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const { data: course } = useQuery<Course>({
    queryKey: ['course', courseId],
    queryFn: () => CourseByIdApi(courseId),
  });

  const stack = course?.stack ?? 'html';
  const isHtmlCourse = stack === 'html';

  const htmlStore = useHtmlProgressStore();
  const pythonStore = usePythonProgressStore();
  const { setProgress } = isHtmlCourse ? htmlStore : pythonStore;

  useEffect(() => {
    if (!course || !chapterId) return;

    const allChapters = course.tableOfContent.flatMap((item) =>
      (item.chapter ?? []).map((chapter) => chapter._id)
    );

    const current = allChapters.indexOf(chapterId) + 1;
    setProgress(current, allChapters.length);
  }, [course, chapterId, setProgress]);

  return (
    <div className="flex flex-col gap-[28px] mx-auto mt-[80px] mb-[117px] w-full max-w-[1180px]">
      <ProgressBar
        title={isHtmlCourse ? 'HTML ის საფუძვლები' : 'Python ის საფუძვლები'}
        storeType={isHtmlCourse ? 'html' : 'python'}
      />
      <div
        className={`flex transition-all duration-300 ease-in-out ${
          isSidebarVisible ? 'gap-[20px]' : 'gap-0 '
        }`}
      >
        <CoursesSideBar
          isSidebarVisible={isSidebarVisible}
          courseId={courseId}
        />
        {!homeworkId ? (
          <Chapter
            setIsSidebarVisible={setIsSidebarVisible}
            isSidebarVisible={isSidebarVisible}
            chapterId={chapterId}
          />
        ) : (
          <Homework
            setIsSidebarVisible={setIsSidebarVisible}
            isSidebarVisible={isSidebarVisible}
            homeworkId={homeworkId}
            stack={stack}
          />
        )}
      </div>
      <BackAndNextbuttons chapterId={chapterId} courseId={courseId} />
    </div>
  );
}
