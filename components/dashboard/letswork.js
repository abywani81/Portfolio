import React from "react";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { Unbounded } from "next/font/google";
import { cal } from "@/data/links";

const unbounded = Unbounded({
  subsets: ["latin"],
});

export default function LetsWork() {
  return (
    <div className="bg-gray-950 rounded -xl mt-6 p-2 lg:h-[294px] w-full flex justify-center flex-col items-center border border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center w-full h-full text-9xxl lg:text-[12rem] ">
        <TextHoverEffect text="ABID WANI" />
      </div>
      <h1
        className={`${unbounded.className} lg:text-5xl text-xl lg:mb-6 mb-3 lg:py-8 z-10`}
      >
        Let&apos;s work together
      </h1>
      <a
        href={cal}
        target="_blank"
        className="text-white border border-white rounded-full px-6 py-1 text-sm sm:text-lg transition-all hover:bg-white hover:text-black z-10"
      >
        Book a Call
      </a>
    </div>
  );
}
