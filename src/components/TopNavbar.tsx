import Link from "next/link";
import React from "react";
import { FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSignalMessenger } from "react-icons/fa6";

const navLinks = [
  { href: "/", icon: <FaDiscord className="text-2xl" /> },
  { href: "/", icon: <FaGithub className="text-2xl" /> },
  { href: "/", icon: <FaSignalMessenger className="text-2xl" /> },
];

const TopNavbar = () => {
  return (
    <nav className="fixed left-0 p-4 flex items-center justify-between w-full px-12 py-8">
      <div className="flex justify-center items-center">
        <img src="./letter-s.png" alt="" className="w-10 h-10" />
      </div>
      <div className="flex gap-4">
        <div className="flex gap-4">
          <Link
            href="/"
            title="Discord"
            className="bg-[#5865F2] rounded-full w-9 h-9 flex justify-center items-center"
          >
            <FaDiscord className="text-2xl ease-in-out duration-300 hover:scale-125 " />
          </Link>
          <a
            href="https://github.com/sarkhailstorm"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            className="bg-blue-100 text-black rounded-full w-9 h-9 flex justify-center items-center"
          >
            <FaGithub className="text-2xl ease-in-out duration-300 hover:scale-125" />
          </a>
          <Link
            href="/"
            title="Signal Messenger"
            className="bg-[#184fbc] rounded-full w-9 h-9 flex justify-center items-center"
          >
            <FaSignalMessenger className="text-xl ease-in-out duration-300 hover:scale-125" />
          </Link>
        </div>
        <div className="bg-[#800020] rounded-xl px-4 py-2">
          <Link href="/contact">Hire Me</Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
