'use client';
import Image from 'next/image';
import AnswerToggle from '../primitives/AnswerToggle';
import { useQuery } from '@tanstack/react-query';
import { HomeworkByIdApi } from '@/features/common/api/coursesApi';
import HomeworkSkeleton from './HomeworkSkeleton';
import { HomeworkProps } from '../../type';
import HtmlCssCompiler from './HtmlCssCompiler';
import PythonCompiler from './PythonCompiler';
import { motion } from 'motion/react';
import { useState } from 'react';
import useMeasure from 'react-use-measure';

const Homework = ({
  setIsSidebarVisible,
  isSidebarVisible,
  homeworkId,
  stack,
}: HomeworkProps) => {
  const {
    data: homework,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['homework', homeworkId],
    queryFn: () => HomeworkByIdApi(homeworkId!),
  });

  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  if (isLoading) return <HomeworkSkeleton />;
  if (isError || !homework) return <p>Error loading homework.</p>;

  return (
    <div className="flex-1 bg-[#f8feff] px-[24px] py-[36px] border border-[#b7dae0] rounded-xl">
      <div className="flex justify-between items-center mb-[32px] min-h-[50px]">
        <p className="bg-[#454545] px-[24px] py-1 rounded-[8px] font-bold text-white text-2xl">
          დავალება #{homework.order}
        </p>
        <button onClick={() => setIsSidebarVisible((prev) => !prev)}>
          <Image
            src={
              isSidebarVisible
                ? '/images/svg/ScaleUp.svg'
                : '/images/svg/ScaleDown.svg'
            }
            alt="arrows"
            width={22}
            height={22}
            className="w-[22px] h-[22px] cursor-pointer"
          />
        </button>
      </div>
      <div className="text-[#454545]">
        <div className="mb-[15px] text-[18px] leading-[32px]">
          <span className="font-semibold text-lg">დავალების პირობა:</span>
          {homework.question}
        </div>
        <div className="mb-5">
          <div className="flex items-center gap-[13px] mb-[8px] min-h-[36px]">
            <p className="font-bold text-[#454545]">დახმარება</p>
            <button
              className="cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            >
              <Image
                src="/images/svg/help.svg"
                alt="help"
                width={15}
                height={15}
              />
            </button>
          </div>
          <motion.div
            initial={false}
            animate={{
              height: open ? height : 0,
              marginBottom: open ? 24 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            className="overflow-hidden"
          >
            <div
              ref={ref}
              className="bg-[#f0f0f0] px-[16px] py-[12px] rounded-[12px]"
            >
              <p className="text-[18px] leading-[32px]">{homework.help}</p>
            </div>
          </motion.div>
          <div className="mt-5">
            {stack === 'html' ? (
              <HtmlCssCompiler initialCode={homework.starterCode || ''} />
            ) : stack === 'python' ? (
              <PythonCompiler initialCode={homework.starterCode || ''} />
            ) : null}
          </div>
          <AnswerToggle>
            <p className="mb-[10px] font-bold text-[#454545] text-[18px]">
              სწორი კოდი
            </p>
            <p className="text-[#454545] text-[18px] leading-[32px]">
              {homework.correctAnswer}
            </p>
          </AnswerToggle>
        </div>
      </div>
    </div>
  );
};

export default Homework;
