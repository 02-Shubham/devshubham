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
import { useRef, useEffect, useState } from "react";
import * as SiIcons from "react-icons/si";
const Si: any = SiIcons;

const getIcon = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes("react")) return <Si.SiReact className="text-[#61DAFB]" />;
  if (t.includes("python")) return <Si.SiPython  />;
  if (t.includes("next.js")) return <Si.SiNextdotjs className="text-black" />;
  if (t.includes("typescript")) return <Si.SiTypescript className="text-[#3178C6]" />;
  if (t.includes("redux")) return <Si.SiRedux className="text-[#764ABC]" /> ;
  if (t.includes("html5")) return <Si.SiHtml5 className="text-[#E34F26]" />;
  if (t.includes("css3") || t.includes("css")) return <Si.SiCss className="text-[#1572B6]" />;
  if (t.includes("firebase")) return <Si.SiFirebase className="text-[#FFCA28]" />;
  if (t.includes("tailwind")) return <Si.SiTailwindcss className="text-[#06B6D4]" />;
  if (t.includes("framer")) return <Si.SiFramer className="text-black" />;
  if (t.includes("gsap")) return <Si.SiGreensock className="text-[#88CE02]" />;
  if (t.includes("node.js")) return <Si.SiNodedotjs className="text-[#339933]" />;
  if (t.includes("express")) return <Si.SiExpress className="text-black" />;
  if (t.includes("mongodb")) return <Si.SiMongodb className="text-[#47A248]" />;
  if (t.includes("git") && !t.includes("github")) return <Si.SiGit className="text-[#F05032]" />;
  if (t.includes("github")) return <Si.SiGithub className="text-black" />;
  if (t.includes("vercel")) return <Si.SiVercel className="text-black" />;
  if (t.includes("postman")) return <Si.SiPostman className="text-[#FF6C37]" />;
  if (t.includes("linux")) return <Si.SiLinux className="text-black" />;
  if (t.includes("docker") || t.includes("devops")) return <Si.SiDocker className="text-[#2496ED]" />;
  if (t.includes("prisma")) return <Si.SiPrisma className="text-black" />;
  if (t.includes("postgresql")) return <Si.SiPostgresql className="text-[#336791]" />;
  if (t.includes("supabase")) return <Si.SiSupabase className="text-[#3ECF8E]" />;
  if (t.includes("clerk")) return <Si.SiClerk className="text-[#6C47FF]" />;
  if (t.includes("zod")) return <Si.SiZod className="text-[#3068B7]" />;
  if (t.includes("trpc")) return <Si.SiTrpc className="text-[#2596BE]" />;
  if (t.includes("openai")) return <Si.SiOpenai className="text-black" />;
  return null;
};

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scale = useTransform(progress, range, [1, targetScale]);
  
  const isEven = id % 2 === 0;

  return (
    <div id={`project-${id}`} ref={container} className="h-auto sm:h-screen flex w-full items-start justify-center pt-10 sm:pt-[15vh] pb-[5vh] relative sm:sticky top-0 sm:top-[10vh] px-2 sm:px-0" style={{ zIndex: isMobile ? 1 : i + 1 }}>
      <motion.div
        style={{
          scale: isMobile ? 1 : scale,
          top: isMobile ? 0 : `calc(${i * 20}px)`, 
        }}
        className={`relative flex flex-col w-full overflow-hidden rounded-[2rem] bg-white border border-black/5 origin-top shadow-[0_40px_100px_rgba(0,0,0,0.15)]`}
      >
        {/* Content Section */}
        <div className={`relative flex flex-col lg:flex-row ${
          isEven ? "lg:flex-row-reverse" : ""
        } min-h-[500px] h-auto sm:h-[750px] lg:h-[650px] w-full px-6 sm:px-10 lg:px-12 py-3 sm:py-5 lg:py-3 items-center justify-between`}
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
              {isMobile ? (
                <h3 className="text-[32px] font-bold leading-tight text-[#000000]">
                  {name}
                </h3>
              ) : (
                <AnimatedTitle
                  text={name}
                  className={
                    "text-[32px] font-bold leading-tight text-[#000000] md:text-[40px] lg:text-[48px]"
                  }
                  wordSpace={"mr-[0.2em]"}
                  charSpace={"mr-[0.01em]"}
                />
              )}
              {isMobile ? (
                <p className="mt-4 text-[16px] leading-relaxed font-bold text-[#2d2d2d] max-w-md">
                  {description}
                </p>
              ) : (
                <AnimatedBody
                  text={description}
                  className={"mt-4 text-[16px] leading-relaxed font-semibold text-[#2d2d2d] max-w-md"}
                />
              )}
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 rounded-md border border-dashed border-black/20 bg-white/50 px-2 py-1 text-[14px] font-semibold text-black transition-all hover:bg-white cursor-default shadow-sm"
                >
                  <span className="text-lg pr-1">{getIcon(tech)}</span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-4 pb-10 lg:pb-0">
              {available ? (
                <>
                  <Link
                    href={github}
                    target="_blank"
                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#f0f0eb] border border-black/5 text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 overflow-hidden shadow-md shrink-0"
                    aria-label="Open GitHub Repository"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                  <Link
                    href={demo}
                    target="_blank"
                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#f0f0eb] border border-black/5 text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 overflow-hidden shadow-md shrink-0"
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
                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#f0f0eb] border border-black/5 text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 shadow-md shrink-0"
                    aria-label="Open GitHub Repository"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                  <span className="px-5 py-2.5 rounded-full bg-[#f0f0eb]/50 border border-black/5 text-sm font-medium text-black/40 cursor-not-allowed shadow-inner backdrop-blur-sm">
                    Coming soon
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-[50%] h-[200px] sm:h-[300px] lg:h-[80%] relative rounded-2xl overflow-hidden group mt-2 lg:mt-0 shadow-2xl shrink-0">
            {/* Decorative container background */}
            <div className="absolute inset-0 bg-[#f8f8f4] rounded-2xl border border-black/5"></div>
            
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

