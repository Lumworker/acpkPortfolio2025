import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className="tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center">
          I am a full-stack developer with expertise in web applications, system
          integrations, and IoT solutions. Currently working at SCG Q-CHANG, I
          focus on developing and optimizing their home & living digital
          platform. Previously, I contributed to PDPA Tokio Marine Safety
          Insurance web applications at Riverpark Consultant and led IoT-related
          projects at Patkol.Co.ltd, including IoT Smart Automation and Line Bot
          integrations for factory monitoring and HR management.
          <br />
          <br />
          My skills include JavaScript, TypeScript, PHP, Java, and SQL Server,
          along with frameworks such as Nuxt.js, Next.js, and Vuetify. I also
          have experience in database design, API integration, and developing
          Line Bots. I am proficient in using tools like Figma, Postman, GitHub,
          and SQL Server. My passion lies in creating innovative, efficient, and
          user-centric solutions that solve real-world challenges through
          technology.
        </p>
      </div>
    </section>
  );
};

export default About;
