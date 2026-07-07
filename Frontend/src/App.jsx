import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogs from './Components/Blogs/Blogs.jsx'
import Connect from './Components/Connect/Connect.jsx'
import Home from './Components/Home/Home.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
import ProjectsPage from './Components/Projects/ProjectsPage.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx'

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'light')

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
    document.documentElement.style.colorScheme = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return (
    <main className={`min-h-screen bg-[#f8fbff] pb-24 text-slate-950 ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/collections" element={<Blogs />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
    </main>
  )
}

export default App
