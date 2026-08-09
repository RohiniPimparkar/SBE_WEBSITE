import React from 'react'
import Slider from './Slider'
import '../css/CommomHeder.css'
import { useNavigate } from 'react-router-dom'
import cateringImage1 from '../../Images/our_services/food/page_05_image_21.png'
import cateringImage2 from '../../Images/our_services/food/page_05_image_22.png'
import cateringImage3 from '../../Images/our_services/food/page_05_image_24.png'

const CorporateCateringDetails = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Slider pageName="CORPORATE CATERING DIVISION" />
      <br />
      <div className="text-center animate__heartBeat">
        <h1 className="section-title bg-white text-center px-3 ">CORPORATE CATERING DIVISION</h1>
      </div>
      <br />
      <div className="container">
        <div className="row align-items-start aboutcontent animate__animated animate__slideInRight">
          <div className="col-lg-8">
            <p>
              "There is no love more sincere than the love of food."
            </p>
            <p>
              We are a young, vibrant catering division of SBE. We provide fantastic, flavourful food to corporate customers in and around Pune.
            </p>
            <p>
              Our extensive menus incorporate the freshest seasonal ingredients and cover a range of cuisines inspired by our travels around Pune.
            </p>
            <p>
              Our team is dedicated to delivering consistent quality and excellent service, whether for daily corporate meals, employee dining, or special business events.
            </p>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="d-flex flex-column gap-3 align-items-center">
              <img src={cateringImage1} alt="Catering service 1" className="serviceimg" />
              <img src={cateringImage2} alt="Catering service 2" className="serviceimg" />
              <img src={cateringImage3} alt="Catering service 3" className="serviceimg" />
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

export default CorporateCateringDetails
