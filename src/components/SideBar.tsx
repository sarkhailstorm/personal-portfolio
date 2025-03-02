"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home", icon: <IoHome /> },
  { href: "/services", label: "Services", icon: <IoPerson /> },
  { href: "/skills", label: "Skills", icon: <FaTools /> },
  { href: "/projects", label: "Projects", icon: <FaFolderOpen /> },
  { href: "/contact", label: "Contact", icon: <FaEnvelope /> },
];

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
      <div className="fixed top-5 right-5 z-50 p-3 cursor-pointer text-white text-3xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoCloseSharp/> : <AiOutlineMenuFold /> }
      </div>
      <motion.nav
        className={`fixed right-0 flex flex-col gap-4 justify-center items-end h-screen p-4 z-50`}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {navLinks.map(({ href, label, icon }) => (
          <motion.div key={href} variants={childVariants}>
            <Link
              href={href}
              className={`group relative flex items-center hover:gap-3 p-3 rounded-full transition-all duration-300 ease-in-out hover:pl-5 ${
                pathname === href ? "bg-blue-700" : "bg-[#800020]"
              }`}
            >
              <motion.span className="overflow-hidden opacity-0 w-0 group-hover:w-[4.4rem] group-hover:opacity-100 transition-all duration-300 ease-in-out text-white text-md">
                {label}
              </motion.span>
              <motion.span className="text-white text-3xl transition-transform duration-300">
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
