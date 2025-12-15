'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { CoursesApi } from '../../api/coursesApi';
import OnlineCoursesSkeleton from './OnlineCoursesSkeleton';
import { Course } from '@/features/landing/types';

export default function OnlineCourses() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['courses'],
    queryFn: CoursesApi,
  });

  return (
    <section className="flex flex-col items-center mx-auto my-20 w-full max-w-[1440px]">
      <div className="w-full max-w-[1172px]">
        <h2 className="mb-7 font-[700] font-case text-[#4a506e] text-[38px] leading-[1.5]">
          ონლაინ კურსები სკოლის მოსწავლეებისათვის
        </h2>

        {isLoading && <OnlineCoursesSkeleton />}

        {isError && (
          <p className="text-[20px] text-red-500">
            მოხდა შეცდომა კურსების ჩატვირთვისას. სცადეთ მოგვიანებით.
          </p>
        )}

        {!isLoading && !isError && (
          <div className="flex flex-col gap-[28px] w-full">
            {data?.map((course: Course) => (
              <Link
                key={course._id}
                href={'/'}
                className={`rounded-[28px] px-20 py-[22px] gap-5 flex items-center cursor-pointer ${
                  // TODO: Using _id to assign style is temporary. Looking for a better way.
                  course._id === '693f350b60f4ce3b9860ea3c'
                    ? 'bg-[#ebf3f9] shadow-[8px_8px_0px_0px_#89b9dd]'
                    : 'bg-[#ddddfe] shadow-[8px_8px_0px_0px_#ababd0]'
                }`}
              >
                <div className="mr-[52.81px] min-w-[167.9px]">
                  <Image
                    src={course.projectPicture}
                    alt="courses logo"
                    width={137}
                    height={137}
                  />
                </div>

                <ul className="text-[#454545] text-[24px]">
                  <li className="flex items-center gap-4">
                    <strong className="font-[600] leading-[67px]">
                      კურსის დასახელება:
                    </strong>
                    <span>{course.name}</span>
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
                    {course.sectionCount} საკითხს
                  </li>
                </ul>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
