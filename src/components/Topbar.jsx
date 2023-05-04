import { BsToggleOn } from "react-icons/bs";
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { Link } from "react-router-dom";
const Topbar = () => {
  const { theme, isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="hidden md:flex w-full p-10 items-center justify-between "
    >
      <div className="flex items-center gap-5">
        <div className="bg-brown w-[60px] h-[60px] text-black flex items-center justify-center font-[roboto] text-[18px] font-bold ">
          HY
        </div>
        <div
          className={`font-[roboto] text-[18px] capitalize font-bold leading-[80px] text-${theme.text}`}
        >
          Hussain Yusuf
        </div>
      </div>
      <div
        className={`flex items-center text-[18px] font-bold text-${theme.text} font-[roboto] 
      `}
      >
        <Link to="/">
          {" "}
          <p className="px-5 hover:text-brown">Home</p>
        </Link>
        <Link to="/work">
          <p className="px-5 hover:text-brown">Work</p>
        </Link>
        <Link to="/about">
          <p className="px-5 hover:text-brown">About</p>
        </Link>
        <Link to="/contact">
          <p className="px-5 hover:text-brown">Contact</p>
        </Link>
        <div className="text-white mr-3" onClick={toggleTheme}>
          {isDarkMode ? (
            <BsToggleOn size={36} style={{ color: "#fff", rotate: "180deg" }} />
          ) : (
            <BsToggleOn size={36} style={{ color: "#000" }} />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Topbar;
