'use client';

import Image from 'next/image';
import AnswerToggle from '../primitives/AnswerToggle';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import BackAndNextbuttons from '../primitives/BackAndNextbuttons';

export default function HtmlBasic() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isReload, setIsReload] = useState(false);

  return (
    <div className="flex flex-col gap-[28px] mx-auto mt-[80px] mb-[117px] w-full max-w-[1180px]">
      <div className={`flex ${isSidebarVisible ? 'gap-[20px]' : 'gap-0'}`}>
        <AnimatePresence>
          <motion.div
            initial={false}
            animate={{
              width: isSidebarVisible ? 380 : 0,
              opacity: isSidebarVisible ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="flex-shrink-0 bg-[#f8feff] bg-gradient-to-br shadow-lg border border-[#b7dae0] rounded-xl min-h-[700px] overflow-hidden"
          />
        </AnimatePresence>
        <div className="flex-1 bg-[#f8feff] px-[24px] py-[36px] border border-[#b7dae0] rounded-xl">
          <div className="flex justify-between items-center mb-[32px] min-h-[50px]">
            <p className="bg-[#454545] px-[24px] py-1 rounded-[8px] font-bold text-white text-2xl">
              დავალება #1
            </p>
            <button onClick={() => setIsSidebarVisible((prev) => !prev)}>
              <Image
                src={`${
                  isSidebarVisible
                    ? '/images/svg/ScaleUp.svg'
                    : '/images/svg/ScaleDown.svg'
                }`}
                alt="arrows"
                width={22}
                height={22}
                className="w-[22px] h-[22px] cursor-pointer"
              />
            </button>
          </div>

          <div className="text-[#454545]">
            <h5 className="mt-[54px] mb-[18px] font-semibold text-lg">
              კოდის დამატება (ახალი ელემენტის და შიგთავსის ჩასმა)
            </h5>

            <div className="mb-[15px] text-lg leading-8">
              <span className="font-semibold text-lg">დავალების პირობა:</span>
              თქვენ გაქვთ HTML დოკუმენტი &lt;head&gt; სექციით. კოდის რედაქტორში,
              &lt;/head&gt; სექციის დახურვის შემდეგ (&lt;/head&gt;), მაგრამ
              &lt;/html&gt; ტეგის დახურვამდე, დაამატეთ &lt;body&gt; სექცია.
              &lt;body&gt; სექციის შიგნით ჩაწერეთ ტექსტი: ეს ჩემი პირველი
              ტექსტია!. დააკვირდით Preview პანელს.
            </div>

            <div className="mb-5">
              <div className="flex items-center gap-[13px] mb-[8px] min-h-[36px]">
                <h5 className="flex items-center gap-3 font-bold text-base">
                  დახმარება
                </h5>
                <Image
                  src="/images/svg/help.svg"
                  alt="help"
                  width={15}
                  height={15}
                />
              </div>
              <p className="bg-[#f0f0f0] p-3 rounded-xl text-lg leading-8">
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc df
                vulputate Class aptentnt per conubia nostra, per inceptos fghfgh
                himenaeos. Curabitur tempus urna condimtum lobortis. Utdfggd
                commodo efficitur neque. Ut diam quafgom, semper iaculis merab
                condimentum ac, vestibulum eu nidffdsl.
              </p>
            </div>

            <div className="flex flex-col my-5 mb-[36px] border border-[#ccc] rounded-lg h-[915px] overflow-hidden">
              <div className="bg-[#031a31] h-[45px]"></div>
              <div className="flex flex-1 justify-center items-center bg-gray-100 text-gray-400 text-lg">
                კოდის რედაქტორი
              </div>
              <div className="flex justify-end items-center bg-[#031a31] px-[27px] h-[73px]">
                <motion.button
                  initial={false}
                  onClick={() => setIsReload((prev) => !prev)}
                  animate={{ rotate: isReload ? 360 : 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <Image
                    src="/images/svg/reload.svg"
                    alt="refresh"
                    width={18}
                    height={22}
                    className="cursor-pointer"
                  />
                </motion.button>
              </div>
            </div>

            <AnswerToggle>
              <h5 className="mb-2 font-semibold text-lg">სწორი კოდი</h5>
              პასუხი
            </AnswerToggle>
          </div>
        </div>
      </div>
      <BackAndNextbuttons />
    </div>
  );
}
