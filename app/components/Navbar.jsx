"use client"
import React, { useState, useEffect } from "react"
import Hamburger from "react-hamburger-menu"
import { FaLinkedin, FaGithub, FaTwitter, FaSun, FaMoon } from "react-icons/fa"
import { SiFiverr } from "react-icons/si"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleMenu = () => setOpen(!open)

  const toggleDarkMode = () => setDarkMode(!darkMode)

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <>
      {/* SIDEBAR (md and above) */}
      <nav className="hidden md:flex md:flex-col w-60 h-screen fixed top-0 left-0 bg-white dark:bg-gray-900 shadow-lg p-6 font-Outfit">
        {/* Profile image */}
        <div className="mb-6 flex justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/150921315?v=4"
            width={100}
            height={100}
            className="rounded-full border"
          />
        </div>

        <h1 className="text-xl font-bold mb-6 text-center dark:text-white">Mounika Macharla</h1>

        <ul className="flex flex-col gap-4 mb-6">
          <li><a href="#top" className="dark:text-white">Home</a></li>
          <li><a href="#about" className="dark:text-white">About Me</a></li>
          <li><a href="#work" className="dark:text-white">Work</a></li>
          <li><a href="#services" className="dark:text-white">Services</a></li>
          <li><a href="#contact" className="dark:text-white">Contact Me</a></li>


        </ul>

        {/* SOCIAL ICONS + DARK MODE TOGGLE - MD+ */}
        <div className="flex justify-center gap-4 mt-auto">
          <a
            href="https://www.linkedin.com/in/mounikamacharla/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="dark:text-white"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/MounikaMacharla"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="dark:text-white"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.fiverr.com/s/Gz6a7Lz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fiverr"
            className="dark:text-white"
          >
            <SiFiverr size={20} />
          </a>
          

          {/* DARK/LIGHT TOGGLE */}
          <button
            onClick={toggleDarkMode}
            className=" rounded-full border dark:border-gray-200 flex items-center justify-center"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>
      </nav>

      {/* TOP NAV (mobile) */}
      <nav className="flex md:hidden justify-between items-center p-4 shadow font-Outfit">
        <h1 className="text-lg font-bold dark:text-white">Mounika</h1>

        {/* SOCIAL ICONS - MOBILE (top center) */}
        <div className="flex md:hidden justify-center gap-4 p-2">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="dark:text-white"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="dark:text-white"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fiverr"
            className="dark:text-white"
          >
            <SiFiverr size={20} />
          </a>
          

          {/* DARK/LIGHT TOGGLE - MOBILE */}
          <button
            onClick={toggleDarkMode}
            className="rounded-full border dark:border-gray-200 flex items-center justify-center"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>

        <Hamburger
          isOpen={open}
          menuClicked={toggleMenu}
          width={24}
          height={18}
          strokeWidth={2}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.5}
        />
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <ul className="flex flex-col gap-4 text-lg text-left ml-4 dark:text-white">
          <li><a onClick={toggleMenu} href="#top">Home</a></li>
          <li><a onClick={toggleMenu} href="#about">About Me</a></li>
          <li><a onClick={toggleMenu} href="#work">Work</a></li>
          <li><a onClick={toggleMenu} href="#services">Services</a></li>
          <li><a onClick={toggleMenu} href="#contact">Contact Me</a></li>
        </ul>
      )}
    </>
  )
}

export default Navbar
