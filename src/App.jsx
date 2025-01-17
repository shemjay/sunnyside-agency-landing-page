import React from 'react'
import Hero from './Components/Hero'
import Gallery from './Components/Gallery'
import Testimonials from './Components/Testimonials'
import ImageGrid from './Components/ImageGrid'
import Footer from './Components/Footer'
import './App.css'

function App() {

  return (
    <>
      <div className='h-screen'>
          <Hero />
          <Gallery />
          <Testimonials />
          <ImageGrid />
          <Footer />
      </div>
    </>
  )
}

export default App
