import { MdOutlineHome, MdWorkOutline } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { BsPerson } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div>
      <div className="flex text-white md:hidden h-[60px] justify-between text-[20px] border-t bg-black border-[#000000] fixed bottom-0 left-0 right-0 z-50">
        <Link to="/">
          <div className="w-[100px] h-[60px] hover:text-white text-brown flex justify-center items-center flex-col border-[#000000]">
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
          <div className="w-[100px]  h-[60px] hover:text-white text-brown flex  justify-center items-center flex-col border-l border-[#000000]">
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
          <div className="w-[100px] h-[60px] hover:text-white text-brown flex  justify-center items-center flex-col border-l border-[#000000]">
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
          <div className="w-[100px] h-[60px] hover:text-white text-brown flex  justify-center items-center flex-col border-l border-[#000000]">
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
