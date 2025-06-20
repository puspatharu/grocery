
import React from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropRightLine } from "react-icons/ri";
import { MdPhone, MdMessage, MdOutlineLocationOn } from "react-icons/md";
import { FaFacebookF, FaInstagramSquare, FaTiktok } from "react-icons/fa";
function Linksection() {
  const quickli = [
    {
      name: 'home',
      link: '/home'
    },
    , {
      name: 'product',
      link: '/product'
    },
   
    {
      name: 'about',
      link: '/about'
    },
    {
      name: 'contact',
      link: '/contact'
    }
  ]

  const extrali = [
    {
      name: 'cart',
      link: '/cart'
    },
    {
      name: 'login',
      link: 'login'
    },
    {
      name: 'register',
      link: 'register'
    },
  ]
  
  return (
    <div className='bg-[#04091e] text-white h-96 w-full items-center flex flex-col gap-18 justify-center '>

    <div className='grid grid-cols-4'>

      <div className='flex flex-col gap-5 w-fit'>
        <h1 className='font-semibold text-xl'>Quick Links </h1>
        <div className='flex flex-col gap-3'>
          {
            quickli.map((val, i) => {
              return (
                <Link to={val.link} key={i} className='flex gap-2 items-center hover:text-secondary'>
                  <div>
                    <RiArrowDropRightLine className='text-[20px]' />
                  </div>
                  <div className='capitalize text-sm font-semibold'>
                    {val.name}
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>

      <div className='flex flex-col gap-5 w-fit'>
        <h1 className='font-semibold text-xl'>Extra Links </h1>
        <div className='flex flex-col gap-3'>
          {
            extrali.map((val, i) => {
              return (
                <Link to={val.link} key={i} className='flex gap-2 items-center hover:text-secondary'>
                  <div>
                    <RiArrowDropRightLine className='text-[20px]' />
                  </div>
                  <div className='capitalize text-sm font-semibold'>
                    {val.name}
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>

      <div className='flex flex-col gap-5'>
        <h1 className='font-semibold text-xl'>Contact Info </h1>
        <div className=' font-semibold flex flex-col gap-3 w-fit'>
          <div className='flex gap-2 items-center hover:text-secondary'>
            <div>
              <MdPhone />
            </div>
            <div className='text-sm'>9803456723</div>
          </div>
          <div className='flex gap-2 items-center hover:text-secondary'>
            <div>
              <MdPhone />
            </div>
            <div className='text-sm'>9838747664</div>
          </div>
          <div className='flex gap-2 items-center hover:text-secondary'>
            <div>
              <MdMessage />
            </div>
            <div className='text-sm'>abc@gmail.com</div>
          </div>
          <div className='flex gap-2 items-center hover:text-secondary'>
            <div>
              <MdOutlineLocationOn />
            </div>
            <div className='text-sm'>SainaMaina-1,ranibagiya</div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-5'>
        <h1 className='font-semibold text-xl'>Follow us</h1>
        <div className='flex flex-col gap-3'>
          <p className='font-semibold text-[14px]'>Get in touch with us for any inquiries.</p>
          <div className='flex gap-4'>
            <a href=""><FaFacebookF className='hover:text-secondary' /></a>
            <a href=""><FaInstagramSquare className='hover:text-secondary' /></a>
            <a href=""><FaTiktok className='hover:text-secondary' /></a>
          </div>
        </div>
      </div>
    </div>
  
    <p className='text-[14px] font-semibold'>Copyright ©2025 PSR Grocery Store. All rights reserved.</p>
    </div>

  )
}

export default Linksection