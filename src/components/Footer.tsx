function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-xl font-bold text-white">
          Muhammad <span className="text-blue-500">Shoaib</span>
        </div>

        <p className="text-gray-500 text-sm">
          Built with React, TypeScript and Tailwind CSS
        </p>

        <p className="text-gray-500 text-sm">
          2026 Muhammad Shoaib. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer