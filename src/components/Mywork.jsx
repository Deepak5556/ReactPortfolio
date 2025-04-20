import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const MyWork = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16">
      <div className="text-center mt-12">
        <h2 className="section-title mb-4">My Work</h2>
        <p className="section-subtitle mb-8">
          Check out some of my recent projects
        </p>

        {/* Project Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Link to="/projects">
            <motion.div
              whileHover={{ y: -10 }}
              className="project-card p-10 cursor-pointer"
            >
              <Briefcase size={50} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold text-dark mb-2">Projects</h3>
            </motion.div>
          </Link>

          <Link to="/internship">
            <motion.div whileHover={{ y: -10 }} className="project-card p-10">
              <Users size={50} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold text-dark mb-2">
                Internships
              </h3>
            </motion.div>
          </Link>
          <motion.div whileHover={{ y: -10 }} className="project-card p-10">
            <Award size={50} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold text-dark mb-2">
              Certificates
            </h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
