import { motion } from "framer-motion"

interface Project {
  title: string
  description: string
  tech: string[]
  liveUrl: string
  githubUrl: string
  emoji: string
  featured?: boolean
  accentColor: string
}

const projects: Project[] = [
  {
    emoji: "🎓",
    title: "LearnSpace LMS",
    featured: true,
    accentColor: "from-blue-500/20 to-purple-500/10",
    description:
      "A full-stack Learning Management System connecting instructors and learners across Pakistan. Features role-based access control (Student, Instructor, Admin), course creation, lesson management with YouTube embedding, student enrollment with payment flow, and an admin analytics dashboard with real-time charts.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Bootstrap 5"],
    liveUrl: "https://learnspace-lms.vercel.app",
    githubUrl: "https://github.com/Muhammad-Shoaib-1/learnspace",
  },
  {
    emoji: "🖼️",
    title: "PixelPro",
    featured: false,
    accentColor: "from-green-500/15 to-teal-500/5",
    description:
      "An AI-based Image Enhancer and Color Corrector built with Python and Flask. Integrated advanced AI models including Real-ESRGAN for image super-resolution and DeepWB for intelligent white balance correction — bringing studio-grade processing to the browser.",
    tech: ["Python", "Flask", "Real-ESRGAN", "DeepWB", "AI/ML"],
    liveUrl: "",
    githubUrl: "https://github.com/Muhammad-Shoaib-1/pixelpro",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">What I've Built</p>
          <h2 className="text-4xl font-bold text-white">
            My <span className="text-blue-500">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-2xl overflow-hidden flex flex-col transition-colors duration-300"
            >
              {/* Gradient header strip */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.accentColor} opacity-80`} />

              <div className="p-8 flex flex-col gap-5 flex-1">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{project.emoji}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed text-sm flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2 border-t border-gray-800">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-colors duration-300"
                    >
                      <span>↗</span> Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-700 hover:border-blue-500 text-gray-400 hover:text-blue-400 px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300"
                  >
                    <span>⌥</span> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Muhammad-Shoaib-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 border border-gray-800 hover:border-blue-500/40 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300"
          >
            🐙 See more on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
