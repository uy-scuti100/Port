import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";

const Projects = () => {
  const { theme, isDarkMode } = useContext(ThemeContext);
  return (
    <div className="max-w-[1680px]">
      <div className="p-[20px] md:p-[100px] ">
        <div>
          <h1
            className={`proj-title text-${theme.text} break-words tracking-widest-[-1px] leading-[1.26] font-black`}
          >
            Concept: InsightX
          </h1>
          <div>
            <div
              className={`${
                isDarkMode ? "text-[#8d8d8da1]" : "text-[#00000080]"
              }
              } flex items-center text-[10px] md:text-[14px] space-x-4 md:space-x-8 md:before:w-[150px] md:before:h-[2px] md:before:bg-brown md:before:mr-4 md:px-[20px] px-[10px] py-10 uppercase leading-normal font-normal font-sans `}
            >
              <p> Y. 2022</p>
              <p> C. InsightX</p>
              <p>T. Side Project</p>
              <p>A. Figma</p>
            </div>
          </div>
          <div className="md:p-10">
            <p
              className={`${
                isDarkMode ? "text-[#8d8d8da1]" : "text-[#4A4B65]"
              } md:text-[18px] font-[300]`}
            >
              Welcome to my blog website! Here, you will find a collection of
              thought-provoking articles on various topics, including
              technology, business, and personal growth. With engaging content
              and insightful commentary, my blog is designed to inform, inspire,
              and challenge readers. Whether you're an entrepreneur, a tech
              enthusiast, or simply someone looking for a fresh perspective, my
              blog has something for everyone. So why not take a few minutes to
              browse my latest posts and join the conversation? I look forward
              to hearing your thoughts!
            </p>

            <Link to="https://blog-psi-plum.vercel.app/">
              <button className="my-5 text-[13px] leading-[16px] font-[roboto] border-b border-brown uppercase text-[#8d8d8da1] font-bold">
                View Project
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:px-20">
        <img
          src="images/blog-2.jpg"
          alt="/"
          className="object-cover md:h-[600px] md:w-screen"
        />
      </div>
      <div>
        {isDarkMode ? (
          <div className="opacity-[0.15] flex justify-center py-32">
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
    </div>
  );
};

export default Projects;
