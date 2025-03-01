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
import { details } from "@/data/details";
import { services } from "@/data/services";

const CarouselPlugin = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false})
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
            <CountUp to={50} topText="Projects" bottomText="Completed"  />
            <CountUp to={20} topText="Happy" bottomText="Clients"  />
            <CountUp to={1000} topText="GitHub" bottomText="Contributions"  />
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
