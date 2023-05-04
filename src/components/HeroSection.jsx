import { ImInstagram } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { GrDribbble } from "react-icons/gr";
import { TiSocialLinkedin } from "react-icons/ti";
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";

const HeroSection = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="max-w-[1680px]">
      {/* {" animation"} */}
      <div
        className={`text-${theme.text} py-[30px] px-[20px] md:px-[100px] md:py-[50px]`}
      >
        <div className="div">
          <h1 className="word num">Design. Code.</h1>
          <p className={`bg-${theme.load} overlay-1`}></p>
        </div>
        <div className="div">
          <h1 className="word num">Music. Art.</h1>
          <p className={`bg-${theme.load} overlay-2`}></p>
        </div>
        <div className="div">
          <h1 className="word num">Adventures.</h1>
          <p className={`bg-${theme.load} overlay-3`}></p>
        </div>
        <div className="div">
          <h1 className="word num">Documentaries.</h1>
          <p className={`bg-${theme.load} overlay-2`}></p>
        </div>
      </div>
      <div
        className="flex items-center text-[24px] space-x-4
        md:space-x-8 text-ash md:before:w-[150px] before:w-[80px] before:h-[2px] before:bg-brown
        before:mr-4 px-[20px] md:text-[36px] py-5"
      >
        <p>
          <ImInstagram />
        </p>
        <p>
          <FaTwitter />
        </p>
        <p>
          <FaPinterestP />
        </p>
        <p>
          <GrDribbble />
        </p>
        <p>
          <TiSocialLinkedin />
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
