import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-black shadow-md w-full fixed top-0 z-10 dark:text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="text-xl font-bold text-blue-600 dark:text-white">
            GalaxyCorp
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center space-x-6">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/use-cases" className="nav-link">
              Use Cases
            </Link>
            <Link href="/pricing" className="nav-link">
              Pricing
            </Link>
            <Link href="/resources" className="nav-link">
              Resources
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/support" className="nav-link">
              Support
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full">
              {darkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-600" />
              )}
            </button>
            {/* <Link href="/login">
              <span className="btn-primary">
                Login
                <svg
                  className="arrow-icon h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link> */}
            <Link href="/login">
              <span className="btn-primary flex items-center space-x-2">
                <span className="text-sm sm:text-base">Login</span>
                <svg
                  className="arrow-icon h-4 w-4 sm:h-5 sm:w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md text-gray-600"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } lg:hidden bg-white dark:bg-gray-800 w-full px-4 pt-4 pb-2`}
      >
        <Link
          href="/"
          className="block px-2 py-2 text-gray-800 dark:text-gray-200 transition duration-300 hover:text-black dark:hover:text-white"
        >
          Home
        </Link>
        <Link href="/about" className="block px-2 py-2">
          About
        </Link>
        <Link href="/use-cases" className="block px-2 py-2">
          Use Cases
        </Link>
        <Link href="/pricing" className="block px-2 py-2">
          Pricing
        </Link>
        <Link href="/resources" className="block px-2 py-2">
          Resources
        </Link>
        <Link href="/blog" className="block px-2 py-2">
          Blog
        </Link>
        <Link href="/support" className="block px-2 py-2">
          Support
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
