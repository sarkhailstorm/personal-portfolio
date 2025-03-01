"use client";
import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CountUp from "@/app/services/CountUp";

const details: Record<string, React.ReactNode> = {
  internship: (
    <div className="flex flex-col gap-3">
      <img
        src="https://www.apexure.com/images/icons/apexure-logo.svg"
        alt="Apexure Logo"
        className="w-40"
      />
      <h1 className="font-bold">Web Developer Intern at Apexure</h1>
      <p>
        Worked as a Front-End Web Developer Intern at Apexure, where I built
        aesthetically pleasing landing pages and wireframes using various tools
        and technologies. Gained experience in a collaborative environment while
        following best practices in software development.
      </p>
    </div>
  ),
  experience: (
    <div className="flex flex-col gap-2">
      <img src="/Coding.png" alt="Logo" className="w-10 h-10" />
      <h1 className="font-bold text-xl">Software Developer</h1>
      <ul className="flex flex-col gap-2">
        <li>
          Personal Projects – Built multiple full-stack web applications using
          modern technologies like Next.js etc.
        </li>
        <li>
          Open Source Contributions – Contributed bug fixes and features to
          open-source projects on GitHub.
        </li>
      </ul>
    </div>
  ),
  credentials: (
    <div className="flex flex-col gap-4">
      <img
        src="https://casetcollege.in/wp-content/uploads/2023/04/logonew.png"
        alt="Logo"
        className="w-40"
      />
      <p className="text-xl font-bold">CS Graduate</p>
      <p>
        Graduated from Caset College of Computer Sciences with great grades.
        Gained a solid foundation in software development, web technologies, and
        problem-solving through hands-on projects and coursework.
      </p>
    </div>
  ),
};

const services = [
  {
    img: "Design.png",
    title: "Design",
    desc: "I make things look awesome while keeping them easy to use. Good design isn't just about pretty colors—it's about making sure everything flows smoothly and feels right!",
  },
  {
    img: "Development.png",
    title: "Development",
    desc: "From front-end magic to back-end logic, I bring ideas to life with clean and efficient code. Whether it’s a website, an app, or a full-stack project, I build things that just work.",
  },
  {
    img: "Problem Solving.png",
    title: "Problem Solving",
    desc: "Got a tricky bug or a complex challenge? I love cracking tough problems and finding creative solutions that make everything run smoother and better.",
  },
  {
    img: "Security.png",
    title: "Security",
    desc: "Keeping things safe and sound! I build applications with security in mind so there are no nasty surprises—just smooth, secure experiences for users.",
  },
  {
    img: "Efficiency.png",
    title: "Efficiency",
    desc: "Fast, optimized, and hassle-free—that’s my style! I focus on making everything run as smoothly as possible, so users don’t have to deal with slow, clunky apps.",
  },
];

const CarouselPlugin = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const [activeSection, setActiveSection] =
    useState<keyof typeof details>("internship");

  return (
    <div className="h-screen items-center flex flex-col justify-center w-full max-w-4xl mx-auto gap-6">
      <div>
        <h1 className="text-4xl font-bold mt-20">How do I help?</h1>
      </div>
      <div className="flex justify-between gap-16">
        <div className="flex flex-col gap-2">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col gap-4 aspect-square p-6">
                        <div>
                          <img
                            src={service.img}
                            alt={`Image ${index}`}
                            className="w-15 h-15"
                          />
                        </div>
                        <div className="flex flex-col gap-4">
                          <h1 className="font-bold text-xl">{service.title}</h1>
                          <p>{service.desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="flex gap-8 text-center justify-center">
            <CountUp to={50} bottomText="Completed" topText="Projects"/>
            <CountUp to={20} bottomText="Clients" topText="Happy"/>
            <CountUp to={1000} bottomText="Contributions" topText="GitHub"/>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <nav className="flex gap-4">
            {Object.keys(details).map((key) => (
              <div
                key={key}
                onClick={() => setActiveSection(key as keyof typeof details)}
                className={`cursor-pointer ${
                  activeSection === key ? "border-b-4" : "border-0"
                }`}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </div>
            ))}
          </nav>
          <div className="p-4 border w-[90%] h-[66%] rounded-md">
            {details[activeSection]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselPlugin;
