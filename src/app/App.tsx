import { Link, Route, Routes } from 'react-router-dom'
import styles from './App.module.css'
import AboutMe from '../pages/aboutme/AboutMe'
import Projects from '../pages/projects/Projects'
import Career from '../pages/career/Career'
import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'


function App() {

  const [mode, setMode] = useState('nonactive')

  const toggleMode = () => {
    setMode(prev => (prev === 'nonactive' ? 'active' : 'nonactive'))
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMode('nonactive')
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.menuBarHeader}>
          <h1><Link to='/'>Jongpil's Portfolio</Link></h1>
          <button className={styles.menuBar} onClick={toggleMode}><Menu /></button>
        </div>
        <nav className={styles.nav}>
          <ul className={`${styles.menus} ${mode === 'active' ? styles.menusActive : ''}`}>
            <li className={styles.menu}><Link to='/' onClick={() => setMode('nonactive')}>About me</Link></li>
            <li className={styles.menu}><Link to='/projects' onClick={() => setMode('nonactive')}>Projects</Link></li>
            <li className={styles.menu}><Link to='/career' onClick={() => setMode('nonactive')}>Career</Link></li>
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
