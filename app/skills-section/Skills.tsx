import SkillGrid from "./SkillGrid";
import AnimatedTitle from "../animations/AnimatedTitle";

const Skills = () => {
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center pt-16 pb-32 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="skills"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"DESIGN & DEVELOPMENT SKILLS"}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <SkillGrid />
      </div>
    </section>
  );
};

export default Skills;
