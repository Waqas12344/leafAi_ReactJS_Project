import React from 'react'
import Navbar from './Component/Navbar'
import HeroSection from './Component/HeroSection'
import KeyFeatures from './Component/KeyFeature'
import About from './Component/About'
import Features from './Component/Features'
import Pricing from './Component/Pricing'
import Collatorate from './Component/Collatorate'
import Footer from './Component/Footer'
import Work from './Component/work'

const App = () => {
  return (
    
    <>
    <Navbar/>
    <div className='max-w-[1260px]  mx-auto'>
      <HeroSection/>
      <KeyFeatures/>
    </div>
    <div className="bg-[#F9FAF9] w-full ">
    <About/>
    </div>
    <div className='max-w-[1260px]  mx-auto'>
      <Features/>
    </div>
    <div className="bg-[#F9FAF9] w-full">
    <Work/>
    </div>

    <div className='max-w-[1260px] my-10 mx-auto px-5'>
      <Pricing/>
      <Collatorate/>
      <Footer/>
    </div>
      </>
  )
}

export default App