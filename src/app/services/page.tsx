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
import { Button } from "@/components/ui/button";

const details = {
  internship:
    "3 month internship at Apexure. Learned how to tackle large scale projects.",
  exprerience:
    "3 years of coding experience. I build large scale projects and tackle large projects.",
};

const CarouselPlugin = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [activeSection, setActiveSection] = useState<keyof typeof details>("internship");

  return (
    <div className="h-screen items-center flex flex-col justify-center gap-8">
      <div>
        <h1 className="text-4xl">How do I help?</h1>
      </div>
      <div className="flex">
        <div>
          <div>
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-xs"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="flex gap-8 text-center">
            <div>
              <h2>50+</h2>
              <p>
                Projects <br /> Completed
              </p>
            </div>
            <div>
              <h2>20+</h2>
              <p>
                Satisfied <br /> Clients
              </p>
            </div>
            <div>
              <h2>3+</h2>
              <p>
                Years of <br /> Experience
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <nav className="flex gap-4">
            {Object.keys(details).map((key) => (
                <div key={key}
                  onClick={() => setActiveSection(key as keyof typeof details)}
                  className={`cursor-pointer ${activeSection === key ? "border-b-4" : "border-0"}`}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </div>
            ))}
          </nav>
          <div>
            <p>{details[activeSection]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselPlugin;
