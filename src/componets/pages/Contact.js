import React from 'react'
import ContactusForm from './ContactusForm'
import Slider from './Slider'
import '../css/CommomHeder.css'
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <div>
      <Slider pageName="CONTACT US">
      </Slider>
      <br/>
      <div class="text-center  animate__heartBeat">
                <h1 class="section-title  bg-white text-center px-3 ">Contact Us</h1>
            </div>
            
      <br/>
      <ContactusForm/>
    
    </div>
  )
}

export default Contact
