import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { ThemeContext } from "../context/theme";
import { useContext } from "react";

const MobileTopBar = () => {
  const { theme, isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <div className=" flex md:hidden max-w-[1680px] items-center justify-between">
        <div className="bg-brown w-[60px] h-[60px] text-black flex items-center justify-center font-[roboto] text-[18px] font-bold mr-8">
          HY
        </div>
        <div className="text-white mr-3" onClick={toggleTheme}>
          {isDarkMode ? (
            <BsToggleOff size={36} style={{ color: "#fff" }} />
          ) : (
            <BsToggleOn size={36} style={{ color: "#000" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileTopBar;
