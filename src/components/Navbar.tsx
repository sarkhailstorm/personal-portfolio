"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSignalMessenger } from "react-icons/fa6";
import { ModeToggle } from "./ModeToggle";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { IoIosContact } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="md:hidden fixed bottom-5 right-5 text-4xl z-50 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <IoIosClose className="text-white bg-red-700 rounded-full" />
        ) : (
          <IoIosContact />
        )}
      </div>
      <motion.nav
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className={`fixed left-0 bottom-0 md:bottom-auto p-4 flex md:bg-transparent md:border-none border-2 border-t-red-600 bg-gray-950 items-center justify-between w-full px-24 py-4 z-40 ${
          isOpen
            ? "translate-x-0 bottom-0 opacity-100 transform transition-all duration-200 ease-out"
            : "translate-x-full bottom-[-32px] opacity-0 scale-75 md:scale-100 md:transition-none transform transition-all duration-200 ease-in"
        } md:translate-x-0 md:opacity-100`}
      >
        <Link href="/" className="md:flex hidden justify-center items-center">
          <img src="/letter-s.png" alt="Logo" className="w-14 h-14" />
        </Link>
        <div className="flex gap-4 justify-center md:justify-start">
          <div className="flex gap-4">
            <a
              href="#"
              title="Discord"
              className="bg-[#09090B] outline outline-1 outline-[#2c2c2c] hover:bg-[#5865F2] ease-in-out duration-300 rounded-full w-[39px] h-[39px] flex justify-center items-center"
              onClick={(e) => {
                if (e.currentTarget.getAttribute("href") === "#") {
                  e.preventDefault();
                  toast.error("Discord is currently unavailable!");
                  setIsOpen(false);
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
              className="bg-[#09090B] outline outline-1 outline-[#2c2c2c] hover:bg-blue-100 ease-in-out duration-300 text-white hover:text-black rounded-full w-[39px] h-[39px] flex justify-center items-center"
              onClick={() => setIsOpen(false)}
            >
              <FaGithub className="text-2xl ease-in-out duration-300 hover:scale-125 hover:text-black" />
            </a>
            <a
              href="#"
              title="Signal Messenger"
              className="bg-[#09090B] outline outline-1 outline-[#2c2c2c] hover:bg-[#184fbc] ease-in-out duration-300 rounded-full w-[39px] h-[39px] flex justify-center items-center"
              onClick={(e) => {
                if (e.currentTarget.getAttribute("href") === "#") {
                  e.preventDefault();
                  toast.error("Signal is currently unavailable!");
                  setIsOpen(false);
                }
              }}
            >
              <FaSignalMessenger className="text-xl ease-in-out duration-300 hover:scale-125" />
            </a>
            <ModeToggle onClick={() => setIsOpen(false)} />
          </div>
          <div className="bg-[#800020] rounded-xl px-4 py-2 hover:bg-blue-700 hover:scale-110 ease-in-out duration-300 cursor-pointer md:block hidden">
            <Link href="/contact">Hire Me</Link>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
