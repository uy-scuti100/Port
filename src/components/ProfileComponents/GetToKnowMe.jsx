import PrimaryBtn from "../buttons/primary-btn";
import SecondaryBtn from "../buttons/secondary-btn";
import { useContext } from "react";
import { ThemeContext } from "../../../context/theme";
import { Link } from "react-router-dom";

export default function GetToKnowMe() {
	const { theme, isDarkMode } = useContext(ThemeContext);

	return (
		<div>
			{" "}
			<div className="justify-center gap-5 px-5 pb-10 mt-20 border-b md:flex md:flex-row border-ash/50 ">
				<div className="md:basis-1/2 md:w-[400px] md:h-[400px] w-[450px] h-[450px] relative self-start">
					<div className="relative ">
						<img
							src="images/profile.jfif"
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
				<div className="pt-10 md:basis-1/2">
					<h1
						className={`md:text-[29px] text-lg font-bold text-${theme.text} uppercase text-right`}
					>
						A freelance web designer and developer focused on enabling
						innovative businesses to realize their growth potential.
					</h1>
				</div>
			</div>
			<div className="grid-cols-8 gap-10 mt-20 md:grid">
				<div className="col-span-2"></div>
				<div
					className={`${
						isDarkMode ? "text-[#8d8d8dee]" : "text-[#4A4B65]"
					} flex flex-col gap-5 col-span-3 pb-5 md:pb-0 `}
				>
					<p className="text-lg">
						I'm not just about crafting visually striking websites—I'm focused
						on creating digital experiences that make a lasting impression. As a
						young digital designer, I take my work seriously but believe it
						should also be enjoyable. That's why I bring a touch of humor to
						every project.
					</p>
					<p className="text-lg">
						I believe creativity and a sense of fun go hand in hand, helping me
						push boundaries and deliver exceptional designs. I also understand
						that every business is unique, so every website I design is tailored
						to reflect that individuality.
					</p>
				</div>
				<div
					className={`${
						isDarkMode ? "text-[#8d8d8dee]" : "text-[#4A4B65]"
					} flex flex-col gap-5 col-span-3 `}
				>
					<p className="text-lg">
						That’s why I take a personalized approach to every project. I take
						the time to understand your brand's personality and your business's
						unique needs before creating a design that aligns with your vision.
						Whether you're a startup or an established company, I'll build a
						website that captures your brand’s essence and helps you stand out
						in a crowded digital space.
					</p>
					<p className="text-lg">
						If you’re looking for a web designer who takes your business
						seriously while keeping the process enjoyable, I’m here to help.
						<span className="font-extralight text-red">
							{" "}
							<Link to={"https://cal.com/hussain-yusuf/discovery-call"}>
								Book a free strategy call,
							</Link>
						</span>{" "}
						and let's talk about your business!"
					</p>

					<div className="flex items-center justify-end w-full gap-3 mt-5 md:flex-row">
						<PrimaryBtn children="Lets Talk" href={"/contact"} />
						<SecondaryBtn children="Services" href={"/work"} />
					</div>
				</div>
			</div>
		</div>
	);
}
