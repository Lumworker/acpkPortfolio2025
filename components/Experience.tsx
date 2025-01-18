import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      {/* // Q-chang Experience */}
      <div className=" container mx-auto 2xl">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/q-chang-logo-short.webp"}
              height={30}
              width={30}
              alt={"Aong Chonprakun - UX Experience"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">Q Chang /</span> Front End
              Developer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            May 2022 - Present, Thailand
          </p>
        </div>

        <p className="text-gray-300 pt-5">
          As a Front-End Developer at Q-Chang, I specialize in Nuxt.js,
          TypeScript, and Vuetify to create intuitive, responsive web platforms.
          I’ve implemented key features, optimized performance, and developed a
          Line Bot with Firebase to enhance customer interactions, delivering
          seamless user experiences.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Nuxt.js
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Vue
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Vuetify
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Firebase Cloud function
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Line Bot
          </div>
        </div>
      </div>
      {/* // RiverPark Experience */}
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/rivarpark-shot-logo.webp"}
              height={30}
              width={30}
              alt={"Aong Chonprakun - UX Experience"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">RiverParkConsultant/</span>
              Software Developer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            Sep 2019 - May 2022, Thailand
          </p>
        </div>

        <p className="text-gray-300 pt-5">
          As a Front-End Developer at Riverpark, I developed a PDPA-compliant
          system for Tokyo Marine Insurance, ensuring that user data was handled
          securely and in compliance with privacy regulations. My role involved
          building user-friendly interfaces and collaborating with the team to
          integrate the system seamlessly, delivering a reliable and secure
          solution.
        </p>

        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Next.js
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Material UI
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Daisy UI
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Redux
          </div>
        </div>
      </div>
      {/* // RiverPark Experience */}
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/patkol-company-shot-logo.webp"}
              height={30}
              width={30}
              alt={"Aong Chonprakun - Software Developer"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">Patkol Co., Ltd./</span>
              Full-Stack Developer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            Jan 2017 - Aug 2019, Thailand
          </p>
        </div>

        <p className="text-gray-300 pt-5">
          As a Full-Stack Developer at Patkol, I was responsible for developing
          and maintaining systems for the factory's HR management and machine
          monitoring. I worked on integrating various applications, ensuring
          seamless communication between systems. Additionally, I developed
          automated alerts and notification systems using the Line Bot framework
          and Firebase, significantly improving factory operations and reducing
          downtime.
        </p>

        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            PHP
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            SQL Server
          </div>
          <div className="bg-transparent mt-5 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Line Bot
          </div>
          <div className="bg-transparent mt-5 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Jquery
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
