import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const MyWork = () => {
  return (
    <div className="text-center">
      <h2 className="section-title">My Work</h2>
      <p className="section-subtitle">Check out some of my recent projects</p>

      {/* Project Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/projects">
          <motion.div whileHover={{ y: -10 }} className="project-card p-8 cursor-pointer">
            <Briefcase size={50} className="text-primary mb-6" />
            <h3 className="text-xl font-semibold text-dark mb-2">Projects</h3>
            <p className="text-gray-600 text-center">10+ Completed</p>
          </motion.div>
        </Link>

        <motion.div whileHover={{ y: -10 }} className="project-card p-8">
          <Users size={50} className="text-primary mb-6" />
          <h3 className="text-xl font-semibold text-dark mb-2">Internships</h3>
          <p className="text-gray-600 text-center">3+ Companies</p>
        </motion.div>

        <motion.div whileHover={{ y: -10 }} className="project-card p-8">
          <Award size={50} className="text-primary mb-6" />
          <h3 className="text-xl font-semibold text-dark mb-2">Certificates</h3>
          <p className="text-gray-600 text-center">5+ Certificates</p>
        </motion.div>
      </div>
    </div>
  );
};

export default MyWork;
