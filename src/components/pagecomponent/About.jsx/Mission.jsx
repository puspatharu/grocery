
import React from 'react'

function Mission() {
  const mission=[
    {
      head:'Freshness',
      para:'We ensure that only the freshest products are aavailable.'
    },
    {
      head:'Quality',
      para:' Every product undergoes stringent quality checks to meet our high standards'
    },
    {
      head:'Customer Satisfaction',
      para:'Our priority is ensuring that every customer is happy with their shopping experience'
    },
    {
      head:'Sustainability',
      para:'We support eco-friendly practices and work with local farmers'
    }
  ]
  return (
    <div className='flex flex-col items-center bg-[#f9f9f4] gap-18 py-14'>
      <div className='flex w-full items-center gap-3 flex-col'>
        <h1 className='text-2xl text-center font-bold'>Our Mission</h1>
        <p className=' font-semibold text-center w-6/12 text-[#494747]'>
            At PSR Grocery Store, our mission is to make fresh, high-quality
            groceries easily accessible to everyone, promoting healthy living
            and sustainability.
          </p>
      </div>

      <div className='grid grid-cols-4 w-10/12 gap-8'>
        {
          mission.map((val,i)=>{
return(
  <div key={i} className='shadow-md bg-green-100 flex justify-center items-center p-5 flex-col gap-2'>
    <h3 className='text-xl font-semibold'>{val.head}</h3>
             <p className='text-[#494747] font-semibold text-center'>
              {val.para}
            </p>
  </div>
)
          })
        }
        
      </div>
    </div>
  )
}

export default Mission