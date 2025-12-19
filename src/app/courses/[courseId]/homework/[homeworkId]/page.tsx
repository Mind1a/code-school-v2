'use client';
import HtmlHomeworkPage from '@/features/htmlBasic/components/composites/HtmlBasic';
import { useParams } from 'next/navigation';

const HomeworkDetailPage = () => {
  const { courseId, homeworkId } = useParams();

  return (
    <div>
      <HtmlHomeworkPage courseId={courseId} homeworkId={homeworkId} />
    </div>
  );
};

export default HomeworkDetailPage;
