
import React from 'react'
import butter from '../../../assets/butter.jpg'
import cabbage from '../../../assets/cabbage.jpg'
import coca from '../../../assets/coca.jpg'
import lemon from '../../../assets/lemon.jpg'
import apple from '../../../assets/apple.jpg'
import tomato from '../../../assets/tamato.jpg'
import banana from '../../../assets/banana.jpg'
import maaza from '../../../assets/maaza.jpeg'
function Product() {
   const prod=[
      {
    img:apple,
    name:'Fresh Apple',
    prize:400,
  
     },
      {
        img:cabbage,
        name:'Cabbage',
        prize:400,
      
         },
          {
        img:tomato,
        name:'Tomato',
        prize:400,
      
         },
         {
         img:banana,
        name:'Banana',
        prize:400,
       
         },
          {
         img:lemon,
        name:'Lemon',
        prize:400,
      
         },
          {
         img:coca,
        name:'Cocacola',
        prize:400,
       
         },
          {
         img:butter,
        name:'butter',
        prize:400,
      
         },
          {
         img:maaza,
        name:'maaza',
        prize:400,
       
         },
    ]
  return (
     <div className='w-10/12 py-20 mx-auto flex gap-10 flex-col items-center'>
      <div className='font-bold text-2xl'>Latest Product</div>
      <div className='grid grid-cols-4 gap-8'>
{
  prod.map((val,i)=>{
    return(
      <div key={i} className='flex shadow-md bg-white gap-2 px-9 py-4 flex-col items-center'>
        <div className='py-2 w-fit'>
          <img className='h-22 rounded' src={val.img} alt="" />
        </div>
        <div className='capitalize text-xl font-semibold'>{val.name}</div>
        <div className='text-red-700 text-sm font-semibold'>Rs.{val.prize}</div>
        <button className='px-4 py-1 rounded hover:border-none transition duration-200 ease-in-out bg-primary text-white font-semibold'>Buy Now</button>
        <button className='px-4 py-1 rounded hover:border-none transition duration-200 ease-in-out bg-secondary text-white font-semibold'>Add To Cart</button>
      </div>
    )
  })
}
      </div>
    </div>
  )
}

export default Product