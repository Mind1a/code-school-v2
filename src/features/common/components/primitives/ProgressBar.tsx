"use client";

import { useHtmlProgressStore } from "@/features/store/useProgressStore";

const ProgressBar = ({
  title,
  progress,
}: {
  title: string;
  progress: number;
}) => {
  return (
    <div className="max-w-[1180px] mx-auto w-full">
      <div className="flex flex-col">
        <h2 className="font-case text-[#4A506E] text-[32px] font-bold max-w-[371px]">
          {title}
        </h2>
        <div className="flex flex-col gap-[9px]">
          <p className="text-right text-[#374669] text-base/[133%] font-normal pr-2">
            {progress}%
          </p>
          <div className="w-full bg-[#D9D9D9] h-2 mb-3">
            <div
              className="bg-[#374669] h-2 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
