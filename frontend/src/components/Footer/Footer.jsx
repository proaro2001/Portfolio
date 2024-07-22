import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PropTypes from "prop-types";

function Footer(props) {
  // const { background_color } = props;
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex">
      <footer
        className={`footer items-center p-4  ${
          props.background_color || `bg-canva_footer-background`
        } text-neutral-content`}
      >
        <h1 className="justify-self-start">Design By Ka Hin</h1>
        <aside className=" grid-flow-col lg:justify-self-center">
          <p>{`Copyright © ${currentYear} Ka Hin- All right reserved`}</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end ">
          <a href="https://github.com/proaro2001" target="_blank">
            <div className="flex rounded-full  h-12 w-12 justify-center  text-neutral-content ml-3 mr-3 duration-300 hover:text-canva_secondary-font">
              <VscGithub className="h-full w-1/2" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/kahinchoi/" target="_blank">
            <div className="flex rounded-full  h-12 w-12 justify-center text-neutral-content ml-3 mr-3 duration-300 hover:text-canva_secondary-font">
              <FaLinkedin className="h-full w-1/2" />
            </div>
          </a>
          <a href="mailto:proaro2001@gmail.com" target="_blank">
            <div className="flex rounded-full  h-12 w-12 justify-center text-neutral-content ml-3 mr-3 duration-300 hover:text-canva_secondary-font">
              <MdEmail className="h-full w-1/2" />
            </div>
          </a>
        </nav>
      </footer>
    </div>
  );
}

Footer.propTypes = {
  background_color: PropTypes.string,
};

export default Footer;
