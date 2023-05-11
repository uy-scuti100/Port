import { MdOutlineHome, MdWorkOutline } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { BsPerson } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div>
      <div className="flex text-white md:hidden  items-end justify-between text-[20px] border-t bg-black border-[#000000] fixed -bottom-1 left-0 right-0 z-50 px-4 py-4">
        <Link to="/">
          <div className="hover:text-white text-brown flex items-center justify-center flex-col">
            <MdOutlineHome />
            <p
              className="
           uppercase text-[10px]"
            >
              home
            </p>
          </div>
        </Link>
        <Link to="/work">
          <div className="hover:text-white text-brown flex items-center flex-col  self-center">
            <MdWorkOutline />
            <p
              className="
           uppercase text-[10px]"
            >
              work
            </p>
          </div>
        </Link>

        <Link to="/about">
          <div className="hover:text-white text-brown flex items-center flex-col ">
            <BsPerson />
            <p
              className="
           uppercase text-[10px]"
            >
              about
            </p>
          </div>
        </Link>
        <Link to="/contact">
          <div className="hover:text-white text-brown flex items-center flex-col ">
            <AiOutlinePhone />
            <p
              className="
           uppercase text-[10px]"
            >
              contact
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
