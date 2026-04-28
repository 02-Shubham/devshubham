"use client";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { devProjects, ProjectProps } from "./projectDetails";
import AnimatedTitle from "../animations/AnimatedTitle";
import { useScroll } from "framer-motion";

const ProjectGrid = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative w-full">
      <AnimatedTitle
        text={"Projects"}
        className={
          "m-10  bg-[#0E1016] w-full flex justify-center text-center text-[40px] font-bold text-[#e4ded7] leading-[0.9em] tracking-tighter sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
        }
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
      />
      <div className="flex flex-col w-[90%] gap-y-10 lg:max-w-[1200px] mx-auto pb-[10vh]">
        {devProjects.map((project: ProjectProps, i: number) => {
          const targetScale = 1 - (devProjects.length - i) * 0.05;
          return (
            <ProjectCard
              id={project.id}
              key={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
              available={project.available}
              i={i}
              progress={scrollYProgress}
              range={[i * (1 / devProjects.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectGrid;
