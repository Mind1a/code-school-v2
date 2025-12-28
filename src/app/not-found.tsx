import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center text-center flex-grow px-4">
      <img
        src="/images/svg/404.gif"
        alt="Animated 404"
        className="w-[207px] mt-[80px] h-auto"
      />

      <h2 className=" text-[48px] font-medium leading-[100%] text-[#465541] mt-[48px]">
        გვერდი ვერ მოიძებნა
      </h2>

      <Link
        href="/"
        className="mt-[25px] leading-[100%] font-noto-sans  mb-[253px] underline px-6 py-2 text-[#465541] hover:text-blue-400 transition"
      >
        დაბრუნდი მთავარ გვერდზე
      </Link>
    </main>
  );
}
