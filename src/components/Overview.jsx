import { useContext, useState } from "react";
import { ThemeContext } from "../../context/theme";
import { Link } from "react-router-dom";
import { links } from "../constants/ProjectLinks";

const Overview = () => {
  const { theme, isDarkMode } = useContext(ThemeContext);
  const [hover, setHover] = useState(false);

  const hoverToggle = () => {
    setHover((prev) => !prev);
  };
  return (
    <div className="max-w-[1680px]">
      <div className="p-[20px] md:p-[100px] ">
        <h1
          className={`proj-title text-${theme.text} break-words tracking-widest-[-1px] leading-[1.26] font-black md:text-left text-center`}
        >
          Get an overview of my latest projects
        </h1>
      </div>

      <div className="flex flex-wrap items-center justify-center">
        {links.map((link) => {
          // destrucre the content of each link
          const { label, href, year, concept, type } = link;

          return (
            <ul key={label}>
              <Link to={href}>
                <li
                  className={`text-${theme.text} bg-${
                    isDarkMode ? "[#000000]" : "[#ece5e5]"
                  } h-[337px] w-[363px] py-5 px-10 m-4 relative overflow-hidden transition-all duration-500 ease-in-out `}
                  onMouseDown={hoverToggle}
                >
                  {hover && (
                    <div className="absolute bottom-[100px] right-[80px] transition-all duration-500 ease-in-out">
                      <div className="relative">
                        <div className="rounded-full bg-[#484848]/50 w-[54px] h-[54px] absolute "></div>
                        <div className="rounded-full bg-[#484848]/50 w-[192px] h-[192px] absolute"></div>
                      </div>
                    </div>
                  )}
                  <p
                    className={`capitalize text-[24px] py-10 relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:bg-brown after:w-[10%] after:h-[1px] mb-3`}
                  >
                    {label}
                  </p>

                  <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] ">
                    {year}
                  </p>
                  <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] uppercase ">
                    {" "}
                    {concept}
                  </p>
                  <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] uppercase ">
                    {type}
                  </p>
                </li>
              </Link>
            </ul>
          );
        })}
      </div>
      <div className="flex justify-center items-center pt-20 pb-10">
        <Link to="/work">
          <button
            className={`text-${theme.text} uppercase bg-brown px-5 py-2 leading-[1] font-normal text-[16px]`}
          >
            {" "}
            view other projects
          </button>
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
          <div className="flex  justify-center">
            <img src="images/download.svg" alt="/" className="md:w-[200px]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
