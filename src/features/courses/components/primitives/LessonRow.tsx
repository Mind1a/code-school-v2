import { LessonRowProps } from "@/features/courses/types";

export default function LessonRow({ chapterIndexLabel, title, isSelected, hasSubsections, onClick }: LessonRowProps) {
    return (
        <div onClick={onClick}>
            <div className={`text-black px-3 cursor-pointer 
                   ${isSelected ? 'bg-[#89b9dd]/30 relative before:content-[\'\'] before:absolute before:left-0 before:w-[5px] before:h-full before:bg-[#467DA6] before:rounded-r-lg before:transition-all before:duration-300 before:ease-in-out ' : 'bg-[#d2ebfe]'}`}>
                <div className="flex gap-2 text-[15px] py-[14px]">
                    <span className="text-black text-[14px] font-bold">
                        {chapterIndexLabel}
                    </span>
                    <span>{title}</span>
                    {hasSubsections && (
                        <img src="/images/svg/chevronUpSecondary.svg" className={`transition-transform duration-200 ${isSelected ? 'rotate-0' : 'rotate-180'}`} alt="" />
                    )}
                </div>
            </div>
        </div>
    );
};


