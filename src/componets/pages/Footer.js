import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faFacebook,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='row'>
    <div className='col-lg-12'>
    <div className='footer-area'>
        <div className="p-3 mb-2 bg-dark text-white">
          <span className='footerval animate__animated animate__flash'>@Join us on social media</span>
          <div className='socialicon animate__animated animate__flash'>
            <span className="instasocial">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </span>
            <span className="fbsocial">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </span>
          </div>
        </div>
    </div> 
    </div>
    </div>
  )
}

export default Footer



