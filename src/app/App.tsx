import { Link, Route, Routes } from 'react-router-dom'
import styles from './App.module.css'
import AboutMe from '../pages/aboutme/AboutMe'
import Projects from '../pages/projects/Projects'
import Career from '../pages/career/Career'
import { Menu } from 'lucide-react'
import { useState } from 'react'


function App() {

  const [mode, setMode] = useState('nonactive')

  const toggleMode = () => {
    setMode(prev => (prev === 'nonactive' ? 'active' : 'nonactive'))
  }
  
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.menuBarHeader}>
          <h1><Link to='/'>Jongpil's Portfolio</Link></h1>
          <button className={styles.menuBar} onClick={toggleMode}><Menu /></button>
        </div>
        <nav className={styles.nav}>
          <ul className={mode === 'nonactive' ? styles.menus : styles.menusActive}>
            <li className={styles.menu}><Link to='/'>About me</Link></li>
            <li className={styles.menu}><Link to='/projects'>Projects</Link></li>
            <li className={styles.menu}><Link to='/career'>Career</Link></li>
          </ul>
        </nav>



      </header>


      <Routes>
        <Route path='/' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/career' element={<Career />} />
      </Routes>

      <footer className={styles.footer}>
        <p>&copy; 2026 HANJONGPIL. All rights reserved </p>
      </footer>

    </div>

  )
}

export default App
