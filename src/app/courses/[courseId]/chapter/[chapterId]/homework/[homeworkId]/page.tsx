'use client';
import HtmlHomeworkPage from '@/features/htmlBasic/components/composites/HtmlBasic';
import { Params } from '@/features/htmlBasic/type';
import { useParams } from 'next/navigation';
import React from 'react';

const HomeworkDetailPage: React.FC = () => {
  const { courseId, chapterId, homeworkId } = useParams() as Params;

  if (!courseId || !chapterId || !homeworkId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HtmlHomeworkPage
        courseId={courseId}
        chapterId={chapterId}
        homeworkId={homeworkId}
      />
    </div>
  );
};

export default HomeworkDetailPage;
