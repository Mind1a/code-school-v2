import { ChapterByIdApi } from '@/features/common/api/coursesApi';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Params } from '../../type';

const BackAndNextbuttons = ({ chapterId, courseId }: Params) => {
  if (!chapterId) return <p>No chapter selected.</p>;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['chapter', chapterId],
    queryFn: () => ChapterByIdApi(chapterId),
  });

  const router = useRouter();
  if (isLoading) return <p>loading...</p>;
  if (isError || !data) return <p>Error loading homework.</p>;

  return (
    <div className="flex justify-between items-center mt-7">
      <button
        disabled={!data.prevChapter}
        onClick={() =>
          data.prevChapter &&
          router.push(`/courses/${courseId}/chapter/${data.prevChapter}`)
        }
        className="bg-[#f8feff] hover:opacity-80 shadow-[3px_3px_0_0_#b7dae0] active:shadow-[0_0_0_0_#b7dae0] rounded-lg w-[139px] h-[52px] text-black disabled:text-gray-400 transition-all active:translate-x-[3px] active:translate-y-[3px] duration-150 cursor-pointer disabled:cursor-not-allowed"
      >
        უკან
      </button>

      <button
        disabled={!data.nextChapter}
        onClick={() =>
          data.nextChapter &&
          router.push(`/courses/${courseId}/chapter/${data.nextChapter}`)
        }
        className="bg-[#f8feff] hover:opacity-80 shadow-[3px_3px_0_0_#b7dae0] active:shadow-[0_0_0_0_#b7dae0] rounded-lg w-[139px] h-[52px] text-black disabled:text-gray-400 transition-all active:translate-x-[3px] active:translate-y-[3px] duration-150 cursor-pointer disabled:cursor-not-allowed"
      >
        შემდეგი
      </button>
    </div>
  );
};

export default BackAndNextbuttons;
