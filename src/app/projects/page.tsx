"use client"
import React from "react";
import { motion } from "framer-motion";



const ProjectsPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8 overflow-x-hidden">
      <div>
        <h1 className="text-4xl font-bold tracking-wider">My Work</h1>
      </div>
      <div className="flex gap-3 overflow-y-scroll flex-wrap justify-center items-center h-[345px]">
        <div className="card bg-base-100 w-80 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card bg-base-100 w-80 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card bg-base-100 w-80 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <motion.div initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1}}  className="card bg-base-100 w-80 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </motion.div>
        <motion.div initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.2}}  className="card bg-base-100 w-80 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </motion.div>
        <motion.div initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.3}} className="card bg-base-100 w-80 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
