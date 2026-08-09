import React from 'react'
import ClientsLogo from './ClientsLogo'
import Slider from './Slider'

const Client = () => {
  return (
    <div>
       <Slider pageName="OUR CLIENTS">
      </Slider>
  
<br/>
      <div class="text-center  animate__heartBeat">
                <h1 class="section-title  bg-white text-center px-3 ">OUR CLIENTS</h1>
           </div>
           <div className='aboutcontent text-center animate__animated animate__backInDown'>
           “Building strong partnerships through reliable service, professional excellence, and lasting relationships!!!”
            
        </div>
           <br/> 
      <ClientsLogo/>
    </div>
  )
}

export default Client
