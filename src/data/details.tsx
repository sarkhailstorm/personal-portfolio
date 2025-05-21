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
      <h1 className="font-bold text-xl dark:text-white text-gray-800">
        Web Developer Intern
      </h1>
      <p className="dark:text-white text-gray-600">
        During my front-end internship at Apexure, I built web interfaces and
        interactive features for client projects using modern JavaScript.
        Learned how professional teams ship products - from code reviews to
        building interfaces that worked well and looked great.
      </p>
    </div>
  ),
  experience: (
    <div className="flex flex-col gap-2">
      <Image src="/tech.png" alt="Logo" width={120} height={100} />
      <h1 className="font-bold text-xl dark:text-white text-gray-800">
        Software Developer
      </h1>
      <div className="flex flex-col gap-2">
        <p className="dark:text-white text-gray-600">
          Developed multiple full-stack web apps with modern technologies like Next.js, focusing on performance and
          UX, while contributing features and bug fixes to collaborative GitHub
          projects.
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
      <p className="text-xl font-bold dark:text-white text-gray-800">CS Grad</p>
      <p className="dark:text-white text-gray-600">
        Graduated from Caset College of Computer Sciences with great grades.
        Gained a solid foundation in software development, web technologies, and
        problem-solving through hands-on projects and coursework.
      </p>
    </div>
  ),
};
