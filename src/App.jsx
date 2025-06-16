import { useState } from 'react'
import Hero from './pages/Hero.jsx'
import './App.css'
import Navbar from './pages/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-white dark:bg-black text-black dark:text-white">

      <Navbar/>
      <Hero/>
    </div>
    </>
  )
}

export default App
