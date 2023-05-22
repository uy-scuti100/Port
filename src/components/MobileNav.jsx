import { useState, useEffect } from "react";
import { MdOutlineHome, MdWorkOutline } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";

const MobileNav = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div>
      <div className="flex md:hidden justify-between text-[20px] border-t bg-black border-[#000000] fixed -bottom-1 left-0 right-0 z-50 px-4 py-4">
        <NavLink
          to="/"
          // activeClassName="text-white"
          className={`text-${
            activeLink === "/" ? "white" : "brown"
          } flex items-center justify-center flex-col`}
        >
          <div>
            <MdOutlineHome />
          </div>
          <p
            className="
           uppercase text-[10px]"
          >
            home
          </p>
        </NavLink>
        <NavLink
          to="/work"
          // activeClassName="text-white"
          className={`text-${
            activeLink === "/work" ? "white" : "brown"
          } flex items-center justify-center flex-col`}
        >
          <div>
            <MdWorkOutline />
          </div>
          <p
            className="
           uppercase text-[10px]"
          >
            work
          </p>
        </NavLink>

        <NavLink
          to="/about"
          // activeClassName="text-white"
          className={`text-${
            activeLink === "/about" ? "white" : "brown"
          } flex items-center justify-center flex-col`}
        >
          <div>
            <BsPerson />
          </div>
          <p
            className="
           uppercase text-[10px]"
          >
            about
          </p>
        </NavLink>
        <NavLink
          to="/contact"
          // activeClassName="text-white"
          className={`text-${
            activeLink === "/contact" ? "white" : "brown"
          } flex items-center justify-center flex-col`}
        >
          <div>
            <AiOutlinePhone />
          </div>
          <p
            className="
           uppercase text-[10px]"
          >
            contact
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNav;
