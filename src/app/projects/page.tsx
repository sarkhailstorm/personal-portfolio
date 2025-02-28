"use client";
import { motion } from "framer-motion";

const projects = [
  {
    img: "Portfolio.png",
    title: "Portfolio Website",
    desc: "An animated Portfolio Website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, ShadCN, and DaisyUI.",
  },
  {
    img: "Weather App.png",
    title: "Weather App",
    desc: "A simple Weather App designed with HTML, CSS, and JavaScript, featuring a visually appealing layout.",
  },
  {
    img: "Task Management App.png",
    title: "Task Management App",
    desc: "A Task Management App with admin and employee dashboards, developed using React and Tailwind CSS.",
  },
  {
    img: "3D Portfolio.png",
    title: "3D Portfolio Website",
    desc: "A 3D Portfolio Website crafted with React, Three.js, React-Three-Fiber, and Tailwind CSS, featuring interactive models.",
  },
  {
    img: "Cloud File Manager.png",
    title: "Cloud File Manager",
    desc: "A simple app that uses Supabase Cloud for file storage with JWT authentication.",
  },
  {
    img: "Google Calculator.png",
    title: "Google Calculator",
    desc: "A Google Calculator clone built with HTML, CSS, and JavaScript, replicating Google Calculator functionalities.",
  },
  {
    img: "Coming Soon.png",
    title: "Hang Tight!",
    desc: "More projects are coming soon. You might wanna have a look at my github profile for more info.",
  },
  {
    img: "Coming Soon.png",
    title: "Hang Tight!",
    desc: "More projects are coming soon. You might wanna have a look at my github profile for more info.",
  },
  {
    img: "Coming Soon.png",
    title: "Hang Tight!",
    desc: "More projects are coming soon. You might wanna have a look at my github profile for more info.",
  },
];

const ProjectsPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8 overflow-x-hidden">
      <div>
        <motion.h1
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 3,
            delay: 1,
            type: "spring",
            stiffness: 100,
            damping: 8,
            mass: 1,
          }}
          className="text-4xl font-bold tracking-wider mt-24"
        >
          Take a look at my work
        </motion.h1>
      </div>
      <div className="h-[70vh] w-[85%] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-purple-700 scrollbar-track-gray-900 scrollbar-thumb-rounded-full scrollbar-track-rounded-full flex flex-wrap justify-center gap-5 p-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group card bg-[#0f111a] w-80 border-[1.5px] border-x-indigo-700 border-y-violet-800 shadow-xl overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
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
