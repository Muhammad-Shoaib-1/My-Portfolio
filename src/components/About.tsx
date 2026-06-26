import { motion } from "framer-motion"

const infoCards = [
  { icon: "📍", label: "Location", value: "Lahore, Pakistan" },
  { icon: "🎓", label: "Degree", value: "BSCS — University of Education" },
  { icon: "💼", label: "Experience", value: "Intern @ DevelopersHub Corporation" },
  { icon: "📧", label: "Email", value: "shoaib7140a@gmail.com" },
  { icon: "🟢", label: "Status", value: "Open to Work", highlight: true },
]

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Who I Am</p>
          <h2 className="text-4xl font-bold text-white">
            About <span className="text-blue-500">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a full-stack web developer who cares about building things that work in the real world,
              not just on localhost.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My stack is <span className="text-blue-400 font-medium">MERN</span> (MongoDB, Express.js, React.js, Node.js).
              I've spent the past couple of years going deep on both sides of the stack. On the frontend, I care about
              clean interfaces, responsive layouts, and user experiences that feel intuitive. On the backend,
              I focus on scalable APIs, solid auth flows, and databases that don't get in the way.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I'm currently completing my BSCS at the{" "}
              <span className="text-white font-medium">University of Education, Lahore</span>.
              My academic background gave me the foundations; my projects gave me the experience.
            </p>

            {/* Timeline */}
            <div className="pt-4 space-y-4">
              {[
                { year: "2022", event: "Started BSCS at University of Education" },
                { year: "2023", event: "Built first full-stack web apps with MERN" },
                { year: "2024", event: "Internship at DevelopersHub Corporation" },
                { year: "2025", event: "Built LearnSpace LMS & PixelPro AI tool" },
                { year: "2026", event: "Actively seeking junior / internship roles" },
              ].map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-blue-500 font-bold text-sm w-10 text-right shrink-0">{item.year}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1" />
                    <span className="text-gray-400 text-sm">{item.event}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-3"
          >
            {infoCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="flex items-center gap-4 bg-gray-900/50 border border-gray-800 hover:border-blue-500/40 rounded-xl p-4 transition-colors duration-300"
              >
                <span className="text-2xl">{card.icon}</span>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">{card.label}</p>
                  <p className={`font-medium ${card.highlight ? "text-green-400" : "text-white"}`}>
                    {card.value}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA mini card */}
            <motion.a
              href="/Muhammad_Shoaib_CV.pdf"
              download
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="flex items-center gap-4 bg-blue-500/10 border border-blue-500/30 hover:border-blue-500/60 rounded-xl p-4 transition-colors duration-300 group"
            >
              <span className="text-2xl">📄</span>
              <div>
                <p className="text-gray-400 text-xs mb-0.5">Resume</p>
                <p className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                  Download CV →
                </p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
