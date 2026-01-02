"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { assets } from "@/assets/assets"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    name: "WickyCandles Website",
    link: "https://wickycandles.com",
    description: "A complete ecommerce website for custom candle selling.",
    image: assets.wickycandles,
  },
  {
    name: "Ecommerce Website",
    link: "https://ishop-frontend-five.vercel.app/",
    description: "Fully functional MERN Stack Ecommerce clothing website.",
    image: assets.ecommerce,
  },
  {
    name: "Spicy Flames Website",
    link: "https://nimomach.github.io/spicy-flames/",
    description: "A React frontend restaurant application.",
    image: assets.spicyflames,
  },
  {
    name: "ToDo App",
    link: "https://nimomach.github.io/ToDo-App/",
    description: "Track and store all your daily activities.",
    image: assets.todo,
  },
]

const WorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  // 🔥 Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1) // mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2) // tablet
      } else {
        setItemsPerView(3) // desktop
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)

    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  const maxIndex = Math.max(projects.length - itemsPerView, 0)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  return (
    <section
      id="work"
      className="ml-0 md:ml-60 min-h-screen bg-white dark:bg-darkTheme
                 text-gray-900 dark:text-white p-6 font-Outfit transition-colors duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-Prata">
        My Work
      </h2>

      <p className="text-center mb-10 text-gray-600 dark:text-gray-300">
        I build digital products that are fast, responsive, and meaningful.
      </p>

      <div className="relative max-w-6xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10
                     bg-white dark:bg-gray-800 p-2 rounded-full shadow
                     disabled:opacity-40"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Viewport */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(100 / itemsPerView) * currentIndex}%)`,
            }}
          >
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-lightHover dark:bg-gray-900 rounded-xl p-4
                             hover:shadow-lg transition transform hover:-translate-y-2"
                >
                  <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 font-Prata">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10
                     bg-white dark:bg-gray-800 p-2 rounded-full shadow
                     disabled:opacity-40"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  )
}

export default WorkSection
