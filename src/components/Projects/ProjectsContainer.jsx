import Project from "./Project";
import project_list from "./Project_List";

const ProjectsContainer = () => {
  return (
    <div className="h-auto ">
      <ul className="flex flex-row flex-wrap justify-center">
        {/* Projects details is stored in the Project_List.jsx */}
        {project_list.map((project, index) => (
          <li key={index}>
            <Project
              image={project.image}
              title={project.title}
              demo_link={project.demo_link}
              github_link={project.github_link}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsContainer;
