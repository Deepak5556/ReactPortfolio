  import React, { useState } from 'react';
  import { IoDocument } from "react-icons/io5";

  const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

    return (
      <nav className="bg-backcolor font-poppins container mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 text-3xl font-bold text-primary">
              DΣΣPΛK
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-10 text-lg items-center">
              <a href="#home" className="hover:text-primary transition">Home</a>
              <a href="#about" className="hover:text-primary transition">About</a>
              <a href="#projects" className="hover:text-primary transition">Projects</a>
              <a href="#contact" className="hover:text-primary transition">Contact</a>
            </div>

            {/* Button */}
            <div className="hidden md:flex">
              <button className="px-4 py-2 bg-slate-200 t flex items-center gap-2 text-black rounded-lg hover:bg-primary hover:text-white focus:outline-none transition ease-out duration-500">
                Download CV <IoDocument/>
              </button>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              >
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="md:hidden ">
            <ul className="space-y-4 text-center py-4 ">
              <li><a href="#home" className="block text-sm">Home</a></li>
              <li><a href="#about" className="block text-sm">About</a></li>
              <li><a href="#projects" className="block text-sm">Projects</a></li>
              <li><a href="#contact" className="block text-sm">Contact</a></li>
              <li>
                <button className="px-2 py-2 text-xs font-medium flex items-center mx-auto bg-slate-200 text-black rounded hover:bg-primary hover:text-white focus:outline-none transition ease-out duration-500">
                  Download CV <IoDocument/>
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    );
  };
  export default NavBar;