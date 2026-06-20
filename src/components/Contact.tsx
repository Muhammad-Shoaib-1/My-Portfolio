import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
   <section id="contact" className="py-24 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-4"
        >
          Get In <span className="text-blue-500">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I'm currently open to internship and junior developer roles.
          Whether you have an opportunity or just want to say hi, my inbox is always open!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-12"
        >

          <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 hover:border-blue-500 transition-colors duration-300">
            <a href="mailto:shoaib7140a@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
            >
              <FaEnvelope size={30} />
            </a>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 hover:border-blue-500 transition-colors duration-300">
            <a href="https://www.linkedin.com/in/muhammad-shoaib-3334982aa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
            >
              <FaLinkedin size={30} />
            </a>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 hover:border-blue-500 transition-colors duration-300">
            <a href="https://github.com/Muhammad-Shoaib-1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
            >
              <FaGithub size={30} />
            </a>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 flex items-center gap-3 hover:border-blue-500 transition-colors duration-300">
            <span className="text-2xl">📍</span>
            <div>
              <p className="text-gray-500 text-xs">Location</p>
              <p className="text-white font-medium text-sm">Lahore, Pakistan</p>
            </div>
          </div>

        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-950 border border-gray-800 rounded-xl p-8 flex flex-col gap-6"
        >

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-400 text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-400 text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="mail@example.com"
              className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-gray-400 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Hello Shoaib, I'd like to talk about..."
              className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Send Message 🚀
          </button>

        </motion.form>

      </div>
    </section>
  )
}

export default Contact