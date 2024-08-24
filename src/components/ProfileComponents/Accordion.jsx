import { useContext, useState } from "react";
import { ThemeContext } from "../../../context/theme";
import { Plus } from "lucide-react";

export default function CustomAccordion() {
	const [open, setOpen] = useState(false);
	const [openIndex, setOpenIndex] = useState(null);

	const { theme, isDarkMode } = useContext(ThemeContext);

	return (
		<div className="mt-20">
			<div className="w-full grid-cols-3 gap-5 md:grid">
				<div className="pb-20 md:pb-0">
					<div className="inline-block col-span-1 px-3 py-px text-sm tracking-widest rounded-full font-extralight bg-brown">
						How it works
					</div>
				</div>
				<div className="col-span-2">
					<div>
						<div className="flex flex-col gap-5 pt-5 border-t border-ash/50">
							{processes.map((process, index) => {
								const { title, description } = process;

								return (
									<figure
										key={index}
										className={`transition-all duration-500 border-b border-ash/50 ${
											openIndex === index ? "max-h-[500px]" : "max-h-[50px]"
										} overflow-hidden`}
										style={{
											transition:
												"max-height 0.6s cubic-bezier(0.65, 0, 0.35, 1)",
										}}
									>
										<figcaption>
											<div
												className="flex items-center justify-between pb-5 cursor-pointer "
												onClick={() =>
													setOpenIndex(openIndex === index ? null : index)
												}
											>
												<h4
													className={`text-${theme.text} text-lg font-semibold whitespace-nowrap`}
												>
													{title}
												</h4>
												<span>
													<Plus
														size={24}
														className={`text-brown ${
															openIndex === index && "rotate-45"
														} transition-all duration-500`}
														style={{
															transition:
																"transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)",
														}}
													/>
												</span>
											</div>
											<p
												className={`${
													isDarkMode ? "text-[#8d8d8dee]" : "text-[#4A4B65]"
												} pb-5 text-lg`}
											>
												{description}
											</p>
										</figcaption>
									</figure>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const processes = [
	{
		title: "Discovery and strategy",
		description:
			"I start by getting to know you and your business inside out. Understanding your goals, audience, and vision is essential before we begin designing your website.",
	},
	{
		title: "Design and development",
		description:
			"Like an artist creating a masterpiece, I begin with a blank slate, carefully choosing branding elements and layering details until the design perfectly reflects your vision.",
	},
	{
		title: "Testing and quality assurance",
		description:
			"I meticulously test every aspect of your website, identifying and fixing any issues to ensure a flawless user experience. Quality is my top priority.",
	},
	{
		title: "Launch and optimisation",
		description:
			"Launching your website is just the beginning. I keep it updated and optimized, ensuring it remains fresh and engaging for your audience.",
	},
	{
		title: "Ongoing support",
		description:
			"My commitment doesn't end at launch. I offer ongoing support, making sure your website stays current and continues to perform at its best.",
	},
];

// const processes = [
// 	{
// 		title: "Discovery and strategy",
// 		description:
// 			"I don't just dive headfirst into designing websites. I like to get to know my clients first. I'll ask you all sorts of questions about your business goals, target audience, and what you had for breakfast this morning. Just kidding about the breakfast part, but you get the idea.",
// 	},
// 	{
// 		title: "Design  and development",
// 		description:
// 			"I am like an artist painting a masterpiece. I start with a blank canvas (website design), carefully selecting the colours (branding elements), and layer on the details (UI/UX features) until I've created a work of art (website) that captures your vision and tells your story.",
// 	},
// 	{
// 		title: "Testing and quality assurance",
// 		description:
// 			"I am like those super picky judges on cooking shows who take a bite of your dish and examine every flavour. I'll test your website for bugs, glitches, and any other issues that might ruin the user experience. I take quality assurance seriously so that your website can be the best it can be.",
// 	},
// 	{
// 		title: "Launch and optimisation",
// 		description:
// 			"Launch day is like a grand opening for a new store. I've put in a lot of hard work to get to this point, and I am excited to show off what I've created. But just like a store, I know that I need to keep things fresh and up to date. I'll continue to optimise and refine your website when you need so it stays relevant and engaging for your audience.",
// 	},
// 	{
// 		title: "Ongoing support",
// 		description:
// 			"Our relationship doesn't end when the website launches. I am like the friend who always has your back. I'll provide ongoing support when you need and I'll make sure that your website stays up to date and looking its best. You can count on me to be there for you whenever you need.",
// 	},
// ];
