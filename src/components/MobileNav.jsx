import { MdOutlineHome, MdWorkOutline } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { BsPerson } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div>
      <div className="flex text-white md:hidden h-[60px] justify-around text-[20px] border-t bg-black border-[#000000] fixed bottom-0 left-0 right-0 z-50">
        <div className="w-[100px] h-[60px] hover:text-white text-brown flex justify-center items-center flex-col border-[#000000]">
          <Link to="/">
            <MdOutlineHome />
          </Link>
          <p
            className="
           uppercase text-[10px]"
          >
            home
          </p>
        </div>
        <div className="w-[100px]  h-[60px] hover:text-white text-brown flex  justify-center items-center flex-col border-l border-[#000000]">
          <Link to="/work">
            <MdWorkOutline />
          </Link>
          <p
            className="
           uppercase text-[10px]"
          >
            work
          </p>
        </div>

        <div className="w-[100px] h-[60px] hover:text-white text-brown flex  justify-center items-center flex-col border-l border-[#000000]">
          <Link to="/about">
            <BsPerson />
          </Link>
          <p
            className="
           uppercase text-[10px]"
          >
            about
          </p>
        </div>
        <div className="w-[100px] h- hover:text-white text-brown flex  justify-center items-center flex-col border-l border-[#000000]">
          <Link to="/contact">
            <AiOutlinePhone />
          </Link>
          <p
            className="
           uppercase text-[10px]"
          >
            contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
