import { useContext } from "react";
import { ThemeContext } from "../../../context/theme";
import { Link } from "react-router-dom";

export default function VisionAndQualities() {
	const { theme, isDarkMode } = useContext(ThemeContext);

	return (
		<div>
			{" "}
			<div className="mt-20">
				<h2
					className={`text-${theme.text} pb-10 text-xl font-bold uppercase md:text-3xl`}
				>
					Building with Clear{" "}
					<span
						className={`${
							isDarkMode ? "text-[#8d8d8dee]" : "text-[#00000080]"
						}`}
					>
						Vision
					</span>{" "}
				</h2>
				<div className="flex flex-col self-end max-w-xl">
					<p
						className={`${
							isDarkMode ? "text-[#8d8d8dee]" : "text-[#00000080]"
						} text-lg`}
					>
						As a freelance web designer and developer, I bring a focused,
						results-driven approach to every project, using my skills to create
						custom websites tailored to your needs. I work closely with my
						clients to achieve shared goals and deliver the results they’re
						looking for. Don’t settle for an ordinary website—let’s elevate your
						online presence.
						<span className="font-extralight text-red">
							{" "}
							<Link to={"/contact"}>Reach out,</Link>
						</span>{" "}
						and let me bring your vision to life.
					</p>
				</div>
			</div>
			<div className="mt-20">
				<ul className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
					{qualities.map((quality, index) => {
						const { title, description } = quality;

						return (
							<li key={title} className="overflow-hidden">
								<div
									className={`text-${theme.text} ${
										isDarkMode ? "bg-[#000000]" : "bg-[#ece5e5]"
									}
      } py-5 px-10 m-4 relative overflow-hidden transition-all duration-500 ease-in-out  h-[380px] `}
								>
									<h3
										className={`capitalize text-lg py-10 relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:bg-brown after:w-[10%] after:h-[1px] mb-3`}
									>
										{title}
									</h3>

									<p
										className={`py-3 leading-[1.5] pr-[15px] ${
											isDarkMode ? "text-[#8d8d8dee]" : "text-[#000000da]"
										} `}
									>
										{description}
									</p>

									<div className="rounded-full bg-[#484848]/50 w-[54px] h-[54px] absolute  right-3 bottom-6 "></div>
									<div className="rounded-full bg-[#484848]/50 w-[192px] h-[192px] absolute right-[-120px] bottom-[-100px]"></div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

const qualities = [
	{
		title: "Innovative Design",
		description:
			"I use creative thinking to set your brand apart and stand out in a competitive market.",
	},
	{
		title: "Meticulous Attention",
		description:
			"I ensure every detail is carefully considered, as each element is crucial to the overall success.",
	},
	{
		title: "Tailored Solutions",
		description:
			"I customize my approach to fit each client's unique needs and aspirations, recognizing the individuality of every project.",
	},
	{
		title: "Punctual Delivery",
		description:
			"I adhere to deadlines with precision, ensuring that projects are completed on schedule and within budget.",
	},
	{
		title: "Excellence in Performance",
		description:
			"I focus on optimizing your website’s functionality, making sure it operates smoothly and efficiently.",
	},
	{
		title: "Team-Oriented Approach",
		description:
			"I prioritize working closely with you to align on goals and achieve a unified vision for the project.",
	},
];
