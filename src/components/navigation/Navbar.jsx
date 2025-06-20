

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import grocerylogo from '../../assets/grocerylogo.jpg'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchSharp,IoPersonSharp,IoCartSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav=[
    {
      name:'home',
      link:'/'
    },
     {
      name:'product',
      link:'/product'
    },
    
     {
      name:'about',
      link:'/about'
    },
     {
      name:'contact',
      link:'/contact'
    },
  ]
  return (
    <div className='fixed z-50  h-fit w-full top-0 left-0'>
      <div className='relative justify-between z-10 flex h-20 mx-auto px-8 rounded bg-white w-10/12 items-center'>
      <div className=''>
        <img className='h-20 w-25' src={grocerylogo} alt="" />
      </div>
      <div className='md:flex hidden gap-7'>
      {
        nav.map((val,i)=>{
return(
  <Link to={val.link} key={i} className=''>
    <div className='capitalize hover:text-primary  text-base font-bold'>
      {val.name}
    </div>
  </Link>
)
        })
      }
      </div>
      <div className='md:hidden'>
        <button onClick={()=>{
          setMenuOpen(true)
        }}>
<GiHamburgerMenu />
        </button>
      </div>
      {
        menuOpen && (
          <div className=''>
          <div>
<button onClick={()=>{
  setMenuOpen(false)
}}>
<RxCross2 />
</button>
          </div>
          <div>
            {
              nav.map((val,i)=>{
return(
  <Link to={val.link} key={i} className=''>
    <div onClick={()=>{
      setMenuOpen(false)
    }} className='capitalize hover:text-primary  text-sm font-bold'>
      {val.name}
    </div>
  </Link>
)
        })
      }
          </div>
          </div>
    
          
        )
      }
      <div className='flex gap-9'>
        <div className='flex items-center'>
        <input type="text" placeholder='Search' className='border text-sm outline-none rounded-3xl px-2 py-0.5' />
        <div className='ml-[-23px] text-gray-500 '>
        <IoSearchSharp className='' />
        </div>
        </div>
        <div className='relative flex'>
          <div className='absolute text-2xl'>
        <IoCartSharp />
          </div>
          <span className='relative bg-red-500 top-[-5px] h-4 w-4 right-[-12px] text-[12px] text-white text-center rounded-3xl '>3</span>
        </div>
        <div className='text-xl'>
        <IoPersonSharp />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar