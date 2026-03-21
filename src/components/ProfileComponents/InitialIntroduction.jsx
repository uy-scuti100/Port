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
                    I build{" "}
                    <span
                        className={`${isDarkMode ? "text-[#8d8d8dee]" : "text-[#00000080]"}`}
                    >
                        systems that ship
                    </span>{" "}
                    and products that{" "}
                    <span
                        className={`${isDarkMode ? "text-[#8d8d8dee]" : "text-[#00000080]"}`}
                    >
                        stick around.
                    </span>
                </h1>
            </div>
            <div
                className={`mt-10 md:justify-end flex items-center ${
                    isDarkMode ? "text-[#8d8d8dee]" : "text-[#4A4B65]"
                }`}
            >
                <div className="flex flex-col self-end max-w-xl">
                    <p className="text-lg">
                        Full-stack engineer with an accounting background.
                        I&apos;ve worked on production systems across the stack
                        — and I also build and ship my own products
                        independently.
                    </p>
                    <div className="flex items-center justify-end w-full gap-3 mt-5 md:flex-row">
                        <PrimaryBtn children="Contact me" href={"/contact"} />
                        <SecondaryBtn children="Work" href={"/work"} />
                    </div>
                </div>
            </div>
        </div>
    );
}
