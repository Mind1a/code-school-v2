import { SubsectionListProps } from "@/features/courses/types";

export default function SubsectionList({ lessonId, subsections }: SubsectionListProps) {
    return (
        <div className="ml-6 mt-1 flex flex-col gap-1">
            {subsections.map((subsection) => (
                <div key={subsection.id} className=''>
                    <label
                        className="px-4 py-1 rounded-lg cursor-pointer  text-gray-600 text-[14px] transition-all duration-150 flex items-center gap-1.5"
                    >
                        <input type="radio" name={`radio-${lessonId}`} className='w-4 h-4 accent-black' />
                        <span className='text-[14px] text-[#454545] leading-[19px]'>
                            {subsection.title.split(" ")[0]}
                        </span>
                        <span className='font-bold text-[14px] text-[#454545]'>
                            {subsection.title.split(" ")[1]}
                        </span>
                    </label>
                </div>
            ))}
        </div>
    );
};


