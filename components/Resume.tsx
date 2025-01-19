"use client";

import React from "react";
import Link from "next/link";

const Resume: React.FC<{}> = () => {

  return (
    <section id="Resume" className="text-center">
      <h2 className="text-white font-semibold text-5xl">📝 Resume !!</h2>
      <p className="tracking-[0.5em] text-transparent font-light bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl mt-5">
        GET NOW
      </p>
      {/* Button Section */}
      <div className="flex justify-center mt-10" 
      >

      <Link
            href="./CHONPRAKUN.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
        <button
          className="bg-transparent cursor-pointer rounded-3xl text-white py-3 px-10 border border-[#2E2E2E] hover:bg-gradient-to-r hover:from-purple-700 hover:to-orange-500 hover:border-transparent active:scale-95 active:bg-gradient-to-r active:from-orange-500 active:to-purple-700 transition-all"
        >
          Download
        </button>

        </Link>
      </div>


    </section>
  );
};

export default Resume;
