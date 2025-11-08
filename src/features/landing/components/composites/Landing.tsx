import CodeInformation from "@/features/common/components/primitives/CodeInformation";
import OnlineCourses from "../../../common/components/primitives/OnlineCourses";
const Landing = () => {
  return (
    <main className="bg-[#f7f7f7] flex flex-col flex-1">
      <CodeInformation />
      <OnlineCourses />
    </main>
  );
};

export default Landing;
