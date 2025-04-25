import Image from "next/image";
import React from "react";

export const details: Record<string, React.ReactNode> = {
  internship: (
    <div className="flex flex-col gap-3">
      <Image
        src="/Apexure Logo.svg"
        alt="Apexure Logo"
        width={150}
        height={150}

      />
      <h1 className="font-bold text-xl">Web Developer Intern</h1>
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
      <Image src="/Experience.webp" alt="Logo" width={120} height={100} />
      <h1 className="font-bold text-xl">Software Developer</h1>
      <div className="flex flex-col gap-2">
        <p>
          Developed multiple full-stack web applications using modern
          technologies like Next.js, focusing on performance and user
          experience, while also actively contributing bug fixes and new
          features to open-source projects on GitHub.
        </p>
      </div>
    </div>
  ),
  credentials: (
    <div className="flex flex-col gap-3">
      <Image
        src="/Caset College Logo.png"
        alt="Logo"
        width={150}
        height={150}

      />
      <p className="text-xl font-bold">CS Grad</p>
      <p>
        Graduated from Caset College of Computer Sciences with great grades.
        Gained a solid foundation in software development, web technologies, and
        problem-solving through hands-on projects and coursework.
      </p>
    </div>
  ),
};
