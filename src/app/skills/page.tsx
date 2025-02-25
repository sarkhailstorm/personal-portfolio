"use client";
import React from "react";
import { motion } from "framer-motion";

const upperMarquee = [
  "HTML5.svg",
  "CSS3.svg",
  "JavaScript.svg",
  "TypeScript.svg",
  "Python.svg",
  "React.svg",
  "Figma.svg",
  "Next.js.svg",
  "Node.js.svg",
  "Express.svg",
  "MongoDB.svg",
  "Docker.svg",
];

const lowerMarquee = [
  "Figma.svg",
  "Next.js.svg",
  "Node.js.svg",
  "Express.svg",
  "MongoDB.svg",
  "Docker.svg",
  "HTML5.svg",
  "CSS3.svg",
  "JavaScript.svg",
  "TypeScript.svg",
  "Python.svg",
  "React.svg",
];

const SkillsPage = () => {
  return (
    <div className="flex flex-col h-screen gap-16 pt-32">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl">Wanna know about my skills?</h1>
        <h2 className="text-2xl">Alright, let's fill you in on that!</h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto bg-gray-800 w-[78%] p-4 rounded-2xl flex gap-8 overflow-x-hidden ">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            {[...upperMarquee, ...upperMarquee].map((skill, index) => (
              <img className="w-16" key={index} src={skill} alt={`Image ${index}`} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
