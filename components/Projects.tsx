import Image from "next/image";
import Link from "next/link";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        WORK EXPERIENCE
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl ">
        EXPLORE MY JOURNEY
      </p>
      <div className="container mx-auto 2xl">
        <div className="flex-col flex md:flex-row">
          <Link
            href="https://q-chang.com"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/q-chang-logo-color.svg"
                height={100}
                width={150}
                objectFit="contain"
                alt="Q Chang - Programmer"
              />
              <div className="p-3 max-w-[280px]">
                <p className="text-white font-semibold text-xl">Q Chang</p>
                <p className="text-gray-500 text-[10px]">
                  Programmer: Developed a web platform connecting customers with home & living service providers.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://www.riverparkconsultant.com"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/rivarpark-logo.webp"
                height={97}
                width={150}
                objectFit="contain"
                alt="Riverpark Consultant - Front-End Developer"
              />
              <div className="p-3 max-w-[280px]">
                <p className="text-white font-semibold text-xl">Riverpark Consultant</p>
                <p className="text-gray-500 text-[10px]">
                  Front-End Developer: Built and maintained web applications, focusing on UI/UX improvements.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row">
          <Link
            href="https://www.patkol.com"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/patkol-company-logo.webp"
                height={97}
                width={150}
                objectFit="contain"
                alt="Patkol - Full-Stack Developer"
              />
              <div className="p-3 max-w-[280px]">
                <p className="text-white font-semibold text-xl">Patkol Co., Ltd.</p>
                <p className="text-gray-500 text-[10px]">
                  Full-Stack Developer: Developed HR systems and Line Bot for factory machine alerts.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://www.tot.co.th"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/tot_logo.webp"
                height={97}
                width={150}
                objectFit="contain"
                alt="TOT - Internship"
              />
              <div className="p-3 max-w-[280px]">
                <p className="text-white font-semibold text-xl">TOT Co., Ltd.</p>
                <p className="text-gray-500 text-[10px]">
                  Internship: Developed web applications for customer profiles in the 3G system.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row">
          <Link
            href="https://ducklab.com"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/duck_lab_logo.webp"
                height={100}
                width={150}
                objectFit="contain"
                alt="Duck Lab - Full-Stack Developer"
              />
              <div className="p-3 max-w-[280px]">
                <p className="text-white font-semibold text-xl">Duck Lab</p>
                <p className="text-gray-500 text-[10px]">
                  Full-Stack Developer: Developed applications for the Royal Thai Air Force's HR system.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
