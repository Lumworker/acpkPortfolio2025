import Image from "next/image";
import React from "react";

const ExperienceQChang: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/q-chang-logo-short.webp"}
              height={30}
              width={30}
              alt={"Aong Chonprakun - UX Experience"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">Q Chang /</span> Front End Developer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            May 2022 - Present, Thailand
          </p>
        </div>

        <p className="text-gray-300 pt-5">
          I have been working at Q-Chang for over a year, contributing to the
          development of a leading service platform in Thailand that connects
          homeowners with professional service providers. As a front-end
          developer with expertise in Nuxt.js, TypeScript, and Vuetify, I focus
          on building and maintaining the company’s web platform to ensure a
          seamless and intuitive user experience. My responsibilities include
          implementing features, optimizing performance, and integrating complex
          systems to deliver a high-quality digital experience.
          <br />
          <br />
          With more than a year of experience in front-end development, I have a
          solid foundation in component-based architecture, state management,
          and responsive design. My expertise in Nuxt.js with TypeScript allows
          me to efficiently manage scalable projects using the
          nuxt-property-decorator and create modular, reusable components
          tailored for both desktop and mobile platforms.
          <br />
          <br />
          In addition to my work on the web platform, I have developed a Line
          Bot for Q-Chang using Firebase Cloud Functions, streamlining customer
          interactions through automation. This involves working with the LINE
          Messaging API, deploying serverless solutions, and managing webhook
          events effectively. My experience with Firebase has enabled me to
          build scalable, real-time backend solutions seamlessly integrated with
          the platform.I am passionate about delivering exceptional user
          experiences, writing clean and maintainable code, and staying updated
          with the latest web development technologies and trends.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Next.js
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Vue
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceQChang;
