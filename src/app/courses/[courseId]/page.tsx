'use client';
import HtmlHomeworkPage from '@/features/htmlBasic/components/composites/HtmlBasic';
import { Params } from '@/features/htmlBasic/type';
import { useParams } from 'next/navigation';

const CoursePage = () => {
  const { courseId } = useParams() as Params;

  if (!courseId) return <div>Loading...</div>;

  return (
    <div>
      <HtmlHomeworkPage courseId={courseId} />
    </div>
  );
};

export default CoursePage;
