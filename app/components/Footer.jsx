"use client"
import React from "react"

const Footer = () => {
  return (
    <footer
      className="
        ml-0 mt-8 mb-8 md:ml-60 
        bg-white dark:bg-darkTheme 
        text-gray-900 dark:text-white
        border-t border-gray-300 dark:border-gray-700
        py-6 px-4
        transition-colors duration-500
      "
    >
      <div className="text-center flex flex-col items-center justify-center">
        <p className="font-Prata text-lg">© {new Date().getFullYear()} Mounika Macharla</p>

        <a
          href="mailto:YOUR_EMAIL_HERE"
          className="
            mt-2 text-sm font-Outfit 
            text-gray-700 dark:text-gray-300 
            hover:text-black dark:hover:text-white
            transition-colors
          "
        >
          mounikamacharla333@gmail.com
        </a>
      </div>
    </footer>
  )
}

export default Footer
