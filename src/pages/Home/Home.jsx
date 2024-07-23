import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import { Typewriter } from "react-simple-typewriter";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import typewriter_words from "./typewriter_words";

const Home = () => {
  return (
    <div className="bg-canva_background">
      <NavigationBar />
      {/* Home */}
      <div className=" min-h-screen flex flex-col ">
        <div className="flex flex-col md:flex-row h-full p-10" id="Home">
          {/* Left */}
          <div className="flex w-full lg:w-3/5 ">
            <div className="flex flex-col justify-center   lg:mt-10 md:mt-28 ml-0 md:ml-20 p-4 md:p-0">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-normal text-canva_primary-font text-left">
                Hello World!
                <span className="wave">👋</span>
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-canva_primary-font mt-4">
                {"I'M "}
                <span
                  className="text-burnt-sienna hover:text-7xl duration-500 animate-pulse hover:animate-none hover:underline hover:cursor-pointer"
                  onClick={() => {
                    // scroll to the bottom of the page smoothly
                    window.scrollTo({
                      top: document.body.scrollHeight,
                      behavior: "smooth",
                    });
                  }}
                >
                  CHOI KA HIN
                </span>
              </h2>
              <br />
              <div className="text-2xl sm:text-3xl lg:text-5xl font-normal text-left mt-4 font-mono text-burnt-sienna">
                <Typewriter
                  words={typewriter_words}
                  loop={0}
                  cursor={true}
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="flex w-full lg:w-2/5 justify-center  h-full">
            {/* Here's the image from the public file called software_engineer.png */}
            <img
              src="/software_engineer.png"
              alt="Software Engineer"
              className="flex h-2/3 w-2/3"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col h-full  mt-56 items-center">
          <h1 className="text-4xl lg:text-5xl text-canva_primary-font font-extrabold">
            FIND ME ON
          </h1>
          <div className="flex flex-row m-10">
            <a href="https://github.com/proaro2001" target="_blank">
              <div className="flex rounded-full bg-white h-12 w-12 justify-center text-canva_secondary-font ml-3 mr-3 hover:border-4 hover:border-canva_secondary-font duration-300">
                <VscGithub className="h-full w-1/2" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/kahinchoi/" target="_blank">
              <div className="flex rounded-full bg-white h-12 w-12 justify-center text-canva_secondary-font ml-3 mr-3 hover:border-4 hover:border-canva_secondary-font duration-300">
                <FaLinkedin className="h-full w-1/2" />
              </div>
            </a>
            <a href="mailto:proaro2001@gmail.com" target="_blank">
              <div className="flex rounded-full bg-white h-12 w-12 justify-center text-canva_secondary-font ml-3 mr-3 hover:border-4 hover:border-canva_secondary-font duration-300">
                <MdEmail className="h-full w-1/2" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
