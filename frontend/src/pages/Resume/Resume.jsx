import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";

const Resume = () => {
  return (
    <div className="bg-canva_background">
      <NavigationBar />
      {/* Projects Goes Below */}
      <div className=" min-h-screen flex flex-col ">
        <h1 className=" text-9xl text-center text-canva_primary-font">
          Not Done Yet
        </h1>
      </div>
      {/* Projects Goes Above */}
      <Footer />
    </div>
  );
};

export default Resume;
