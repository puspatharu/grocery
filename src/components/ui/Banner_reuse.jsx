
import React from 'react'
import Bgimage from '../../assets/bgimg.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";
function Banner_reuse({title,image}) {
  return (
    <div className='relative'>
       <img src={image} className='top-0 left-0 right-0 h-86 w-full object-cover object-left-top absolute' />
       <div className='bg-[#1e2806] opacity-50 absolute h-86 w-full top-0 left-0 '></div>
      <div className='relative z-10 text-white pt-10 h-86 flex flex-col gap-3 items-center justify-center '>
        <div className='text-2xl font-bold'>{title}</div>
        <div className='flex text-sm gap-3 items-center font-semibold'>
          <div>Home</div>
          <div className='text-[15px]'>
<FaLongArrowAltRight />
          </div>
          <div>{title}</div>
        </div>
      </div>
    </div>
  )
}

export default Banner_reuse