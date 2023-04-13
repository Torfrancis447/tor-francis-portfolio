import React from "react";
import Image from "next/image";
import coverPhoto from "../public/assets/T-Francis-54.jpg";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1248px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#236094] dark:text-[#8b8bff]">
            {" "}
            About{" "}
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Full-stack Developer that enjoys creatively solving problems and
            constantly learning new skills with the ultimate goal of making an
            impact on how we interact with technologies.
          </p>
          <p className="py-2 text-gray-600">
            {`My Technical Skills Include React, Ruby on Rails, Javascript, HTML,
            CSS, and SQL. I have built projects with Material UI, Tailwind CSS,
            and BootStrap libraries. In Addition to my technical skills, I have
            strong communication and collaboration skills from six years in a
            retail sales and management environment. I am both a detail-oriented
            and patient individual that's well-versed in team collaboration and
            effective communication.`}
          </p>
          <p className="py-2 text-gray-600">
            {`When I'm not coding, I prefer to research new technologies and
            spend time with my cat. If my cat isn't in the mood, then I tend to
            go exploring the city with friends.`}
          </p>
          {/* <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out new Projects
          </p> */}
        </div>
        <div className="w-full h-auto m-auto dark:shadow-none shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded xl" src={coverPhoto} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
