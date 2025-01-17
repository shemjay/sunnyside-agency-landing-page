import React from 'react'
import Hero from './Components/Hero'
import Gallery from './Components/Gallery'
import Testimonials from './Components/Testimonials'
import './App.css'

function App() {

  return (
    <>
      <div className='h-screen'>
          <Hero />
          <Gallery />
          <Testimonials />
      </div>
    </>
  )
}

export default App
