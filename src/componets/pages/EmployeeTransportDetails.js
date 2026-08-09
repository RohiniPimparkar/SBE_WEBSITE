import React from 'react'
import Slider from './Slider'
import '../css/CommomHeder.css'
import { useNavigate } from 'react-router-dom'
import transportImage1 from '../../Images/our_services/transport/page_04_image_17.png'
import transportImage2 from '../../Images/our_services/transport/page_04_image_19.png'
import transportImage3 from '../../Images/our_services/transport/page_04_image_20.png'

const EmployeeTransportDetails = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Slider pageName="EMPLOYEE TRANSPORT DIVISION" />
      <br />
      <div className="text-center animate__heartBeat">
        <h1 className="section-title bg-white text-center px-3 ">EMPLOYEE TRANSPORT DIVISION</h1>
      </div>
      <br />
      <div className="container">
        <div className="row align-items-start aboutcontent animate__animated animate__slideInRight">
          <div className="col-lg-8">
            <p>
              The boom in industrial work in regional India over recent years has created demand for new transport services which suit the needs of those who are living and working in these areas.
            </p>
            <p>
              Frequently the towns serving the Companies are many kilometers away and employees are driving in and out each day. This can lead to an increase in noise & air pollution, also the number of fatal and serious accidents, highlighting the need for a specific employee transport solution.
            </p>
            <p>
              As well as road safety issues, large-scale industrial projects can have a significant impact on the environment.
            </p>
            <p>
              In response to this, SBE has developed a specific employee transport service for the Engineering Companies, Software, School/Institutes and resources sectors, focused on the provision of transportation which is safe, sustainable, convenient and represents excellent value for money. SBE brings best in class operational experience and local expertise together to serve industrial clients.
            </p>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="d-flex flex-column gap-3 align-items-center">
              <img src={transportImage1} alt="Employee transport 1" className="serviceimg" />
              <img src={transportImage2} alt="Employee transport 2" className="serviceimg" />
              <img src={transportImage3} alt="Employee transport 3" className="serviceimg" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className='d-flex align-items-center justify-content-center'>
        <button className='viewbtn rounded-pill' onClick={() => navigate('/contact')}>Contact Us</button>
      </div>
      <br />
    </div>
  )
}

export default EmployeeTransportDetails
