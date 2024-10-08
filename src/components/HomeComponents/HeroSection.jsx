import { ImInstagram } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/theme";

const HeroSection = () => {
	const { theme, isDarkMode } = useContext(ThemeContext);

	return (
		<div>
			<div
				className={`text-${theme.text} pt-[80px] pb-[40px] px-[20px] md:px-[100px] md:py-[80px]`}
			>
				{" "}
				<SectionList isDarkMode={isDarkMode} />
			</div>
			<div
				className={`${
					isDarkMode ? "text-[#8d8d8dee]" : "text-[#4A4B65]"
				} flex items-center text-[24px] space-x-4
        md:space-x-8 md:before:w-[150px] before:w-[80px] before:h-[2px] before:bg-brown
        before:mr-4 px-[20px] md:text-[36px] pb-10`}
			>
				<p>
					<Link target="_blank" to="https://www.instagram.com/uy___scuti">
						<ImInstagram className="text-[#8d8d8dee]" />
					</Link>
				</p>
				<p>
					<Link target="_blank" to="https://twitter.com/Hussain_Joe">
						<FaTwitter className="text-[#8d8d8dee]" />
					</Link>
				</p>
				<p>
					<Link target="_blank" to="https://github.com/uy-scuti100">
						<FiGithub className="text-[#8d8d8dee]" />
					</Link>
				</p>

				<p>
					<Link
						target="_blank"
						to="https://www.linkedin.com/in/yusuf-hussain-276ab6251/"
					>
						<TiSocialLinkedin className="text-[#8d8d8dee]" />
					</Link>
				</p>
			</div>
		</div>
	);
};

export default HeroSection;

// freelance web designer & webflow developer
const sections = [
	{
		title: "Freelance web ,",
		overlayClass: "overlay-2",
	},
	{
		title: "Designer and  Web,",
		overlayClass: "overlay-3",
	},
	{
		title: "Developer.",
		overlayClass: "overlay-2",
	},
];
const SectionList = ({ isDarkMode }) => {
	return (
		<>
			{/* {sections.map((section, index) => ( */}
			<div className="pb-2 div">
				<h1
					className={`${
						isDarkMode ? "darkshadow" : "lightshadow"
					} word capitalize font-black relative`}
				>
					{/* freelance web designer & web developer */}
					Freelance web designer specializing in both code and no-code
					solutions.
				</h1>
				{/* <p className={`bg-${theme.load} ${section.overlayClass}`}></p> */}
			</div>
			{/* ))} */}
		</>
	);
};
