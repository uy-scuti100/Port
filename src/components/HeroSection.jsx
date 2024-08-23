import { ImInstagram } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
	const { theme, isDarkMode } = useContext(ThemeContext);

	return (
		<div className="max-w-[1680px]">
			{/* {" animation"} */}
			<div
				className={`text-${theme.text} py-[30px] px-[20px] md:px-[100px] md:py-[50px]`}
			>
				{" "}
				<SectionList theme={theme} isDarkMode={isDarkMode} />
			</div>
			<div
				className={`${
					isDarkMode ? "text-[#8d8d8da1]" : "text-[#4A4B65]"
				} flex items-center text-[24px] space-x-4
        md:space-x-8 md:before:w-[150px] before:w-[80px] before:h-[2px] before:bg-brown
        before:mr-4 px-[20px] md:text-[36px] py-5`}
			>
				<p>
					<Link target="_blank" to="https://www.instagram.com/_uy_scuti____/">
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

// const sections = [
// 	{
// 		title: "Digital solutions,",
// 		overlayClass: "overlay-1",
// 	},
// 	{
// 		title: "creative concepts,",
// 		overlayClass: "overlay-2",
// 	},
// 	{
// 		title: "compelling copy,",
// 		overlayClass: "overlay-3",
// 	},
// 	{
// 		title: "results-driven strategies.",
// 		overlayClass: "overlay-2",
// 	},
// ];
const sections = [
	{
		title: "Web Design,",
		overlayClass: "overlay-2",
	},
	{
		title: "Development,",
		overlayClass: "overlay-3",
	},
	{
		title: "Copywriting.",
		overlayClass: "overlay-2",
	},
];
const SectionList = ({ theme, isDarkMode }) => {
	return (
		<>
			{sections.map((section, index) => (
				<div key={index} className="pb-2 div">
					<h1
						className={`${isDarkMode ? "darkshadow" : "lightshadow"} word num`}
					>
						{section.title}
					</h1>
					<p className={`bg-${theme.load} ${section.overlayClass}`}></p>
				</div>
			))}
		</>
	);
};
