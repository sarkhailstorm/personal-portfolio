import React from "react";

const skills = [
  "HTML5.svg",
  "CSS3.svg",
  "JavaScript.svg",
  "TypeScript.svg",
  "Python.svg",
  "React.svg",
  "Figma.svg",
  "Next.js.svg",
  "Node.js.svg",
  "Express.svg",
  "PostgreSQL.svg",
  "MongoDB.svg",
  "Docker.svg",
];

const SkillsPage = () => {
  return (
    <div className="flex flex-col h-screen gap-16 pt-32">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl">Wanna know about my skills?</h1>
        <h2 className="text-2xl">Alright, let's fill you in on that!</h2>
      </div>
      <div className="flex w-20 gap-4">
        {skills.map((skill, index) => (
          <img key={index} src={skill} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
