import { useContext } from "react";
import { ThemeContext } from "../../../context/theme";

export default function VisionAndQualities() {
    const { theme, isDarkMode } = useContext(ThemeContext);

    return (
        <div>
            <div className="mt-20">
                <h2
                    className={`text-${theme.text} pb-10 text-xl font-bold uppercase md:text-3xl`}
                >
                    What I{" "}
                    <span
                        className={`${isDarkMode ? "text-[#8d8d8dee]" : "text-[#00000080]"}`}
                    >
                        work with
                    </span>
                </h2>
                <div className="flex flex-col self-end max-w-xl">
                    <p
                        className={`${isDarkMode ? "text-[#8d8d8dee]" : "text-[#00000080]"} text-lg`}
                    >
                        I pick tools based on what the problem needs. These are
                        the ones I reach for most.
                    </p>
                </div>
            </div>
            <div className="mt-20">
                <ul className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
                    {qualities.map((quality) => {
                        const { title, description } = quality;
                        return (
                            <li key={title} className="overflow-hidden">
                                <div
                                    className={`text-${theme.text} ${
                                        isDarkMode
                                            ? "bg-[#000000]"
                                            : "bg-[#ece5e5]"
                                    } py-5 px-10 m-4 relative overflow-hidden transition-all duration-500 ease-in-out h-[380px]`}
                                >
                                    <h3
                                        className={`capitalize text-lg py-10 relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:bg-brown after:w-[10%] after:h-[1px] mb-3`}
                                    >
                                        {title}
                                    </h3>
                                    <p
                                        className={`py-3 leading-[1.5] pr-[15px] ${
                                            isDarkMode
                                                ? "text-[#8d8d8dee]"
                                                : "text-[#000000da]"
                                        }`}
                                    >
                                        {description}
                                    </p>
                                    <div className="rounded-full bg-[#484848]/50 w-[54px] h-[54px] absolute right-3 bottom-6"></div>
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
        title: "Next.js & React",
        description:
            "My default for frontend and full-stack work. Server components, API routes, edge rendering — I know where each tradeoff lands and pick accordingly.",
    },
    {
        title: "TypeScript, tRPC & Drizzle",
        description:
            "End-to-end type safety from database to client. Drizzle for schema-first SQL, tRPC to keep the API layer honest. Less runtime guessing, more confidence at the seams.",
    },
    {
        title: "Cloudflare Stack",
        description:
            "Workers, Pages, D1, R2, Queues, and Durable Objects. I build at the edge when latency matters and use D1 and R2 to keep infrastructure costs tight.",
    },
    {
        title: "Node.js, Express & Postgres",
        description:
            "Production API backends, webhook handlers, background workers. Postgres with proper indexing and ClickHouse for analytics workloads that need real query speed.",
    },
    {
        title: "AI Integration",
        description:
            "Practical AI integration — LLM APIs, vector search, embeddings, prompt pipelines. I care about what the output actually does for the user, not the model name on the tin.",
    },
    {
        title: "Systems Thinking",
        description:
            "An accounting degree taught me to ask what things cost before building them. I apply that same logic to architecture, feature scope, and what to cut.",
    },
];
