import { motion } from "framer-motion"

interface Project {
  title: string
  description: string
  tech: string[]
  liveUrl: string
  githubUrl: string
  emoji: string
}

const projects: Project[] = [
  {
    emoji: "🎓",
    title: "LearnSpace LMS",
    description:
      "A full-stack Learning Management System connecting instructors and learners across Pakistan. Features role-based access control (Student, Instructor, Admin), course creation, lesson management with YouTube embedding, student enrollment with payment flow, and an admin analytics dashboard with real-time charts.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Bootstrap 5"],
    liveUrl: "https://learnspace-lms.vercel.app",
    githubUrl: "https://github.com/Muhammad-Shoaib-1/learnspace",
  },
  {
    emoji: "🖼️",
    title: "PixelPro",
    description:
      "An AI-based Image Enhancer and Color Corrector built with Python and Flask. Integrated advanced AI models including Real-ESRGAN for image super-resolution and DeepWB for intelligent white balance correction.",
    tech: ["Python", "Flask", "Real-ESRGAN", "DeepWB", "AI/ML"],
    liveUrl: "",
    githubUrl: "https://github.com/Muhammad-Shoaib-1/pixelpro",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          My <span className="text-blue-500">Projects</span>
        </motion.h2>

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
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-8 flex flex-col gap-6 hover:border-blue-500 transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="text-5xl">{project.emoji}</span>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>

              <p className="text-gray-400 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.liveUrl && (
                  
                   <a href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300 text-sm"
                  >
                    Live Demo
                  </a>
                )}
                
                 <a href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-700 hover:border-blue-500 text-gray-400 hover:text-blue-500 px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-sm"
                >
                  GitHub
                </a>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Projects