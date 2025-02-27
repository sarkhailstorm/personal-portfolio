"use client";
import Link from "next/link";
import React from "react";
import { FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSignalMessenger } from "react-icons/fa6";
import { ModeToggle } from "./ModeToggle";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Navbar = () => {
  return (
    <motion.nav
      className="fixed left-0 p-4 flex items-center justify-between w-full px-24 py-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="flex justify-center items-center"
        variants={childVariants}
      >
        <img src="/controller.png" alt="Logo" className="w-14 h-14"/>
      </motion.div>
      <div className="flex gap-4">
        <div className="flex gap-4">
          <motion.a
            variants={childVariants}
            href="/"
            title="Discord"
            className="bg-gray-700 hover:bg-[#5865F2] ease-in-out duration-300 rounded-full w-[39px] h-[39px] flex justify-center items-center"
          >
            <FaDiscord className="text-2xl ease-in-out duration-300 hover:scale-125" />
          </motion.a>
          <motion.a
            variants={childVariants}
            href="https://github.com/sarkhailstorm"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            className="bg-gray-700 hover:bg-blue-100 ease-in-out duration-300 text-white hover:text-black rounded-full w-[39px] h-[39px] flex justify-center items-center"
          >
            <FaGithub className="text-2xl ease-in-out duration-300 hover:scale-125 hover:text-black" />
          </motion.a>
          <motion.a
            variants={childVariants}
            href="/"
            title="Signal Messenger"
            className="bg-gray-700 hover:bg-[#184fbc] ease-in-out duration-300 rounded-full w-[39px] h-[39px] flex justify-center items-center"
          >
            <FaSignalMessenger className="text-xl ease-in-out duration-300 hover:scale-125" />
          </motion.a>
          <ModeToggle />
        </div>
        <motion.div className="bg-[#800020] rounded-xl px-4 py-2 hover:bg-blue-700 hover:scale-110 ease-in-out duration-300 cursor-pointer">
          <Link href="/contact">Hire Me</Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
