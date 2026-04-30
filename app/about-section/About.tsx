import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import Image from "next/image";

const About = () => {
  return (
    <section
      className="sticky top-0 z-0 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-32 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[80%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I build solutions that are user-friendly and responsive."
          }
          className={
            "mb-10 py-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:w-[60%] lg:text-[24px]">
            <AnimatedBody
              text={
                "Hi, I'm Shubham!"
              }
            />
            <AnimatedBody
              text={
                "Whether I’m designing a sleek user interface or coding a complex application, I’m always striving to create something unique and innovative. I love experimenting with new technologies and staying up-to-date with the latest trends in the tech world."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "I’m a B.Tech student passionate about technology, development, and creative problem-solving. I’m exploring fields like DevOps and Linux, and I aim to create platforms that connect, educate, and inspire others."
              }
            />
            <AnimatedBody
              text={
                "Outside of coding, I enjoy drawing and sketching, making posters, and collaborating with my tech-savvy friends. I also have entrepreneurial aspirations, dreaming of launching a startup and contributing to the tech community."
              }
            />
          </div>

          <div className="relative mb-16 h-[400px] w-full overflow-hidden rounded-3xl border-2 border-[#e4ded7]/10 lg:h-[500px] lg:w-[40%]">
            <Image
              src="/About.png"
              alt="Shubham Sahu"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
        {/* <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28 overflow-hidden w-full relative h-[150px]">
          <SongCarousel />
        </div> */}
      </div>
    </section>
  );
};

export default About;
