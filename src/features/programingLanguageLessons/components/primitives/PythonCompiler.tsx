"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";

type PythonCompilerProps = {
  initialCode?: string;
};

interface PyodideInterface {
  runPythonAsync: (code: string) => Promise<unknown>;
  setStdout: (options: { batched: (output: string) => void }) => void;
  setStderr: (options: { batched: (output: string) => void }) => void;
}

declare global {
  interface Window {
    loadPyodide: () => Promise<PyodideInterface>;
  }
}

const PythonCompiler = ({ initialCode = "" }: PythonCompilerProps) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isReload, setIsReload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pyodideRef = useRef<PyodideInterface | null>(null);

  // Load Pyodide on component mount
  useEffect(() => {
    const loadPyodideScript = async () => {
      // Check if script already exists
      if (document.getElementById("pyodide-script")) {
        if (window.loadPyodide && !pyodideRef.current) {
          try {
            pyodideRef.current = await window.loadPyodide();
            setIsLoading(false);
          } catch (err) {
            console.error("Failed to load Pyodide:", err);
            setOutput("შეცდომა: Python ინტერპრეტატორის ჩატვირთვა ვერ მოხერხდა");
            setIsLoading(false);
          }
        }
        return;
      }

      const script = document.createElement("script");
      script.id = "pyodide-script";
      script.src = "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js";
      script.async = true;

      script.onload = async () => {
        try {
          pyodideRef.current = await window.loadPyodide();
          setIsLoading(false);
        } catch (err) {
          console.error("Failed to load Pyodide:", err);
          setOutput("შეცდომა: Python ინტერპრეტატორის ჩატვირთვა ვერ მოხერხდა");
          setIsLoading(false);
        }
      };

      script.onerror = () => {
        setOutput("შეცდომა: Python ბიბლიოთეკის ჩატვირთვა ვერ მოხერხდა");
        setIsLoading(false);
      };

      document.head.appendChild(script);
    };

    loadPyodideScript();
  }, []);

  useEffect(() => {
    setCode(initialCode);
    setOutput("");
  }, [initialCode]);

  const runCode = async () => {
    if (!pyodideRef.current) {
      setOutput("Python ინტერპრეტატორი ჯერ არ ჩაიტვირთა. გთხოვთ დაიცადოთ...");
      return;
    }

    setIsRunning(true);
    setOutput("");

    let outputText = "";

    try {
      // Capture stdout
      pyodideRef.current.setStdout({
        batched: (text: string) => {
          outputText += text + "\n";
        },
      });

      // Capture stderr
      pyodideRef.current.setStderr({
        batched: (text: string) => {
          outputText += text + "\n";
        },
      });

      await pyodideRef.current.runPythonAsync(code);
      setOutput(
        outputText.trim() || "კოდი წარმატებით შესრულდა (გამოსატანი არ არის)",
      );
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      // Extract the relevant part of the error message
      const match = errorMessage.match(/(?:Error|Exception).*$/m);
      setOutput(`შეცდომა: ${match ? match[0] : errorMessage}`);
    } finally {
      setIsRunning(false);
    }
  };

  const handleReload = () => {
    setIsReload(true);
    setCode(initialCode);
    setOutput("");
    setTimeout(() => setIsReload(false), 600);
  };

  return (
    <div className="flex flex-col my-5 border border-[#ccc] rounded-lg overflow-hidden">
      <div className="flex items-center bg-[#031a31] px-4 h-[45px]">
        {isLoading && (
          <span className="text-yellow-400 text-xs">Python იტვირთება...</span>
        )}
        {!isLoading && (
          <span className="text-green-400 text-xs">Python მზადაა ✓</span>
        )}
      </div>

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
          disabled={isRunning || isLoading}
          className="flex justify-center items-center bg-[#F9D647] hover:bg-[#e8c63d] disabled:bg-gray-500 disabled:cursor-not-allowed shadow-[2px_2px_0_0_#c7a92f] active:shadow-[0_0_0_0_#c7a92f] rounded-[4px] w-full max-w-[113px] min-h-[38px] font-semibold text-[12px] transition-all active:translate-x-[2px] active:translate-y-[2px] cursor-pointer"
        >
          {isRunning ? "მუშავდება..." : "დაწყება"}
        </button>

        <motion.button
          initial={false}
          onClick={handleReload}
          animate={{ rotate: isReload ? 360 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
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
