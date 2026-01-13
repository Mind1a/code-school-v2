"use client";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { ChapterByIdApi } from "@/features/common/api/coursesApi";
import { HomeworkProps } from "../../type";
import ChapterSkeleton from "./ChapterSkeleton";
import DOMPurify from "dompurify";

const Chapter = ({
  setIsSidebarVisible,
  isSidebarVisible,
  chapterId,
}: HomeworkProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["chapter", chapterId],
    queryFn: () => ChapterByIdApi(chapterId!),
  });

  if (!chapterId) return <p>No chapter selected.</p>;
  if (isLoading) return <ChapterSkeleton />;
  if (isError || !data) return <p>Error loading homework.</p>;

  console.log(data);

  return (
    <div className="flex flex-col flex-1 gap-[54px] bg-[#f8feff] shadow-[8px_8px_0px_0px_#B7DAE0] px-[20px] py-[20px] border border-[#b7dae0] rounded-xl">
      <div>
        <div className="flex justify-between items-center mb-[8px] min-h-[50px]">
          <p className="font-bold text-[#454545] text-[24px]">
            თავი #{data.chapter.chapterNumber}
          </p>
          <button onClick={() => setIsSidebarVisible((prev) => !prev)}>
            <Image
              src={
                isSidebarVisible
                  ? "/images/svg/ScaleUP.svg"
                  : "/images/svg/ScaleDown.svg"
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
            {data.chapter.description &&
              data.chapter.description.trim() !== "" && (
                <div className="flex flex-col gap-[10px] text-[#454545] leading-[32px]">
                  <span className="font-bold text-[18px]">
                    საკითხის განმარტება:
                  </span>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(data.chapter.description),
                    }}
                  />
                </div>
              )}
            {data.chapter.realLifeExample &&
              data.chapter.realLifeExample.trim() !== "" && (
                <div className="flex flex-col gap-[10px] text-[#454545] leading-[32px]">
                  <span className="font-bold text-[18px]">
                    რეალური ცხოვრების მაგალითი:
                  </span>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(data.chapter.realLifeExample),
                    }}
                  />
                </div>
              )}
            {data.chapter.imageUrl ? (
              <Image
                src={data.chapter.imageUrl}
                alt="examplePhotoForStudy"
                width={302}
                height={242}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {data.chapter.codingExample &&
        data.chapter.codingExample.trim() !== "" && (
          <div className="flex flex-col gap-[10px] text-[#454545] leading-[32px]">
            <span className="font-bold text-[18px]">
              კოდთან მუშაობის მაგალითი:
            </span>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.chapter.codingExample),
              }}
            />
          </div>
        )}
      {data.chapter.projectTask && data.chapter.projectTask.trim() !== "" && (
        <div className="flex flex-col gap-[10px] text-[#454545] leading-[32px]">
          <span className="font-bold text-[18px]">საპროექტო დავალება 1:</span>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.chapter.projectTask),
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Chapter;
