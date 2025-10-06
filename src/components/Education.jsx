import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Calendar, Briefcase } from "lucide-react";

const educationData = [
  {
    title: "App Development Intern",
    institution: "Interface",
    year: "Aug 2025 – Till Now",
    category: "work",
    description: `
      • Internship focused on app development
      • Developed mobile apps using Flutter Flow & Firebase
      • Improved UI/UX and integrated backend APIs
    `,
    tags: ["Flutter Flow", "Firebase", "App Dev", "UI/UX", "Backend API"],
  },
  {
    title: "Graduation (B.Tech - Information Technology)",
    institution: "Karpagam College of Engineering, Coimbatore",
    year: "2026",
    category: "education",
    description: "Graduating from Anna University with a CGPA of 7.3/10",
    tags: ["B.Tech", "Information Technology", "Full Stack", "App Dev"],
  },
  {
    title: "Higher Secondary (HSC)",
    institution: "Vani Vidyalaya Matric Hr Sec School, Namakkal",
    year: "2022",
    category: "education",
    description: "Completed HSC under State Board with 74.5%",
    tags: ["State Board", "Computer Science"],
  },
  {
    title: "Secondary School (SSLC)",
    institution: "Vani Vidyalaya Matric Hr Sec School, Namakkal",
    year: "2020",
    category: "education",
    description: "Completed SSLC under State Board with 80.6%",
    tags: ["Mathematics", "Science", "Foundations"],
  },
];

const EducationItem = ({ edu, index, isOpen, onToggle }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0.9]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale, opacity }}
      layout
      className="relative group"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-3 sm:-left-4 md:-left-6 top-8 z-10">
        <motion.div className="w-3 sm:w-4 h-3 sm:h-4 md:w-4 md:h-4 rounded-full bg-primary ring-2 sm:ring-4 ring-white shadow-md relative" />
      </div>

      {/* Card */}
      <motion.div
        layout
        transition={{ layout: { duration: 0.4, ease: [0.25, 0.8, 0.25, 1] } }}
        className="rounded-2xl shadow-md border border-gray-200 transition-all duration-500 bg-transparent"
      >
        <button
          onClick={onToggle}
          className="w-full text-left p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4"
        >
          {/* Number Badge */}
          <motion.div layout className="flex-shrink-0 self-center sm:self-start">
            <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-2xl bg-primary text-white font-bold shadow-md text-sm sm:text-base md:text-lg">
              {index + 1}
            </span>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-2 md:gap-4">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 transition-colors duration-300">
                {edu.title}
              </h3>
              <span className="flex items-center gap-2 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200 font-medium">
                <Calendar size={14} className="text-primary" />
                {edu.year}
              </span>
            </div>

            {/* Institution & Category Icon */}
            <p className="text-gray-700 mt-2 font-medium flex items-center gap-2">
              {edu.category === "work" ? (
                <Briefcase size={20} className="text-primary flex-shrink-0" />
              ) : (
                <GraduationCap size={20} className="text-primary flex-shrink-0" />
              )}
              <span className="text-sm sm:text-base md:text-base">{edu.institution}</span>
            </p>

            {/* Description */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden mt-2 text-gray-600 text-sm sm:text-base md:text-base leading-relaxed whitespace-pre-line"
                >
                  {edu.description}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Chevron */}
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="ml-auto text-gray-400 text-base sm:text-lg"
          >
            ▼
          </motion.span>
        </button>

        {/* Tags (no hover effect) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="tags"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 border-t border-gray-100"
            >
              <div className="flex flex-wrap gap-2 mt-2 sm:mt-4">
                {edu.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Education = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-24 bg-transparent"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-12 sm:mb-16 px-4"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
          My <span className="text-primary">Education & Work</span>
        </h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base md:text-lg">
          My academic & professional journey
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl sm:max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="absolute left-2 sm:left-4 md:left-6 top-0 bottom-0 w-0.5 sm:w-1 bg-gray-300 rounded-full" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-2 sm:left-4 md:left-6 top-0 w-0.5 sm:w-1 bg-gradient-to-b from-primary via-primary/80 to-primary/60 rounded-full origin-top"
        />

        <div className="space-y-6 sm:space-y-8 md:space-y-12 relative pl-6 sm:pl-10 md:pl-14">
          {educationData.map((edu, idx) => (
            <EducationItem
              key={idx}
              edu={edu}
              index={idx}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
