import React from 'react';

const OnlineCoursesSkeleton = () => {
  return (
    <div className="flex flex-col gap-[28px] w-full">
      <div className="flex items-center gap-5 bg-[#f0f0f0] shadow-[8px_8px_0px_0px_#e0e0e0] px-20 py-[22px] rounded-[28px] animate-pulse cursor-pointer">
        <div className="bg-[#e0e0e0] mr-[52.81px] rounded-lg min-w-[167.9px] h-[137px]" />
        <ul className="flex flex-col flex-1 gap-4">
          <li className="flex items-center gap-4">
            <div className="bg-[#e0e0e0] rounded w-[200px] h-[32px]" />
          </li>
          <li className="flex items-center gap-4">
            <div className="bg-[#e0e0e0] rounded w-[150px] h-[32px]" />
          </li>
          <li className="flex items-center gap-4">
            <div className="bg-[#e0e0e0] rounded w-[180px] h-[32px]" />
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-5 bg-[#f0f0f0] shadow-[8px_8px_0px_0px_#e0e0e0] px-20 py-[22px] rounded-[28px] animate-pulse cursor-pointer">
        <div className="bg-[#e0e0e0] mr-[52.81px] rounded-lg min-w-[167.9px] h-[137px]" />
        <ul className="flex flex-col flex-1 gap-4">
          <li className="flex items-center gap-4">
            <div className="bg-[#e0e0e0] rounded w-[200px] h-[32px]" />
          </li>
          <li className="flex items-center gap-4">
            <div className="bg-[#e0e0e0] rounded w-[150px] h-[32px]" />
          </li>
          <li className="flex items-center gap-4">
            <div className="bg-[#e0e0e0] rounded w-[180px] h-[32px]" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OnlineCoursesSkeleton;
