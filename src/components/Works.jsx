import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import { Link } from "react-router-dom";

const Works = () => {
  const { theme, isDarkMode } = useContext(ThemeContext);
  return (
    <div className="max-w-[1680px]">
      <div
        className={`text-${theme.text} py-[30px] px-[20px] md:px-[100px] md:py-[50px]`}
      >
        <h1 className="work-header">A small selection of my work, enjoy.</h1>
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
          <div className="flex justify-center">
            <img src="images/download.svg" alt="/" className="md:w-[200px]" />
          </div>
        )}
      </div>
      <div className="py-[50px] px-[20px] md:px-[100px] md:py-[100px] flex flex-col md:flex-row gap-10 items-start">
        <div className="max-w-[650px] ">
          <div className=" bg-[#262626] rounded-t-lg p-4 flex gap-1 justify-start items-center">
            <span className="rounded-full p-1 bg-[#F35F57] "></span>
            <span className="rounded-full p-1 bg-[#F6BC2E]"></span>
            <span className="rounded-full p-1 bg-[#3CCB5A]"></span>
          </div>
          <div className="md:w-[650px] md:h-[500px] h-[350px]">
            <img
              src="images/file cover - 1.png"
              alt="/"
              className="object-cover h-full"
            />
          </div>
        </div>
        <div>
          <div>
            <h1 className={`text-${theme.text} pt-10 pb-5 work-title`}>
              Bank Hotel &#8212; <br /> Landing Page{" "}
            </h1>
            <p
              className={`text-[18px] ${
                isDarkMode ? "text-[#EEEEEE]" : "text-[#000008]"
              } `}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus ut quis exercitationem, aliquam deserunt quidem
              praesentium itaque. Facere ipsum, vero dolore officiis iure quas
              temporibus quibusdam dolorem fugit quae aspernatur quis porro
              quasi tenetur inventore?
            </p>
            <button
              className={`text-${theme.text} uppercase border border-brown px-5 py-2  mt-5 leading-[1] font-normal text-[16px]`}
            >
              {" "}
              View Project
            </button>
          </div>
        </div>
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
          <div className="flex justify-center">
            <img src="images/download.svg" alt="/" className="md:w-[200px]" />
          </div>
        )}
      </div>
      <div className="py-[50px] px-[20px] md:px-[100px] md:py-[100px] flex flex-col md:flex-row gap-10 items-start">
        <div className="max-w-[650px] md:order-2">
          <div className=" bg-[#262626] rounded-t-lg p-4 flex gap-1 justify-start items-center">
            <span className="rounded-full p-1 bg-[#F35F57] "></span>
            <span className="rounded-full p-1 bg-[#F6BC2E]"></span>
            <span className="rounded-full p-1 bg-[#3CCB5A]"></span>
          </div>
          <div className="md:w-[650px] md:h-[500px] h-[350px] md:order-1">
            <img
              src="images/file cover - 1.png"
              alt="/"
              className="object-cover h-full"
            />
          </div>
        </div>
        <div>
          <div>
            <h1 className={`text-${theme.text} pt-10 pb-5 work-title`}>
              Bank Hotel &#8212; <br /> Landing Page{" "}
            </h1>
            <p
              className={`text-[18px] ${
                isDarkMode ? "text-[#EEEEEE]" : "text-[#000008]"
              } `}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus ut quis exercitationem, aliquam deserunt quidem
              praesentium itaque. Facere ipsum, vero dolore officiis iure quas
              temporibus quibusdam dolorem fugit quae aspernatur quis porro
              quasi tenetur inventore?
            </p>
            <Link to="https://hotel-flame-pi.vercel.app/">
              <button
                className={`text-${theme.text} uppercase border border-brown px-5 py-2  mt-5 leading-[1] font-normal text-[16px]`}
              >
                {" "}
                View Project
              </button>
            </Link>
          </div>
        </div>
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
          <div className="flex justify-center">
            <img src="images/download.svg" alt="/" className="md:w-[200px]" />
          </div>
        )}
      </div>
      <div className="py-[50px] px-[20px] md:px-[100px] md:py-[100px] flex flex-col md:flex-row gap-10 items-start">
        <div className="max-w-[650px]">
          <div className=" bg-[#262626] rounded-t-lg p-4 flex gap-1 justify-start items-center">
            <span className="rounded-full p-1 bg-[#F35F57] "></span>
            <span className="rounded-full p-1 bg-[#F6BC2E]"></span>
            <span className="rounded-full p-1 bg-[#3CCB5A]"></span>
          </div>
          <div className="md:w-[650px] md:h-[500px] h-[350px]">
            <img
              src="images/file cover - 1.png"
              alt="/"
              className="object-cover h-full"
            />
          </div>
        </div>
        <div>
          <div>
            <h1 className={`text-${theme.text} pt-10 pb-5 work-title`}>
              Bank Hotel &#8212; <br /> Landing Page{" "}
            </h1>
            <p
              className={`text-[18px] ${
                isDarkMode ? "text-[#EEEEEE]" : "text-[#000008]"
              } `}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus ut quis exercitationem, aliquam deserunt quidem
              praesentium itaque. Facere ipsum, vero dolore officiis iure quas
              temporibus quibusdam dolorem fugit quae aspernatur quis porro
              quasi tenetur inventore?
            </p>
            <button
              className={`text-${theme.text} uppercase border border-brown px-5 py-2  mt-5 leading-[1] font-normal text-[16px]`}
            >
              {" "}
              View Project
            </button>
          </div>
        </div>
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
          <div className="flex justify-center">
            <img src="images/download.svg" alt="/" className="md:w-[200px]" />
          </div>
        )}
      </div>
      <div className="py-[50px] px-[20px] md:px-[100px] md:py-[100px] flex flex-col md:flex-row gap-10 items-start">
        <div className="max-w-[650px] md:order-2">
          <div className=" bg-[#262626] rounded-t-lg p-4 flex gap-1 justify-start items-center">
            <span className="rounded-full p-1 bg-[#F35F57] "></span>
            <span className="rounded-full p-1 bg-[#F6BC2E]"></span>
            <span className="rounded-full p-1 bg-[#3CCB5A]"></span>
          </div>
          <div className="md:w-[650px] md:h-[500px] h-[350px] md:order-1">
            <img
              src="images/file cover - 1.png"
              alt="/"
              className="object-cover h-full"
            />
          </div>
        </div>
        <div>
          <div>
            <h1 className={`text-${theme.text} pt-10 pb-5 work-title`}>
              Bank Hotel &#8212; <br /> Landing Page{" "}
            </h1>
            <p
              className={`text-[18px] ${
                isDarkMode ? "text-[#EEEEEE]" : "text-[#000008]"
              } `}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus ut quis exercitationem, aliquam deserunt quidem
              praesentium itaque. Facere ipsum, vero dolore officiis iure quas
              temporibus quibusdam dolorem fugit quae aspernatur quis porro
              quasi tenetur inventore?
            </p>
            <button
              className={`text-${theme.text} uppercase border border-brown px-5 py-2  mt-5 leading-[1] font-normal text-[16px]`}
            >
              {" "}
              View Project
            </button>
          </div>
        </div>
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
          <div className="flex justify-center">
            <img src="images/download.svg" alt="/" className="md:w-[200px]" />
          </div>
        )}
      </div>
      <div className="py-[50px] px-[20px] md:px-[100px] md:py-[100px] flex flex-col md:flex-row gap-10 items-start">
        <div className="max-w-[650px]">
          <div className=" bg-[#262626] rounded-t-lg p-4 flex gap-1 justify-start items-center">
            <span className="rounded-full p-1 bg-[#F35F57] "></span>
            <span className="rounded-full p-1 bg-[#F6BC2E]"></span>
            <span className="rounded-full p-1 bg-[#3CCB5A]"></span>
          </div>
          <div className="md:w-[650px] h-[500px]md:h-[500px] h-[350px]">
            <img
              src="images/file cover - 1.png"
              alt="/"
              className="object-cover h-full"
            />
          </div>
        </div>
        <div>
          <div>
            <h1 className={`text-${theme.text} pt-10 pb-5 work-title`}>
              Bank Hotel &#8212; <br /> Landing Page{" "}
            </h1>
            <p
              className={`text-[18px] ${
                isDarkMode ? "text-[#EEEEEE]" : "text-[#000008]"
              } `}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus ut quis exercitationem, aliquam deserunt quidem
              praesentium itaque. Facere ipsum, vero dolore officiis iure quas
              temporibus quibusdam dolorem fugit quae aspernatur quis porro
              quasi tenetur inventore?
            </p>
            <button
              className={`text-${theme.text} uppercase border border-brown px-5 py-2  mt-5 leading-[1] font-normal text-[16px]`}
            >
              {" "}
              View Project
            </button>
          </div>
        </div>
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
          <div className="flex justify-center">
            <img src="images/download.svg" alt="/" className="md:w-[200px]" />
          </div>
        )}
      </div>
      <div className="py-[50px] px-[20px] md:px-[100px] md:py-[100px] flex flex-col md:flex-row gap-10 items-start">
        <div className="max-w-[650px] md:order-2">
          <div className=" bg-[#262626] rounded-t-lg p-4 flex gap-1 justify-start items-center">
            <span className="rounded-full p-1 bg-[#F35F57] "></span>
            <span className="rounded-full p-1 bg-[#F6BC2E]"></span>
            <span className="rounded-full p-1 bg-[#3CCB5A]"></span>
          </div>
          <div className="md:w-[650px] md:h-[500px] h-[350px] md:order-1">
            <img
              src="images/file cover - 1.png"
              alt="/"
              className="object-cover h-full"
            />
          </div>
        </div>
        <div>
          <div>
            <h1 className={`text-${theme.text} pt-10 pb-5 work-title`}>
              Bank Hotel &#8212; <br /> Landing Page{" "}
            </h1>
            <p
              className={`text-[18px] ${
                isDarkMode ? "text-[#EEEEEE]" : "text-[#000008]"
              } `}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus ut quis exercitationem, aliquam deserunt quidem
              praesentium itaque. Facere ipsum, vero dolore officiis iure quas
              temporibus quibusdam dolorem fugit quae aspernatur quis porro
              quasi tenetur inventore?
            </p>
            <button
              className={`text-${theme.text} uppercase border border-brown px-5 py-2  mt-5 leading-[1] font-normal text-[16px]`}
            >
              {" "}
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
