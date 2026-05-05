import ProjectGrid from "./ProjectGrid";

const Work = () => {
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#E4DED7] py-8 md:py-10 lg:py-10 rounded-t-[3rem] sm:rounded-t-[4rem] shadow-[0_-50px_100px_rgba(0,0,0,0.2)] overflow-visible"
      id="work"
    >
      <h2 className="mb-10 hidden text-[36px] text-[#000000] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
        Featured Work
      </h2>

      <ProjectGrid />
    </section>
  );
};

export default Work;
