import React from "react";
import { Link } from "react-scroll";
import { Instagram, Linkedin, Github, Dribbble } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Education", to: "education" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center">
          {/* Brand / Logo */}
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold text-primary tracking-wide">
              Deepakkumar<span className="text-dark">.</span>
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Full Stack Developer | App Developer | UI/UX Designer
            </p>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer Navigation" className="mb-6">
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-dark hover:text-primary font-medium cursor-pointer transition-colors"
                    aria-label={`Go to ${link.name} section`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media Icons */}
          <div
            className="flex gap-6 mb-8"
            role="navigation"
            aria-label="Social media links"
          >
            <a
              href="https://www.instagram.com/insta_boy_deepak__"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Deepakkumar’s Instagram profile"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:text-primary hover:shadow-lg transition-all"
            >
              <Instagram size={20} aria-hidden="true" focusable="false" />
            </a>

            <a
              href="https://www.linkedin.com/in/deepak5556"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Deepakkumar’s LinkedIn profile"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:text-primary hover:shadow-lg transition-all"
            >
              <Linkedin size={20} aria-hidden="true" focusable="false" />
            </a>

            <a
              href="https://github.com/Deepak5556"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Deepakkumar’s GitHub profile"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:text-primary hover:shadow-lg transition-all"
            >
              <Github size={20} aria-hidden="true" focusable="false" />
            </a>
          </div>

          {/* Footer Text */}
          <div className="text-center text-gray-500 text-sm max-w-2xl relative">
            <p>Last Updated: October 2025</p>
            <p className="mt-2">
              © {new Date().getFullYear()}{" "}
              <span className="text-primary font-semibold">Deepakkumar</span> —
              All rights reserved.
            </p>

            {/* Hidden SEO Content (valid + crawler visible) */}
            <div
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
                overflow: "hidden",
              }}
            >
              <p>
                Official portfolio of <strong>Deepakkumar V</strong> (Reg. No:
                <strong>717822f212</strong>), a proud{" "}
                <strong>Karpagam College</strong> student and passionate{" "}
                <strong>Full Stack Developer</strong>. Skilled in{" "}
                <strong>React</strong>, <strong>FlutterFlow</strong>,{" "}
                <strong>Firebase</strong>, and <strong>MERN Stack</strong> for
                building creative apps and responsive portfolio websites.
              </p>
              <p>
                Deepak | Deepakkumar | Full Stack Developer | App Developer |
                Web Developer | UI/UX Designer | Karpagam Student | Portfolio
                Website | Developer Portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
