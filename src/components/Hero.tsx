import { motion } from "framer-motion"

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-500 text-lg font-medium mb-4 tracking-widest uppercase"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-7xl font-bold text-white mb-4"
        >
          Muhammad <span className="text-blue-500">Shoaib</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-3xl font-semibold text-gray-400 mb-6"
        >
          Full-Stack <span className="text-blue-500">MERN</span> Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build clean, responsive web applications that work in the real world.
          Currently looking for internship and junior developer roles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex gap-4 justify-center mb-12"
        >
          <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            View My Work
          </a>
          <a href="#contact" className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex gap-6 justify-center"
        >
          <a href="mailto:shoaib7140a@gmail.com" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-sm">
            Email
          </a>
          <a href="https://linkedin.com/in/muhammad-shoaib-3334982aa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-sm">
            LinkedIn
          </a>
          <a href="https://github.com/Muhammad-Shoaib-1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-sm">
            GitHub
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero