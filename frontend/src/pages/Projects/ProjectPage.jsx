import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import ProjectsContainer from "../../components/Projects/ProjectsContainer";

const ProjectPage = () => {
  return (
    <div className="bg-canva_background">
      <NavigationBar />
      <div className=" min-h-screen flex flex-col">
        {/* Children Goes Here */}
        <div className="flex flex-col md:flex-row h-full ">
          {/* Title */}
          <div className="flex flex-col w-full p-10 text-center justify-center ">
            <h1 className=" text-lg sm:text-2xl text-canva_primary-font font-extrabold font-mono">
              My Recent Projects
            </h1>
            <p className="mt-5 text-sm sm:text-lg text-burnt-sienna font-mono">
              {"Here are some projects I have been working on lately."}
            </p>
          </div>
        </div>
        {/* Project Container */}
        <div>
          <ProjectsContainer />
        </div>
        {/* End of Children*/}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
