import React, {useState} from "react";
import ResumeButton from "./ResumeButton";
import { FaGithub, FaLinkedinIn, FaDev } from "react-icons/fa";
import {HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi"

export const Main = ({isClicked, handleClick}) => {
  

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-gray-400">
            {" "}
            {"<Hello World />"}{" "}
          </p>
          <div className="flex items-center justify-center">
         
          <h1 className="py-4 text-transparent bg-gradient-to-r from-green-400 via-blue-600 to-pink-500 bg-clip-text animate-gradient">  Hi , I'm Tor Francis</h1>
          </div>
          <h1 className="py-2"> A Full-Stack Web Developer </h1>
          <p className="py-4 text-gray-600 dark:text-gray-400 max-w-[75%] m-auto">
            A highly motivated and natural people-person software developer with
            experience designing and developing full-stack and front-end
            applications in Ruby on Rails, PostgreSQL, and React. Proven ability
            to provide excellent end-users experience with years of experience
            in sales and team management.
          </p>
           <div className="py-4 justify-center flex items-center text-gray-700 dark:text-gray-300 overflow-hidden">
            <ResumeButton />
          </div>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-xl dark:shadow-none shadow-gray-400 p-6 cursor-pointer dark:bg-[#1f2937] hover:scale-110 ease-in duration-300">
              <a href="https://www.linkedin.com/in/tor-francis/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="dark:text-white"/>
              </a>
            </div>
            <div className="rounded-full shadow-xl dark:shadow-none shadow-gray-400 p-6 cursor-pointer dark:bg-[#1f2937] hover:scale-110 ease-in duration-300">
            <a href="https://github.com/Torfrancis447" target="_blank" rel="noopener noreferrer">
              <FaGithub className="dark:text-white" />
              </a>
            </div>
            <div onClick={handleClick} className="rounded-full shadow-xl dark:shadow-none shadow-gray-400 p-6 cursor-pointer dark:bg-[#1f2937] hover:scale-110 ease-in duration-300">
              <a href='mailto:torfrancis447@gmail.com' title="email">
              {isClicked ? <HiOutlineMailOpen className="dark:text-white" /> : <HiOutlineMail className="dark:text-white" /> }
              </a>
            </div>
            <div className="rounded-full shadow-xl dark:shadow-none shadow-gray-400 p-6 cursor-pointer dark:bg-[#1f2937] hover:scale-110 ease-in duration-300">
            <a href="https://dev.to/torfrancis447" target="_blank" rel="noopener noreferrer">
              <FaDev />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
