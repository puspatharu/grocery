
import React from 'react'
import aboutimg from '../../../assets/homepage.png'
function About() {
  return (
    <div className='flex h-11/12 justify-center items-center w-10/12 mx-auto'>
     <div className='w-5/12 flex flex-col gap-4'>
      <h1 className='text-base text-secondary font-semibold'>don't panic.go organic</h1>
      <h1 className='text-2xl font-semibold'>REACH FOR A HEALTHER YOU WITH ORGANIC FOODS</h1>
      <p className='text-sm font-semibold text-[#494747]'> At Grocery Store, we believe in delivering the freshest and finest
              products straight to your doorstep. From organic vegetables to
              everyday essentials, we are committed to providing high-quality
              groceries for you and your family.</p>
      <button className='hover:border-1 w-fit px-5 font-semibold py-2 rounded transition duration-500 all ease-in-out my-3 bg-secondary  text-white hover:bg-white hover:text-secondary '>Learn More</button>
     </div>
     <div className='h-fit w-7/12'>
<img src={aboutimg} alt="" />
     </div>
    </div>
  )
}

export default About