"use client";
import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    img: "Portfolio.png",
    title: "Portfolio Website",
    desc: "This is a beautiful web app that will blow your head.",
  },
  {
    img: "Weather App.png",
    title: "Weather App",
    desc: "This is a beautiful web app that will blow your head.",
  },
  {
    img: "Cloud File Manager.png",
    title: "Cloud File Manager",
    desc: "This is a beautiful web app that will blow your head.",
  },
  {
    img: "3D Portfolio.png",
    title: "3D Portfolio Website",
    desc: "This is a beautiful web app that will blow your head.",
  },
  {
    img: "Task Management App.png",
    title: "Task Management App",
    desc: "This is a beautiful web app that will blow your head.",
  },
  {
    img: "Google Calculator.png",
    title: "Google Calculator",
    desc: "This is a beautiful web app that will blow your head.",
  },
];

const ProjectsPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-12 overflow-x-hidden">
      <div>
        <h1 className="text-4xl font-bold tracking-wider">My Work</h1>
      </div>
      <div className="flex gap-3 overflow-y-scroll flex-wrap justify-center items-center h-[345px]">
        {data.map((info, index) => (
          <motion.div key={index} className="card bg-[#1b2838] w-80 border-2 border-gray-800 shadow-xl">
            <figure>
              <img className=""
                src={info.img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{info.title}</h2>
              <p>{info.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
