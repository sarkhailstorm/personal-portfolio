"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import Image from "next/image";
import { navLinks } from "@/data/navlinks";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const SideBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed flex items-center px-8 bg-[#040404] border-b-2 border-red-700 h-[10%] right-0 left-0 md:hidden">
        <div
          className="fixed right-5 z-0 p-3 cursor-pointer text-white text-3xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoCloseSharp className="text-red-600" /> : <AiOutlineUnorderedList className="text-[2.2rem]" />

          }
        </div>
        <div>
          <Link href="/">
            <Image
              src="/letter-s.png"
              alt="Logo"
              width={36}
              height={36}
              priority
            />
          </Link>
        </div>
      </div>
      <motion.nav
        className={`fixed right-0 left-0 justify-center md:bg-transparent bg-gray-950 md:left-auto mt-20 flex md:mt-0 md:flex-col gap-4 md:justify-center md:items-end md:h-screen p-3 md:p-4 z-40 ${
          isOpen
            ? "translate-x-0 opacity-100 scale-100 transform transition-all duration-300 ease-out"
            : "translate-x-full opacity-0 scale-75 md:scale-100 transform transition-all duration-300 ease-in"
        } md:translate-x-0`}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {navLinks.map(({ href, label, icon }) => (
          <motion.div key={href} variants={childVariants}>
            <Link
              href={href}
              className={`group relative flex items-center md:hover:gap-3 px-3 py-2 md:p-3 rounded-full transition-all duration-300 ease-in-out md:hover:pl-5 ${
                pathname === href ? "dark:md:bg-blue-700 bg-none md:bg-slate-800" : "dark:md:bg-[#800020] md:bg-indigo-700"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <motion.span className="overflow-hidden opacity-0 w-0 md:group-hover:w-[4.4rem] md:group-hover:opacity-100 transition-all duration-300 ease-in-out text-white text-md">
                {label}
              </motion.span>
              <motion.span
                className={`text-3xl transition-transform duration-300 ${
                  pathname === href
                    ? "text-red-600 md:text-white"
                    : "text-white"
                }`}
              >
                {icon}
              </motion.span>
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </>
  );
};

export default SideBar;
