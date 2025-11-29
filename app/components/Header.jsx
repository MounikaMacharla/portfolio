"use client"
import React from "react"

const Header = () => {
  return (
    <header
      id="home"
      className="
        flex flex-col items-center justify-center 
        min-h-screen ml-0 md:ml-60 p-6 
        bg-white dark:bg-darkTheme
        transition-colors duration-500 font-Outfit
      "
    >
      {/* Profile Image */}
      <img
        src="https://avatars.githubusercontent.com/u/150921315?v=4"
        alt="Mounika Macharla"
        className="
          w-32 h-32 md:w-40 md:h-40 rounded-full 
          border-4 border-white dark:border-gray-300 
          shadow-black dark:shadow-white 
          transition-transform duration-300 hover:scale-105
          mb-6
        "
      />

      {/* Greeting */}
      <h4 className="font-semibold p-2 text-gray-700 dark:text-gray-300">
        Hi! I am Mounika Macharla
      </h4>

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center font-Prata text-gray-900 dark:text-white">
        Professional Website Developer
      </h1>

      {/* Subtitle */}
      <p className="text-center text-gray-700 dark:text-gray-300 mb-8 max-w-xl leading-relaxed">
        Hi! I'm a passionate Full Stack Developer. 
        I love building interactive web apps that has best user experience.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        
        {/* Download Resume */}
        <a
          href="/resume.pdf"
          download
          className="
            px-6 py-3 rounded-full font-semibold 
            bg-lightHover dark:bg-darkHover 
            text-black dark:text-white 
            shadow-black dark:shadow-white
            transition-transform duration-300 hover:scale-105
          "
        >
          Download Resume
        </a>

        {/* Connect */}
        <a
          href="#contact"
          className="
            px-6 py-3 rounded-full font-semibold 
            bg-gray-800 dark:bg-gray-900 
            text-white 
            shadow-black dark:shadow-white
            transition-transform duration-300 hover:scale-105
          "
        >
          Connect With Me
        </a>
      </div>
    </header>
  )
}

export default Header
