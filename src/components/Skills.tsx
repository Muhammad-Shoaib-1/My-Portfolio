import { motion } from "framer-motion"

interface Skill {
  name: string
  icon: string
  level: string
}

const skills: Skill[] = [
  { name: "React.js",     icon: "⚛️",  level: "Advanced"     },
  { name: "JavaScript",   icon: "🟨",  level: "Advanced"     },
  { name: "TypeScript",   icon: "🔷",  level: "Intermediate" },
  { name: "Node.js",      icon: "🟢",  level: "Advanced"     },
  { name: "Express.js",   icon: "⚡",  level: "Advanced"     },
  { name: "MongoDB",      icon: "🍃",  level: "Advanced"     },
  { name: "Tailwind CSS", icon: "🎨",  level: "Advanced"     },
  { name: "Bootstrap 5",  icon: "🅱️",  level: "Advanced"     },
  { name: "JWT Auth",     icon: "🔐",  level: "Intermediate" },
  { name: "Python",       icon: "🐍",  level: "Intermediate" },
  { name: "Git & GitHub", icon: "🐙",  level: "Intermediate" },
  { name: "REST APIs",    icon: "🔗",  level: "Advanced"     },
]

const levelColor: Record<string, string> = {
  Advanced:     "text-blue-400",
  Intermediate: "text-green-400",
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          My <span className="text-blue-500">Skills</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gray-950 border border-gray-800 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-blue-500 transition-colors duration-300"
            >
              <span className="text-4xl">{skill.icon}</span>
              <span className="text-white font-semibold text-center">{skill.name}</span>
              <span className={`text-sm font-medium ${levelColor[skill.level]}`}>
                {skill.level}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Skills