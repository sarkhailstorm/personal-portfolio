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
        Built full-stack web applications using JavaScript, implementing
        component-based UIs, REST APIs, authentication, and database
        integration. Collaborated in Agile sprints with a cross-functional team,
        contributing to development, testing, and code reviews using Git.
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
          Developed multiple full-stack web apps with modern technologies like
          Next.js, focusing on performance and UX, while contributing features
          and bug fixes to collaborative GitHub projects.
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
        Built a strong foundation in software development through coursework and
        projects, covering backend systems, databases, user-friendly interfaces,
        collaborative workflows, and industry-relevant tools and technologies.
      </p>
    </div>
  ),
};
