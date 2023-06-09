
import Link from "next/link";
import React from "react";
import TitleRevealer from "./animation/TitleRevealer";
import { FaGithub, FaLinkedinIn, FaDev } from "react-icons/fa";
import {
  HiOutlineChevronDoubleUp,
  HiOutlineMailOpen,
  HiOutlineMail,
} from "react-icons/hi";
import Map from "./Map";
const Contact = ({isClicked, handleClick }) => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1248px] m-auto px-2 py-16 w-full">
      <TitleRevealer>
        <p className="text-xl tracking-widest uppercase text-[#236094] dark:text-[#8b8bff]">
          Contact
        </p>
        </TitleRevealer>
        <TitleRevealer>
        <h2 className="py-4">Get in Touch</h2>
        </TitleRevealer>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl dark:shadow-none dark:bg-[#1f2937] shadow-gray-400 rounded-xl p-4 ">
            <div className="lg:p-4 h-full">
              <div className="rounded-xl">
                <Map />
              </div>              
              <div>
                <h2 className="py-2">Tor Francis</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  Avaliable for full-time, part-time, and contract positions
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg dark:shadow-none dark:bg-[#171923] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="https://www.linkedin.com/in/tor-francis/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn className="dark:text-white" />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg dark:shadow-none dark:bg-[#171923] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="https://github.com/Torfrancis447"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="dark:text-white" />
                    </a>
                  </div>
                  <div onClick={handleClick} className="rounded-full shadow-lg dark:shadow-none dark:bg-[#171923] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="mailto:torfrancis447@gmail.com" title="email">
                      {isClicked ? (
                        <HiOutlineMailOpen className="dark:text-white" />
                      ) : (
                        <HiOutlineMail className="dark:text-white" />
                      )}
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg dark:shadow-none dark:bg-[#171923] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="https://dev.to/torfrancis447"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaDev />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl dark:shadow-none dark:bg-[#1f2937] shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3  border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <div>
                  <button className="w-full p-4 text-gray-100 mt-4">
                    Send{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full dark:shadow-none shadow-lg shadow-gray-400 p-4 cursor-pointer hover:animate-bounce">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
