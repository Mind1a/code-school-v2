import { ChapterHeaderProps } from "@/features/courses/types";

export default function ChapterHeader({ chapterId, title, isOpen, onToggle }: ChapterHeaderProps) {
    return (
        <div
            className={`${isOpen ? 'bg-[#d2ebfe]' : 'bg-[#89b9dd] pb-9'}  pl-4 pr-8 pt-3  rounded-xl cursor-pointer`}
            onClick={onToggle}
        >
            <div className='text-black flex justify-between items-center gap-2 text-[18px] font-bold'>
                <div className='flex gap-2 max-w-[256px] w-full'>
                    <span>{chapterId}.</span>
                    <h2>{title}</h2>
                </div>
                <img src="/images/svg/chevronDown.svg" className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} alt="" />
            </div>
        </div>
    );
};


