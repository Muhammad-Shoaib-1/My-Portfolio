import { motion } from "framer-motion"

interface Skill {
  name: string
  icon: string
  level: number
  category: string
}

const skills: Skill[] = [
  { name: "React.js",     icon: "⚛️",  level: 90, category: "Frontend"  },
  { name: "JavaScript",   icon: "🟨",  level: 90, category: "Frontend"  },
  { name: "TypeScript",   icon: "🔷",  level: 70, category: "Frontend"  },
  { name: "Tailwind CSS", icon: "🎨",  level: 90, category: "Frontend"  },
  { name: "Bootstrap 5",  icon: "🅱️",  level: 85, category: "Frontend"  },
  { name: "Node.js",      icon: "🟢",  level: 85, category: "Backend"   },
  { name: "Express.js",   icon: "⚡",  level: 85, category: "Backend"   },
  { name: "MongoDB",      icon: "🍃",  level: 80, category: "Backend"   },
  { name: "REST APIs",    icon: "🔗",  level: 85, category: "Backend"   },
  { name: "JWT Auth",     icon: "🔐",  level: 70, category: "Backend"   },
  { name: "Python",       icon: "🐍",  level: 65, category: "Other"     },
  { name: "Git & GitHub", icon: "🐙",  level: 75, category: "Other"     },
]

const categories = ["Frontend", "Backend", "Other"]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-gray-950 border border-gray-800 hover:border-blue-500/60 rounded-xl p-5 flex flex-col gap-3 transition-colors duration-300 group"
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl">{skill.icon}</span>
        <span className="text-white font-semibold text-sm">{skill.name}</span>
      </div>
      <div className="relative h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
        />
      </div>
      <span className="text-gray-500 text-xs">{skill.level}%</span>
    </motion.div>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">What I Work With</p>
          <h2 className="text-4xl font-bold text-white">
            My <span className="text-blue-500">Skills</span>
          </h2>
        </motion.div>

        {categories.map((cat) => (
          <div key={cat} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-5 flex items-center gap-3"
            >
              <span>{cat}</span>
              <span className="flex-1 h-px bg-gray-800" />
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {skills.filter((s) => s.category === cat).map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
