import Footer from "./Footer";
import Header from "./Header";

import CodeInformation from "./CodeInformation";
import OnlineCourses from "./OnlineCourses";

const Landing = () => {
  return (
    <div className="bg-[#f7f7f7] flex flex-col">
      <div className="min-h-screen">
        <Header />
        <CodeInformation />
        <OnlineCourses />
      </div>
      <div className="flex flex-1">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
