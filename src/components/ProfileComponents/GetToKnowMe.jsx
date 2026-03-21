import PrimaryBtn from "../buttons/primary-btn";
import SecondaryBtn from "../buttons/secondary-btn";
import { useContext } from "react";
import { ThemeContext } from "../../../context/theme";

export default function GetToKnowMe() {
    const { theme, isDarkMode } = useContext(ThemeContext);

    return (
        <div>
            <div className="justify-center gap-5 px-5 pb-10 mt-20 border-b md:flex md:flex-row border-ash/50">
                <div className="md:basis-1/2 md:w-[400px] md:h-[400px] w-[450px] h-[450px] relative self-start">
                    <div className="relative">
                        <img
                            src="images/profile.jfif"
                            alt="profile image"
                            className="md:w-[400px] md:h-[400px] max-w-[450px] max-h-[450px] object-cover"
                        />
                    </div>
                    <div className="md:w-[400px] md:h-[400px] w-[385px] h-[450px] bg-[#33333327] absolute top-0 left-0 right-0 bottom-0"></div>
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
                        Studied accounting. Taught myself to code. Been building
                        ever since.
                    </h1>
                </div>
            </div>
            <div className="grid-cols-8 gap-10 mt-20 md:grid">
                <div className="col-span-2"></div>
                <div
                    className={`${
                        isDarkMode ? "text-[#8d8d8dee]" : "text-[#4A4B65]"
                    } flex flex-col gap-5 col-span-3 pb-5 md:pb-0`}
                >
                    <p className="text-lg">
                        I graduated with an accounting degree and started
                        learning to code the same day. Not by accident — I
                        wanted to build things without asking for permission.
                        Accounting showed me how businesses actually work. Code
                        gave me the ability to build one from scratch.
                    </p>
                    <p className="text-lg">
                        I&apos;ve worked on production systems across the full
                        stack — video pipelines, async job queues, API backends,
                        and user-facing products. I also came first with my team
                        at a Web5 hackathon, where we built a hospital app using
                        decentralised identity: users sign in with DIDs and
                        their data lives on the blockchain, not on a server any
                        organisation can sell.
                    </p>
                </div>
                <div
                    className={`${
                        isDarkMode ? "text-[#8d8d8dee]" : "text-[#4A4B65]"
                    } flex flex-col gap-5 col-span-3`}
                >
                    <p className="text-lg">
                        Alongside contracted work I build and ship my own
                        products. VybeSec, Furl, Orderground, and Chat Manager
                        are all live. Each one started with the same question:
                        does the unit economics work before I write the first
                        function?
                    </p>
                    <p className="text-lg">
                        The accounting background is not a footnote. It shapes
                        what I decide to build, how I scope it, and when to
                        stop.
                    </p>
                    <div className="flex items-center justify-end w-full gap-3 mt-5 md:flex-row">
                        <PrimaryBtn children="Get in touch" href={"/contact"} />
                        <SecondaryBtn children="My work" href={"/work"} />
                    </div>
                </div>
            </div>
        </div>
    );
}
