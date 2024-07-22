import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import CardContainer from "../../components/SkillSets/CardContainer";
import skill_list from "../../components/SkillSets/SkillList";
import ToolsList from "../../components/SkillSets/ToolsList";
import Arrow from "../../components/svgs/Arrow/Arrow";

const About = () => {
  return (
    <div className="bg-canva_background">
      <NavigationBar />
      <div className=" min-h-screen flex flex-col">
        {/* Children Goes Here */}
        <div className="flex flex-col md:flex-row h-full  m-10">
          {/* Left */}
          <div className="flex flex-col w-full lg:w-3/5 m-0 sm:m-10">
            <h1 className=" text-4xl md:text-5xl lg:text-6xl text-Saddle_Brown font-extrabold font-mono flex flex-row">
              <Arrow />
              {"About Me"}
            </h1>
            <div className="text-lg text-gray-50 font-extrabold font-mono mt-8 sm:ml-20 ">
              <h3 className="bg-card_bg_color p-5 rounded-lg">
                Hi there! I am Choi Ka Hin, also goes by Marco. I have recently
                completed my Computer Science degree at the University of
                Washington and am actively looking for job opportunities where I
                can apply my skills and passion for technology.
              </h3>
              <br />
              <h3 className="bg-card_bg_color p-5 rounded-lg">
                Continuous learning is one of my core values. While my friends
                tease me for wanting to master all aspects of technology, I
                believe this trait fuels my curiosity and equips me to develop
                innovative solutions to diverse problems. I am excited to bring
                my enthusiasm and expertise to a dynamic team, contributing to
                projects that make a real impact.
              </h3>
            </div>
          </div>
          {/* Right */}
          <div className="flex w-full lg:w-2/5 justify-center h-full">
            {/* Here's the image from the public file called software_engineer.png */}
            <img
              src="/software_engineer_2.png"
              alt="Software Engineer"
              className="flex"
            />
          </div>
        </div>
        {/* End of Children*/}
      </div>
      {/* Skills Section */}
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-canva_primary-font font-semibold font-mono text-center mb-10">
          Professional{" "}
          <span className="text-burnt-sienna font-extrabold">Skillsets</span>
        </h1>
        <CardContainer card_list={skill_list} />
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-canva_primary-font font-semibold font-mono text-center mt-10 mb-10">
          Tools I Use
        </h1>
        <CardContainer card_list={ToolsList} />
      </div>
      <Footer />
    </div>
  );
};

export default About;
