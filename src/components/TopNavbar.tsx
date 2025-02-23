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
      delay: 2.5,
      staggerChildren: 0.3,
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

const TopNavbar = () => {
  return (
    <motion.nav
      className="fixed left-0 p-4 flex items-center justify-between w-full px-24 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="flex justify-center items-center"
        variants={childVariants}
      >
        <motion.img src="3d-modeling.png" alt="Logo" className="w-12 h-12" animate={{rotate: 360}} transition={{duration: 8, repeat: Infinity, ease: "linear"}} />
      </motion.div>
      <div className="flex gap-4">
        <div className="flex gap-4">
          <motion.a
            variants={childVariants}
            href="/"
            title="Discord"
            className="bg-[#5865F2] rounded-full w-9
            h-9 flex justify-center items-center"
          >
            <FaDiscord className="text-2xl ease-in-out duration-300 hover:scale-125 " />
          </motion.a>
          <motion.a
            variants={childVariants}
            href="https://github.com/sarkhailstorm"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            className="bg-blue-100 text-black rounded-full w-9 h-9 flex justify-center items-center"
          >
            <FaGithub className="text-2xl ease-in-out duration-300 hover:scale-125" />
          </motion.a>
          <motion.a
            variants={childVariants}
            href="/"
            title="Signal Messenger"
            className="bg-[#184fbc] rounded-full w-9 h-9 flex justify-center items-center"
          >
            <FaSignalMessenger className="text-xl ease-in-out duration-300 hover:scale-125" />
          </motion.a>
          <ModeToggle />
        </div>
        <motion.div className="bg-[#800020] rounded-xl px-4 py-2 hover:bg-green-800 hover:scale-110 ease-in-out duration-300 cursor-pointer">
          <Link href="/contact">Hire Me</Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default TopNavbar;
