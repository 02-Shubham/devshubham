"use client";
import { experiences } from "./experienceDetails";
import ExperienceCard from "./ExperienceCard";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const ExperienceGrid = () => {
  return (
    <section
      id="experience"
      className="relative z-10 w-full bg-[#0E1016] py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto w-[85%] max-w-[860px]">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <AnimatedTitle
            text={"Work Experience"}
            className={
              "mb-4 text-left text-[36px] font-bold leading-tight tracking-tight text-[#e4ded7] sm:text-[42px] md:text-[52px] lg:text-[64px]"
            }
            wordSpace={"mr-[14px]"}
            charSpace={"mr-[0.001em]"}
          />
          <AnimatedBody
            text={"Places I've grown, shipped, and made impact."}
            className={"text-[16px] text-[#78716c] font-medium mt-2"}
          />
        </div>

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366f1]/40 via-[#6366f1]/20 to-transparent hidden md:block" />

          {/* Cards */}
          <div className="flex flex-col gap-6 md:pl-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.15rem] top-8 hidden md:flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#6366f1] ring-4 ring-[#6366f1]/20" />
                </div>

                <ExperienceCard experience={exp} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceGrid;
