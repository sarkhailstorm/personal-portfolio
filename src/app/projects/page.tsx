"use client";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10 overflow-x-hidden">
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
          className="text-4xl font-bold tracking-wider mt-32"
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
