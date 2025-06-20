
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navigation/Navbar'
import Linksection from '../components/footer/Linksection'
function Layout() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div>
      <Outlet />
      </div>
      <Linksection />
    </div>
  )
}

export default Layout