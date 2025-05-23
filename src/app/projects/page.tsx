"use client";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

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
          className="md:text-4xl text-[1.8rem] font-bold tracking-wider md:mt-20 mt-28"
        >
          Take a look at my work
        </motion.h1>
      </div>
      <div className="h-[70vh] w-[85%] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar dark:scrollbar-thumb-[#FF0000] scrollbar-thumb-gray-600 scrollbar-track-gray-900 scrollbar-thumb-rounded-full scrollbar-track-rounded-full flex flex-wrap justify-center gap-6 p-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group card bg-[#0f111a] w-80 border-[1.5px]  shadow-xl overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
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
            <div className="absolute bottom-0 left-0 w-full h-0 bg-black flex items-center justify-center opacity-0 group-hover:h-full group-hover:opacity-100 transition-all duration-500">
              <a
                href={project.link}
                target="_blank"
                title="Visit External Site"
                className="text-white flex items-center gap-3 text-2xl font-semibold tracking-wide hover:text-gray-400"
                onClick={(e) => {
                  if (project.link === "#") {
                    e.preventDefault();
                    toast.error("Live preview unavailable!", {
                      duration: 5000,
                    });
                  }
                }}
              >
                <FaArrowUpRightFromSquare />
                Live Preview
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
