import Image from "next/image";
import { projectsData, articlesData } from "@/features/landing/data/data";

export default function AboutProject() {
  const howCodingArticle = articlesData.find(
    (article) => article.id === "how_coding"
  );

  if (!howCodingArticle) return null;

  return (
    <div className="mt-20 max-w-[1180px] w-full mx-auto space-y-20">
      <div className="grid grid-cols-1 lg:grid-cols-[645fr_459fr] gap-x-0 lg:gap-x-[68px] gap-y-[34px] w-full items-start">
        <article
          key={howCodingArticle.id}
          className={`bg-[#f8feff] border border-[#b7dae0] shadow-[8px_8px_0px_0px_#b7dae0] rounded-[20px] p-9 ${
            howCodingArticle.fullWidth ? "lg:col-span-2" : ""
          }`}
        >
          <h3 className="text-[28px] text-[#000000] font-medium leading-[100%] font-case">
            {howCodingArticle.title}
          </h3>

          <div className="mt-3 flex flex-col gap-2">
            {howCodingArticle.paragraphs.map((paragraph, id) => (
              <p
                key={id}
                className="text-[#454545] text-lg font-normal leading-[34px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>

      <section className="bg-[#f8feff] border border-[#b7dae0] shadow-[8px_8px_0px_0px_#b7dae0] rounded-[20px] p-8">
        <h2 className="text-[28px] font-medium -font-sans text-[#4a506e] mb-8">
          პროექტებზე მუშაობენ
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
          {projectsData.map((person) => (
            <div
              key={person.id}
              className="border border-[#b7dae0] rounded-[12px] bg-white px-6 py-5 shadow-[4px_4px_0px_0px_#b7dae0] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[#000] text-[20px] font-medium leading-tight">
                  {person.name}
                </h3>
                <p className="text-[#777] text-[16px] font-normal mt-1">
                  {person.role}
                </p>
              </div>

              <div className="flex gap-3 mt-4">
                {person.socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-[28px] h-[28px]"
                  >
                    <Image
                      src={social.icon}
                      alt={social.id}
                      width={24}
                      height={24}
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-[90px]">
        <h2 className="text-center text-[#4a506e] text-[28px] font-medium">
          საკონტაქტო ინფორმაცია
        </h2>

        <p className="text-center text-[#454545] mt-[32px]">
          (+995 32) 111 11 11
        </p>
        <p className="text-center mt-[16px] text-[#454545]">
          ქუთაისი ჩოლოყაშვილის გამზირი 3/5
        </p>

        <form className="mt-[16px] flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-[211px] ">
            <div>
              <label className="block text-[#4a506e] mb-[16px]">
                სახელი/გვარი
              </label>
              <input
                type="text"
                className="w-[455px] border border-[#b7dae0] rounded-[8px] px-4 py-2 outline-none focus:ring-2 focus:ring-[#4a506e]"
              />
            </div>
            <div>
              <label className="block text-[#4a506e] mb-[16px]">ელ.ფოსტა</label>
              <input
                type="email"
                className=" border w-[455px] border-[#b7dae0] rounded-[8px]  px-4 py-2 outline-none focus:ring-2 focus:ring-[#4a506e]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#4a506e] mb-[16px]">
              შეტყობინება
            </label>
            <textarea
              rows={6}
              className="w-full border border-[#b7dae0] rounded-[8px] mb-[100px] px-4 py-2 outline-none focus:ring-2 focus:ring-[#4a506e]"
            ></textarea>
          </div>
        </form>
      </section>
    </div>
  );
}
