"use client";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { devProjects, ProjectProps } from "./projectDetails";
import AnimatedTitle from "../animations/AnimatedTitle";
import { useScroll, useMotionValueEvent } from "framer-motion";

const ProjectGrid = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let index = Math.floor(latest * devProjects.length);
    if (index >= devProjects.length) index = devProjects.length - 1;
    if (index < 0) index = 0;
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
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
      
      {/* Global Sticky Navigation Tab Header */}
      <div className="sticky top-4 z-50 w-full flex justify-center px-4 mb-10 overflow-hidden pointer-events-none">
        <div className=" mt-10 flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 bg-[#161822]/90 backdrop-blur-md border border-[#ffffff10] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-x-auto no-scrollbar pointer-events-auto max-w-full">
          <style jsx>{`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {devProjects.map((project: ProjectProps, i: number) => (
            <a
              key={project.id}
              href={`#project-${project.id}`}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 flex-shrink-0 rounded-full text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                activeIndex === i 
                  ? "bg-[#2A2D3D] text-white shadow-md border-b-[2px] border-white/20" 
                  : "bg-transparent text-[#8e8e93] hover:text-[#d1d1d6] hover:bg-[#1B1D28]"
              }`}
              onClick={(e) => {
                 e.preventDefault();
                 document.getElementById(`project-${project.id}`)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {project.name}
            </a>
          ))}
        </div>
      </div>

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
