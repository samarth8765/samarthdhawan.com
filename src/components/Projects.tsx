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
      className="flex flex-col gap-4 rounded-lg dark:text-white shadow-lg dark:shadow-md bg-neutral-100 dark:bg-black border-white transition-colors duration-150 border p-4 md:p-6 h-full max-w-md mx-auto"
    >
      <div className="flex justify-center items-center bg-gray-200 rounded overflow-hidden aspect-square">
        <img
          src={project.coverImg}
          alt={`Cover image for ${project.name}`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 p-2 flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-medium text-lg underline inline-flex gap-1 items-center tracking-tighter text-[clamp(1rem,2.5vw,1.25rem)]">
            {project.name}
          </h2>
          <div className="flex justify-between items-center gap-4 text-sm">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500"
              >
                <FaGlobe className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm line-clamp-3 flex-grow">{project.desc}</p>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="dark:text-white py-32">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold dark:text-white text-center p-10">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 container mx-auto px-4">
        {projects.map((project: ProjectsProps) => (
          <Project {...project} key={project.name} />
        ))}
      </div>
    </section>
  );
};
