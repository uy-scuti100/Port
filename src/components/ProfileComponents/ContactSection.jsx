import { useContext } from "react";
import { ThemeContext } from "../../../context/theme";
import PrimaryBtn from "../../components/buttons/primary-btn";
import SecondaryBtn from "../../components/buttons/secondary-btn";

export default function ContactSection() {
	const { theme, isDarkMode } = useContext(ThemeContext);
	return (
		<div
			className={`overflow-hidden px-6 py-10 mt-20 relative text-${
				theme.text
			} ${isDarkMode ? "bg-[#000000]" : "bg-[#ece5e5]"}
            `}
		>
			<div className="w-full grid-cols-2 gap-5 md:grid ">
				<div className="pb-10 md:pb-0">
					<div className="inline-block col-span-1 px-3 py-px text-sm tracking-widest rounded-full z-[50] font-extralight bg-brown">
						Get in touch
					</div>
				</div>
				<div className="col-span-2">
					<div>
						<div className="flex flex-col gap-5">
							<h2
								className={`text-${theme.text} pb-5 text-xl font-bold uppercase md:text-3xl leading-[1.5]`}
							>
								<span
									className={`${
										isDarkMode ? "text-[#8d8d8dee]" : "text-[#00000080]"
									}`}
								>
									{" "}
									Got an Idea? <br />
								</span>{" "}
								Let's bring it to life together!
							</h2>
						</div>
					</div>
				</div>
			</div>

			<p
				className={`leading-[1.5] ${
					isDarkMode ? "text-[#8d8d8dee]" : "text-[#000000da]"
				} `}
			>
				Don’t hold back your creativity—let’s build a professional web
				experience that sets you apart from the competition.
			</p>

			<div className="py-10">
				<SecondaryBtn children="Get in touch" href={"/contact"} />
			</div>
			<div className="rounded-full bg-[#484848]/20 w-[54px] h-[54px] absolute -right-5 -bottom-5"></div>
			<div className="rounded-full bg-[#484848]/20 w-[192px] h-[192px] absolute left-[-80px] -top-[50px] "></div>
		</div>
	);
}

("Got an idea? Let's bring it to life together! Don’t hold back your creativity—let’s build a professional web experience that sets you apart from the competition.");
