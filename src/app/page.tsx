"use client";
import { ReactTyped } from "react-typed";
import { MdOutlineReadMore } from "react-icons/md";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      className="h-screen flex items-center justify-center gap-4"
      initial="hidden"
      animate="visible"
    >
      <motion.div className="w-[100%]" variants={fadeInLeft}>
        <motion.img
          src="boy.png"
          alt="Portfolio"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute bottom-[-35] left-0 w-full h-20 bg-black blur-lg"></div>
      </motion.div>

      <div className="flex flex-col gap-2">
        <motion.h1 className="text-5xl font-bold" variants={fadeInLeft}>
          Hiya, I&apos;m <span className="text-[#ff004f]">Sarkhail</span>
        </motion.h1>

        <motion.span
          className="text-3xl text-blue-300 font-semibold"
          variants={fadeInRight}
        >
          <ReactTyped
            strings={[
              "Software Engineer",
              "Web Developer",
              "Frontend Expert",
              "Backend Engineer",
              "Open-Source Contributor",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </motion.span>

        <motion.p className="w-[80%] pt-2 text-gray-300" variants={fadeInRight}>
          Committed Software Developer with a strong passion for building cool
          and functional software. Obsessed with security, always hunting for
          vulnerabilities. I&apos;m always excited to learn new things along the
          way.
        </motion.p>

        <motion.div className="pt-2" variants={fadeInUp}>
          <a
            href="cv.pdf"
            download
            className="group flex items-center max-w-max p-1 rounded-xl bg-[#800020] transition-all duration-300 hover:gap-3"
          >
            <MdOutlineReadMore className="text-4xl transition-transform duration-300" />
            <span className="overflow-hidden w-0 opacity-0 whitespace-nowrap group-hover:w-[8rem] group-hover:opacity-100 transition-all duration-300 ease-in-out">
              Download CV
            </span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
