
import React from 'react'
import fruit from '../../../assets/fruits.jpg'
import dairy from '../../../assets/dairy.jpg'
import vegetable from '../../../assets/vegetable.jpg'
import drink from '../../../assets/drinks.jpg'


function Catagory() {
  const product=[
    {
      img:vegetable,
      name:"Vegetable",
      des:"Healthy and organic vegetables to you",
    },
     {
      img:fruit,
      name:"Fruits",
      des:"Fresh and juicy fruits delivered to you.",
    },
     {
      img:dairy,
      name:"Dairy product",
      des:"High-quality dairy for your health.",
    },
    {
      img:drink,
      name:"Cold Drink",
      des:"Chill your moments with every refreshing sip.",
    },
  
  ]
  return (
    <div className='w-full py-14 bg-[#eeeaea] mx-auto flex gap-10 flex-col items-center'>
      <h1 className='font-bold text-2xl'>Product Catagories</h1>
      <div className=' grid w-10/12  grid-cols-4 gap-3'>
{
  product.map((val,i)=>{
    return(
      <div key={i} className='flex shadow-md rounded-2xl bg-white gap-5 p-5 flex-col items-center' >
        <div className='py-2 w-fit'> 
<img className="h-28" src={val.img} alt="" />
        </div>
<div className='capitalize text-xl font-semibold'>{val.name}</div>
<div className='text-sm font-semibold leading-4 text-center text-[#494747]'>{val.des}</div>
<button className='px-4 py-1 rounded bg-secondary font-semibold text-white'>{val.name}</button>
</div>
    )
  })
}
      </div>
    </div>
  )
}

export default Catagory