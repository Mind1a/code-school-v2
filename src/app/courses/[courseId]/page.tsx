'use client';
import HtmlHomeworkPage from '@/features/htmlBasic/components/composites/HtmlBasic';
import { useParams } from 'next/navigation';

const CoursePage = () => {
  const { courseId } = useParams();

  return (
    <div>
      <HtmlHomeworkPage courseId={courseId} />
    </div>
  );
};

export default CoursePage;
