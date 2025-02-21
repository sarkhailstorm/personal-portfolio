import Link from "next/link";
import React from "react";
import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="text-3xl">
      <Link href="/">
        <IoHome />
      </Link>
      <Link href="/services">
        <IoPerson />
      </Link>
      <Link href="/skills">
        <FaTools />
      </Link>
      <Link href="/projects">
        <FaFolderOpen />
      </Link>
      <Link href="/contact">
        <FaEnvelope />
      </Link>
    </nav>
  );
};

export default Navbar;
