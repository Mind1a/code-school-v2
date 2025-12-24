'use client';
import React from 'react';

const ChapterSkeleton = () => {
  return (
    <div className="flex flex-col flex-1 justify-between bg-[#f8feff] px-[20px] py-[20px] border border-[#b7dae0] rounded-xl animate-pulse">
      <div>
        <div className="flex justify-between items-center mb-[8px] min-h-[50px]">
          <div className="bg-gray-300 rounded w-[150px] h-[24px]"></div>
          <div className="bg-gray-300 rounded w-[22px] h-[22px]"></div>
        </div>
        <div className="bg-[#374669] mb-[12px] w-full h-[1px]"></div>

        <div className="bg-gray-300 mb-[16px] rounded w-[200px] h-[28px]"></div>

        <div className="flex flex-col gap-[16px]">
          <div className="bg-gray-300 rounded w-full h-[20px]"></div>
          <div className="bg-gray-300 rounded w-full h-[20px]"></div>
        </div>
      </div>

      <div className="bg-gray-300 mt-[16px] rounded w-[302px] h-[242px]"></div>
    </div>
  );
};

export default ChapterSkeleton;
