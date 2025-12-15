'use client' 

import Image from "next/image";
import React, { useState, useCallback } from "react";

// Mockup data สำหรับรายการ Portfolio ย่อย (Q Chang)
const qChangMockups = [
  { id: 1, name: "Website Q-chang (Nuxt/Vue)", link: "https://www.q-chang.com/" },
  { id: 2, name: "Link Tracking (Figma Design)", link: "https://www.figma.com/design/9p4eV70uCKuRQmdEbIc23m/Merge-Order?node-id=9-4462&t=OmaR8zTrdjznTeX5-1" },
  { id: 3, name: "Link Tracking (Demo)", link: "https://sit-test.q-chang.io/tracking/order/690458ff0ce3694d9c65a6fb" },
  { id: 4, name: "Q-chang Line Bot (Node.js)", link: "https://line.me/R/ti/p/%40jqc3590i" },
  { id: 5, name: "Q-chang Line Bot (Figma Design)", link: "https://www.figma.com/design/fZDubFDi7qIESwQts8WJIp/Line-OA?m=dev " },
];

// Mockup data สำหรับรายการ Portfolio ย่อย (RiverParkConsultant)
const riverParkMockups = [
  { id: 1, name: "PDPA Tokyo Marine (Figma design)", link: "https://www.figma.com/design/fbhIpWwP6AxGDJGd8HjuqT/Doc.8?node-id=6-2&p=f&t=yVbfSjdP516qV9y2-0" },
  { id: 2, name: "PDPA Tokyo Marine (Figma design 2)", link: "https://www.figma.com/design/d94Sd7hEIzkCJeuynp7M7e/Document-11---12---Memo?node-id=0-1&p=f&t=kYf21bP2fyh4S33r-0" },
];

// รหัสผ่านสำหรับลิงก์ Figma
const FIGMA_PASSWORD = "220939";

const Experience: React.FC<{}> = () => {
  const [showQChangPortfolio, setShowQChangPortfolio] = useState(false);
  const [showRiverParkPortfolio, setShowRiverParkPortfolio] = useState(false);

  // ฟังก์ชันจัดการการคลิกลิงก์ (มีการตรวจสอบรหัสผ่าน)
  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    // 1. ตรวจสอบว่าเป็นลิงก์ Figma หรือไม่
    const isFigmaLink = link.includes('figma.com/design');

    if (isFigmaLink) {
      // ป้องกันการเปิดลิงก์ทันที
      e.preventDefault(); 
      
      // 2. ใช้ prompt() เพื่อให้ผู้ใช้กรอกรหัสผ่าน
      const enteredPassword = prompt("🔐 กรุณากรอกรหัสผ่านเพื่อเข้าชมงาน Figma Design:");

      // 3. ตรวจสอบรหัสผ่าน
      if (enteredPassword === FIGMA_PASSWORD) {
        // ถ้าถูกต้อง: แจ้งเตือนสำเร็จและเปิดลิงก์
        window.open(link, '_blank');
      } else if (enteredPassword !== null) {
        // ถ้าไม่ถูกต้อง (และผู้ใช้ไม่ได้กด Cancel)
        alert("❌ รหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง");
      }
      // ถ้าผู้ใช้กด Cancel (enteredPassword จะเป็น null) จะไม่ทำอะไร
    }
    // สำหรับลิงก์ที่ไม่ใช่ Figma, จะปล่อยให้เหตุการณ์ทำงานต่อไปตามปกติ
  }, []);


  const renderPortfolioList = (mockups: typeof qChangMockups) => (
    <ul className="list-disc list-inside">
      {mockups.map((mockup) => (
        <li key={mockup.id} className="text-gray-300 ml-2 mb-1">
          <a 
            href={mockup.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition duration-200 underline"
            onClick={(e) => handleLinkClick(e, mockup.link)} // ใช้ฟังก์ชันตรวจสอบรหัสผ่าน
          >
            {mockup.name}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      
      {/* // Q-chang Experience */}
      <div className=" container mx-auto 2xl pb-10 border-b border-[#2E2E2E]">
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
              Developer (Contract)
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            May 2023 - Present, Thailand
          </p>
        </div>

        <p className="text-gray-300 pt-5">
          As a Front-End Developer at Q-Chang, I specialize in Nuxt.js,
          TypeScript, and Vuetify to create intuitive, responsive web platforms.
          I’ve implemented key features, optimized performance, and developed a
          Line Bot with Firebase to enhance customer interactions, delivering
          seamless user experiences.
        </p>
        
        <div className="flex-col flex sm:flex-row flex-wrap items-center">
          {/* Tech Tags */}
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Nuxt.js</div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Vue</div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Vuetify</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Typescript</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Firebase Cloud function</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Line Bot</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Node.Js</div>
          
          {/* ปุ่ม Portfolio (Q Chang) */}
          <button 
            onClick={() => setShowQChangPortfolio(!showQChangPortfolio)} 
            className="mt-5 ml-4 px-5 py-2 rounded-full text-white bg-purple-700 hover:bg-purple-600 transition duration-300 w-max font-semibold text-sm flex items-center relative z-10 cursor-pointer"
          >
            🚀 Portfolio ({showQChangPortfolio ? '▲ Hide' : '▼ Show'})
          </button>
        </div>
        
        {/* รายการ Portfolio ย่อย (Q Chang) */}
        {showQChangPortfolio && (
          <div className="mt-4 p-4 border border-purple-700/50 rounded-lg bg-[#1a1a1a] transition duration-300 relative z-10 cursor-default">
            <h4 className="text-white font-semibold mb-3">Q Chang Case Studies:</h4>
            {renderPortfolioList(qChangMockups)}
          </div>
        )}
      </div>
      
      {/* // RiverPark Experience */}
      <div className=" container mx-auto 2xl pt-5 pb-10 border-b border-[#2E2E2E]">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/rivarpark-shot-logo.webp"}
              height={30}
              width={30}
              alt={"Aong Chonprakun - UX Experience"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">RiverParkConsultant / </span>
              Software Developer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            Sep 2021 - May 2023, Thailand
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

        <div className="flex-col flex sm:flex-row flex-wrap items-center">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Next.js</div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">React</div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Material UI</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Daisy UI</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Redux</div>

          {/* ปุ่ม Portfolio (RiverPark) */}
          <button 
            onClick={() => setShowRiverParkPortfolio(!showRiverParkPortfolio)} 
            className="mt-5 ml-4 px-5 py-2 rounded-full text-white bg-purple-700 hover:bg-purple-600 transition duration-300 w-max font-semibold text-sm flex items-center relative z-10 cursor-pointer"
          >
            🚀 Portfolio ({showRiverParkPortfolio ? '▲ Hide' : '▼ Show'})
          </button>
        </div>
        
        {/* รายการ Portfolio ย่อย (RiverPark) */}
        {showRiverParkPortfolio && (
          <div className="mt-4 p-4 border border-purple-700/50 rounded-lg bg-[#1a1a1a] transition duration-300 relative z-10 cursor-default">
            <h4 className="text-white font-semibold mb-3">RiverPark Case Studies:</h4>
            {renderPortfolioList(riverParkMockups)}
          </div>
        )}
      </div>
      
      {/* // Patkol Experience (คงปุ่มลิงก์ทันที) */}
      <div className=" container mx-auto 2xl pt-5 pb-10 ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/patkol-company-shot-logo.webp"}
              height={30}
              width={30}
              alt={"Aong Chonprakun - Software Developer"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">Patkol Co., Ltd. / </span>
              Full-Stack Developer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            Jan 2019 - Aug 2021, Thailand
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

        <div className="flex-col flex sm:flex-row flex-wrap items-center">
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">PHP</div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">SQL Server</div>
          <div className="bg-transparent mt-5 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">Line Bot</div>
          <div className="bg-transparent mt-5 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">Jquery</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;