import React, { useState } from 'react';
import './Work.css'; // Optional CSS import

const Work = () => {
  const [isHovered, setIsHovered] = useState(null); // Track hovered card by index

  const projects = [
    { id: 1, title: 'Project 1', status: 'Loading' },
    { id: 2, title: 'Project 2', status: 'Loading' },
    { id: 3, title: 'Project 3', status: 'Loading' },
  ];

  return (
    <div className="flex w-full justify-between gap-5 flex-wrap project-container p-8">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`relative flex flex-col items-center justify-center w-[30%] h-[250px] 
                      ${
                        isHovered === index ? 'bg-purple-600' : 'bg-white'
                      } rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300`}
          onMouseEnter={() => setIsHovered(index)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <i
            className={`uil uil-briefcase-alt text-[50px] mb-6 transition-colors duration-300 ${
              isHovered === index ? 'text-white' : 'text-primary'
            }`}
          />
          <h3
            className={`text-xl font-medium transition-colors duration-300 ${
              isHovered === index ? 'text-white' : 'text-black'
            }`}
          >
            {project.title}
          </h3>
          <label
            className={`text-sm transition-colors duration-300 ${
              isHovered === index ? 'text-white' : 'text-gray-500'
            }`}
          >
            {project.status}
          </label>

          {/* Overlay text that appears on hover */}
          {isHovered === index && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h4 className="text-white text-xl font-semibold">More Info</h4>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Work;
  