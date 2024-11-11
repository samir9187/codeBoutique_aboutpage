"use client";
import React, { useState, useEffect } from "react";

import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Team from "./components/Team";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = (): void => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;

      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div
      className={`${
        darkMode ? "dark bg-galaxy text-darkText" : "bg-lightGalaxy text-black"
      } transition-all duration-300`}
    >
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Hero />
      <Mission />
      <Team />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
