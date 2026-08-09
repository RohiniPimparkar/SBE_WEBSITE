import React from 'react'
import Slider from './Slider'
import '../css/CommomHeder.css'
import { useNavigate } from 'react-router-dom'
import serviceImage1 from '../../Images/our_services/manpower/page_03_image_14.png'
import serviceImage2 from '../../Images/our_services/manpower/page_03_image_15.png'
import serviceImage3 from '../../Images/our_services/manpower/page_03_image_16.png'

const ManpowerSupplyDetails = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Slider pageName="MANPOWER SUPPLY SERVICE DIVISION" />
      <br />
      <div className="text-center animate__heartBeat">
        <h1 className="section-title bg-white text-center px-3 ">MANPOWER SUPPLY SERVICE DIVISION</h1>
      </div>
      <br />
      <div className="container">
        <div className="row align-items-start aboutcontent animate__animated animate__slideInRight">
          <div className="col-lg-8">
            <p>
              Needless to mention that in the overall growth of any organization what plays a major and prominent role is the key important component i.e. HUMAN RESOURCE.
            </p>
            <p>
              At SBE, we have the most reliable work force of Skilled, Semi-Skilled, UN-Skilled and White Collar categories of human resource with a hand on exposure to numerous technical as well as administrative aspects of today’s Industry.
            </p>
            <p>
              At SBE, we combine our unmatched PAN India perspective with a detailed awareness of local market of today’s Industry and hence, it does not matter if your Manpower Requirement is LOCAL or for PAN India Business, we are strongly confident in helping you find the manpower solution you are looking for.
            </p>
            <p>
              It is indeed!!! with our ever uncompromising belief and approach with quality and reliability that we are being the privileged Business Associates to most of the premium Corporate Houses such as ACG Pharma Technology, Pari, ACG Metalcrafts, Lawkim, Stanley black & Decker, etc since last 1 decades.
            </p>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="d-flex flex-column gap-3 align-items-center">
              <img src={serviceImage1} alt="Manpower service 1" className="serviceimg" />
              <img src={serviceImage2} alt="Manpower service 2" className="serviceimg" />
              <img src={serviceImage3} alt="Manpower service 3" className="serviceimg" />
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

export default ManpowerSupplyDetails
