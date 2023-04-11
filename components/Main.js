import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-gray-400">
            {" "}
            {"<Hello World />"}{" "}
          </p>
          <div className="flex items-center justify-center">
          <h1 className="py-4 text-gray-700 dark:text-gray-300">
            
          </h1>
          <h1 className="py-4 text-transparent bg-gradient-to-r from-green-400 via-blue-600 to-pink-500 bg-clip-text animate-gradient">  Hi , I'm Tor Francis</h1>
          </div>
          <h1 className="py-2 text-gray-600 dark:text-gray-300"> A Full-Stack web Developer </h1>
          <p className="py-4 text-gray-600 dark:text-gray-400 max-w-[70%] m-auto">
            A highly motivated and natural people-person software developer with
            experience designing and developing full-stack and front-end
            applications in Ruby on Rails, PostgreSQL, and React. Proven ability
            to provide excellent end-users experience with years of experience
            in sales and team management.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-xl dark:shadow-none shadow-gray-400 p-6 cursor-pointer dark:bg-[#1f2937] hover:scale-110 ease-in duration-300">
              <FaLinkedinIn className="dark:text-white"/>
            </div>
            <div className="rounded-full shadow-xl dark:shadow-none shadow-gray-400 p-6 cursor-pointer dark:bg-[#1f2937] hover:scale-110 ease-in duration-300">
              <FaGithub className="dark:text-white"/>
            </div>
            <div className="rounded-full shadow-xl dark:shadow-none shadow-gray-400 p-6 cursor-pointer dark:bg-[#1f2937] hover:scale-110 ease-in duration-300">
              <AiOutlineMail className=" dark:text-white"/>
            </div>
            <div className="rounded-full shadow-xl dark:shadow-none shadow-gray-400 p-6 cursor-pointer dark:bg-[#1f2937] hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill className="dark:text-white"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
