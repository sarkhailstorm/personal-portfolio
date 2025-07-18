"use client";
import { ReactTyped } from "react-typed";
import { MdOutlineReadMore } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { useTheme } from "next-themes";

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
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setScreenSize(window.innerWidth < 500 ? "mobile" : "desktop");
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      className="h-screen overflow-hidden flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="marginTop md:w-[43%] w-[80%] border-2 md:border-0 dark:border-blue-500 border-indigo-800 mt-8 md:mt-0 
             md:rounded-none rounded-full overflow-hidden flex items-center justify-center md:cursor-auto cursor-pointer"
        variants={fadeInLeft}
        whileTap={
          screenSize === "mobile" ? { borderColor: "#FF0000", rotate: 360 } : {}
        }
        transition={
          screenSize === "mobile" ? { duration: 1.5, ease: "easeInOut" } : {}
        }
      >
        {mounted && (
          <motion.img
            src={`${theme === "dark" ? "/boy dark.png" : "/boy light.png"}`}
            alt="Portfolio"
            className="w-full h-full object-cover"
            animate={screenSize === "desktop" ? { scale: [1, 1.05, 1] } : {}}
            transition={
              screenSize === "desktop"
                ? { duration: 3, repeat: Infinity, ease: "linear" }
                : {}
            }
          />
        )}
      </motion.div>
      <div className="absolute hidden md:block bottom-0 left-0 w-full h-6 dark:bg-black bg-white blur-sm"></div>

      <div className="flex flex-col md:w-1/2 md:gap-2 gap-4">
        <motion.h1
          className="md:text-5xl text-4xl text-center md:text-start font-bold dark:text-white text-gray-800"
          variants={fadeInLeft}
        >
          Hiya, I&apos;m{" "}
          <span className="dark:text-[#FF0000] text-indigo-700 ">Sarkhail</span>
        </motion.h1>

        <motion.span
          className="md:text-3xl md:text-start text-2xl text-center dark:text-blue-300 text-slate-600 font-semibold"
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
          className="md:w-[85%] pt-2 dark:text-gray-300 text-gray-600 w-[100%] md:text-start text-center md:px-0 px-4"
          variants={fadeInRight}
        >
          CS grad who loves turning ideas into actual working stuff. From
          Front-End magic to Back-End logic, I'm about building things that just
          work. I like keeping things secure too, no unexpected surprises on my
          watch. Big fan of Linux, scripting, and automating the boring stuff so
          I can focus on the fun parts.
        </motion.p>

        <motion.div
          className="pt-2 flex justify-center md:justify-start"
          variants={fadeInUp}
        >
          <a
            href="/cv.pdf"
            download
            className="group flex items-center max-w-max p-1 rounded-lg dark:bg-[#FF0000] bg-indigo-700 md:hover:bg-indigo-700 transition-all duration-300 gap-3 md:gap-0 md:hover:gap-2 dark:md:hover:bg-[#FF0000] hover:bg-indigo-600"
          >
            {screenSize === "desktop" ? (
              <MdOutlineReadMore className="text-4xl transition-transform duration-300 hover:rotate-90" />
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
