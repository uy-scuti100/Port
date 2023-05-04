import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import { textVariant, staggerContainer, slideIn } from "../utils/motion";
import { motion } from "framer-motion";

const AboutMe = () => {
  const { theme, isDarkMode } = useContext(ThemeContext);
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className="max-w-[1680px]"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.p
        variants={textVariant(0.2)}
        className={`${
          isDarkMode ? "text-[#8d8d8da1]" : "text-[#00000080]"
        }  p-[20px] md:p-[100px] about font-bold leading-[1.8] md:hidden`}
      >
        Hello! I’m &nbsp;
        <strong className={`text-${theme.text} font-bold`}>
          Hussain Yusuf
        </strong>
        &nbsp;. I'm a self-taught web developer with a year of experience. I'm
        dedicated to learning new technologies and techniques, and I'm
        passionate about taking on new challenges. I'm eager to collaborate with
        others and make a positive impact in the world of web development.
      </motion.p>
      <motion.div
        variants={textVariant(0.2)}
        className={`${
          isDarkMode ? "text-[#8d8d8da1]" : "text-[#00000080]"
        } hidden md:block  md:p-[50px] text-[18px] about font-bold leading-[1.8] md:ml-28`}
      >
        Hello! I’m &nbsp;
        <strong className={`text-${theme.text} font-bold`}>
          Hussain Yusuf
        </strong>
        &nbsp;. I'm a self-taught web developer with a year of experience.{" "}
        <br /> I'm dedicated to learning new technologies and techniques, and
        I'm passionate about taking <br /> on new challenges. I'm eager to
        collaborate with others and make a positive impact in the world <br />{" "}
        of web development.
      </motion.div>
      <div
        className="text-[#8d8d8da1] p-[30px] md:py-[10px] md:px-[50px]
    text-[18px] about font-bold leading-[1.8] md:ml-28"
      >
        Find out more{" "}
        <span className="border-b border-brown pb-1"> about me</span>
      </div>
      <div>
        {isDarkMode ? (
          <div className="opacity-[0.15] flex justify-center py-10">
            <img
              src="images/zickzack_white.svg"
              alt="/"
              className="md:w-[200px]"
            />
          </div>
        ) : (
          <div className="flex justify-center">
            <img src="images/download.svg" alt="/" className="md:w-[200px]" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AboutMe;
