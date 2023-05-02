import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { ThemeContext } from "../context/theme";
import { useContext } from "react";
const Topbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="hidden md:flex w-full p-10 items-center justify-between ">
      <div className="flex items-center gap-5">
        <div className="bg-brown w-[60px] h-[60px] text-black flex items-center justify-center font-[roboto] text-[18px] font-bold ">
          HY
        </div>
        <div className="font-[roboto] text-[18px] capitalize font-bold leading-[80px] text-white">
          Hussain Yusuf
        </div>
      </div>
      <div
        className="flex items-center text-[18px] font-bold text-white font-[roboto] 
      "
      >
        <p className="px-5">Work</p>
        <p className="px-5">Blog</p>
        <p className="px-5">About</p>
        <p className="px-5" onClick={toggleTheme}>
          {isDarkMode ? (
            <BsToggleOff size={36} style={{ color: "#fff" }} />
          ) : (
            <BsToggleOn size={36} style={{ color: "#000" }} />
          )}
        </p>
      </div>
    </div>
  );
};

export default Topbar;
