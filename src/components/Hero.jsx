import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import {
  ChevronDown,
  Instagram,
  Linkedin,
  Github,
  Dribbble,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import deepak from "../Assets/Deepak.png";
import resume from "../Assets/DeepakkumarV.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16"
    >
      <div className="flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2 order-2 md:order-1 mt-10 md:mt-0"
        >
          {/* <div className="mb-4">
            <span className="bg-primary text-white text-xs px-3 py-1 rounded-md">Full Stack Developer</span>
          </div> */}

          <div className="text-xl md:text-2xl font-medium mb-6 h-8">
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
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            I'm <span className="text-primary">Deepakkumar</span>
          </h1>

          <p className="text-dark mb-8 max-w-lg">
            Welcome to my official portfolio website! Here, you can explore my
            skills, projects, work experience, and learn more about my journey
            as a Full Stack Web & Mobile App Developer and UI/UX Designer.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View Resume <FileText size={18} />
            </a>
            <button
              className="btn"
              onClick={() =>
                window.open("https://linktr.ee/deepakkumar007", "_blank")
              }
            >
              Social Media
            </button>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/insta_boy_deepak__"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/deepakkumarv5556"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://github.com/Deepak5556"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full md:w-1/2 flex justify-center order-1 md:order-2"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden animate-float border-4 border-primary">
            <img
              src={deepak}
              alt="Deepakkumar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        {/* <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <ChevronDown size={24} className="text-primary animate-bounce" />
        </Link> */}
      </motion.div>
    </section>
  );
};

export default Hero;
