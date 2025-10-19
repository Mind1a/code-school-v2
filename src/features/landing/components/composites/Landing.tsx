import Footer from "./Footer";
import Header from "./Header";

import CodeInformation from "./CodeInformation";
import OnlineCourses from "./OnlineCourses";

const Landing = () => {
  return (
    <div className="bg-[#f7f7f7] flex flex-col">
      <Header />
      <CodeInformation />
      <OnlineCourses />
      <Footer />
    </div>
  );
};

export default Landing;
