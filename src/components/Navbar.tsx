"use client";
import Link from "next/link";
import React from "react";
import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home", icon: <IoHome /> },
  { href: "/services", label: "Services", icon: <IoPerson /> },
  { href: "/skills", label: "Skills", icon: <FaTools /> },
  { href: "/projects", label: "Projects", icon: <FaFolderOpen /> },
  { href: "/contact", label: "Contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed right-0 flex flex-col gap-4 justify-center items-end h-screen p-4">
      {navLinks.map(({ href, label, icon }) => (
        <Link
          key={href}
          href={href}
          className={`group relative flex items-center hover:gap-3 p-3 rounded-full transition-all duration-300 ease-in-out hover:pl-5 ${
            pathname === href ? "bg-green-800" : "bg-[#800020]"
          }`}
        >
          <span className="overflow-hidden opacity-0 w-0 group-hover:w-[4.4rem] group-hover:opacity-100 transition-all duration-300 ease-in-out text-white text-md">
            {label}
          </span>
          <span className="text-white text-3xl transition-transform duration-300">
            {icon}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
