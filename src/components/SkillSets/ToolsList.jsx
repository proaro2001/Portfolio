import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { SiMacos } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";

const ToolsList = [
  {
    icon: <SiMacos color="white" />,
    name: "macOS",
    bg_color: "#303030",
    border_color: "orange",
    link: "https://www.apple.com/",
  },
  {
    icon: <VscVscode color="white" />,
    name: "VS Code",
    bg_color: "#303030",
    border_color: "orange",
    link: "https://code.visualstudio.com/",
  },
  {
    icon: <FaGithub color="white" />,
    name: "GitHub",
    bg_color: "#303030",
    border_color: "orange",
    link: "https://github.com/",
  },
  {
    icon: <SiPostman color="white" />,
    name: "Postman",
    bg_color: "#303030",
    border_color: "orange",
    link: "https://www.postman.com/",
  },
  {
    icon: <IoLogoFigma color="white" />,
    name: "Figma",
    bg_color: "#303030",
    border_color: "orange",
    link: "https://www.figma.com/?utm_source=google&utm_medium=cpc&utm_campaign=21284800681&utm_term=figma&utm_content=699203569595&utm_adgroup=169015407344&gad_source=1&gclid=EAIaIQobChMI5Yam6tG5hwMVTwutBh0WxQV_EAAYASAAEgJiw_D_BwE",
  },
];

export default ToolsList;
