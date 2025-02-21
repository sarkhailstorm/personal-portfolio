import Link from "next/link";
import React from "react";
import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="fixed right-5 top-1/2 transform -translate-y-1/2 text-3xl flex flex-col gap-6 bg-gray-900 p-4 rounded-lg shadow-lg">
      <Link href="/">
        <IoHome className="hover:text-cyan-500 ease-in-out duration-300 "/>
      </Link>
      <Link href="/services">
        <IoPerson className="hover:text-cyan-500 ease-in-out duration-300 "/>
      </Link>
      <Link href="/skills">
        <FaTools className="hover:text-cyan-500 ease-in-out duration-300 "/>
      </Link>
      <Link href="/projects">
        <FaFolderOpen className="hover:text-cyan-500 ease-in-out duration-300 "/>
      </Link>
      <Link href="/contact">
        <FaEnvelope className="hover:text-cyan-500 ease-in-out duration-300 "/>
      </Link>
    </nav>
  );
};

export default Navbar;
