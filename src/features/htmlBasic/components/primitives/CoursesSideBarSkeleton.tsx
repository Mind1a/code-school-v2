const CoursesSideBarSkeleton = () => {
  return (
    <>
      <div className="flex justify-between items-start bg-[#89B9DD] mb-4 py-[16px] pr-[35px] pl-[8px] rounded-[14px] w-full max-w-[358px] min-h-[100px] animate-pulse">
        <div className="flex gap-[5px]">
          <div className="bg-gray-300 rounded w-[20px] h-[18px]"></div>
          <div className="bg-gray-300 rounded w-[200px] h-[18px]"></div>
        </div>
        <div className="bg-gray-300 mt-[10px] rounded w-[14px] h-[8px]"></div>
      </div>
    </>
  );
};

export default CoursesSideBarSkeleton;
