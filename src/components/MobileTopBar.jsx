import { BsToggleOn } from "react-icons/bs";
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { Link } from "react-router-dom";

const MobileTopBar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className=" flex md:hidden max-w-[1680px] items-center justify-between"
    >
      <Link to="/">
        <div className="bg-brown w-[60px] h-[60px] text-black flex items-center justify-center font-[roboto] text-[18px] font-bold mr-8">
          HY
        </div>
      </Link>
      <div className="text-white mr-3 cursor-pointer" onClick={toggleTheme}>
        {isDarkMode ? (
          <BsToggleOn size={36} style={{ color: "#fff", rotate: "180deg" }} />
        ) : (
          <BsToggleOn size={36} style={{ color: "#000" }} />
        )}
      </div>
    </motion.div>
  );
};

export default MobileTopBar;
