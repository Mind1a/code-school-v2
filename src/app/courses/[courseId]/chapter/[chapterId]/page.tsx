'use client';

import HtmlHomeworkPage from '@/features/programingLanguageLessons/components/composites/HtmlBasic';
import { Params } from '@/features/programingLanguageLessons/type';
import { useParams } from 'next/navigation';

const ChapterPage = () => {
  const { courseId, chapterId } = useParams() as Params;

  if (!courseId || !chapterId) return <div>Loading...</div>;

  return (
    <div>
      <HtmlHomeworkPage courseId={courseId} chapterId={chapterId} />
    </div>
  );
};

export default ChapterPage;
