import { useContext } from "react";
import { ThemeContext } from "../../../context/theme";
import PrimaryBtn from "../buttons/primary-btn";
import SecondaryBtn from "../buttons/secondary-btn";

export default function InitialIntroduction() {
	const { theme, isDarkMode } = useContext(ThemeContext);
	return (
		<div>
			<div className={`text-${theme.text} leading-[250%]`}>
				<h1 className="about-title leading-[120%] uppercase">
					My{" "}
					<span
						className={`${
							isDarkMode ? "text-[#8d8d8dee]" : "text-[#00000080]"
						}`}
					>
						expertise
					</span>{" "}
					and individuality drive me to deliver{" "}
					<span
						className={`${
							isDarkMode ? "text-[#8d8d8dee]" : "text-[#00000080]"
						}`}
					>
						outstanding results
					</span>{" "}
					with steady passion and excellence.
				</h1>
			</div>
			<div
				className={`mt-10 md:justify-end flex items-center  ${
					isDarkMode ? "text-[#8d8d8dee]" : "text-[#4A4B65]"
				}`}
			>
				<div className="flex flex-col self-end max-w-xl">
					<p className="text-lg ">
						Step into a space where creativity meets strategy, and stunning
						design meets functionality. I’m passionate about crafting digital
						experiences that capture your brand’s essence and drive business
						growth.
					</p>
					<div className="flex items-center justify-end w-full gap-3 mt-5 md:flex-row">
						<PrimaryBtn children="Contact me" href={"/contact"} />

						<SecondaryBtn children="Works" href={"/work"} />
					</div>
				</div>
			</div>
		</div>
	);
}
