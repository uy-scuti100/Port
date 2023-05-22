import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import { BiPhoneCall } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const { theme, isDarkMode } = useContext(ThemeContext);
  return (
    <div>
      <div
        className={`text-${theme.text} py-[30px] px-[20px] md:px-[100px] md:py-[20px] flex flex-col gap-5 items-center justify-center`}
      >
        <h1 className="about-title leading-[2] py-2">
          Elevating Your Online Presence
        </h1>
      </div>
      <p
        className={`${
          isDarkMode ? "text-[#8d8d8da1]" : "text-[#000000]"
        } font-[poppins] p-[20px] md:p-[50px] leading-[1.8] text-center md:text-[28px]`}
      >
        Committed to solving your web challenges and driving growth. Let's work
        together to achieve your digital goals.
      </p>
      <p
        className={`${
          isDarkMode ? "text-[#8d8d8da1]" : "text-[#000000]"
        } font-[poppins] p-[20px] md:p-[50px] leading-[1.8] text-center md:text-[28px]`}
      >
        Any question or remarks? <br />
        Just write us a message!
      </p>

      {/* contact-card */}
      <div className="flex justify-center items-center flex-col md:flex-row gap-3 justify-evenly">
        <div
          className={`w-[387px] h-[500px] ${
            isDarkMode ? "bg-[#ccc]" : "bg-black"
          } rounded-[5px] flex flex-col gap-3 items-center justify-center relative overflow-hidden md:basis-1/2`}
        >
          <h1
            className={`${
              isDarkMode ? "text-[#000000]" : "text-[#f5f5f5]"
            } font-[poppins] font-[600] text-[20px] tracking-wide leading-[30px] my-3`}
          >
            Contact Information
          </h1>
          <div>
            <BiPhoneCall color="#C0A062" size={24} />
          </div>
          <p
            className={`${
              isDarkMode ? "text-[#000000]" : "text-white"
            } font-sans font-[500] font-[400] text-[12px] tracking-wider leading-[18px] pb-3`}
          >
            {" "}
            +234 803 9282 266
          </p>
          <div>
            <AiOutlineMail color="#C0A062" size={24} />
          </div>
          <Link to="mailto:osenidirect@gmail.com">
            <p
              className={`${
                isDarkMode ? "text-[#000000]" : "text-white"
              } font-[inter] font-[500] text-[13px] leading-[18px] tracking-widest pb-3`}
            >
              osenidirect@gmail.com
            </p>
          </Link>
          <div>
            <GoLocation color="#C0A062" size={24} />
          </div>
          <p
            className={`${
              isDarkMode ? "text-[#000000]" : "text-white"
            } font-sans font-[500] text-[12px] leading-[18px] text-center tracking-widest p-3`}
          >
            Alh. Oseni Street, Meiran Alagbado, <br /> Lagos state Nigeria.
          </p>
          <div className="flex gap-8 pt-10">
            <Link to="https://twitter.com/Hussain_Joe">
              {" "}
              <div>
                <AiFillTwitterCircle color="#C0A062" size={24} />
              </div>{" "}
            </Link>
            <Link to="https://github.com/uy-scuti100">
              <div>
                <AiFillGithub color="#C0A062" size={24} />
              </div>
            </Link>
            <Link to="https://www.linkedin.com/in/yusuf-hussain-276ab6251/">
              <div>
                <FaLinkedinIn color="#C0A062" size={24} />
              </div>
            </Link>
          </div>
          <div className="absolute bottom-[100px] right-[80px]">
            <div className="relative">
              <div className="rounded-full bg-[#484848]/50 w-[54px] h-[54px] absolute "></div>
              <div className="rounded-full bg-[#484848]/50 w-[192px] h-[192px] absolute"></div>
            </div>
          </div>
        </div>
        {/* form */}
        {/* <div className="md:basis-1/2">
          <div
            className={`${
              isDarkMode ? "bg-black text-white" : "bg-white text-black"
            } my-[50px] rounded-[5px] flex gap-3`}
          >
            <form className="px-5 flex flex-wrap gap-5  items-center justify-center">
              <div className="flex flex-col gap-2 md:pb-8 pb-6">
                <label
                  htmlFor="firstName"
                  className={`${
                    isDarkMode ? "text-white" : "text-black"
                  } font-[inter] text-[13px]`}
                >
                  {" "}
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className={`bg-transparent border-b outline-none ${
                    isDarkMode
                      ? "border-white text-white"
                      : "border-black text-black"
                  }  w-[278px]`}
                />
              </div>
              <div className="flex flex-col gap-2 md:pb-8">
                <label
                  htmlFor="lastName"
                  className={`${
                    isDarkMode ? "text-white" : "text-black"
                  } font-[inter] text-[13px]`}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className={`bg-transparent border-b outline-none ${
                    isDarkMode
                      ? "border-white text-white"
                      : "border-black text-black"
                  }  w-[278px]`}
                />
              </div>
              <div className="flex flex-col gap-2 md:pb-8">
                <label
                  htmlFor="email"
                  className={`${
                    isDarkMode ? "text-white" : "text-black"
                  } font-[inter] text-[13px]`}
                >
                  {" "}
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`bg-transparent border-b outline-none ${
                    isDarkMode
                      ? "border-white text-white"
                      : "border-black text-black"
                  }  w-[278px]`}
                />
              </div>
              <div className="flex flex-col gap-2 md:pb-8">
                <label
                  htmlFor="phone"
                  className={`${
                    isDarkMode ? "text-white" : "text-black"
                  } font-[inter] text-[13px]`}
                >
                  {" "}
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className={`bg-transparent border-b outline-none ${
                    isDarkMode
                      ? "border-white text-white"
                      : "border-black text-black"
                  }  w-[278px]`}
                />
              </div>
              <div className="flex flex-col gap-2 md:pb-8">
                <label
                  className={`${
                    isDarkMode ? "text-white" : "text-black"
                  } font-[inter] text-[13px]`}
                >
                  Message
                </label>

                <input
                  type="text"
                  placeholder="your message here"
                  className={`bg-transparent border-b outline-none ${
                    isDarkMode
                      ? "border-white text-white"
                      : "border-black text-black"
                  }  md:w-[400px] text-[13px] w-[280px] gap-2 `}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className={`${
                    isDarkMode ? "bg-white text-black" : "bg-black text-white"
                  } px-4 py-1 capitalize font-[inter] rounded-md`}
                >
                  {" "}
                  send message
                </button>
              </div>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactForm;
