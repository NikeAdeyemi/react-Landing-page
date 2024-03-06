import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
import Aside from './components/Aside'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Aside/>
      <Footer/>
    </div>
  )
}

export default App