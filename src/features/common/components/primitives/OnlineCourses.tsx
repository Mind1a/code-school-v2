import Image from "next/image";
import Link from "next/link";
import { coursesData } from "../../../landing/data/data";

export default function OnlineCourses() {
  return (
    <section className="my-20 max-w-[1440px] w-full mx-auto flex flex-col items-center  ">
      <div className="max-w-[1172px] w-full ">
        <h2 className="leading-[1.5] mb-7 text-[#4a506e] text-[38px] font-[700] font-case">
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
            <div className="mr-[52.81px] min-w-[167.9px]">
              <Image
                src={course.logo}
                alt={course.logoAlt}
                width={course.logoWidth}
                height={course.logoHeight}
              />
            </div>

            <ul className="text-[#454545] text-[24px]">
              <li className="flex items-center gap-4">
                <strong className="font-[600] leading-[67px]">
                  კურსის დასახელება:
                </strong>
                <span className="">{course.courseName}</span>
              </li>
              <li className="flex items-center gap-4">
                <strong className="font-[600] leading-[67px]">
                  კურსის ავტორი:
                </strong>
                {course.author}
              </li>
              <li className="flex items-center gap-4">
                <strong className="font-[600] leading-[67px]">
                  კურსი მოიცავს:
                </strong>
                {course.topicsCount} საკითხს
              </li>
            </ul>
          </Link>
        ))}
      </div>
    </section>
  );
}
