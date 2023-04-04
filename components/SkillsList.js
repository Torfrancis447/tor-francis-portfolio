import Image from "next/image";
import React from "react";
import SkillCard from "./SkillCard";
const SkillsList = () => {
  return (
    <div id="skills" className="w-full md:h-screen p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4"> What I have worked with</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard
            imageSrc="/../public/assets/icons8-javascript-480.png"
            title="Javascript"
          />
          <SkillCard
            imageSrc="/../public/assets/icons8-html-5-480-trans.png"
            title="HTML"
          />
          <SkillCard
            imageSrc="/../public/assets/icons8-ruby-a-dynamic,-open-source-programming-language.-48.png"
            title="Ruby"
          />
          <SkillCard
            imageSrc="/../public/assets/icons8-react-native-480.png"
            title="React"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
