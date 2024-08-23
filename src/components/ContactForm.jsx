import { useContext } from "react";
import { ThemeContext } from "../../context/theme";

import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactForm = () => {
	const { theme, isDarkMode } = useContext(ThemeContext);
	return (
		<div>
			<div
				className={`text-${theme.text} py-[30px] px-[20px] md:px-[100px] md:py-[20px] flex flex-col gap-5 items-center justify-center`}
			>
				<h1 className="about-title py-2 text-center leading-[180%]">
					{/* Elevating Your Online Presence */}
					Scale your business and 10X your revenue
				</h1>
			</div>
			<p
				className={`${
					isDarkMode ? "text-[#8d8d8dee]" : "text-[#000000]"
				} font-[poppins] p-[20px] md:p-[50px] leading-[1.8] text-center md:text-[28px]`}
			>
				Committed to solving your web challenges and driving growth. Let's work
				together to achieve your digital goals.
			</p>
			<p
				className={`${
					isDarkMode ? "text-[#8d8d8dee]" : "text-[#000000]"
				} font-[poppins] p-[20px] md:p-[50px] leading-[1.8] text-center md:text-[28px]`}
			>
				Just write us a message!
			</p>

			{/* contact-card */}
			<div className="px-5">
				<div
					className={`${
						isDarkMode ? "bg-[#ccc]" : "bg-black"
					} rounded-[5px] relative overflow-hidden flex flex-col items-center max-w-[600px] mx-auto `}
				>
					<div className="w-full">
						<form className="flex flex-col items-center justify-center w-full gap-5 p-5">
							<div className="flex flex-col w-full gap-2 md:pb-8">
								<label
									htmlFor="lastName"
									className={`${
										isDarkMode ? "text-black" : "text-white"
									} font-[inter] `}
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className={`bg-transparent border-b outline-none ${
										isDarkMode
											? "border-black text-black"
											: "border-white text-white"
									} w-full`}
								/>
							</div>
							<div className="flex flex-col w-full gap-2 md:pb-8">
								<label
									htmlFor="email"
									className={`${
										isDarkMode ? "text-black" : "text-white"
									} font-[inter]`}
								>
									{" "}
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className={`bg-transparent border-b outline-none ${
										isDarkMode
											? "border-black text-black"
											: "border-white text-white"
									}  w-full`}
								/>
							</div>

							<div className="flex flex-col w-full gap-2 md:pb-8">
								<label
									className={`${
										isDarkMode ? "text-black" : "text-white"
									} font-[inter]`}
								>
									Message
								</label>

								<textarea
									type="text"
									className={`resize-none min-h-[50px] md:min-h-[100px] bg-transparent border-b outline-none ${
										isDarkMode
											? "border-black text-black"
											: "border-white text-white"
									} w-full `}
								/>
								<div className="mt-6">
									<Link>
										<button
											className={`text-black uppercase bg-brown px-6 leading-[1] font-normal text-[16px] py-5 w-full`}
										>
											{" "}
											Submit
										</button>
									</Link>
								</div>
							</div>
						</form>
					</div>
					<div className="flex gap-8 p-5 pt-20">
						<Link to="https://twitter.com/Hussain_Joe">
							{" "}
							<div>
								<AiFillTwitterCircle
									color={!isDarkMode && "#C0A062"}
									size={24}
								/>
							</div>{" "}
						</Link>
						<Link to="https://github.com/uy-scuti100">
							<div>
								<AiFillGithub color={!isDarkMode && "#C0A062"} size={24} />
							</div>
						</Link>
						<Link to="https://www.linkedin.com/in/yusuf-hussain-276ab6251/">
							<div>
								<FaLinkedinIn color={!isDarkMode && "#C0A062"} size={24} />
							</div>
						</Link>
					</div>
					<div className="absolute bottom-[100px] right-[80px]">
						<div className="relative">
							<div className="rounded-full bg-[#484848]/50 w-[54px] h-[54px] absolute "></div>
							<div className="rounded-full bg-[#484848]/50 w-[192px] h-[192px] absolute"></div>
						</div>
					</div>
				</div>
			</div>
			{/* form */}
		</div>
	);
};

export default ContactForm;
