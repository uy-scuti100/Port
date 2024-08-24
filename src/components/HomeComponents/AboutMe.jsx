import { useContext } from "react";
import { ThemeContext } from "../../../context/theme";
import { textVariant, staggerContainer } from "../../utils/motion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutMe = () => {
	const { theme, isDarkMode } = useContext(ThemeContext);
	return (
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			className="max-w-[1680px]"
			viewport={{ once: false, amount: 0.25 }}
		>
			<motion.p
				variants={textVariant(0.2)}
				className={`${
					isDarkMode ? "text-[#8d8d8dee]" : "text-[#4A4B65]"
				} p-[20px] md:p-[100px] about font-medium leading-[2] md:hidden text-xl`}
			>
				Hello! I’m &nbsp;
				<strong className={`text-${theme.text}`}>Hussain Yusuf.</strong> I am a
				web designer & developer helping startups and established businesses
				that want to create a new and fresh online presence so they can continue
				to grow, achieve business goals and drive conversions.
			</motion.p>
			<motion.div
				variants={textVariant(0.2)}
				className={`${
					isDarkMode ? "text-[#8d8d8dee]" : "text-[#4A4B65]"
				} hidden md:block md:p-[50px] sm:text-2xl md:text-2xl about font-medium md:ml-28 max-w-5xl  `}
			>
				{/* <p className="pb-3">
					Hello! I’m &nbsp;
					<strong className={`text-${theme.text}`}>Hussain Yusuf.</strong>
					&nbsp; a web developer specializing in creating high-impact online
					experiences.{" "}
				</p>
				<p className="pb-3">
					I blend exceptional web design and development with persuasive
					copywriting to build websites that not only look stunning but also
					drive results.
				</p>
				<p>
					Let's collaborate to create a digital platform that captivates your
					audience and propels your business forward.
				</p> */}
				Hello! I’m &nbsp;
				<strong className={`text-${theme.text}`}>Hussain Yusuf.</strong> I am a
				web designer & developer helping startups and established businesses
				that want to create a new and fresh online presence so they can continue
				to grow, achieve business goals and drive conversions.
			</motion.div>
			<div
				className={`${
					isDarkMode ? "text-[#8d8d8dee]" : "text-[#4A4B65]"
				} p-[30px] md:py-[10px] md:px-[50px]
    text-[18px] about font-bold leading-[1.8] md:ml-28`}
			>
				Find out more{" "}
				<Link to="/about">
					<span className="pb-1 uppercase border-b border-brown">
						{" "}
						about me
					</span>
				</Link>
			</div>
			<div>
				{isDarkMode ? (
					<div className="flex justify-center py-10">
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
		</motion.div>
	);
};

export default AboutMe;
