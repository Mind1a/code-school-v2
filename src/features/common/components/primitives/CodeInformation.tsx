import { articlesData } from "@/features/landing/data/data";

export default function CodeInformation() {
  return (
    <div className="mt-20 max-w-[1180px] w-full mx-auto">
      <h2 className="text-[38px] leading-[100%] text-[#4a506e] font-[500] font-case">
        რა არის პროგრამული კოდი
      </h2>

      <div className="mt-7 grid grid-cols-1 lg:grid-cols-[645fr_459fr] gap-x-0 lg:gap-x-[68px] gap-y-[34px] w-full items-start">
        {articlesData.map((article) => (
          <article
            key={article.id}
            className={`bg-[#f8feff] border border-[#b7dae0] shadow-[8px_8px_0px_0px_#b7dae0] rounded-[20px] p-9 ${
              article.fullWidth ? "lg:col-span-2" : ""
            }`}
          >
            <h3 className="text-[28px] text-[#000000] font-medium leading-[100%] font-case">
              {article.title}
            </h3>

            <div className="mt-3 flex flex-col gap-2">
              {article.paragraphs.map((paragraph, id) => (
                <p
                  key={id}
                  className="text-[#454545] text-lg font-normal leading-[34px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
