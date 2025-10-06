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
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-primary">
              Deepakkumar.
            </h2>
          </div>

          <div className="mb-8">
            <ul className="flex flex-wrap justify-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-dark hover:text-primary font-medium cursor-pointer transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-6 mb-8">
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

          <div className="text-center text-gray-500 text-sm">
            <p>Last Update : October 2025</p>
            <br />
            <p>
              Copyright &copy; {new Date().getFullYear()}{" "}
              <span className="text-primary">Deepakkumar</span> - All rights
              reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
