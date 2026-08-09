import React from 'react'
import'../css/Contact.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate} from 'react-router-dom';
import WhiteNameLogo from '../../Images/White_name_Logo.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    FaPhoneAlt, 
    FaRegEnvelope,
    FaMapMarkerAlt,
    FaArrowAltCircleLeft,
    FaAddressCard
  } 
    from "react-icons/fa";



function ContactusForm() {
  const navigate = useNavigate();

    const navigateHome = () => {
        //  navigate to /
        navigate('/');
      };
  return (
    <div>
     
        <div className="row align-items-center gx-2 contact-row">
              <div className='col-md-6 animate__animated animate__backInRight'>
                <div className='approachimg'>
                  <img src={WhiteNameLogo} alt="White Name Logo" className="img-fluid" />
                </div>
            </div>
         
            <div className="col-md-6 animate__animated animate__backInLeft">
              <h3 className='contact-headers'>Get in touch</h3><hr/>
              
              <div className="mt-4">
                  <div className="d-flex">
                  <FaMapMarkerAlt className='icons'/>
                    <p className="d-flex-header" >Address: <span className='value'>Destination Center 1, Survey No. 6, Shop No. S-63, Second Floor,
Nanded City, Sinhagad Road, Pune, Maharashtra- 411068</span></p>
                  </div><hr/>
                  <div className="d-flex">
                  <FaPhoneAlt className='icons'/>
                    <p className="d-flex-header">Contact :- <span className='value'>9881660990 / 9172795552</span></p>
                  </div><hr/>
                                    <div className="details-block">
                    <div className="d-flex align-items-center mb-2">
                      <FaAddressCard className='icons'/>
                      <p className="d-flex-header mb-0">Details</p>
                    </div>
                    <div className="details-list">
                      <p className="d-flex-header mb-1">D&B D-U-N-S Number: <span className='value'>85-649-8636</span></p>
                      <p className="d-flex-header mb-1">Pan Card Number: <span className='value'>CXVPS4637P</span></p>
                      <p className="d-flex-header mb-1">GSTIN Number: <span className='value'>27CXVPS4637P1Z5</span></p>
                      <p className="d-flex-header mb-1">P.F. Number: <span className='value'>PUPUN2634886000</span></p>
                      <p className="d-flex-header mb-0">ESIC Number: <span className='value'>33000692800000699</span></p>
                    </div>
                  </div>
                  <hr/>
                  {/* <div className="d-flex">
                  <FaRegEnvelope className='icons'/>
                    <p className="d-flex-header">Email:- <span className='value'></span></p>
                  </div><hr/>
                  <div className="d-flex">
                  <FaArrowAltCircleLeft className='icons'/>
                    <p className="d-flex-header">Website :- <a href="" onClick={navigateHome}><span className='value'></span></a></p>
                  </div><hr/> */}
                  {/* Instagram and Facebook contacts removed for this client */}
                 
                  

                  
              </div>
            </div>
        
        </div>
        <div className="contact-footer-banner">
          <span className="footer-tag"></span>
        </div>
        {/* <div className='content1 text-center animate__animated animate__tada'>LOCATION
         </div> */}
        {/* <div className='row'>
          <div className='col-12 map'> 
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6659330629764!2d73.0090493!3d19.0784201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1947824c383%3A0x5910e7d48bcab6e0!2sSwagBox%20Media!5e0!3m2!1sen!2sin!4v1682361766783!5m2!1sen!2sin" 
        width="100%" 
        height="400" 
        style={{border:"0"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">

        </iframe>
        </div>

        </div> */}

        

  
    </div>
  )
}

export default ContactusForm
