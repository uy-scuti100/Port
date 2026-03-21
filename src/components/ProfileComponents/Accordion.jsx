import { useContext, useState } from "react";
import { ThemeContext } from "../../../context/theme";
import { Plus } from "lucide-react";

export default function CustomAccordion() {
    const [openIndex, setOpenIndex] = useState(null);
    const { theme, isDarkMode } = useContext(ThemeContext);

    return (
        <div className="mt-20">
            <div className="w-full grid-cols-3 gap-5 md:grid">
                <div className="pb-20 md:pb-0">
                    <div className="inline-block col-span-1 px-3 py-px text-sm tracking-widest rounded-full font-extralight bg-brown">
                        How I work
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="flex flex-col gap-5 pt-5 border-t border-ash/50">
                        {processes.map((process, index) => {
                            const { title, description } = process;
                            return (
                                <figure
                                    key={index}
                                    className={`transition-all duration-500 border-b border-ash/50 ${
                                        openIndex === index
                                            ? "max-h-[500px]"
                                            : "max-h-[50px]"
                                    } overflow-hidden`}
                                    style={{
                                        transition:
                                            "max-height 0.6s cubic-bezier(0.65, 0, 0.35, 1)",
                                    }}
                                >
                                    <figcaption>
                                        <div
                                            className="flex items-center justify-between pb-5 cursor-pointer"
                                            onClick={() =>
                                                setOpenIndex(
                                                    openIndex === index
                                                        ? null
                                                        : index,
                                                )
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
                                                        openIndex === index &&
                                                        "rotate-45"
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
                                                isDarkMode
                                                    ? "text-[#8d8d8dee]"
                                                    : "text-[#4A4B65]"
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
    );
}

const processes = [
    {
        title: "Understand the problem b4 coding",
        description:
            "I ask who specifically needs this, what they're doing without it, and whether the numbers make sense. Building the wrong thing faster is still the wrong thing.",
    },
    {
        title: "Design the system, then build it",
        description:
            "Data flow, failure modes, schema shape, migration path. Decisions made early in the architecture are expensive to undo. I'd rather think for an hour than refactor for a week.",
    },
    {
        title: "Own the full stack",
        description:
            "Frontend to database to infra. I don't hand off at the API boundary. Owning the whole thing means I can debug anywhere and make tradeoffs with full context — not just my slice.",
    },
    {
        title: "Ship small, learn fast",
        description:
            "Build the smallest version that tests whether something is real. Ship it. Watch what people actually do. Features built before real usage are usually the wrong features.",
    },
    {
        title: "Treat costs as a constraint, not an afterthought",
        description:
            "Infrastructure cost, compute cost, developer time — I track all of it. A system that works but costs twice what it earns is a problem worth solving before it scales.",
    },
];
