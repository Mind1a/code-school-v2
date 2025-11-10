import ProgressBar from "@/features/common/components/primitives/ProgressBar";
import CoursesSidebar from "@/features/courses/components/composites/CoursesSidebar";

const page = () => {
  return (
    <div className="max-w-[1440px] px-[130px] mx-auto w-full">
      <ProgressBar title="Python" />
      <CoursesSidebar />
      <div>Hello</div>
    </div>
  );
};

export default page;
