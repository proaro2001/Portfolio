import PropsType from "prop-types";
import toast from "react-hot-toast";

const Project = (props) => {
  return (
    <div
      className="card card-side bg-base-100 shadow-xl m-5 hover:scale-110 duration-300 w-[300px] h-[150px] sm:w-[450px] sm:h-[200px] cursor-pointer
      hover:border-4 border-[#ffb261] "
      onClick={() => {
        if (props.demo_link) {
          window.open(props.demo_link, "_blank");
        } else if (props.github_link) {
          window.open(props.github_link, "_blank");
        } else {
          toast("No link available for now", {
            duration: 1500,
            position: "top-center",
            icon: "🤷🏻",
          });
        }
      }}
    >
      {/*  ---- Image ---- */}
      <figure className=" w-1/3 ">
        {props.image || (
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Sample Image"
          />
        )}
      </figure>
      {/* ---- Information ---- */}
      <div className="card-body w-2/3 max-w-64">
        <h2 className="card-title">{props.title || "Title"}</h2>
        {/* ---- Buttons ---- */}
        <div className="card-actions justify-end absolute bottom-5 right-5">
          {props.demo_link && (
            <a href={props.demo_link} target="_blank">
              <button className="btn btn-primary">Demo</button>
            </a>
          )}
          {props.github_link && (
            <a href={props.github_link} target="_blank">
              <button className="btn btn-primary">GitHub</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
Project.propTypes = {
  title: PropsType.string.isRequired,
  description: PropsType.string,
  image: PropsType.func,
  demo_link: PropsType.string,
  github_link: PropsType.string,
};

export default Project;
