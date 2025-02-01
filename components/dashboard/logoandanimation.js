import Image from "next/image";
import React from "react";
import ProjectContainer from "../ui/ProjectContainer";
import { logoAndAnimations } from "@/data/logos";

function LogoAndAnimation() {
  return (
    <div className=" flex flex-col items-center min-h-screen w-full lg:p-10 sm:p-5 p-5 md:p-8 bg-[#1F2227]">
      <div className="flex gap-4 items-center mb-6 self-start">
        <div className="bg-gray-600 lg:p-3 p-2 md:p-3 rounded">
          <Image height={30} width={30} alt="logo" src="/pen-tool.png" />
        </div>
        <h2 className="text-white lg:text-3xl text-2xl md:text-2xl">
          Logo &amp; Animation
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
        {logoAndAnimations.map((logoAnimation) => (
          <ProjectContainer key={logoAnimation.id} project={logoAnimation} />
        ))}
      </div>
    </div>
  );
}

export default LogoAndAnimation;
