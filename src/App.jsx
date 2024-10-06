import React from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#111518] text-white">
      <Navbar />
      <Home />
    </div>
  )
}

export default App