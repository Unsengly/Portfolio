import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaTelegram, // Added the Telegram icon
} from "react-icons/fa"; // Import FaTelegram for Telegram icon
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Engineering", "Full Stack Developer.", "UX/UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD AND Feel free to ask Me</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">UN SENGLY</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a software developer. My purpose is to simplify the digital experience
          and guide through each and every interaction. I'm not adding motion just to spruce things up,
          but doing it in ways that improve the user experience.
        </p>
      </div>
      
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        {/* Social Media Links */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
          <div className="flex gap-4">
            <a
              href="https://github.com/Unsengly/Portfolio.git"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon hover:text-red-500 transition duration-300 ease-in-out"
            >
              <FaGithub />
            </a>
            
            <a
              href="https://t.me/unsengly"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon hover:text-blue-500 transition duration-300 ease-in-out"
            >
              <FaTelegram /> {/* Use the Telegram icon here */}
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon hover:text-blue-400 transition duration-300 ease-in-out"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon hover:text-blue-700 transition duration-300 ease-in-out"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Best Skills on</h2>
          <div className="flex gap-4">
            <span className="bannerIcon hover:text-blue-500 transition duration-300 ease-in-out">
              <FaReact />
            </span>
            <span className="bannerIcon hover:text-black transition duration-300 ease-in-out">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon hover:text-teal-500 transition duration-300 ease-in-out">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon hover:text-green-500 transition duration-300 ease-in-out">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
