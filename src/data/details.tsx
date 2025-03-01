import React from "react";

export const details: Record<string, React.ReactNode> = {
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
