import { useState } from 'react'
import Cover from "./assets/videos/cover3.mp4"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className={`relative h-screen w-screen overflow-hidden ${menuOpen ? 'bg-black/60' : ''}`}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute top-0 left-0 w-full h-full object-cover z-[-1] ${menuOpen ? 'hidden' : ''}`}
      >
        <source src={Cover} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-30 text-black hover:text-white text-3xl bg-transparent px-3 py-1 rounded transition cursor-pointer"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Full-Screen Overlay Menu with Fade Animation */}
      <div
        className={`fixed inset-0 bg-black/80 z-20 flex flex-col items-center justify-center space-y-6 text-white text-3xl transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button onClick={toggleMenu} className='hover:bg-black px-4 py-2 rounded cursor-pointer'>Home</button>
        <button onClick={toggleMenu} className='hover:bg-black px-4 py-2 rounded cursor-pointer'>About</button>
        <button onClick={toggleMenu} className='hover:bg-black px-4 py-2 rounded cursor-pointer'>Services</button>
        <button onClick={toggleMenu} className='hover:bg-black px-4 py-2 rounded cursor-pointer'>Contact</button>
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 flex flex-col font-cormorant items-center justify-center h-full text-white text-center px-4 transition-all duration-500 ${
          menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          REDORIA
        </h1>
        <p className="text-lg md:text-2xl drop-shadow-md font-raleway">
          Where every page opens a new world..
        </p>
      </div>
    </div>
  )
}

export default App
