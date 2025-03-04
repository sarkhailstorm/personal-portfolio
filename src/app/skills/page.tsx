"use client";
import React, { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { upperMarquee } from "@/data/marquee";
import { lowerMarquee } from "@/data/marquee";

const SkillsPage = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const updateSize = () => {
      setScreenSize(window.innerWidth < 500 ? "mobile" : "desktop");
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <TooltipProvider>
      <div className="flex flex-col h-screen md:gap-16 gap-28 md:pt-28 pt-40">
        <div className="flex flex-col items-center gap-4">
          <motion.h1
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 3,
              delay: 1,
              type: "spring",
              stiffness: 100,
              damping: 5,
              mass: 1,
            }}
            className="md:text-4xl text-[1.8rem] font-bold"
          >
            Curious about my skills?
          </motion.h1>
          <motion.h2
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 3,
              type: "spring",
              stiffness: 100,
              damping: 8,
              mass: 1,
            }}
            className="text-2xl font-semibold text-blue-400"
          >
            Alright, let me fill you in...
          </motion.h2>
        </div>
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
        >
          <div className="container md:mx-auto marquee-container p-4 rounded-2xl flex flex-col gap-8 overflow-x-hidden">
            <motion.div
              className="flex gap-12"
              animate={
                screenSize === "desktop"
                  ? { x: ["0%", "-200%"] }
                  : { x: ["0%", "-354%"] }
              }
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              {[...upperMarquee, ...upperMarquee].map((skill, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <img
                      className={`w-16 rounded-lg hover:cursor-pointer hover:scale-90 hover:ring-2 hover:ring-blue-500 ease-in-out duration-300 hover:p-2 ${
                        skill === "/Three.js.svg" ? "bg-white p-1" : "bg-black"
                      }`}
                      src={skill}
                      alt={`Image ${index}`}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.replace(/^\/|\.svg$/g, "")}</p> {/* Regex */}
                  </TooltipContent>
                </Tooltip>
              ))}
            </motion.div>
            <div className="border-2 border-gray-800"></div>
            <motion.div
              className="flex gap-12"
              animate={
                screenSize === "desktop"
                  ? { x: ["-150%", "0"] }
                  : { x: ["-265%", "0"] }
              }
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              {[...lowerMarquee, ...lowerMarquee].map((skill, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <img
                      className={`w-16 rounded-lg hover:cursor-pointer hover:scale-90 hover:ring-2 hover:ring-blue-500 ease-in-out duration-300 hover:p-2 ${
                        skill === "/Next.js.svg" || skill === "/Express.svg"
                          ? "bg-white p-1"
                          : "bg-black"
                      }`}
                      src={skill}
                      alt={`Image ${index}`}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.replace(/^\/|\.svg$/g, "")}</p> {/* Regex */}
                  </TooltipContent>
                </Tooltip>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </TooltipProvider>
  );
};

export default SkillsPage;
