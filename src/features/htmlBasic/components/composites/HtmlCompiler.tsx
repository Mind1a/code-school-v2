"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import type { editor } from "monaco-editor";
import Image from "next/image";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

export default function HtmlCompiler() {
  const defaultHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Live HTML Preview</title>
    <style>
      body { font-family: sans-serif; padding: 1rem; }
      h1 { color: #333; }
    </style>
  </head>
  <body>
    <h1>Hello Programming Coding School!</h1>
    <p>Edit HTML above, click Run to preview.</p>
    <script>
      console.log("Script running in iframe!");
    </script>
  </body>
</html>`;

  const [code, setCode] = useState<string>("");
  const [output, setOutput] = useState<string>(defaultHtml);
  const [previewKey, setPreviewKey] = useState<number>(0);
  const [spinKey, setSpinKey] = useState(0);

  const BOILERPLATE_TRIGGERS = ["<!DOCTYPE", "<!DOCTYPE>", "<!DOCTYPE html>"];

  const handleChange = (
    value: string | undefined,
    _event?: editor.IModelContentChangedEvent
  ) => {
    const trimmedValue = value ? value.trim() : "";
    const upperCaseValue = trimmedValue.toUpperCase();

    const shouldInsertBoilerplate =
      upperCaseValue.length < 25 &&
      BOILERPLATE_TRIGGERS.some((trigger) =>
        upperCaseValue.includes(trigger.toUpperCase())
      );

    if (shouldInsertBoilerplate) {
      setCode(defaultHtml);
    } else {
      setCode(value || "");
    }
  };

  const handleRun = () => {
    setOutput(code || defaultHtml);
    setPreviewKey((prev) => prev + 1);
  };

  const handleClear = () => {
    setCode("");
    setOutput(defaultHtml);
  };

  const [spin, setSpin] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1400px] w-full flex justify-center p-6">
        <div className="w-[732px] h-[915px] border rounded-xl shadow-lg flex flex-col overflow-hidden">
          <div className="flex bg-[#031A31] h-[44px]"></div>

          <div className="flex-1">
            <MonacoEditor
              language="html"
              value={code}
              height="100%"
              onChange={handleChange}
              options={{
                lineNumbers: "on",
                wordWrap: "on",
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                fontSize: 14,
                padding: { top: 10 },
              }}
            />
          </div>

          <div className="h-[73px] flex justify-between items-center gap-2 px-2 border-b border-gray-300 bg-[#031A31]">
            <button
              onClick={handleRun}
              className="px-3 py-1 ml-[27px] w-[113px] h-[38px] rounded-[4px]
              bg-[#F9D647] text-[#000000]
              active:scale-95 active:translate-y-[1px] transition-all duration-75"
            >
              დაწყება
            </button>

            <button
              onClick={() => {
                setSpinKey((prev) => prev + 1);
                handleClear();
              }}
              className="px-3 py-1 text-gray-800 rounded mr-[16px]"
            >
              <motion.div
                key={spinKey}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  src="/images/svg/ResetBtn.svg"
                  alt="Reset"
                  width={27}
                  height={27}
                />
              </motion.div>
            </button>
          </div>

          <iframe
            key={previewKey}
            srcDoc={output}
            className="flex-1 w-full border-t border-gray-300"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>
    </div>
  );
}
