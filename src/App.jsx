import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'



function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigation = (page) => {
    console.log('handleNavigation called with:', page)
    setCurrentPage(page)
  }

  useEffect(() => {
    console.log('currentPage changed to:', currentPage)
  }, [currentPage])

  return (
    <div className="App">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <Main currentPage={currentPage} onNavigate={handleNavigation} />
      <Footer />
    </div>
  )
}

export default App
