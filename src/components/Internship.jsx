import React, { useEffect } from "react";
import { Briefcase, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import image from "../Assets/image.js";

const internships = [
  {
    id: 1,
    company: "Byts",
    role: "Python Basics",
    period: "Sep 2024 - Oct 2024",
    description:
      "I completed an internship where I learned the basics of Python programming . I  practiced writing simple code using loops, functions, and data types. ",
    image: image.byts,
    certificateLink: "",
    companyLink: "https://byts.co.in/",
  },
  {
  id: 2,
  company: "Interface Technology",
  role: "App Developer Intern",
  period: "Aug 2025 - Present",
  description:
    "Currently working as an App Developer Intern at Interface Technology. I’m gaining hands-on experience in building mobile and web applications, learning about front-end design, backend integration, and real-world project workflows.",
  image: image.Interface, // make sure you have this image imported in your image.js
  certificateLink: "", // leave empty for now since it’s ongoing
  companyLink: "https://interfacedigitaltech.com/", // replace with actual company link if different
},

];

const Internship = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCertificateClick = (event, link) => {
    if (!link) {
      event.preventDefault();
      alert("Certificate not available.");
    }
  };

  return (
    <section id="internships" className="py-20 px-4 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="section-title text-4xl font-bold">Internships</h2>
        <p className="section-subtitle text-gray-600 mt-3 text-lg">
          My Hands-on experience
        </p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {internships.map((intern) => (
          <motion.div
            key={intern.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-md mx-auto flex flex-col"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="h-40 flex items-center justify-center bg-gray-50">
              <img
                src={intern.image}
                alt={intern.company}
                className="h-24 object-contain"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-dark mb-2 flex items-center gap-2 truncate">
                <Briefcase size={22} /> {intern.role}
              </h3>
              <a
                href={intern.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium text-base hover:underline mb-2"
              >
                {intern.company}
              </a>
              <div className="text-sm text-gray-700 mb-3">{intern.period}</div>
              <p className="text-gray-700 text-base mb-4">
                {intern.description}
              </p>
              <div className="flex gap-2 mt-auto">
                <a
                  href={intern.certificateLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-primary btn-md flex items-center gap-1 text-sm px-4 py-2 rounded w-full justify-center ${
                    !intern.certificateLink
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={(e) =>
                    handleCertificateClick(e, intern.certificateLink)
                  }
                >
                  View Certificate <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Internship;
