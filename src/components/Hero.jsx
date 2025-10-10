import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import deepak from "../Assets/Profile/Deepakkumar V.webp";
import resume from "../Assets/DeepakkumarV.pdf";
import { Instagram, Linkedin, Github, Dribbble, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 relative"
    >
      <div className="flex flex-col md:flex-row items-center">

        {/* Left Section */}
        <div className="w-full md:w-1/2 order-2 md:order-1 mt-10 md:mt-0">
          {/* Type Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-medium mb-6 h-8"
          >
            <TypeAnimation
              sequence={[
                "Web Developer",
                1500,
                "UI/UX Designer",
                1500,
                "Full Stack Developer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary"
            />
          </motion.div>

          {/* Hero Heading (LCP) */}
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            I'm <span className="text-primary">Deepakkumar</span>
          </h1>

          {/* Intro Paragraph */}
          <p className="text-dark mb-8 max-w-lg">
            Welcome to my official portfolio website! Here, you can explore my
            skills, projects, work experience, and learn more about my journey
            as a Full Stack Web & Mobile App Developer and UI/UX Designer.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Deepak’s Resume"
              className="btn btn-primary"
            >
              View Resume <FileText size={18} aria-hidden="true" />
            </a>

            <button
              className="btn"
              onClick={() =>
                window.open("https://linktr.ee/deepakkumar007", "_blank")
              }
              aria-label="Open Deepak’s Social Media Links"
            >
              Social Media
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-6"
            role="navigation"
            aria-label="Social media links"
          >
            <a
              href="https://www.instagram.com/insta_boy_deepak__"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:text-primary transition-colors"
            >
              <Instagram size={20} aria-hidden="true" focusable="false" />
            </a>

            <a
              href="https://www.linkedin.com/in/deepak5556"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:text-primary transition-colors"
            >
              <Linkedin size={20} aria-hidden="true" focusable="false" />
            </a>

            <a
              href="https://github.com/Deepak5556"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:text-primary transition-colors"
            >
              <Github size={20} aria-hidden="true" focusable="false" />
            </a>

            <a
              href="https://dribbble.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:text-primary transition-colors"
            >
              <Dribbble size={20} aria-hidden="true" focusable="false" />
            </a>
          </motion.div>
        </div>

        {/* Right Section (Profile Image) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center order-1 md:order-2"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden animate-float border-4 border-primary shadow-lg">
            <img
              src={deepak}
              alt="Portrait of Deepakkumar"
              width={400}
              height={400}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
