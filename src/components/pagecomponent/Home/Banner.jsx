
import React from 'react'
import Bgimage from '../../../assets/bgimg.jpg'
function Banner() {
  return (
    <div className='relative h-lvh'>
     <img src={Bgimage} className='top-0 left-0 right-0 h-full w-full object-cover absolute' />
     <div className='bg-[#1e2806] opacity-50 absolute h-full w-full left-0 right-0'></div>
     <div className='text-white z-10 flex items-center  flex-col gap-15 justify-center relative h-full '>
      <div className='flex flex-col gap-2.5 items-center pt-32'>
      <h1 className='font-semibold text-xl w-7/12 text-center'>Fresh And Organic Product For You</h1>
      <h3 className='text-4xl font-bold text-center w-8/12'>Shop smarter.Eat fresher.Save time</h3>
      <p className='text-sm/4 font-semibold text-center w-7/12'>Order fresh produce,pantry staples,organic products,and everyday essentials.Order in minutes and enjoy fast,reliable delivery straight to your home.</p>
      </div>
      <button className='hover:border-1 px-5 font-semibold py-1.5 rounded transition duration-500 all ease-in-out bg-secondary hover:bg-white hover:text-secondary'>Shop Now</button>
     </div>
    </div>
  )
}

export default Banner