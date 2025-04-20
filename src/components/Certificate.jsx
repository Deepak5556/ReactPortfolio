import React, { useEffect } from "react";
import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import image from "../Assets/image";

const Certificate = () => {
  const certificates = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Coursera",
      description:
        "Completed an intensive Full Stack Web Development specialization covering React, Node.js, MongoDB, and cloud deployment.",
      image: image.fullStack,
      date: "March 2024",
      certificateLink: "https://coursera.org/verify/your-certificate-id",
    },
    {
      id: 2,
      title: "Flutter & Dart Bootcamp",
      issuer: "Udemy",
      description:
        "Learned Flutter and Dart for cross-platform mobile app development, building multiple real-world projects.",
      image: image.flutterBootcamp,
      date: "January 2024",
      certificateLink: "https://udemy.com/certificate/your-certificate-id",
    },
    {
      id: 3,
      title: "Machine Learning",
      issuer: "Coursera",
      description:
        "Completed Andrew Ng’s Machine Learning course, covering supervised and unsupervised learning, best practices, and real-world applications.",
      image: image.mlCertificate,
      date: "December 2023",
      certificateLink: "https://coursera.org/verify/your-certificate-id",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.12)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="h-32 overflow-hidden">
              <motion.img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
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
                <span className="font-medium">Issuer:</span> {certificate.issuer}
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
                    !certificate.certificateLink ? "opacity-50 cursor-not-allowed" : ""
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
