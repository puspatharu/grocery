
import React from 'react'
import Banner_reuse from '../components/ui/Banner_reuse'
import Bgimg from '../assets/bgimg.jpg'
import Contactform from '../components/pagecomponent/Contact/Contact_form'


function Contact() {
  return (
    <div className='flex flex-col'>
      <Banner_reuse title='Contact us' image={Bgimg} />
<Contactform />


    </div>
  )
}

export default Contact