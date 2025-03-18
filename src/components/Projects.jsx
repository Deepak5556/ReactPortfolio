import React, { useEffect } from "react";
import { Briefcase, Users, Award, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import image from "../Assets/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Cognito",
      description:
        "Cognito is a MERN stack-based online learning platform featuring dual logins for teachers and students. It includes course management, live chat, AI-powered assistance, and a personalized dashboard for seamless learning",
      image: image.cognito,
      technologies: ["MERN Stack"],
      liveLink: null, // Changed to null to represent no live link
      githubLink: "https://github.com/Deepak5556/cognito",
      status: 0,
    },
    {
      id: 2,
      title: "kcedhruva",
      description:
        "KAT COMMAND team developed kcedhruva.in, the official website for our college's Dhruva event, enhancing user engagement and accessibility. The platform provides event details, schedules, and registration features for participants",
      image: image.dhruva,
      technologies: ["React JS"],
      liveLink: "https://kcedhruva.in",
      githubLink: "https://github.com/Deepak5556/kcedhruva",
      status: 1,
    },
    {
      id: 3,
      title: "To-Do App",
      description:
        "A Flutter-based To-Do App that helps users manage their daily tasks effectively. It features task addition, editing, deletion, and a user-friendly interface to keep track of completed and pending tasks.",
      image: image.todoApp,
      technologies: ["Flutter", "Dart"],
      liveLink: null,
      githubLink: "https://github.com/Deepak5556/Todo-List-App-Flutter",
      status: 1,
    },
    {
      id: 4,
      title: "Blood Donation App",
      description:
        "A user-friendly Flutter-based Blood Donation App designed to streamline the process of finding blood donors and requesting donations. The app features donor registration, search for nearby donors, request forms, and emergency contact options for quick assistance.",
      image: image.bloodDonationApp, // Set the appropriate image reference
      technologies: ["Flutter Flow", "Dart", "Firebase"],
      liveLink: null, // Changed to null to represent no live link
      githubLink: "https://github.com/Deepak5556/BloodHub-Mobile-App",
      status: 1,
    },
    {
      id: 5,
      title: "Blood Hub Website",
      description:
        "Blood Hub is a PHP and MySQL-based website developed to understand the basics of backend programming and database management. The platform simplifies the process of finding and connecting with blood donors, featuring donor registration, search functionalities, and donation request forms.",
      image: image.bloodHub, // Ensure the correct image reference
      technologies: ["HTML", "CSS", "Bootstrap", "PHP", "JavaScript", "MySQL"],
      liveLink: null, // Changed to null to represent no live link
      githubLink: "https://github.com/Deepak5556/blood-hub-website",
      status: 1,
    },
    
    
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLiveDemoClick = (event, liveLink) => {
    if (!liveLink) {
      event.preventDefault(); // Prevent navigation
      alert("Live demo not available for this project.");
    }
  };

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Check out some of my recent projects</p>
      </motion.div>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden h-full"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-dark mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="pb-2">
                Project Status :{" "}
                <span
                  style={{
                    color: project.status ? "green" : "red",
                  }}
                >
                  {project.status ? "Completed" : "On Going"}
                </span>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${project.liveLink ? "btn-primary" : ""}`}
                  onClick={(event) =>
                    handleLiveDemoClick(event, project.liveLink)
                  }
                  style={{
                    pointerEvents: project.liveLink ? "auto" : "none",
                    opacity: project.liveLink ? 1 : 0.5,
                  }}
                >
                  Live Demo <ExternalLink size={16} />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Code <Github size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
