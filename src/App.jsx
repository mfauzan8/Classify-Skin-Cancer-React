import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavbarComponent } from './component/NavbarComponent'
import HeroComponent from './component/HeroComponent'
import AboutComponent from './component/AboutComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarComponent />
      <HeroComponent />
      <AboutComponent />
    </>
  )
}

export default App
