import React from 'react'
import Slider from './Slider'
import ServicesContent from './ServicesContent'

function Services() {
  return (
    <div>
    <Slider pageName="OUR SERVICES">
    </Slider>
    <br/>

    <div class="text-center  animate__heartBeat">
              <h1 class="section-title  bg-white text-center px-3 ">OUR SERVICES</h1>
          </div>
<br/>
<ServicesContent/>
    

  </div>
  )
}

export default Services
