import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import { Link } from "react-router-dom";

const Overview = () => {
  const { theme, isDarkMode } = useContext(ThemeContext);
  return (
    <div className="max-w-[1680px]">
      <div className="p-[20px] md:p-[100px] ">
        <h1
          className={`proj-title text-${theme.text} break-words tracking-widest-[-1px] leading-[1.26] font-black md:text-left text-center`}
        >
          Get an overview of my latest projects
        </h1>
      </div>

      <div className="">
        <ul className="flex flex-col justify-center items-center md:flex-row md:flex-wrap gap-3">
          <Link to="https://travels-rust.vercel.app/">
            <li
              className={
                isDarkMode
                  ? `bg-[#000000] h-[337x] w-[363px] py-5 px-10 text-${theme.text}`
                  : `text-${theme.text}bg-[#ece5e5] h-[337x] w-[363px] py-5 px-16`
              }
            >
              <p
                className={`capitalize text-[24px] py-10 relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:bg-brown after:w-[10%] after:h-[1px] mb-3`}
              >
                Scuti Travel Website
              </p>

              <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] ">
                {" "}
                Y. 2023
              </p>
              <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] uppercase ">
                {" "}
                C. Travel Site
              </p>
              <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] uppercase ">
                T. Side Proj"
              </p>
            </li>
          </Link>
          <Link to="https://skin-mu.vercel.app/">
            <li
              className={
                isDarkMode
                  ? `bg-[#000000] h-[337x] w-[363px] py-5 px-10 text-${theme.text}`
                  : `text-${theme.text}bg-[#ece5e5] h-[337x] w-[363px] py-5 px-16`
              }
            >
              <p
                className={`capitalize text-[24px] py-10 relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:bg-brown after:w-[10%] after:h-[1px] mb-3`}
              >
                A-lab Skin Products
              </p>

              <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] ">
                {" "}
                Y. 2023
              </p>
              <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] uppercase ">
                {" "}
                C. A-Lab
              </p>
              <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] uppercase ">
                T. Side Proj"
              </p>
            </li>
          </Link>
          <Link to="https://pethaven.vercel.app/">
            <li
              className={
                isDarkMode
                  ? `bg-[#000000] h-[337x] w-[363px] py-5 px-10 text-${theme.text}`
                  : `text-${theme.text}bg-[#ece5e5] h-[337x] w-[363px] py-5 px-16`
              }
            >
              <p
                className={`capitalize text-[24px] py-10 relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:bg-brown after:w-[10%] after:h-[1px] mb-3`}
              >
                Pet Haven Veterinary
              </p>

              <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] ">
                {" "}
                Y. 2023
              </p>
              <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] uppercase ">
                {" "}
                C. PetHaven
              </p>
              <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] uppercase ">
                T. Side Proj"
              </p>
            </li>
          </Link>
          <Link to="https://pethaven.vercel.app/">
            <li
              className={
                isDarkMode
                  ? `bg-[#000000] h-[337x] w-[363px] py-5 px-10 text-${theme.text}`
                  : `text-${theme.text}bg-[#ece5e5] h-[337x] w-[363px] py-5 px-16`
              }
            >
              <p
                className={`capitalize text-[24px] py-10 relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:bg-brown after:w-[10%] after:h-[1px] mb-3`}
              >
                Pet Royal dog sellers
              </p>

              <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] ">
                {" "}
                Y. 2023
              </p>
              <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] uppercase ">
                {" "}
                C. PetHaven
              </p>
              <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] uppercase ">
                T. Side Proj"
              </p>
            </li>
          </Link>
          <li
            className={
              isDarkMode
                ? `bg-[#000000] h-[337x] w-[363px] py-5 px-10 text-${theme.text}`
                : `text-${theme.text}bg-[#ece5e5] h-[337x] w-[363px] py-5 px-16`
            }
          >
            <p
              className={`capitalize text-[24px] py-10 relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:bg-brown after:w-[10%] after:h-[1px] mb-3`}
            >
              Pet Royal dog sellers
            </p>

            <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] ">
              {" "}
              Y. 2023
            </p>
            <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] uppercase ">
              {" "}
              C. PetHaven
            </p>
            <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] uppercase ">
              T. Side Proj"
            </p>
          </li>
          <li
            className={
              isDarkMode
                ? `bg-[#000000] h-[337x] w-[363px] py-5 px-10 text-${theme.text}`
                : `text-${theme.text}bg-[#ece5e5] h-[337x] w-[363px] py-5 px-16`
            }
          >
            <p
              className={`capitalize text-[24px] py-10 relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:bg-brown after:w-[10%] after:h-[1px] mb-3`}
            >
              Pet Royal dog sellers
            </p>

            <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] ">
              {" "}
              Y. 2023
            </p>
            <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] uppercase ">
              {" "}
              C. PetHaven
            </p>
            <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] uppercase ">
              T. Side Proj"
            </p>
          </li>
        </ul>
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
