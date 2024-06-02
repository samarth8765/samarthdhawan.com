import { JSX } from "react";
import {
  BashIcon,
  DockerIcon,
  ExpressIcon,
  GitIcon,
  JavascriptIcon,
  KafkaIcon,
  MongoIcon,
  NextIcon,
  PostgresIcon,
  ReactIcon,
  RedisIcon,
  TailwindIcon,
  TypescriptIcon,
  LinuxIcon,
  JavaIcon,
  PythonIcon,
  CIcon,
} from "../icons";

export type SkillPillProps = {
  name: string;
  icon: JSX.Element;
};

export const LANGUAGES: SkillPillProps[] = [
  {
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    name: "Typescript",
    icon: <TypescriptIcon />,
  },
  {
    name: "Bash",
    icon: <BashIcon />,
  },
  {
    name: "Java",
    icon: <JavaIcon />,
  },
  {
    name: "Python",
    icon: <PythonIcon />,
  },
  {
    name: "C/C++",
    icon: <CIcon />,
  },
];

export const FRAMEWORKS: SkillPillProps[] = [
  {
    name: "express",
    icon: <ExpressIcon />,
  },

  {
    name: "react",
    icon: <ReactIcon />,
  },
  { name: "nextjs", icon: <NextIcon /> },
  {
    name: "tailwindcss",
    icon: <TailwindIcon />,
  },
];

export const DATABASES: SkillPillProps[] = [
  {
    name: "Postgres",
    icon: <PostgresIcon />,
  },
  {
    name: "Redis",
    icon: <RedisIcon />,
  },
  {
    name: "Mongodb",
    icon: <MongoIcon />,
  },
];

export const TOOLS: SkillPillProps[] = [
  {
    name: "git",
    icon: <GitIcon />,
  },
  {
    name: "docker",
    icon: <DockerIcon />,
  },
  {
    name: "kafka",
    icon: <KafkaIcon />,
  },
  {
    name: "linux",
    icon: <LinuxIcon />,
  },
];

function SkillPill(props: SkillPillProps) {
  const { name, icon } = props;

  return (
    <div className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-tera-500/20 bg-white px-4 py-3 text-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg shadow-[6px_6px_0px_1px_#000000a6] dark:shadow-[6px_6px_0px_1px_#ffffffa6]">
      {icon}
      <span className="font-medium">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <>
      <div id="skills" className="relative -top-16"></div>
      <section className="overflow-hidden dark:text-white py-10">
        <div className="relative mx-auto max-w-7xl">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold dark:text-white text-center">
            Technical Skills
          </h2>
          <div className="mt-5">
            <p className="font-semibold text-2xl mx-auto text-center">
              Languages
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-5 text-xl dark:text-zinc-100">
              {LANGUAGES.map(({ icon, name }, i) => (
                <SkillPill icon={icon} name={name} key={i} />
              ))}
            </div>
          </div>
          <div className="mt-5">
            <p className="font-semibold text-2xl mx-auto text-center">
              Libraries and frameworks
            </p>
            <div className="mt-2 flex flex-wrap gap-5 text-xl justify-center dark:text-zinc-100">
              {FRAMEWORKS.map(({ icon, name }, index) => (
                <SkillPill icon={icon} name={name} key={index} />
              ))}
            </div>
          </div>
          <div className="mt-5">
            <p className="font-semibold text-2xl mx-auto text-center">
              Databases
            </p>
            <div className="mt-2 flex flex-wrap gap-5 justify-center dark:text-zinc-100">
              {DATABASES.map(({ icon, name }, index) => (
                <SkillPill icon={icon} name={name} key={index} />
              ))}
            </div>
          </div>
          <div className="mt-5">
            <p className="text-2xl font-semibold mx-auto text-center">
              Tools and technologies
            </p>
            <div className="mt-2 flex flex-wrap gap-5 justify-center dark:text-zinc-100">
              {TOOLS.map(({ icon, name }, index) => (
                <SkillPill icon={icon} name={name} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
