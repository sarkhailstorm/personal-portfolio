import Link from "next/link";
import React from "react";
import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="fixed right-0 flex flex-col gap-4 justify-center items-end h-screen p-4">
      <Link
        href="/"
        className="group relative flex items-center hover:gap-3 bg-[#800020] p-3 rounded-full transition-all duration-300 ease-in-out hover:pl-5"
      >
        <span className="overflow-hidden opacity-0 w-0 group-hover:w-14 group-hover:opacity-100 transition-all duration-300 ease-in-out text-white text-lg">
          Home
        </span>
        <IoHome className="text-white text-3xl transition-transform duration-300" />
      </Link>

      <Link
        href="/services"
        className="group relative flex items-center hover:gap-3 bg-[#800020] p-3 rounded-full transition-all duration-300 ease-in-out hover:pl-5"
      >
        <span className="overflow-hidden opacity-0 w-0 group-hover:w-20 group-hover:opacity-100 transition-all duration-300 ease-in-out text-white text-lg">
          Services
        </span>
        <IoPerson  className="text-white text-3xl transition-transform duration-300"  />
      </Link>
      <Link
        href="/skills"
        className="group relative flex items-center hover:gap-3 bg-[#800020] p-3 rounded-full transition-all duration-300 ease-in-out hover:pl-5"
      >
        <span className="overflow-hidden opacity-0 w-0 group-hover:w-14 group-hover:opacity-100 transition-all duration-300 ease-in-out text-white text-lg">
          Skills
        </span>
        <FaTools  className="text-white text-3xl transition-transform duration-300"  />
      </Link>
      <Link
        href="/projects"
        className="group relative flex items-center hover:gap-3 bg-[#800020] p-3 rounded-full transition-all duration-300 ease-in-out hover:pl-5"
      >
        <span className="overflow-hidden opacity-0 w-0 group-hover:w-20 group-hover:opacity-100 transition-all duration-300 ease-in-out text-white text-lg">
          Projects
        </span>
        <FaFolderOpen  className="text-white text-3xl transition-transform duration-300"  />
      </Link>
      <Link
        href="/contact"
        className="group relative flex items-center hover:gap-3 bg-[#800020] p-3 rounded-full transition-all duration-300 ease-in-out hover:pl-5"
      >
        <span className="overflow-hidden opacity-0 w-0 group-hover:w-20 group-hover:opacity-100 transition-all duration-300 ease-in-out text-white text-lg">
          Contact
        </span>
        <FaEnvelope  className="text-white text-3xl transition-transform duration-300"  />
      </Link>
    </nav>
  );
};

export default Navbar;
