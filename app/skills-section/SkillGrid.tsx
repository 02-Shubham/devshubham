import { motion } from "framer-motion";
import { 
  SiJavascript, SiReact, SiNextdotjs, SiTypescript, SiRedux, SiHtml5, SiCss, SiFirebase,
  SiTailwindcss, SiFramer, SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub,
  SiVercel, SiPostman, SiLinux, SiGreensock, SiMui, SiChartdotjs, SiDocker
} from "react-icons/si";

const SkillGrid = () => {
  const skills = [
    {
      category: "Frontend",
      techs: [
        { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
        { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
        { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
        { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
        { name: "CSS3", icon: SiCss, color: "text-[#1572B6]" },
        { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
      ],
    },
    {
      category: "UI Libraries",
      techs: [
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
        { name: "Framer Motion", icon: SiFramer, color: "text-white" },
        { name: "GSAP", icon: SiGreensock, color: "text-[#88CE02]" },
        { name: "Material UI", icon: SiMui, color: "text-[#007FFF]" },
        { name: "Chart.js", icon: SiChartdotjs, color: "text-[#FF6384]" },
      ],
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
        { name: "Express.js", icon: SiExpress, color: "text-white" },
        { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
        { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
      ],
    },
    {
      category: "Others",
      techs: [
        { name: "Git", icon: SiGit, color: "text-[#F05032]" },
        { name: "GitHub", icon: SiGithub, color: "text-white" },
        { name: "Vercel", icon: SiVercel, color: "text-white" },
        { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
        { name: "Linux", icon: SiLinux, color: "text-white" },
        { name: "DevOps", icon: SiDocker, color: "text-[#2496ED]" },
      ],
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
          className="flex flex-col gap-4 p-6 transition-all w-full max-w-[422px] mx-auto rounded-2xl gradient-border-card bg-[#0E1016]/50 backdrop-blur-sm"
          variants={itemVariants}
        >
          <h3 className="text-[20px] font-bold text-[#e4ded7] md:text-[24px] border-b border-[#e4ded7]/10 pb-2">
            {skillGroup.category}
          </h3>
          <div className="flex flex-wrap gap-3">
            {skillGroup.techs.map((tech, techIndex) => {
              const Icon = tech.icon as any;
              return (
                <motion.div
                  key={techIndex}
                  className="flex items-center gap-1 rounded-md border border-dashed border-[#e4ded7]/50 bg-[#161a23] px-2 py-1 text-[14px] font-medium text-white transition-all hover:border-[#e4ded7]/50 hover:bg-[#1e2533] cursor-default shadow-sm"
                >
                  <span className="text-lg pr-1">
                    <Icon className={tech.color} />
                  </span>
                  <span>{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

};

export default SkillGrid;
