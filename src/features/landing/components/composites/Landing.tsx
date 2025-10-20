import CodeInformation from "../../../common/CodeInformation";
import OnlineCourses from "./OnlineCourses";

const Landing = () => {
  return (
    <div className="bg-[#f7f7f7] flex flex-col">
      <div className="min-h-screen">
        <CodeInformation />
        <OnlineCourses />
      </div>
    </div>
  );
};

export default Landing;
