"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const upperMarquee = [
  "HTML.svg",
  "CSS.svg",
  "JavaScript.svg",
  "TypeScript.svg",
  "Python.svg",
  "Java.svg",
  "C.svg",
  "C++.svg",
  "React.svg",
  "Three.js.svg",
  "Bootstrap.svg",
  "MUI.svg",
  "HTML.svg",
  "CSS.svg",
  "JavaScript.svg",
  "TypeScript.svg",
  "Python.svg",
  "Java.svg",
  "C.svg",
  "C++.svg",
  "React.svg",
  "Three.js.svg",
  "Bootstrap.svg",
  "MUI.svg",
];

const lowerMarquee = [
  "Figma.svg",
  "Next.js.svg",
  "Node.js.svg",
  "Express.svg",
  "PostgreSQL.svg",
  "MongoDB.svg",
  "Git.svg",
  "Docker.svg",
  "Linux.svg",
  "Figma.svg",
  "Next.js.svg",
  "Node.js.svg",
  "Express.svg",
  "PostgreSQL.svg",
  "MongoDB.svg",
  "Git.svg",
  "Docker.svg",
  "Linux.svg",
];

const SkillsPage = () => {
  return (
    <TooltipProvider>
      <div className="flex flex-col h-screen gap-16 pt-32">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl">Wanna know about my skills?</h1>
          <h2 className="text-2xl">Alright, let me fill you in!</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="container mx-auto marquee-container p-4 rounded-2xl flex flex-col gap-8 overflow-x-hidden">
            <motion.div
              className="flex gap-12"
              animate={{ x: ["0%", "-200%"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              {[...upperMarquee, ...upperMarquee].map((skill, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild className="">
                    <img
                      className={`w-16 rounded-lg hover:cursor-pointer hover:scale-90 hover:ring-2 hover:ring-blue-500 ease-in-out duration-300 hover:p-2 ${
                        skill === "Three.js.svg"
                          ? "bg-[#AAAAAA] p-1"
                          : "bg-black"
                      }`}
                      src={skill}
                      alt={`Image ${index}`}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.replace(".svg", "")}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </motion.div>
            <div className="border-2 border-gray-800"></div>
            <motion.div
              className="flex gap-12"
              animate={{ x: ["-150%", "0"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              {[...lowerMarquee, ...lowerMarquee].map((skill, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <img
                      className={`w-16 rounded-lg hover:cursor-pointer hover:scale-90 hover:ring-2 hover:ring-blue-500 ease-in-out duration-300 hover:p-2 ${
                        skill === "Next.js.svg" || skill === "Express.svg"
                          ? "bg-[#AAAAAA] p-1"
                          : "bg-black"
                      }`}
                      src={skill}
                      alt={`Image ${index}`}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.replace(".svg", "")}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default SkillsPage;
