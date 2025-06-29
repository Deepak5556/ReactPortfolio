import React from "react";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const skills = {
    frontend: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind",
      "JavaScript",
      "React Js",
    ],
    backend: ["Node.js", "Express.js"],
    mernStack: ["MongoDB", "Express.js", "React Js", "Node.js"],
    database: ["MySQL", "MongoDB", "Firebase"],
    appDevelopment: ["Flutter Flow","Flutter","Dart"],
    problemSolving: ["C", "Java", "Python"],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <div className="bg-white p-8 rounded-2xl shadow-md h-full">
            <h3 className="text-xl font-semibold text-dark mb-4">
              My Introduction
            </h3>
            <p className="text-gray-700 mb-8">
              I'm a Full Stack Web Developer and UI/UX Designer with experience
              in both front-end and back-end development. I work with languages
              like C, Java, and Python, and I’m skilled in HTML, CSS, Bootstrap,
              Tailwind CSS, and JavaScript. I use ReactJS for building dynamic
              user interfaces and have hands-on experience with the MERN Stack
              (MongoDB, Express.js, React, Node.js). I also work with MySQL,
              MongoDB, and FlutterFlow. From designing clean, responsive user
              interfaces to building and managing full-stack web applications, I
              focus on creating visually appealing and functional digital
              experiences.
            </p>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex"
            >
              Download CV <FileText size={18} className="ml-2" />
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6"
        >
          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="text-xl font-semibold text-dark">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="text-xl font-semibold text-dark">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="text-xl font-semibold text-dark">Database</h3>
            <div className="flex flex-wrap gap-2">
              {skills.database.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="text-xl font-semibold text-dark">Problem Solving</h3>
            <div className="flex flex-wrap gap-2">
              {skills.problemSolving.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="text-xl font-semibold text-dark">App Development</h3>
            <div className="flex flex-wrap gap-2">
              {skills.appDevelopment.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
