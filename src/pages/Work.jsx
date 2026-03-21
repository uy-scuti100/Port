import { ProjectCard } from "../components/HomeComponents/Overview";
import { workLinks } from "../constants/WorkLinks";

const Work = () => {
    return (
        <div className=" mt-20 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
            {workLinks.map((item) => (
                <ProjectCard
                    key={item.name}
                    name={item.name}
                    link={item.link}
                    concept={item.concept}
                    image={item.image}
                />
            ))}
        </div>
    );
};

export default Work;
