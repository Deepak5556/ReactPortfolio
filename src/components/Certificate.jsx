import React from "react";
import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import image from "../Assets/image";
import { handleImageError } from "../utils/errorHandling";

const certificates = [
  {
    id: 1,
    title: "Python Basics",
    issuer: "Byts",
    description:
      "Completed a Python Basics internship at Byts, gaining hands-on experience with core concepts like data types, loops, conditionals, and functions.",
    image: image.byts,
    date: "Oct 2024",
    certificateLink: image.bytesCertificate, // Placeholder for actual certificate link
  },
  {
    id: 2,
    title: "App Deveploper Internship",
    issuer: "Interface Technologies",
    description:
      "Completed my App Developer Internship at Interface Technology, gaining hands-on experience in building mobile and web applications, front-end design, backend integration, and real-world project workflows.",
    image: image.Interface,
    date: "Feb 2026",
    certificateLink: image.interfaceCertificate,
  },
];

const Certificate = () => {
  const handleCertificateClick = (event, certificateLink) => {
    if (!certificateLink) {
      event.preventDefault();
      alert("Certificate link not available.");
    }
  };

  return (
    <section id="certificates" className="py-16 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="section-title text-3xl font-bold">My Certificates</h2>
        <p className="section-subtitle text-gray-600 mt-2">
          A showcase of my certifications and achievements
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {certificates.map((certificate) => (
          <motion.div
            key={certificate.id}
            className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm mx-auto flex flex-col"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="h-32 overflow-hidden flex items-center justify-center bg-white">
              <motion.img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                onError={handleImageError}
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3
                className="text-lg font-semibold text-dark mb-1 flex items-center gap-2 truncate"
                title={certificate.title}
              >
                <Award size={18} /> {certificate.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2 flex-grow">
                {certificate.description.length > 80
                  ? certificate.description.slice(0, 80) + "..."
                  : certificate.description}
              </p>
              <div className="mb-1 text-xs text-gray-700">
                <span className="font-medium">Issuer:</span>{" "}
                {certificate.issuer}
              </div>
              <div className="mb-4 text-xs text-gray-700">
                <span className="font-medium">Date:</span> {certificate.date}
              </div>
              <div>
                <a
                  href={certificate.certificateLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-primary btn-sm w-full flex justify-center items-center gap-2 text-xs py-2 rounded ${
                    !certificate.certificateLink
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={(e) =>
                    handleCertificateClick(e, certificate.certificateLink)
                  }
                >
                  View Certificate <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certificate;
