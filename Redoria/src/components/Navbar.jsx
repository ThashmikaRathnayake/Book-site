import { useState } from 'react'
import Cover from "./assets/videos/cover3.mp4"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={Cover} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-30 text-white text-3xl bg-black/50 px-3 py-1 rounded hover:bg-black/70 transition"
      >
        ☰
      </button>

      {/* Full-Screen Slide-in Overlay */}
      <div
        className={`fixed inset-0 bg-black/90 z-20 flex flex-col items-center justify-center space-y-6 text-white text-3xl transform transition-transform duration-500 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={toggleMenu} className="absolute top-6 right-6 text-4xl">✕</button>
        <button onClick={toggleMenu}>Home</button>
        <button onClick={toggleMenu}>About</button>
        <button onClick={toggleMenu}>Services</button>
        <button onClick={toggleMenu}>Contact</button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to My App
        </h1>
        <p className="text-lg md:text-2xl drop-shadow-md">
          Your amazing content goes here.
        </p>
      </div>
    </div>
  )
}

export default App
