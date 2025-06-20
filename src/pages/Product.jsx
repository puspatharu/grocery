
import React from 'react'
import Banner_reuse from '../components/ui/Banner_reuse'
import bgimg from '../assets/bgimg.jpg'
import Product from '../components/pagecomponent/Product/Product'

function Productab() {
  return (
    <div className='flex flex-col'>
      <Banner_reuse title='product' image={bgimg} />
      <Product />
    </div>
  )
}

export default Productab