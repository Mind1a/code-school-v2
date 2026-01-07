'use client';

import {
  useHtmlProgressStore,
  usePythonProgressStore,
} from '@/features/store/useProgressStore';

const ProgressBar = ({
  title,
  storeType = 'html',
}: {
  title: string;
  storeType?: 'html' | 'python';
}) => {
  const htmlStore = useHtmlProgressStore();
  const pythonStore = usePythonProgressStore();

  const store = storeType === 'html' ? htmlStore : pythonStore;
  const { progress } = store;

  return (
    <div className="mx-auto w-full max-w-[1180px]">
      <div className="flex flex-col">
        <h2 className="max-w-[371px] font-case font-bold text-[#4A506E] text-[32px]">
          {title}
        </h2>
        <div className="flex flex-col gap-[9px]">
          <p className="pr-2 font-normal text-[#374669] text-base/[133%] text-right">
            {progress}%
          </p>
          <div className="bg-[#D9D9D9] mb-3 w-full h-2">
            <div
              className="bg-[#374669] rounded-tr-[8px] rounded-br-[8px] h-2 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
