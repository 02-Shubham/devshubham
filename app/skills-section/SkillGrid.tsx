import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const SkillGrid = () => {
  const skills = [
    {
      category: "Frontend",
      techs: ["JavaScript", "React", "Next.js", "TypeScript", "Redux", "HTML5", "CSS3", "Firebase"],
    },
    {
      category: "UI Libraries",
      techs: ["Tailwind CSS", "Framer Motion", "GSAP", "Aceternity UI", "Shadcn", "Material UI", "Chart.js"],
    },
    {
      category: "Backend",
      techs: ["Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful APIs", "NextAuth"],
    },
    {
      category: "Others",
      techs: ["Git", "GitHub", "Vercel", "Postman", "DevOps", "Linux"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {skills.map((skillGroup, index) => (
        <motion.div
          key={index}
          className="flex flex-col gap-4 p-6 transition-all w-full max-w-[422px] mx-auto rounded-2xl gradient-border-card"
          variants={itemVariants}
        >
          <h3 className="text-[20px] font-bold text-[#e4ded7] md:text-[24px]">
            {skillGroup.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillGroup.techs.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="rounded-md border border-dashed border-[#e4ded7]/30 bg-[#0E1016] px-3 py-1 text-[14px] font-medium text-[#e4ded7]/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillGrid;
