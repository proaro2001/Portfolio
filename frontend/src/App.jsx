import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import ProjectPage from "./pages/Projects/ProjectPage";
// import Resume from "./pages/Resume/Resume";
import { Toaster } from "react-hot-toast";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  return (
    <div className="h-full flex-col ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<ProjectPage />} />
        {/* <Route path="/Resume" element={<Resume />} /> */}
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
