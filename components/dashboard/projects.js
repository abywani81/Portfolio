import Image from "next/image";
import React from "react";
import ProjectContainer from "../ui/ProjectContainer";
import { projects } from "@/data/projects";

function Projects() {
  return (
    <div className="min-h-screen w-full lg:p-10 sm:p-5 p-5 md:p-8 bg-[#1F2227]">
      <div className="flex gap-4 items-center mb-6">
        <div className="bg-gray-600 lg:p-3 p-2 md:p-3 rounded">
          <Image height={30} width={30} alt="logo" src="/project-icon.png" />
        </div>
        <h2 className="text-white lg:text-3xl text-2xl md:text-2xl">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-width-800">
        {projects.map((project) => (
          <ProjectContainer key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
