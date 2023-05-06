import { ImInstagram } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { theme, isDarkMode } = useContext(ThemeContext);
  return (
    <div className="max-w-[1680px]">
      {/* {" animation"} */}
      <div
        className={`text-${theme.text} py-[30px] px-[20px] md:px-[100px] md:py-[50px]`}
      >
        <div className="div">
          <h1
            className={` ${isDarkMode ? "darkshadow" : "lightshadow"} word num`}
          >
            Design. Code.
          </h1>
          <p className={`bg-${theme.load} overlay-1`}></p>
        </div>
        <div className="div">
          <h1
            className={` ${isDarkMode ? "darkshadow" : "lightshadow"} word num`}
          >
            Music. Art.
          </h1>
          <p className={`bg-${theme.load} overlay-2`}></p>
        </div>
        <div className="div">
          <h1
            className={` ${isDarkMode ? "darkshadow" : "lightshadow"} word num`}
          >
            Adventures.
          </h1>
          <p className={`bg-${theme.load} overlay-3`}></p>
        </div>
        <div className="div">
          <h1
            className={` ${isDarkMode ? "darkshadow" : "lightshadow"} word num`}
          >
            Documentaries.
          </h1>
          <p className={`bg-${theme.load} overlay-2`}></p>
        </div>
      </div>
      <div
        className={`${
          isDarkMode ? "text-[#8d8d8da1]" : "text-[#4A4B65]"
        } flex items-center text-[24px] space-x-4
        md:space-x-8 md:before:w-[150px] before:w-[80px] before:h-[2px] before:bg-brown
        before:mr-4 px-[20px] md:text-[36px] py-5`}
      >
        <p>
          <Link to="https://www.instagram.com/_uy_scuti____/">
            <ImInstagram />
          </Link>
        </p>
        <p>
          <Link to="https://twitter.com/Hussain_Joe">
            <FaTwitter />
          </Link>
        </p>
        <p>
          <Link to="https://github.com/uy-scuti100">
            <FiGithub />
          </Link>
        </p>

        <p>
          <Link to="https://www.linkedin.com/in/yusuf-hussain-276ab6251/">
            <TiSocialLinkedin />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
