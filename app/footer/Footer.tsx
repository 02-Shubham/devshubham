import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedBody from "../animations/AnimatedBody";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <motion.section
      className="relative z-10 h-auto w-full items-center justify-center border-t-[2px] border-[#e4ded7]/10 bg-[#0E1016] py-16 pb-32 font-bold uppercase md:h-[20vh] md:py-16 lg:h-[10vh] lg:pt-6 lg:pb-0"
      initial="initial"
      animate="animate"
    >
      <motion.div className="mx-auto flex w-[90%] flex-row items-center justify-between text-center text-[12px] text-[#e4ded7] sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
        <p className="m-0 p-0">Copyright {year}</p>
        <div className="flex flex-col sm:flex-row sm:gap-1 md:gap-2">
          <p className="m-0 p-0">Design & Development by</p>
          <Link
            href="https://github.com/02-Shubham"
            target="_blank"
            aria-label="Shubham's GitHub Profile"
          >
            <span className="underline underline-offset-2 hover:no-underline">
              Shubham Sahu
            </span>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;