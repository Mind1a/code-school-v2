'use client';

const HomeworkSkeleton = () => {
  return (
    <div className="flex-1 bg-[#f8feff] px-[24px] py-[36px] border border-[#b7dae0] rounded-xl animate-pulse">
      <div className="flex justify-between items-center mb-[32px] min-h-[50px]">
        <div className="bg-gray-300 rounded-[8px] w-[180px] h-[36px]" />
        <div className="bg-gray-300 rounded-md w-[22px] h-[22px]" />
      </div>

      <div className="mb-[15px]">
        <div className="bg-gray-300 mb-3 rounded w-[220px] h-[20px]" />
        <div className="bg-gray-200 mb-2 rounded w-full h-[18px]" />
        <div className="bg-gray-200 rounded w-[90%] h-[18px]" />
      </div>

      <div className="mb-5">
        <div className="flex items-center gap-[13px] mb-[8px]">
          <div className="bg-gray-300 rounded w-[100px] h-[18px]" />
          <div className="bg-gray-300 rounded-full w-[15px] h-[15px]" />
        </div>

        <div className="bg-gray-200 px-[16px] py-[12px] rounded-[12px]">
          <div className="bg-gray-300 mb-2 rounded w-full h-[18px]" />
          <div className="bg-gray-300 rounded w-[85%] h-[18px]" />
        </div>
      </div>

      <div className="flex flex-col my-5 border border-[#ccc] rounded-lg min-h-[915px] overflow-hidden">
        <div className="bg-gray-400 h-[45px]" />
        <div className="flex-1 bg-gray-100" />
        <div className="flex justify-end items-center bg-gray-400 px-[27px] min-h-[73px]">
          <div className="bg-gray-300 rounded-full w-[22px] h-[22px]" />
        </div>
      </div>

      <div className="mt-6">
        <div className="bg-gray-300 mb-3 rounded w-[140px] h-[20px]" />
        <div className="bg-gray-200 mb-2 rounded w-full h-[18px]" />
        <div className="bg-gray-200 rounded w-[80%] h-[18px]" />
      </div>
    </div>
  );
};

export default HomeworkSkeleton;
