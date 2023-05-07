import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";

const Profile = () => {
  const { theme, isDarkMode } = useContext(ThemeContext);
  return (
    <div>
      {" "}
      <div
        className={`text-${theme.text} py-[30px] px-[20px] md:px-[100px] md:py-[50px]`}
      >
        <h1 className="about-title leading-[2] py-2">Hello, I'm Hussain!</h1>
        <h1 className="about-title leading-[3] py-2">
          {" "}
          Web & Mobile Developer.
        </h1>
      </div>
      <div className="flex justify-center flex-col md:flex-row gap-5 px-10 ">
        <div className="md:basis-1/2 md:w-[400px] md:h-[400px] w-[450px] h-[450px] relative self-start">
          <div className="relative ">
            <img
              src="images/profile.JPG"
              alt="profile image"
              className=" md:w-[400px] md:h-[400px] max-w-[450px] max-h-[450px] object-cover"
            />
          </div>
          <div className=" md:w-[400px] md:h-[400px] w-[385px] h-[450px] bg-[#33333327] absolute top-0 left-0 right-0 bottom-0"></div>
          <div
            className={`${
              isDarkMode ? "border-brown" : "border-black"
            } absolute top-[20px] -left-4 md:py-[200px] md:px-[200px] py-[220px] px-[190px] border-2`}
          ></div>
        </div>
        <div className=" md:basis-1/2 pt-10">
          <h1
            className={`text-[29px] font-[roboto] font-bold text-${theme.text} hidden md:block uppercase tracking-[2px]`}
          >
            Design. Code. Music. Art. <br /> Adventures. Documentaries.
          </h1>
          <h1
            className={`text-[29px] font-[roboto] font-bold text-${theme.text} md:hidden  uppercase tracking-[2px]`}
          >
            Design. Code. Music. Art. Adventures. Documentaries.
          </h1>
          <div
            className={`${
              isDarkMode ? "text-[#8d8d8da1]" : "text-[#00000080]"
            } pt-10 leading-[2] tracking-tightest`}
          >
            As a website creator, my mission is to evoke feelings of joy and
            comfort in every user who visits the websites I build. I'm
            passionate about crafting stunning interfaces that not only catch
            the eye, but also provide a seamless user experience. My technical
            expertise is equally impressive, as I leverage an arsenal of
            cutting-edge tools to bring my vision to life. <br /> <br /> My
            current tech stack includes a winning combination of HTML,
            TailwindCSS, Scss, ReactJs, Nextjs, JavaScript, Nodejs, and Firebase
            for backend operations. This diverse suite of tools affords me the
            flexibility and creative control necessary to build truly bespoke
            websites. <br />
            <br /> For me, the development process is more than just a means to
            an end. It's a continuous opportunity to hone my skills, stay ahead
            of the curve with the latest technologies, and push my creativity to
            the limit. By embracing this philosophy, I'm constantly seeking out
            ways to innovate and challenge myself, all while creating beautiful
            and intuitive websites that users can't resist returning to.
          </div>
        </div>
      </div>
      <div className="p-[20px] md:p-[100px] mt-[100px] ">
        <h1
          className={`proj-title text-${theme.text} break-words tracking-widest-[-1px] leading-[1.26] font-black md:text-left text-center md:pb-[200px] pb-[100px]`}
        >
          Working Experience
        </h1>
        <div className="flex flex-col gap-8 pb-20">
          <h2 className={`text-${theme.text} text-[25px] font-bold `}>
            Bank Hotel
          </h2>
          <small
            className={`${
              isDarkMode ? "text-ash" : "text-black"
            } font-[roboto]`}
          >
            2022-2023
          </small>
          <h1
            className={`text-${theme.text} text-[32px] font-bold font-[roboto] `}
          >
            {" "}
            Developer
          </h1>
          <Link
            to="https://hotel-flame-pi.vercel.app/"
            className="text-brown font-[roboto]"
          >
            https://hotel-flame-pi.vercel.app/
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
