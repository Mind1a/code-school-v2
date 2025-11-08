const BackAndNextbuttons = () => {
  return (
    <div className="relative mt-7">
      <button className="top-7 left-0 absolute bg-[#f8feff] hover:opacity-80 shadow-[3px_3px_0_0_#b7dae0] active:shadow-[0_0_0_0_#b7dae0] rounded-lg w-[139px] h-[52px] text-black transition-all active:translate-x-[3px] active:translate-y-[3px] duration-150 cursor-pointer">
        უკან
      </button>

      <button className="top-7 right-0 absolute bg-[#f8feff] hover:opacity-80 shadow-[3px_3px_0_0_#b7dae0] active:shadow-[0_0_0_0_#b7dae0] rounded-lg w-[139px] h-[52px] text-black transition-all active:translate-x-[3px] active:translate-y-[3px] duration-150 cursor-pointer">
        შემდეგი
      </button>
    </div>
  );
};

export default BackAndNextbuttons;
