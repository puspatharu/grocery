
import React from 'react'
import Banner from '../components/pagecomponent/Home/Banner'
import About from '../components/pagecomponent/Home/About'
import Catagory from '../components/pagecomponent/Home/Catagory'
import Review from '../components/pagecomponent/Home/Review'



function Home() {
  return (
    <div className='flex flex-col'>
      <Banner />
    <About />
    <Catagory />
    <Review />

    </div>
  )
}

export default Home