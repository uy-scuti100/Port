import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";

<<<<<<< HEAD

export default function WorkComponent({name, link, intro, concept, image}){
    const { theme, isDarkMode } = useContext(ThemeContext);
    return (
        <div className="py-[50px] px-[20px] md:px-[100px] md:py-[100px] flex flex-col lg:flex-row gap-10 items-start md:flex-wrap lg:flex-nowrap">
        <div className="max-w-[650px] ">
          {/* <div className=" bg-[#262626] rounded-t-lg p-4 flex gap-1 justify-start items-center">
=======
export default function WorkComponent({ name, link, intro, concept, image }) {
	const { theme, isDarkMode } = useContext(ThemeContext);
	return (
		<div className="py-[50px] px-[20px] md:px-[100px] md:py-[100px] flex flex-col lg:flex-row gap-10 items-start md:flex-wrap lg:flex-nowrap">
			<div className="max-w-[650px] ">
				{/* <div className=" bg-[#262626] rounded-t-lg p-4 flex gap-1 justify-start items-center">
>>>>>>> 47a0d82 (new change)
            <span className="rounded-full p-1 bg-[#F35F57]" />
            <span className="rounded-full p-1 bg-[#F6BC2E]" />
            <span className="rounded-full p-1 bg-[#3CCB5A]" />
          </div> */}
<<<<<<< HEAD
          <div className="md:w-[650px] md:h-[500px] h-[350px] w-full">
            <img
              src={image}
              alt="/"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div>
          <div>
            <h1 className={`text-${theme.text} pt-10 pb-5 work-title`}>
              {name} &#8212;  {concept}
            </h1>
            <p
              className={`text-[18px] ${
                isDarkMode ? "text-[#EEEEEE]" : "text-[#000008]"
              } `}
            >
             {intro}
            </p>
            <Link to={link} target="_blank">
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
    )
}
=======
				<div className="md:w-[650px] md:h-[500px] h-[350px] w-full">
					<img src={image} alt="/" className="object-contain w-full h-full" />
				</div>
			</div>
			<div>
				<div>
					<h1 className={`text-${theme.text} pt-10 pb-5 work-title`}>
						{name} &#8212; {concept}
					</h1>
					<p
						className={`text-[18px] ${
							isDarkMode ? "text-[#EEEEEE]" : "text-[#000008]"
						} `}
					>
						{intro}
					</p>
					<Link to={link} target="_blank">
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
	);
}
>>>>>>> 47a0d82 (new change)
