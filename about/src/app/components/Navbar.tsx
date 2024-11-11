import React, { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

interface NavbarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, darkMode }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-2xl font-bold text-lightText dark:text-darkText">
            GalaxyCorp 🚀
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden sm:flex sm:space-x-8">
            <a
              href="/"
              className="text-lightText dark:text-darkText transition duration-300 hover:text-white"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-lightText dark:text-darkText transition duration-300 hover:text-white"
            >
              About
            </a>
            <a
              href="/services"
              className="text-lightText dark:text-darkText transition duration-300 hover:text-white"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-lightText dark:text-darkText transition duration-300 hover:text-white"
            >
              Contact
            </a>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-500" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="text-gray-400 hover:bg-gray-700 hover:text-white p-2 rounded-md"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-4 px-2 pt-2 pb-3">
          <a
            href="/"
            className="text-lightText dark:text-darkText block text-base transition duration-300 hover:text-white"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-lightText dark:text-darkText block text-base transition duration-300 hover:text-white"
          >
            About
          </a>
          <a
            href="/services"
            className="text-lightText dark:text-darkText block text-base transition duration-300 hover:text-white"
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-lightText dark:text-darkText block text-base transition duration-300 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
