"use client";
import { useRef, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { devProjects, ProjectProps } from "./projectDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { useScroll, useMotionValueEvent } from "framer-motion";

const ProjectGrid = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
      <div className="relative z-20 pt-10 pb-10 flex justify-center px-4">
        {isMobile ? (
          <h2 className="text-center font-extrabold uppercase leading-[0.9em] text-[#000000] text-[40px]">
            Projects
          </h2>
        ) : (
          <AnimatedWords2
            title={"Projects"}
            style={`flex flex-col items-center text-center font-extrabold uppercase leading-[0.9em] text-[#000000] sm:max-w-full sm:flex-row sm:justify-center text-[clamp(40px,10vw,80px)]`}
          />
        )}
      </div>
      
      {/* Global Sticky Navigation Tab Header */}
      <div className="sticky top-4 z-50 w-full flex justify-center px-4 mb-10 overflow-hidden pointer-events-none">
        <div className="flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 bg-white/80 backdrop-blur-md border border-black/5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-x-auto no-scrollbar pointer-events-auto max-w-full">
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
                  ? "bg-[#1a1a1a] text-white shadow-md border-b-[2px] border-black/20" 
                  : "bg-transparent text-[#666666] hover:text-[#1a1a1a] hover:bg-black/5"
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
