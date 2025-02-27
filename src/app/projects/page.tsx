"use client";
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
    title: "Task Management App",
    desc: "This is a beautiful web app that will blow your head.",
  },
  {
    img: "3D Portfolio.png",
    title: "3D Portfolio Website",
    desc: "This is a beautiful web app that will blow your head.",
  },
  {
    img: "Cloud File Manager.png",
    title: "Cloud File Manager",
    desc: "This is a beautiful web app that will blow your head.",
  },
  {
    img: "Google Calculator.png",
    title: "Google Calculator",
    desc: "This is a beautiful web app that will blow your head.",
  },
  {
    img: "Coming Soon.png",
    title: "Hang Tight!",
    desc: "More projects are coming soon.",
  },
  {
    img: "Coming Soon.png",
    title: "Hang Tight!",
    desc: "More projects are coming soon.",
  },
  {
    img: "Coming Soon.png",
    title: "Hang Tight!",
    desc: "More projects are coming soon.",
  },
];

const ProjectsPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8 overflow-x-hidden">
      <div>
        <h1 className="text-4xl font-bold tracking-wider mt-24">
          Wanna see my work? <span>There you go!</span>
        </h1>
      </div>
      <div className="h-[70vh] w-[85%] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-purple-700 scrollbar-track-gray-900 scrollbar-thumb-rounded-full scrollbar-track-rounded-full flex flex-wrap justify-center gap-5 p-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group card bg-[#0f111a] w-80 border-[1.5px] border-x-indigo-700 border-y-violet-800 shadow-xl overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <figure>
              <img
                src={project.img}
                alt={`Image ${index}`}
                className="w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.desc}</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-[#0b0419cc] to-[#2d0366cc] flex items-center justify-center opacity-0 group-hover:h-full group-hover:opacity-90 transition-all duration-500">
              <a className="text-white text-lg font-semibold tracking-wide hover:text-gray-400">
                Watch Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
