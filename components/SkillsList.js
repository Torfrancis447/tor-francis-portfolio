import Image from "next/image";
import React from "react";
import SkillCard from "./SkillCard";
import javaScript from "../public/assets/icons8-javascript-480.png"
import html from "../public/assets/icons8-html-5-480-trans.png"
import ruby from "../public/assets/icons8-ruby-a-dynamic,-open-source-programming-language.-48.png"
import react from "../public/assets/icons8-react-native-480.png"
import nextjs from "../public/assets/nextjs-boilerplate-logo.png"
import tailwind from "../public/assets/Tailwind_CSS_Logo.svg.png"
import postgres from "../public/assets/Postgresql_elephant.svg.png"
import css from "../public/assets/icons8-css3-480.png"
const SkillsList = () => {
  return (
    <div id="skills" className="w-full md:h-screen p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#236094] dark:text-[#8b8bff]">
          Skills
        </p>
        <h2 className="py-4 dark:text-gray-300"> What I have worked with</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard
            imageSrc={javaScript}
            title="Javascript"
          />
          <SkillCard
            imageSrc={html}
            title="HTML"
          />
          <SkillCard
            imageSrc={ruby}
            title="Ruby"
          />
          <SkillCard
            imageSrc={react}
            title="React"
          />
          <SkillCard
            imageSrc={nextjs}
            title="Next.js"
          />
           <SkillCard
            imageSrc={tailwind}
            title="Tailwind"
          />
           <SkillCard
            imageSrc={postgres}
            title="Postgres"
          />
           <SkillCard
            imageSrc={css}
            title="CSS"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
