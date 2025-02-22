"use client";
import { ReactTyped } from "react-typed";
import { MdOutlineReadMore } from "react-icons/md";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="h-screen flex items-center justify-center gap-4">
      <div className="w-[100%]">
        <img src="boy.png" alt="Portfolio" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-bold">
          Hiya, I'm<span className="text-[#ff004f]"> Sarkhail</span>
        </h1>
        <span className="text-3xl text-blue-300 font-semibold">
          <ReactTyped
            strings={[
              "Software Engineer",
              "Web Developer",
              "Frontend Expert",
              "Backend Enigneer",
              "Open-Source Contributor",
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </span>
        <p className="w-[80%] pt-2 text-gray-300">
          Committed Software Developer with a strong passion for building cool
          and functional software. Obsessed with security, always hunting for
          vulnerabilities. I'm always excited to learn new things along the way.
        </p>
        <div className="pt-2">
          <Link
            href="/services"
            className="max-w-max group relative flex items-center hover:gap-3 p-1 rounded-xl transition-all duration-300 ease-in-out bg-[#800020]"
          >
            <span>
              <MdOutlineReadMore className="text-4xl rounded-full transition-transform duration-300" />
            </span>
            <span className="overflow-hidden opacity-0 whitespace-nowrap w-0 group-hover:w-[8rem] group-hover:opacity-100 transition-all duration-300 ease-in-out">
              More about me
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
