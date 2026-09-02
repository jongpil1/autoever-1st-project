import { Link, Route, Routes } from 'react-router-dom'
import styles from './App.module.css'
import AboutMe from '../pages/aboutme/AboutMe'
import Projects from '../pages/projects/Projects'
import Career from '../pages/career/Career'


function App() {

  return (
    <div className={styles.app}>
      <header>
      <h1><Link to='/'>Jongpil's Portfolio</Link></h1>
      <nav>
        <ul className={styles.menus}>
          <li className={styles.menu}><Link to='/'>About me</Link></li>
          <li className={styles.menu}><Link to='/projects'>Projects</Link></li>
          <li className={styles.menu}><Link to='/career'>Career</Link></li>
        </ul>
      </nav>
    </header>
    
    <Routes>
      <Route path='/' element={<AboutMe />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/career' element={<Career />}/>
    </Routes>
    </div>
    
  )
}

export default App
