"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import img from "@/public/SalmanBhaipics.jpeg";
import { motion } from "framer-motion";
import { ImGithub } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoMongodb } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa6";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const skills = [
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <IoLogoNodejs /> },
    { name: "TypeScript", icon: <BiLogoTypescript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <IoLogoCss3 /> },
    { name: "MongoDB", icon: <BiLogoMongodb /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#home" className="text-2xl font-bold text-blue-600">
                SM
              </a>
            </motion.div>
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`text-lg hover:text-blue-600 transition-colors duration-200 ${
                    activeSection === item.href.slice(1) ? "text-blue-600" : ""
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 px-4 text-sm hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500"
        >
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              Salman Mughal
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl md:text-4xl mb-8"
            >
              Full Stack Web Developer
            </motion.h2>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
            </motion.a>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 mb-8 md:mb-0"
              >
                <Image
                  src={img}
                  alt="Salman Mughal"
                  width={400}
                  height={400}
                  className="rounded-full shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2"
              >
                <p className="text-lg mb-4">
                  Hi, I&#39;m Salman Mughal, a Full Stack Web Dev based in
                  Karachi, Pakistan. I have over an year of experience in
                  creating robust and scalable web applications. I specialize in
                  JavaScript, React, Node.js, and various database technologies
                  and am currently learning Agentic AI development in GIAIC.
                </p>
                <p className="text-lg mb-4">
                  My journey in web development started with a curiosity for
                  creating interactive websites, and it has since grown into a
                  fulfilling career where I constantly push the boundaries of
                  what&#39;s possible on the web.
                </p>
                <p className="text-lg">
                  When I&#39;m not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  enjoying a good book on software architecture and design
                  patterns.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg shadow-md p-6 text-center flex justify-center flex-col "
                >
                  <div className="text-4xl mb-2 flex justify-center text-blue-500">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-commerce Platform",
                  description:
                    "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
                  image: "/placeholder.svg",
                },
                {
                  title: "Task Management App",
                  description:
                    "A real-time task management application using React and Firebase.",
                  image: "/placeholder.svg",
                },
                {
                  title: "Weather Dashboard",
                  description:
                    "A weather dashboard that displays current and forecasted weather data.",
                  image: "/placeholder.svg",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <motion.a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More →
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Get in Touch
            </h2>
            <div className="max-w-lg mx-auto text-center">
              <p className="text-lg mb-8">
                I&#39;m always open to new opportunities and collaborations.
                Feel free to reach out to me through any of the following
                platforms:
              </p>
              <div className="flex justify-center space-x-6">
                {[
                  {
                    name: "Email",
                    icon: <BiLogoGmail />,
                    link: "salmanmughalm4@gmail.com",
                  },
                  {
                    name: "LinkedIn",
                    icon: <BsLinkedin />,
                    link: "https://www.linkedin.com/in/",
                  },
                  {
                    name: "GitHub",
                    icon: <ImGithub />,
                    link: "https://github.com/",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-4xl mb-2 ">{social.icon}</span>
                    <span className="text-sm">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Salman Mughal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
