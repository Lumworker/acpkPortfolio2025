"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // นำเข้า motion

const Banner: React.FC<{}> = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev); // Toggle flip state
    }, 5000); // Flip every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[100px] z-[20]">
      <div className="flex flex-col justify-center text-center">
        <div className="justify-center flex">
          <div
            className="relative w-[250px] h-[250px] flex items-center justify-center"
            style={{ perspective: "1000px" }} // Enables 3D effect
          >
            <motion.div
              className="absolute w-full h-full flex items-center justify-center"
              style={{
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateY: isFlipped ? 180 : 0, // Flip effect
              }}
              initial={false} // ป้องกันการแสดงผลจากค่าเริ่มต้น
              transition={{
                duration: 1, // Time for the flip animation
              }}
            >
              {/* Front Side */}
              <Image
                priority
                src="/Me.png"
                height={250}
                width={250}
                alt="Front Side"
                onClick={() => setIsFlipped(!isFlipped)} // เพิ่ม onClick
              />
            </motion.div>

            <motion.div
              className="absolute w-full h-full flex items-center justify-center"
              style={{
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
                transform: "rotateY(180deg)",
              }}
              animate={{
                rotateY: isFlipped ? 0 : 180, // Flip back effect
              }}
              initial={false} // ป้องกันการแสดงผลจากค่าเริ่มต้น
              transition={{
                duration: 1, // Time for the flip animation
              }}
            >
              {/* Back Side */}
              <Image
                priority
                src="/me3.webp"
                height={250}
                width={250}
                alt="Back Side"
                onClick={() => setIsFlipped(!isFlipped)} // เพิ่ม onClick
              />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-10 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Aong Chonprakun!
        </div>
        <div className="flex justify-center">
          <p className="text-2xl font-medium tracking-tighter text-gray-300 max-w-[600px]">
            I do Code &{" "}
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Chill
            </span>
          </p>
          <Image
            src="/popcorn.gif"
            height={50}
            width={50}
            alt="Aong Chonprakun"
          />
        </div>

        <p className="text-md text-gray-200 my-5 max-w-[600px]">
          Software Engineer focused on web applications with expertise in React,
          Vue, Next.js, and Nuxt.js, dedicated to creating efficient and
          user-friendly experiences.
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:Lumworker@hotmail.com")}
            className="z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
