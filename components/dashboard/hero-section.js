"use client";
import Image from "next/image";
import { Unbounded } from "next/font/google";
import { HeroHighlight } from "../ui/hero-highlight";
import { motion } from "framer-motion";
const unbounded = Unbounded({
  subsets: ["latin"],
});
export function HeroSection() {
  return (
    <div className="min-h-screen w-full ">
      <HeroHighlight>
        <header className="flex justify-between items-center p-5 max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="">
            <Image
              alt="abid-logo"
              src="/logo-abid.png"
              priority
              width={64}
              height={64}
            />
          </div>
          <div className="flex  sm:flex-row items-center gap-4 sm:gap-6">
            <motion.a
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white text-sm sm:text-lg hover:underline"
              href="#"
            >
              View Resume
            </motion.a>
            <motion.a
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              href="tel:+916005084214"
              className="text-white border border-white rounded-full px-6 py-1 text-sm sm:text-lg transition-all hover:bg-white hover:text-black z-10"
            >
              Book a Call
            </motion.a>
          </div>
        </header>
        <div className="mainSectionHero w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-10 max-w-7xl mx-auto">
          <div className="w-full flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`${unbounded.className} text-4xl sm:text-6xl font-bold text-white mb-4`}
            >
              Hi, <span className="text-[#9EFFA9]">I&apos;m Abid</span>
            </motion.h1>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`${unbounded.className} text-gray-300 text-lg sm:text-xl   lg:text-3xl text-sm`}
            >
              Crafting Intuitive and Impactful Digital Experiences
              <motion.button
                disabled
                className="relative lg:px-6 lg:py-3 px-4 py-1 text-white text-sm font-semibold rounded-full overflow-hidden bg-transparent inline-block ms-3"
              >
                <div
                  className="absolute inset-0 rounded-full p-[2px] bg-transparent"
                  style={{
                    background:
                      "linear-gradient(90deg, #FF5C5C, #FFAA5C, #FFEB5C, #5CFF85, #5CEEFF, #5C85FF, #D45CFF)",
                    WebkitMask:
                      "linear-gradient(white, white) content-box, linear-gradient(white, white)",
                    WebkitMaskComposite: "destination-out",
                    maskComposite: "exclude",
                  }}
                ></div>
                <span className="relative z-10">Product Design</span>
              </motion.button>
            </motion.div>
            <motion.p
              className="text-gray-400 text-sm sm:text-lg mt-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              UI/UX | Product Design Lead | 5+ Years Experience
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center items-center w-full h-full"
          >
            <Image
              src="/abid-image.png"
              alt="Abid Profile"
              width={400}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full h-full overflow-hidden"
            />
          </motion.div>
        </div>
      </HeroHighlight>
    </div>
  );
}
