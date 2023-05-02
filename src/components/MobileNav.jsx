import { MdOutlineHome, MdWorkOutline } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { BsPerson } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div>
      <div className="flex text-white md:hidden h-[60px] justify-around text-[20px] border-t bg-black border-[#000000] fixed bottom-0 left-0 right-0">
        <div className="w-[100px] hover:text-white text-brown flex justify-center items-center flex-col border-[#000000]">
          <Link to="/">
            <MdOutlineHome />
            <p
              className="
           uppercase text-[10px]"
            >
              home
            </p>
          </Link>
        </div>
        <div className="w-[100px] hover:text-white text-brown flex  justify-center items-center flex-col border-l border-[#000000]">
          <MdWorkOutline />
          <p
            className="
           uppercase text-[10px]"
          >
            work
          </p>
        </div>
        <div className="w-[100px] h-[60px] hover:text-white text-brown flex  justify-center bg-black items-center flex-col border-l border-[#000000]">
          <ImNewspaper />
          <p
            className="
           uppercase text-[10px]"
          >
            blog
          </p>
        </div>
        <div className="w-[100px] hover:text-white text-brown flex  justify-center items-center flex-col border-l border-[#000000]">
          <BsPerson />
          <p
            className="
           uppercase text-[10px]"
          >
            about
          </p>
        </div>
        <div className="w-[100px] hover:text-white text-brown flex  justify-center items-center flex-col border-l border-[#000000]">
          <CiSearch />
          <p
            className="
           uppercase text-[10px]"
          >
            search
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
