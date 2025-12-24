'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

type PythonCompilerProps = {
  initialCode?: string;
};

const PythonCompiler = ({ initialCode = '' }: PythonCompilerProps) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isReload, setIsReload] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setOutput('იტვირთება...');

    setTimeout(() => {
      const lines = code.split('\n');
      const results: string[] = [];

      lines.forEach((line) => {
        line = line.trim();
        if (line.startsWith('print')) {
          const match = line.match(/print\((.*)\)/);
          let value = match ? match[1].trim() : '';
          if (
            (value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))
          ) {
            value = value.slice(1, -1);
          }
          results.push(value);
        }
      });

      setOutput(results.join('\n'));
      setIsRunning(false);
    }, 600);
  };

  const handleReload = () => {
    setIsReload(true);
    setCode(initialCode);
    setOutput('');
    setTimeout(() => setIsReload(false), 600);
  };

  return (
    <div className="flex flex-col my-5 border border-[#ccc] rounded-lg overflow-hidden">
      <div className="bg-[#031a31] px-4 h-[45px]" />

      <div className="flex flex-1 bg-[#201E2E] min-h-[484px]">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="bg-[#201E2E] p-4 focus:outline-none w-full font-mono text-gray-300 text-sm resize-none"
          spellCheck={false}
        />
      </div>

      <div className="flex justify-between items-center bg-[#031a31] px-[27px] min-h-[73px]">
        <button
          onClick={runCode}
          disabled={isRunning}
          className="flex justify-center items-center bg-[#F9D647] hover:bg-[#e8c63d] shadow-[2px_2px_0_0_#c7a92f] active:shadow-[0_0_0_0_#c7a92f] rounded-[4px] w-full max-w-[113px] min-h-[38px] font-semibold text-[12px] transition-all active:translate-x-[2px] active:translate-y-[2px] cursor-pointer"
        >
          {isRunning ? 'მუშავდება...' : 'დაწყება'}
        </button>

        <motion.button
          initial={false}
          onClick={handleReload}
          animate={{ rotate: isReload ? 360 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="hover:opacity-70 transition-opacity"
          disabled={isRunning}
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

      <div className="flex flex-1 bg-[#000000] p-4 min-h-[484px] overflow-auto">
        {output && (
          <pre className="font-mono text-green-400 text-sm whitespace-pre-wrap">
            {output}
          </pre>
        )}
      </div>
    </div>
  );
};

export default PythonCompiler;
