import ProgressBar from "@/features/common/components/primitives/ProgressBar";
import CoursesSidebar from "@/features/courses/components/composites/CoursesSidebar";

const page = () => {
  // TODO: Check Last completed lesson from local storage and redirect to that lesson
  // TODO: Implement course detail page for Python - from backend took params id and fetch course details
  // TODO: /courses/python/2.2 -> for lesson page
  // TODO: /courses/python/2.2/homework/1 -> for homework page

  return (
    <div className="max-w-[1440px] px-[130px] mx-auto w-full">
      <ProgressBar title="Python" progress="0" />
      <CoursesSidebar />
      <div>Hello</div>
    </div>
  );
};

export default page;
