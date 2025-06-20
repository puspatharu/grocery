
import React from 'react'
import Banner_reuse from '../components/ui/Banner_reuse'
import Bgimg from '../assets/bgimg.jpg'
import Mission from '../components/pagecomponent/About.jsx/Mission'
import Review from '../components/pagecomponent/Home/Review'


function About() {
  return (
    <div className='flex flex-col'>
 <Banner_reuse title="About us" image={Bgimg} />
<Mission />
<Review />
    </div>
  )
}

export default About