

import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { CiHome } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
function Contactform() {
  const form = [
    { title: "username", type: 'text' },
    { title: 'email', type: 'email' },
    { title: "number", type: 'number'}

  ]

    const schema=Yup.object().shape({
  username:Yup.string().min(3, 'Username must be at least 3 characters')
      .max(15, 'Username must be 15 characters or less')
      .matches(/^[a-zA-Z0-9_]+$/, 'Only letters, numbers, and underscores are allowed')
      .required('Username is required'),
      email:Yup.string() 
      .email("Invalid email format")
      .required("Email is required"),
      number:Yup.string() 
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
       message: Yup.string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters")
      .max(500, "Message cannot exceed 500 characters"),
    })


  return (
    <div className='items-center w-10/12 mx-auto py-18 flex flex-col gap-4'>
      <div className='text-2xl font-bold'>
        <h1>Get In Touch</h1>
      </div>
      <div className='flex gap-12'>

      <div className='flex flex-col gap-5 px-4'>
        <div className='flex gap-5'>
          <div className=''>
            <CiHome className='text-secondary' />
          </div>
          <div className='flex flex-col'>
            <h1 className='text-[18px] font-semibold text-secondary'>SainaMaina-1,Ranibagiya</h1>
            <p className='text-gray-700'>4343 tinkunechowk</p>
          </div>
        </div>
        <div className='flex gap-5'>
          <div>
            <FaPhone className='text-secondary' />
          </div>
          <div>
            <h1  className='text-[18px] font-semibold text-secondary'>9803456723</h1>
            <p className='text-gray-700'>Sun to Sat 7am to 7pm</p>
          </div>
        </div>
             <div className='flex gap-5'>
          <div>
           <MdOutlineEmail  className='text-secondary'/>
          </div>
          <div>
            <h1  className='text-[18px] font-semibold text-secondary'>abc@gmail.com</h1>
            <p  className='text-gray-700'>Send us your query anytime</p>
          </div>
        </div>
      </div>
      <Formik initialValues={{
  username:'',
email:"",
number:"",
message:'',
}
}
onSubmit={(values)=>{
  console.log(values)
}}
validationSchema={schema}
    >
{({})=>{
  return(
  <Form className=' flex flex-col shadow-md py-4 bg-[#f8f9f7] px-6 gap-6 '>
    <div className='flex  gap-5'>
    <div className='flex flex-col gap-3'>
    {
      form.map((val,i)=>{
return(
  <div key={i} className='flex flex-col gap-1'>
{/* <label htmlFor={val.title} className='text-base font-semibold capitalize'>{val.title}</label> */}
<Field className="border px-4 py-2 text-[12px] font-semibold w-82 border-gray-500 outline-none " placeholder={val.title}  name={val.title} type={val.type}/>


<ErrorMessage className='text-red-700' component={'span'} name={val.title} />
  </div>
)
      })
    }
    {/* <label htmlFor="message" className='text-base font-semibold capitalize'>Message</label> */}
    </div>
<textarea placeholder='message' className='border px-4 py-2 text-[12px] font-semibold w-82 border-gray-500 outline-none  '></textarea>
    </div>

    <button type='submit' className=' px-4.5 py-2 w-fit rounded bg-secondary text-white font-semibold hover:bg-transparent hover:text-secondary hover:border transition-all duration-200 ease-in-out'>Submit</button>
  </Form>
  )
}}
</Formik>
      </div>

    </div>
  )
}

export default Contactform