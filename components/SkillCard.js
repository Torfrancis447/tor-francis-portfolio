import React from "react";
import Image from "next/image";


function SkillCard({ imageSrc, title }) {
  return (
    <div className="p-6 dark:shadow-none dark:bg-[#1f2937] shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid-cols-2 gap-4 justify-center items-center">
        <div className="bg-[#1f2937] m-auto flex flex-col items-center justify-center">
          <Image src={imageSrc} width="64" height="64" alt="skill" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-center">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
