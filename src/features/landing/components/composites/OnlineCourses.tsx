import Image from "next/image";
import Link from "next/link";
import { coursesData } from "../../data/data";

export default function OnlineCourses() {
  return (
    <section className="my-20 max-w-[1440px] w-full mx-auto flex flex-col items-center  ">
      <div className="max-w-[1172px] w-full ">
        <h2 className="leading-[1.5] font-['NotoSansGeorgian',Arial,Helvetica,sans-serif] [font-feature-settings:'case'_on] mb-7 text-[#4a506e] text-[38px] font-[700]">
          ონლაინ კურსები სკოლის მოსწავლეებისათვის
        </h2>

        {coursesData.map((course, index) => (
          <Link
            key={course.id}
            href={course.href}
            className={`rounded-[28px] px-20 py-[22px] gap-5 flex items-center cursor-pointer ${
              index < coursesData.length - 1 ? "mb-7" : ""
            }`}
            style={{
              backgroundColor: course.backgroundColor,
              boxShadow: `8px 8px 0px 0px ${course.shadowColor}`,
            }}
          >
            <div className="max-w-[200px] w-full">
              <Image
                src={course.logo}
                alt={course.logoAlt}
                width={course.logoWidth}
                height={course.logoHeight}
              />
            </div>

            <ul className="text-2xl font-['NotoSansGeorgian',Arial,Helvetica,sans-serif] text-[#454545]">
              <li className="min-h-[54.66px] flex items-center">
                <strong className="font-semibold mr-4">
                  კურსის დასახელება:
                </strong>
                {course.courseName}
              </li>
              <li className="min-h-[54.66px] flex items-center">
                <strong className="font-semibold mr-4">კურსის ავტორი:</strong>
                {course.author}
              </li>
              <li className="min-h-[54.66px] flex items-center">
                <strong className="font-semibold mr-4">კურსი მოიცავს:</strong>
                {course.topicsCount} საკითხს
              </li>
            </ul>
          </Link>
        ))}
      </div>
    </section>
  );
}
