import Image from "next/image";
import React from "react";
import devHunt from "../public/assets/dev_hunt.png";
import gamersParadise from "../public/assets/Gamers-Paradise.png"
import Link from "next/link";
import ProjectCard from "./ProjectCard";
const Projects = () => {


  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#236094] dark:text-[#8b8bff]">
          Projects
        </p>
        <h2 className="py-4"> What I've Built </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            projectImage={devHunt}
            projectName="Dev Hunt"
            projectUrl="https://github.com/Torfrancis447/dev-hunt-front-end"
          />
          <ProjectCard
            projectImage={gamersParadise}
            projectName="Gamer's Pardise"
            projectUrl="https://gamers-paradise-tf.netlify.app/"
          />
          {/* <ProjectCard
            projectImage={devHunt}
            projectName="Dev Hunt"
            projectUrl="/"
          />
          <ProjectCard
            projectImage={devHunt}
            projectName="Dev Hunt"
            projectUrl="/"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
