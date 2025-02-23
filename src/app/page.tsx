"use client";
import { ReactTyped } from "react-typed";
import { MdOutlineReadMore } from "react-icons/md";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      className="h-screen flex items-center justify-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 2.5 }}
    >
      <motion.div
        className="w-[100%]"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 2.5 }}
      >
        <motion.img src="boy.png" alt="Portfolio" animate={{ y: [0, 0, 0], scale: [1, 1.1, 1] }} transition={{duration: 5, repeat: Infinity, ease: "linear", delay: 4}} />
        <div className="absolute bottom-[-35] left-0 w-full h-20 bg-black blur-lg"></div>

      </motion.div>
      <div className="flex flex-col gap-2">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 2.5 }}
        >
          Hiya, I'm<span className="text-[#ff004f]"> Sarkhail</span>
        </motion.h1>
        <motion.span
          className="text-3xl text-blue-300 font-semibold"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 2.5 }}
        >
          <ReactTyped
            strings={[
              "Software Engineer",
              "Web Developer",
              "Frontend Expert",
              "Backend Enigneer",
              "Open-Source Contributor",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </motion.span>
        <motion.p
          className="w-[80%] pt-2 text-gray-300"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 2.5 }}
        >
          Committed Software Developer with a strong passion for building cool
          and functional software. Obsessed with security, always hunting for
          vulnerabilities. I'm always excited to learn new things along the way.
        </motion.p>
        <motion.div
          className="pt-2"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 2.5 }}
        >
          <a
            href="cv.pdf" download
            className="max-w-max group relative flex items-center hover:gap-3 p-1 rounded-xl transition-all duration-300 ease-in-out bg-[#800020]"
          >
            <span>
              <MdOutlineReadMore className="text-4xl rounded-full transition-transform duration-300" />
            </span>
            <span className="overflow-hidden opacity-0 whitespace-nowrap w-0 group-hover:w-[8rem] group-hover:opacity-100 transition-all duration-300 ease-in-out">
              Download CV
            </span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
