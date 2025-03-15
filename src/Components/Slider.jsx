import React from "react";
import Typewriter from "react-typewriter-effect";
import heroImg from "/myPic_withoutBackground.png"; 
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";
import { SiDjango, SiReact, SiCplusplus } from "react-icons/si";

const Slider = () => {
  return (
    <div id="home" className="hero min-h-screen bg-base-200 flex items-center">
      <div className="hero-content flex-col lg:flex-row-reverse container mx-auto px-8 lg:px-20">
        {/* Image Section */}
        <img
          src={heroImg}
          className="max-w-md rounded-lg object-cover md:h-[70vh] h-[40vh] bg-transparent"
          alt="Durjoy Kumar"
        />

        {/* Text Section */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center">
          <div className="text-center lg:text-left">
            <span className="text-xl uppercase text-gray-600 tracking-wider">
              Welcome to my world
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold mt-4 text-gray-800">
              Hi, I’m <span className="text-primary">Durjoy Kumar</span>
              <br />
              <span className="inline-flex min-h-[3rem]">
                <Typewriter
                  textStyle={{ fontWeight: "bold", fontSize: "inherit", color: "inherit" }}
                  startDelay={500}
                  cursorColor="#3b82f6"
                  multiText={["a Full Stack Developer.", "a Problem Solver.", "a Backend Developer."]}
                  multiTextLoop
                  multiTextDelay={2000}
                  typeSpeed={100}
                />
              </span>
            </h1>
            <p className="py-6 text-gray-600 max-w-md mx-auto lg:mx-0">
              I'm a Full Stack Developer skilled in Django, React, and JavaScript, specializing in scalable web apps.
              Passionate about problem-solving and creating seamless user experiences. Let’s build something great! 🚀
            </p>

            {/* Social Links */}
            <div className="flex justify-between items-center mt-6">
              <div className="flex flex-col items-center lg:items-start gap-4">
                <span className="text-sm font-semibold text-gray-700">Find Me</span>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/durjoy-kumar/" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline hover:bg-primary hover:text-white transition-colors text-blue-600">
                    <FaLinkedinIn size={20} />
                  </a>
                  <a href="https://github.com/DurjoyKumar177" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline hover:bg-primary hover:text-white transition-colors text-gray-900">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://www.facebook.com/durjoykumar.sarker.9" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline hover:bg-primary hover:text-white transition-colors text-blue-700">
                    <FaFacebookF size={20} />
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-4">
                <span className="text-sm font-semibold text-gray-700">Best Skill On</span>
                <div className="flex gap-4">
                  <div className="btn btn-circle btn-outline hover:bg-primary hover:text-white transition-colors text-green-600">
                    <SiDjango size={20} />
                  </div>
                  <div className="btn btn-circle btn-outline hover:bg-primary hover:text-white transition-colors text-blue-500">
                    <SiReact size={20} />
                  </div>
                  <div className="btn btn-circle btn-outline hover:bg-primary hover:text-white transition-colors text-purple-600">
                    <SiCplusplus size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
