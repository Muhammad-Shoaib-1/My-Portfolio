import { motion } from "framer-motion"

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm a full-stack web developer with a passion for building things that
              actually work in the real world, not just on localhost.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My stack is MERN (MongoDB, Express.js, React.js, Node.js), and I have spent
              the past couple of years going deep on both sides of the stack. On the frontend,
              I care about clean interfaces, responsive layouts, and user experiences that feel
              intuitive.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm currently completing my BSCS at the University of Education, Lahore.
              My academic background gave me the foundations; my projects gave me the experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4"
          >
            <div className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-lg p-4">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p className="text-white font-medium">Lahore, Pakistan</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-lg p-4">
              <span className="text-2xl">🎓</span>
              <div>
                <p className="text-gray-500 text-sm">Degree</p>
                <p className="text-white font-medium">BSCS — University of Education</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-lg p-4">
              <span className="text-2xl">💼</span>
              <div>
                <p className="text-gray-500 text-sm">Experience</p>
                <p className="text-white font-medium">Intern — DevelopersHub Corporation</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-lg p-4">
              <span className="text-2xl">📧</span>
              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p className="text-white font-medium">shoaib7140a@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-lg p-4">
              <span className="text-2xl">🟢</span>
              <div>
                <p className="text-gray-500 text-sm">Status</p>
                <p className="text-green-400 font-medium">Open to Work</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About