
import React from 'react'
import soda from '../../../assets/soda.jpg'
import { FaStar, FaStarHalfAlt,FaRegStar  } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Review() {
  const review=[
    {
      name:'Prakash Adhikari ',
      rating:5,
      date:"May 28,2025",
      comment:"Always fresh produce and super helpful staff."
    },
     {
      name:'Bikram Pun ',
      rating:4,
      date:"May 28,2025",
      comment:"Good Variety,but some items are out of stocks."
    },
     {
      name:'Bimala GC',
      rating:2.5,
      date:"May 28,2025",
      comment:"Fair price for everyone or not ?"
    },

  ]
  


const StarRating=({rating})=>{
  return(
      <div className='flex gap-1'>
    {
      Array.from({length:5},(elem,i)=>{
let number=i+0.5;
return(
  <span key={i}>
{
  rating >= i+1 ?(
<FaStar />
  ): rating >= number ?(
    <FaStarHalfAlt />
  ):(
    <FaRegStar />
  )
}
  </span>
)
      })
    }
      </div>
  )
}

const reviewbtn=()=>{
  <div>

    <button className='h-4 w-4 bg-secondary'>2</button>
    <button className='h-4 w-4 bg-secondary'>5</button>
  </div>

}

 var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className=' h-[450px] relative w-full flex text-white flex-col justify-center'>
 <img src={soda} className='top-0 left-0 right-0 h-[450px] w-full  object-cover absolute' />
 <div className='bg-[#080808] opacity-70 absolute w-full h-[450px] left-0 right-0'></div>
  <div className='flex flex-col relative gap-12  h-96  justify-center items-center'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl text-white font-bold  text-center'>Customer Review</h1>
        <p className=' text-center '>See What our shoppers are saying!</p>
      </div>
      <div className=' flex flex-col w-10/12'>
     <Slider {...settings}>
  
     {
       review.map((val,i)=>{
         return(
           <div key={i} className='px-4'>

  <div className='capitalize text-xl font-semibold'>{val.name}</div>
  <div className='text-[#d1b40f]'>
<StarRating rating={val.rating}/>
  
</div>
  <div className=''>{val.date}</div>
<div className=''>{val.comment}</div>
          </div>
        )
      })
     }
      </Slider>
      </div>
      <div>
        <button className='rounded hover:border hover:bg-transparent transition-all duration-200 ease-in-out bg-secondary px-7 font-semibold text-white py-2'>Review</button>
      </div>
  </div>
    </div>
  )
}

export default Review