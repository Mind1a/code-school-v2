const CoursesSideBarSkeleton = () => {
  return (
    <div className="flex flex-col flex-shrink-0 gap-2 bg-[#f8feff] bg-gradient-to-br p-4 border border-[#b7dae0] rounded-xl w-full max-w-[380px] min-h-[700px] overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="flex flex-col justify-between items-start bg-[#89B9DD] px-2 py-4 rounded-[14px] w-full max-w-[358px] min-h-[100px] animate-pulse"
        >
          <div className="flex justify-between items-start pr-[35px] w-full">
            <div className="flex gap-2">
              <div className="bg-gray-300 rounded w-[20px] h-[18px]"></div>
              <div className="bg-gray-300 rounded w-[200px] h-[18px]"></div>
            </div>
          </div>
          <div className="mt-2 w-full overflow-hidden">
            {[...Array(3)].map((_, j) => (
              <div
                key={j}
                className="bg-gray-200 mb-2 last:mb-0 rounded w-full h-[14px]"
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesSideBarSkeleton;
