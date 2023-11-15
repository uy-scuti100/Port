import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import { textVariant, staggerContainer, slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
          isDarkMode ? "text-[#8d8d8da1]" : "text-[#4A4B65]"
        }  p-[20px] md:p-[100px] about font-medium leading-[1.8] md:hidden`}
      >
        Hello! I’m &nbsp;
        <strong className={`text-${theme.text}`}>Hussain Yusuf.</strong>
        &nbsp; As a web developer, my top priority is to create user-centered,
        responsive web experiences that showcase your brand in the best possible
        light. From crafting custom websites that perfectly align with your
        brand to building sites that convert visitors into customers, I leverage
        my skills and expertise to create innovative digital solutions that help
        your business succeed. I also focus on combining creativity and
        technology to set your brand apart, crafting unique web experiences that
        truly resonate with your audience. By working with me, you can rest
        assured that your website will be more than just a digital storefront—it
        will be a meaningful online experience that connects with your customers
        and drives business growth. So if you're ready to elevate your online
        presence and take your digital strategy to the next level, let's work
        together to make it happen.
      </motion.p>
      <motion.div
        variants={textVariant(0.2)}
        className={`${
          isDarkMode ? "text-[#8d8d8da1]" : "text-[#4A4B65]"
        } hidden md:block  md:p-[50px] text-[18px] about font-medium leading-[1.8] md:ml-28`}
      >
        Hello! I’m &nbsp;
        <strong className={`text-${theme.text} font-extrabold`}>
          Hussain Yusuf
        </strong>
        &nbsp;. As a web developer, my top priority is to create user-centered,
        responsive web experiences that showcase your brand in the best possible
        light. From crafting custom websites that perfectly align with your
        brand to building sites that convert visitors into customers, I leverage
        my skills and expertise to create innovative digital solutions that help
        your business succeed. I also focus on combining creativity and
        technology to set your brand apart, crafting unique web experiences that
        truly resonate with your audience. By working with me, you can rest
        assured that your website will be more than just a digital storefront—it
        will be a meaningful online experience that connects with your customers
        and drives business growth. So if you're ready to elevate your online
        presence and take your digital strategy to the next level, let's work
        together to make it happen.
      </motion.div>
      <div
        className={`${
          isDarkMode ? "text-[#8d8d8da1]" : "text-[#4A4B65]"
        } p-[30px] md:py-[10px] md:px-[50px]
    text-[18px] about font-bold leading-[1.8] md:ml-28`}
      >
        Find out more{" "}
        <Link to="/about">
          <span className="pb-1 uppercase border-b border-brown">
            {" "}
            about me
          </span>
        </Link>
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
