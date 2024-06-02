import { FC } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { projects } from "../data/project";
interface ProjectsProps {
  name: string;
  coverImg: string;
  githubLink?: string;
  liveLink?: string;
  desc: string;
}

const Project: FC<ProjectsProps> = (project) => {
  return (
    <div
      key={project.name}
      className="flex flex-col gap-4 rounded-[0.875rem] dark:text-white shadow-[6px_6px_0px_1px_#000000a6] dark:shadow-[6px_6px_0px_1px_#ffffffa6] bg-neutral-100 dark:bg-black border-white transition-colors duration-150 border p-2 md:p-3 max-w-sm"
    >
      <div className="flex justify-center items-center h-[400px] w-[350px] bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={project.coverImg}
          alt={project.coverImg}
          className="h-full w-full aspect-auto object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 px-4 py-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-medium text-xl underline inline-flex gap-1 items-center tracking-tighter text-[clamp(.875rem,5vw,1.125rem)] leading-none ">
            {project.name}
          </h2>
          <div className="flex justify-between items-center gap-4 text-sm">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank">
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank">
                <FaGlobe className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-[clamp(.75rem,1.5vw,.875rem)] line-clamp-2 max-w-xs">
          {project.desc}
        </p>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <>
      <section id="projects" className="dark:text-white py-32">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold dark:text-white text-center p-10">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-10 container mx-auto">
          {projects.map((project: ProjectsProps) => (
            <Project {...project} key={project.name} />
          ))}
        </div>
      </section>
    </>
  );
};
