"use client";
import { ReactTyped } from "react-typed";
import { MdOutlineReadMore } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";

const fadeInLeft = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0, transition: { duration: 2, delay: 1 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0, transition: { duration: 2, delay: 1 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 1 } },
};

const HomePage = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const updateSize = () => {
      setScreenSize(window.innerWidth < 500 ? "mobile" : "desktop");
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <motion.div
      className="h-screen overflow-hidden flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="md:w-[43%] w-[80%] border-2 md:border-0 border-blue-500 mt-8 md:mt-0 
             md:rounded-none rounded-full overflow-hidden flex items-center justify-center md:cursor-auto cursor-pointer"
        variants={fadeInLeft}
        whileTap={screenSize === "mobile" ? { borderColor: "#ff004f", rotate: 360 } : {}}
        transition={screenSize === "mobile" ? { duration: 1.5, ease: "easeInOut" } : {}}
      >
        <motion.img
          src="boy.png"
          alt="Portfolio"
          className="w-full h-full object-cover"
          animate={screenSize === "desktop" ? { scale: [1, 1.05, 1] } : {}}
          transition={
            screenSize === "desktop"
              ? { duration: 3, repeat: Infinity, ease: "linear" }
              : {}
          }
        />
      </motion.div>
      <div className="absolute hidden md:block bottom-0 left-0 w-full h-6 bg-black blur-sm"></div>

      <div className="flex flex-col md:w-1/2 md:gap-2 gap-4">
        <motion.h1
          className="md:text-5xl text-4xl text-center md:text-start font-bold"
          variants={fadeInLeft}
        >
          Hiya, I&apos;m <span className="text-[#ff004f]">Sarkhail</span>
        </motion.h1>

        <motion.span
          className="md:text-3xl md:text-start text-2xl text-center text-blue-300 font-semibold"
          variants={fadeInRight}
        >
          <ReactTyped
            strings={[
              "CS Graduate",
              "Software Engineer",
              "Frontend Expert",
              "Backend Engineer",
              "Open-Source Contributer",
              "Security Aficionado",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </motion.span>

        <motion.p
          className="md:w-[85%] pt-2 text-gray-300 w-[100%] md:text-start text-center md:px-0 px-4"
          variants={fadeInRight}
        >
          Software Developer who&apos;s all about building cool and functional
          software. From Front-End magic to Back-End logic, I bring ideas to
          life with clean and efficient code. I build apps with security in mind
          so there are no nasty surprises.
        </motion.p>

        <motion.div
          className="pt-2 flex justify-center md:justify-start"
          variants={fadeInUp}
        >
          <a
            href="/CV.pdf"
            download
            className="group flex items-center max-w-max p-1 rounded-xl bg-[#800020] transition-all duration-300 gap-3 md:gap-0 md:hover:gap-3 md:hover:bg-[#800020] hover:bg-blue-600"
          >
            {screenSize === "desktop" ? (
              <MdOutlineReadMore className="text-4xl transition-transform duration-300" />
            ) : (
              <HiOutlineDownload className="text-4xl py-1" />
            )}
            <span className="overflow-hidden md:w-0 md:opacity-0 whitespace-nowrap md:group-hover:w-[8rem] w-32 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              Download CV
            </span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
