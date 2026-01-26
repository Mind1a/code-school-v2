import { ChapterByIdApi } from "@/features/common/api/coursesApi";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Params } from "../../type";

const BackAndNextbuttons = ({ chapterId, courseId }: Params) => {
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["chapter", chapterId],
    queryFn: () => ChapterByIdApi(chapterId!),
  });

  if (!chapterId) return <p>No chapter selected.</p>;

  const isDisabled = isLoading || isError || !data;

  return (
    <div className="flex justify-between items-center mt-7">
      <button
        disabled={isDisabled || !data?.prevChapter}
        onClick={() =>
          data?.prevChapter &&
          router.push(`/courses/${courseId}/chapter/${data.prevChapter}`, {
            scroll: false,
          })
        }
        className="bg-[#f8feff] hover:opacity-80 shadow-[3px_3px_0_0_#b7dae0] active:shadow-[0_0_0_0_#b7dae0] rounded-lg w-[139px] h-[52px] text-black disabled:text-gray-400 transition-all active:translate-x-[3px] active:translate-y-[3px] duration-150 cursor-pointer disabled:cursor-not-allowed"
      >
        უკან
      </button>

      <button
        disabled={isDisabled || !data?.nextChapter}
        onClick={() =>
          data?.nextChapter &&
          router.push(`/courses/${courseId}/chapter/${data.nextChapter}`, {
            scroll: false,
          })
        }
        className="bg-[#f8feff] hover:opacity-80 shadow-[3px_3px_0_0_#b7dae0] active:shadow-[0_0_0_0_#b7dae0] rounded-lg w-[139px] h-[52px] text-black disabled:text-gray-400 transition-all active:translate-x-[3px] active:translate-y-[3px] duration-150 cursor-pointer disabled:cursor-not-allowed"
      >
        შემდეგი
      </button>
    </div>
  );
};

export default BackAndNextbuttons;
