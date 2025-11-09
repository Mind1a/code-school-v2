'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import useMeasure from 'react-use-measure';
import Image from 'next/image';
type AnswerToggleProps = {
  title?: string;
  children: React.ReactNode;
};

const AnswerToggle = ({
  title = 'პასუხის ჩვენება',
  children,
}: AnswerToggleProps) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={open ? 'open' : 'closed'}
      className="flex flex-col gap-[8px]"
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-[22px] cursor-pointer"
      >
        <p className="font-bold text-[#454545] text-lg">{title}</p>

        <motion.div
          variants={{
            open: { rotate: '-180deg' },
            closed: { rotate: '0deg' },
          }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/images/svg/dropDownIcon.svg"
            alt="arrow"
            width={12}
            height={7}
          />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: open ? height : '0px',
          marginBottom: open ? '24px' : '0px',
        }}
        className="overflow-hidden"
      >
        <div
          ref={ref}
          className="bg-[#f0f0f0] px-[16px] py-[12px] rounded-lg text-[#454545] text-lg leading-8"
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AnswerToggle;
