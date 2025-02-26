"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
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
    img: "Task Management App.png",
    title: "Cloud File Manager",
    desc: "This is a beautiful web app that will blow your head.",
  },
  {
    img: "3D Portfolio.png",
    title: "3D Portfolio Website",
    desc: "This is a beautiful web app that will blow your head.",
  },
  {
    img: "Cloud File Manager.png",
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
        <h1 className="text-4xl font-bold tracking-wider">
          Wanna see my work? <span>There you go!</span>
        </h1>
      </div>
      <div className="flex gap-5 overflow-y-scroll flex-wrap justify-center items-center h-[300px]">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card bg-[#0f111a] w-80 border-[1.4px] border-x-indigo-700 border-y-violet-800 shadow-xl"
          >
            <figure>
              <img src={project.img} alt={`Image ${index}`} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
