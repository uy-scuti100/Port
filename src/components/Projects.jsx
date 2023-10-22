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
            Concept: Nexus
          </h1>
          <div>
            <div
              className={`${
                isDarkMode ? "text-[#8d8d8da1]" : "text-[#00000080]"
              }
              } flex items-center text-[10px] md:text-[14px] space-x-4 md:space-x-8 md:before:w-[150px] md:before:h-[2px] md:before:bg-brown md:before:mr-4 md:px-[20px] px-[10px] py-10 uppercase leading-normal font-normal font-sans `}
            >
              <p> Y. 2023</p>
              <p> C. Nexus</p>
              <p>T. Side Project</p>
  
            </div>
          </div>
       
         
            <h1  className={`
                text-${theme.text} pb-10 text-lg font-bold`}>Real-Time Social Platform</h1>
          <div className="md:p-10">
            <div
              className={`${
                isDarkMode ? "text-[#8d8d8da1]" : "text-[#4A4B65]"
              } md:text-[18px] font-[300]`}
            >
            <ul className="flex flex-col gap-5">
              <li>✅ User Profiles: Update personal information, interests, and more.</li>
              <li>✅ User Profiles: Update personal information, interests, and more.</li>
              <li>✅ Content Creation: Craft, edit, and engage with posts and comments.</li>
              <li>✅ Social Connections: Follow users, topics, and bookmark posts.</li>
              <li>✅ Notifications: Receive instant updates on follows and post likes.</li>
              <li>✅ Stunning Visuals: Customize your profile with display and banner images.</li>
              <li>Explore the future of online social interaction and stay connected in real time. Try it out today! 🌐</li>
            </ul>
            

            Experience the power of real-time interactivity in my latest project. This dynamic social platform combines a wide array of features, including:
           </div>
            <Link to="https://react-nexus-nine.vercel.app/" target="_blank">
              <button className={`my-5 text-[13px] leading-[16px] font-[roboto] border-b border-brown uppercase ${ isDarkMode ? "text-[#ffffff]" : "text-[#4A4B65]"} font-bold`}>
                View Project
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:px-20">
        <img
          src="images/mobile.png"
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
