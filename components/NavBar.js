import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaDev } from "react-icons/fa";
import { HiOutlineMailOpen, HiOutlineMail } from "react-icons/hi";

const NavBar = ({handleClick, isClicked}) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  });
  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 dark:shadow-none shadow-xl z-[100] linear duration-100 dark:bg-[#171923] bg-[#ecf0f3]"
          : "fixed w-full h-20 z-[100] linear duration-100 dark:bg-[#171923] bg-[#ecf0f3]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 z-[100]">
        <Image
          src="/../public/assets/Tor-logo.png"
          alt="/"
          width="125"
          height="50"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about-me">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={toggleNav} className="md:hidden pr-2">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60 dark:bg-black/50" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 lg:w-[35%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#171923] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Link href="/">
              <Image
                src="/../public/assets/Tor-logo.png"
                width="85"
                height="35"
                alt="/"
              />
            </Link>
            <div
              onClick={toggleNav}
              className="rounded-full dark:shadow-none shadow-lg shadow-gray-400 p-3 cursor-pointer dark:bg-[#1f2937]"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              Avaliable for hire 2 weeks prior
            </p>
          </div>
          <div className="py-4 flex-col">
            <ul>
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="py-4 text sm">
                  Home
                </li>
              </Link>
              <Link href="/#about-me">
                <li onClick={() => setNav(false)} className="py-4 text sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40 ">
              <p className="uppercase tracking-widest text-[#236094] dark:text-[#8b8bff]">
                {`Let's Connect`}
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-xl dark:shadow-none shadow-gray-400 p-6 cursor-pointer dark:bg-[#1f2937] hover:scale-110 ease-in duration-300">
              <a href="https://www.linkedin.com/in/tor-francis/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="dark:text-white"/>
              </a>
            </div>
            <div className="rounded-full shadow-xl dark:shadow-none shadow-gray-400 p-6  cursor-pointer dark:bg-[#1f2937] hover:scale-110 ease-in duration-300">
            <a href="https://github.com/Torfrancis447" target="_blank" rel="noopener noreferrer">
              <FaGithub className="dark:text-white" />
              </a>
            </div>
            <div onClick={handleClick} className="rounded-full shadow-xl dark:shadow-none  shadow-gray-400 p-6 cursor-pointer dark:bg-[#1f2937] hover:scale-110 ease-in duration-300">
              <a href='mailto:torfrancis447@gmail.com' title="email">
              {isClicked ? <HiOutlineMailOpen className="dark:text-white" /> : <HiOutlineMail className="dark:text-white" /> }
              </a>
            </div>
            <div className="rounded-full shadow-xl dark:shadow-none shadow-gray-400 p-6 cursor-pointer dark:bg-[#1f2937]  hover:scale-110 ease-in duration-300">
            <a href="https://dev.to/torfrancis447" target="_blank" rel="noopener noreferrer">
              <FaDev />
              </a>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
