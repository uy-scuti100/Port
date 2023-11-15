import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import WorkComponent from "./WorkComponent";
import { workLinks } from "../constants/WorkLinks";

const Works = () => {
  const { theme, isDarkMode } = useContext(ThemeContext);
  return (
    <div className="max-w-[1680px] mx-auto">
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
   {/* work component */}
<div>
  {workLinks.map((work) => {
    const { name, link,intro,concept,image } = work
    return(
      <WorkComponent key={name} name={name} link={link} intro={intro} concept={concept} image={image}/>
    )
  })}
</div>
    </div>
  );
};

export default Works;
