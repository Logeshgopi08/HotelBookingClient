import React from 'react'
import FormHero from './FormHero'

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white
    bg-[url("src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>

        <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20'>The Ulimate Hotel Experience</p>
        <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px]
        font-bold md:font-extrabold mt-4 max-w-xl'>Discover Your Perfect Destination</h1>
        <p className='max-w-130 mt-2 text-sm md:text-base'>Unparalled luxury and comfort at World's most exclusive Hotels and resorts</p>

      <FormHero/>
      
    </div>
  )
}

export default Hero
