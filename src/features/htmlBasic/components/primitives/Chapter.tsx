'use client';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { ChapterByIdApi } from '@/features/common/api/coursesApi';
import HomeworkSkeleton from './HomeworkSkeleton';
import { HomeworkProps } from '../../type';

const Chapter = ({
  setIsSidebarVisible,
  isSidebarVisible,
  chapterId,
}: HomeworkProps) => {
  if (!chapterId) return <p>No chapter selected.</p>;
  const { data, isLoading, isError } = useQuery({
    queryKey: ['chapter', chapterId],
    queryFn: () => ChapterByIdApi(chapterId),
  });
  if (isLoading) return <HomeworkSkeleton />;
  if (isError || !data) return <p>Error loading homework.</p>;

  return (
    <div className="flex flex-col flex-1 justify-between bg-[#f8feff] px-[20px] py-[20px] border border-[#b7dae0] rounded-xl">
      <div>
        <div className="flex justify-between items-center mb-[8px] min-h-[50px]">
          <p className="font-bold text-[#454545] text-[24px]">
            თავი #{data.chapter.chapterNumber}
          </p>
          <button onClick={() => setIsSidebarVisible((prev) => !prev)}>
            <Image
              src={
                isSidebarVisible
                  ? '/images/svg/ScaleUp.svg'
                  : '/images/svg/ScaleDown.svg'
              }
              alt="arrows"
              width={22}
              height={22}
              className="w-[22px] h-[22px] cursor-pointer"
            />
          </button>
        </div>
        <div className="bg-[#374669] w-full h-[1px]"></div>
        <div>
          <div className="mt-[12px]">
            <p className="font-bold text-[#454545] text-[22px] leading-[32px]">
              {data.chapter.chapterNumber} {data.chapter.chapterTitle}
            </p>
          </div>
          <div className="flex flex-col gap-[16px] mt-[16px]">
            <p className="flex gap-[10px] text-[#454545] leading-[32px]">
              <span className="font-bold text-[18px]">
                საკითხის განმარტება:
              </span>
              <span className="font-light">{data.chapter.description}</span>
            </p>
            <p className="flex gap-[10px] text-[#454545] leading-[32px]">
              <span className="font-bold text-[18px]">
                რეალური ცხოვრების მაგალითი:
              </span>
              <span className="font-light">{data.chapter.realLifeExample}</span>
            </p>
          </div>
        </div>
      </div>

      {data.chapter.imageUrl ? (
        <Image
          src={data.chapter.imageUrl}
          alt="examplePhotoForStudy"
          width={302}
          height={242}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default Chapter;
