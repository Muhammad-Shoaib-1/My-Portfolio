function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="text-xl font-bold text-white">
          Muhammad <span className="text-blue-500">Shoaib</span>
        </div>

        <ul className="flex gap-8 list-none">
          <li><a href="#about"    className="text-gray-400 hover:text-blue-500 transition-colors duration-300">About</a></li>
          <li><a href="#skills"   className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Skills</a></li>
          <li><a href="#projects" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Projects</a></li>
          <li><a href="#contact"  className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Contact</a></li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar