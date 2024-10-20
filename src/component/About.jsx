import React from 'react';
import './About.css'; // Importing CSS
import { FaFileContract } from "react-icons/fa6";

const About = () => {
  return (
    <div className="mx-10">
      {/* Heading */}
      <div className="font-bold text-xl md:text-4xl mt-2 md:mt-0 flex justify-center">
        About Me
      </div>

      {/* Main Content */}
      <div className="mt-5 md:flex md:justify-between">
        {/* Introduction Card */}
        <div className="md:w-1/2 mx-5 md:p-6 rounded-lg mb-6 md:mb-0">
          <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Introduction
          </h5>
          <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
            Full Stack Web Developer and UI/UX Designer with expertise in both front-end and back-end technologies.
            Proficient in C, Java, Python, HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, ReactJS. Experienced with
            MySQL, Firebase, and FlutterFlow. Skilled in all stages of development, from designing user interfaces to
            implementing dynamic web applications and managing databases. Strong focus on creating responsive and visually
            appealing web solutions.
          </p>
          <div className="flex justify-end">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-[#6724d4] rounded-lg hover:bg-white hover:text-[#6724d4] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#6724d4] dark:hover:bg-blue-700"
            >
              <p className="me-2">View Resume</p> <FaFileContract />
            </a>
          </div>
        </div>

        {/* Skills Card */}
        <div className="md:w-1/2 mx-0 md:mx-5 p-3 md:p-6 rounded-lg mb-6 md:mb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Programming Languages */}
            <div className="p-3">
              <h1 className="text-xl md:text-2xl font-bold">Programming Languages</h1>
              <ul className="list-none pl-5">
                <li>C Programming</li>
                <br />
                <li>Java</li>
                <li>Python</li>
              </ul>
            </div>

            {/* Frontend Skills */}
            <div className="p-3">
              <h1 className="text-xl md:text-2xl font-bold">Frontend</h1>
              <ul className="list-none pl-5">
                <li>HTML</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            {/* Database Skills */}
            <div className="p-3">
              <h1 className="text-xl md:text-2xl font-bold">Database</h1>
              <ul className="list-none pl-5">
                <li>MySQL</li>
                <li>Firebase</li>
                <li>MongoDB</li>
              </ul>
            </div>

            {/* App Development */}
            <div className="p-3">
              <h1 className="text-xl md:text-2xl font-bold">App Development</h1>
              <ul className="list-none pl-5">
                <li>Flutter Flow</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
