import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <a href="#" className="text-xl font-bold text-white hover:text-blue-500 transition-colors duration-300">
          Muhammad <span className="text-blue-500">Shoaib</span>
        </a>

        <ul className="hidden md:flex gap-8 list-none">
          <li><a href="#about"    className="text-gray-400 hover:text-blue-500 transition-colors duration-300">About</a></li>
          <li><a href="#skills"   className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Skills</a></li>
          <li><a href="#projects" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Projects</a></li>
          <li><a href="#contact"  className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Contact</a></li>
        </ul>

        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-950 border-t border-gray-800 flex flex-col list-none px-6 py-4 gap-4"
          >
            <li><a href="#about"    onClick={closeMenu} className="text-gray-400 hover:text-blue-500 transition-colors duration-300 block py-2">About</a></li>
            <li><a href="#skills"   onClick={closeMenu} className="text-gray-400 hover:text-blue-500 transition-colors duration-300 block py-2">Skills</a></li>
            <li><a href="#projects" onClick={closeMenu} className="text-gray-400 hover:text-blue-500 transition-colors duration-300 block py-2">Projects</a></li>
            <li><a href="#contact"  onClick={closeMenu} className="text-gray-400 hover:text-blue-500 transition-colors duration-300 block py-2">Contact</a></li>
          </motion.ul>
        )}
      </AnimatePresence>

    </nav>
  )
}

export default Navbar