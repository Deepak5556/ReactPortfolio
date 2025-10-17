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
      "I completed an internship where I learned the basics of Python programming. I practiced writing simple code using loops, functions, and data types.",
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
    image: image.Interface,
    certificateLink: "",
    companyLink: "https://interfacedigitaltech.com/",
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
    <section
      id="internships"
      className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 bg-gray-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Internships
        </h2>
        <p className="text-gray-600 mt-3 text-base sm:text-lg">
          My Hands-on Experience
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
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
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden flex flex-col transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Image Section */}
            <div className="h-36 sm:h-40 md:h-44 flex items-center justify-center bg-gray-100 p-4">
              <img
                src={intern.image}
                alt={intern.company}
                className="h-20 sm:h-24 md:h-28 w-auto object-contain"
              />
            </div>

            {/* Text Section */}
            <div className="p-5 sm:p-6 flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Briefcase size={20} /> {intern.role}
              </h3>

              <a
                href={intern.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline mb-2 break-words"
              >
                {intern.company}
              </a>

              <div className="text-sm text-gray-600 mb-3">{intern.period}</div>

              <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                {intern.description}
              </p>

              {/* Button Section */}
              <div className="mt-auto">
                <a
                  href={intern.certificateLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 text-sm font-medium rounded-lg px-4 py-2 transition-all duration-300 w-full ${
                    intern.certificateLink
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
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
