"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ExtendedProjectProps extends ProjectProps {
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  available,
  i,
  progress,
  range,
  targetScale,
}: ExtendedProjectProps) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  const isEven = id % 2 === 0;

  return (
    <div id={`project-${id}`} ref={container} className="h-screen flex w-full items-start justify-center pt-[10vh] sticky top-0">
      <motion.div
        style={{
          scale,
          top: `calc(${i * 40}px)`,
        }}
        className={`relative flex flex-col w-full overflow-hidden rounded-t-[2rem] rounded-b-[2rem] bg-[#161822] border-t border-x border-[#ffffff10] origin-top shadow-[0_-10px_30px_rgba(0,0,0,0.8)]`}
      >
        {/* Sleek Tab Header perfectly matching the reference */}
        <a 
          href={`#project-${id}`}
          className="h-[40px] w-full flex items-center justify-center bg-[#1B1D28] hover:bg-[#202330] transition-colors z-30 cursor-pointer border-b border-[#0E1016]/50"
          onClick={(e) => {
             e.preventDefault();
             document.getElementById(`project-${id}`)?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[#8e8e93] font-bold tracking-[0.25em] uppercase text-[10px] sm:text-[11px]">
            {name}
          </span>
        </a>

        {/* Content Section */}
        <div className={`relative flex flex-col lg:flex-row ${
          isEven ? "lg:flex-row-reverse" : ""
        } h-[750px] lg:h-[650px] w-full p-6 sm:p-10 lg:p-12 items-center justify-between`}
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff03] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          {/* Text Content */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center gap-6 z-20 h-full overflow-y-auto pr-2 no-scrollbar" style={{ scrollbarWidth: "none" }}>
            <style jsx>{`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div>
              <AnimatedTitle
                text={name}
                className={
                  "text-[32px] font-bold leading-tight text-[#e4ded7] md:text-[40px] lg:text-[48px]"
                }
                wordSpace={"mr-[0.2em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={description}
                className={"mt-4 text-[16px] leading-relaxed font-medium text-[#95979D] max-w-md"}
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 text-[12px] md:text-[13px] font-semibold tracking-wide text-[#d1d1d6] bg-[#222532] border border-[#ffffff15] rounded-full hover:bg-[#2A2D3D] transition-all cursor-default shadow-sm backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-4 pb-10 lg:pb-0">
              {available ? (
                <>
                  <Link
                    href={github}
                    target="_blank"
                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#1A1C29] border border-[#ffffff15] text-[#e4ded7] hover:bg-white hover:text-black transition-all duration-300 overflow-hidden shadow-lg shrink-0"
                    aria-label="Open GitHub Repository"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                  <Link
                    href={demo}
                    target="_blank"
                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#1A1C29] border border-[#ffffff15] text-[#e4ded7] hover:bg-white hover:text-black transition-all duration-300 overflow-hidden shadow-lg shrink-0"
                    aria-label="Open Live Demo"
                  >
                    <FontAwesomeIcon icon={faLink} className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                </>
              ) : (
                <div className="flex items-center gap-4">
                  <Link
                    href={github}
                    target="_blank"
                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#1A1C29] border border-[#ffffff15] text-[#e4ded7] hover:bg-white hover:text-black transition-all duration-300 shadow-lg shrink-0"
                    aria-label="Open GitHub Repository"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                  <span className="px-5 py-2.5 rounded-full bg-[#1A1C29]/50 border border-[#ffffff15] text-sm font-medium text-white/40 cursor-not-allowed shadow-inner backdrop-blur-sm">
                    Coming soon
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-[50%] h-[300px] lg:h-[80%] relative rounded-2xl overflow-hidden group mt-2 lg:mt-0 shadow-2xl shrink-0">
            {/* Decorative container background */}
            <div className="absolute inset-0 bg-[#0E1016] rounded-2xl border border-white/5"></div>
            
            <motion.div 
              className="w-full h-full relative" 
              whileHover={{ scale: 1.05 }} 
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover object-top rounded-2xl border border-white/5"
                priority={i < 2}
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141D] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;

