"use client";

import { useProgressStore } from "@/features/store/useProgressStore";

const ProgressBar = ({ title }: { title: string }) => {
  const { progress, increaseProgress, resetProgress } = useProgressStore();

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

      {/* temporary action buttons */}

      <div className="flex justify-center gap-2">
        <button
          onClick={() => increaseProgress(10)}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          +10%
        </button>
        <button
          onClick={resetProgress}
          className="bg-gray-400 text-white px-3 py-1 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
