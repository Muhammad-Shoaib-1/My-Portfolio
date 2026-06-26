import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800/60 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-xl font-bold text-white mb-1">
              Muhammad <span className="text-blue-500">Shoaib</span>
            </div>
            <p className="text-gray-600 text-sm">Full-Stack MERN Developer · Lahore, Pakistan</p>
          </div>

          <div className="flex gap-4">
            {[
              { href: "mailto:shoaib7140a@gmail.com", icon: FaEnvelope, label: "Email" },
              { href: "https://linkedin.com/in/muhammad-shoaib-3334982aa", icon: FaLinkedin, label: "LinkedIn" },
              { href: "https://github.com/Muhammad-Shoaib-1", icon: FaGithub, label: "GitHub" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-500/40 text-gray-400 hover:text-blue-400 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-gray-600 text-sm">
            © 2026 Muhammad Shoaib
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800/40 text-center">
          <p className="text-gray-700 text-xs">
            Built with React · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
