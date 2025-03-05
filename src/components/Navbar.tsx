"use client";
import Link from "next/link";
import React from "react";
import { FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSignalMessenger } from "react-icons/fa6";
import { ModeToggle } from "./ModeToggle";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="fixed left-0 p-4 hidden md:flex items-center justify-between w-full px-24 py-4"
    >
      <div className="flex justify-center items-center">
        <img src="/letter-s.png" alt="Logo" className="w-14 h-14" />
      </div>
      <div className="flex gap-4">
        <div className="flex gap-4">
          <a
            href="#"
            title="Discord"
            className="bg-[#09090B] hover:bg-[#5865F2] ease-in-out duration-300 rounded-full w-[39px] h-[39px] flex justify-center items-center"
            onClick={(e) => {
              if (e.currentTarget.getAttribute("href") === "#") {
                e.preventDefault();
                toast.error("Discord is currently unavailable!");
              }
            }}
          >
            <FaDiscord className="text-2xl ease-in-out duration-300 hover:scale-125" />
          </a>
          <a
            href="https://github.com/sarkhailstorm"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            className="bg-[#09090B] hover:bg-blue-100 ease-in-out duration-300 text-white hover:text-black rounded-full w-[39px] h-[39px] flex justify-center items-center"
          >
            <FaGithub className="text-2xl ease-in-out duration-300 hover:scale-125 hover:text-black" />
          </a>
          <a
            href="#"
            title="Signal Messenger"
            className="bg-[#09090B] hover:bg-[#184fbc] ease-in-out duration-300 rounded-full w-[39px] h-[39px] flex justify-center items-center"
            onClick={(e) => {
              if (e.currentTarget.getAttribute("href") === "#") {
                e.preventDefault();
                toast.error("Signal is currently unavailable!");
              }
            }}
          >
            <FaSignalMessenger className="text-xl ease-in-out duration-300 hover:scale-125" />
          </a>
          <ModeToggle />
        </div>
        <div className="bg-[#800020] rounded-xl px-4 py-2 hover:bg-blue-700 hover:scale-110 ease-in-out duration-300 cursor-pointer">
          <Link href="/contact">Hire Me</Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
