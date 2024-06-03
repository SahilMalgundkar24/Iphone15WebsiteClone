import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Highlights from './Components/Highlights'
import './index.css'

import React from 'react'
import Model from './Components/Model'
import HowItWorks from './Components/HowItWorks'
import Footer from './Components/Footer'

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
      {/* <Model/> */}
      <HowItWorks/>
      <Footer/>
    </main>
  )
}

export default App