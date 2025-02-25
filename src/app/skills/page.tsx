"use client";
import React from "react";
import { motion } from "framer-motion";

const upperMarquee = [
  "HTML5.svg",
  "CSS3.svg",
  "JavaScript.svg",
  "TypeScript.svg",
  "Python.svg",
  "Java.svg",
  "C.svg",
  "C++.svg",
  "React.svg",
  "Three.js.svg",
  "Bootstrap.svg",
  "mui.svg",
  "HTML5.svg",
  "CSS3.svg",
  "JavaScript.svg",
  "TypeScript.svg",
  "Python.svg",
  "Java.svg",
  "C.svg",
  "C++.svg",
  "React.svg",
  "Three.js.svg",
  "Bootstrap.svg",
  "mui.svg",
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
    <div className="flex flex-col h-screen gap-16 pt-32">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl">Wanna know about my skills?</h1>
        <h2 className="text-2xl">Alright, let's fill you in on that!</h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto marquee-container p-4 rounded-2xl flex flex-col gap-8 overflow-x-hidden">
          <motion.div
            className="flex gap-12"
            animate={{ x: ["0%", "-200%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            {[...upperMarquee, ...upperMarquee].map((skill, index) => (
              <img
                className={`w-16 rounded-lg ${
                  skill === "Three.js.svg" ? "bg-[#AAAAAA] p-2" : "bg-black"
                }`}
                key={index}
                src={skill}
                alt={`Image ${index}`}
              />
            ))}
          </motion.div>
          <div className="border-2 border-gray-800"></div>
          <motion.div
            className="flex gap-12"
            animate={{ x: ["-150%", "0"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            {[...lowerMarquee, ...lowerMarquee].map((skill, index) => (
              <img
                className={`w-16 rounded-lg ${
                  skill === "Next.js.svg" || skill === "Express.svg"
                    ? "bg-[#AAAAAA] p-2"
                    : "bg-black"
                }`}
                key={index}
                src={skill}
                alt={`Image ${index}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
