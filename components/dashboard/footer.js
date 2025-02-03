import React from "react";
import Image from "next/image";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { instagram, linkedin } from "@/data/links";

function Footer() {
  return (
    <footer className="bg-[#1D2025] border-t-gray-800 border-t">
      <div className="max-w-7xl mx-auto px-5  py-8">
        <div className="flex justify-between items-start flex-wrap">
          <div className="flex flex-col ">
            <Image src="/logo-abid.png" width={50} height={50} alt="Logo" />
            <div className="">
              <h2 className="text-lg font-semibold text-white mt-4">
                Abid Wani
              </h2>
              <div className="text-gray-400 flex flex-wrap gap-2 sm:gap-5">
                <a href="mailto:abywani81@gmail.com" className="contact-link ">
                  abywani81@gmail.com
                </a>
                <a href="tel:+916005084214">+91 7889333782</a>
              </div>
            </div>
          </div>
          <div className="flex gap-6 mt-4 flex-wrap">
            <a
              href={linkedin}
              target="_blank"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition"
            >
              <FaLinkedin className="text-blue-500" size={20} /> LinkedIn
            </a>
            <a
              href={instagram}
              target="_blank"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition"
            >
              <FaInstagram className="text-pink-500" size={20} /> Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
