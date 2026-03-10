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
  const normalizeContent = (content?: string) => {
    if (!content) return "";

    let normalized = content
      .replace(/&nbsp;/gi, " ")
      .replace(/&#39;/gi, "'")
      .replace(/&quot;/gi, '"')
      .replace(/&amp;/gi, "&");

    normalized = normalized.replace(/\r?\n/g, "__BR__");

    normalized = normalized
      .replace(/<\s*strong\s*>/gi, "__STRONG_OPEN__")
      .replace(/<\s*\/\s*strong\s*>/gi, "__STRONG_CLOSE__")
      // preserve explicit <code> tags so they aren't escaped and re-wrapped later
      .replace(/<\s*code\s*>/gi, "__CODE_OPEN__")
      .replace(/<\s*\/\s*code\s*>/gi, "__CODE_CLOSE__")
      .replace(/<\s*br\s*\/?\s*>/gi, "__BR__");

    normalized = normalized.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    normalized = normalized.replace(
      /(&lt;[^>]+&gt;)/gi,
      (match) => `<code>${match}</code>`,
    );

    normalized = normalized
      .replace(/__STRONG_OPEN__/g, "<strong>")
      .replace(/__STRONG_CLOSE__/g, "</strong>")
      .replace(/__CODE_OPEN__/g, "<code>")
      .replace(/__CODE_CLOSE__/g, "</code>")
      .replace(/__BR__/g, "<br />");

    return normalized;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["chapter", chapterId],
    queryFn: () => ChapterByIdApi(chapterId!),
  });

  if (!chapterId) return <p>No chapter selected.</p>;
  if (isLoading) return <ChapterSkeleton />;
  if (isError || !data) return <p>Error loading homework.</p>;

  console.log(data);

  return (
    <div className="flex flex-col h-full gap-[54px] bg-[#f8feff] px-[20px] py-[20px] border border-[#b7dae0] rounded-xl overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#f0f5f7] [&::-webkit-scrollbar-thumb]:bg-[#b7dae0] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#9dbcc8]">
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
                    className="chapter-content"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        normalizeContent(data.chapter.description),
                        {
                          ALLOWED_TAGS: ["br", "strong", "code"],
                          ALLOWED_ATTR: [],
                        },
                      ),
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
                    className="chapter-content"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        normalizeContent(data.chapter.realLifeExample),
                        {
                          ALLOWED_TAGS: ["br", "strong", "code"],
                          ALLOWED_ATTR: [],
                        },
                      ),
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
              className="chapter-content"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  normalizeContent(data.chapter.codingExample),
                  {
                    ALLOWED_TAGS: ["br", "strong", "code"],
                    ALLOWED_ATTR: [],
                  },
                ),
              }}
            />
          </div>
        )}
      {data.chapter.projectTask && data.chapter.projectTask.trim() !== "" && (
        <div className="flex flex-col gap-[10px] text-[#454545] leading-[32px]">
          <span className="font-bold text-[18px]">საპროექტო დავალება 1:</span>
          <div
            className="chapter-content"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                normalizeContent(data.chapter.projectTask),
                {
                  ALLOWED_TAGS: ["br", "strong", "code"],
                  ALLOWED_ATTR: [],
                },
              ),
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Chapter;
