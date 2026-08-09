import React from 'react'
import '../css/Home.css';
import { useNavigate} from 'react-router-dom';
import Cardhovereffect from './Cardhovereffect';
import Card from './Card';
import EventPhoto from './EventPhoto';
import ClientsLogo from './ClientsLogo';

const Landingpage = () => {
    const navigate = useNavigate();

    const navigateContact = () => {
        //  navigate to /
        navigate('/contact');
      };

    const navigateServices = () => {
        //  navigate to /
        navigate('/approach');
      };
  return (
 <div className='bgimg'>
        <p className='spancontent text-center animate__animated animate__bounce'>  WHY SHREE BHAIRAVKRUPA?</p>
        <div className='row aboutcontent animate__animated animate__lightSpeedInLeft'>
       Reliable services. Skilled people. Lasting partnerships.

We deliver professional, customized solutions with a strong focus on quality, reliability, safety, and client satisfaction.
        </div>
        <div className='d-flex align-items-center justify-content-center animate__animated animate__rollIn'><button className='viewbtnhome rounded-pill' onClick={navigateServices}>VIEW SERVICES</button></div>
        <br/>
         <div className='col-md-12'>
                    
                    <p className='spancontent animate__animated animate__bounce' >WHAT WE DO</p>
                    <p className='aboutcontent animate__animated animate__lightSpeedInRight'>
                  Integrated solutions for every business need.

From manpower and facility management to transportation, catering, housekeeping, landscaping, and security, we provide dependable services designed to keep your business running smoothly.
                    </p>
                    
                
                    
            </div>
            <div className='d-flex align-items-center justify-content-center animate__animated animate__rollIn '><button className='viewbtnhome rounded-pill' onClick={navigateContact}>GET IN TOUCH</button></div>
           
        <br/>
       <Cardhovereffect/>
       <div className='row approachcontent animate__animated animate__flash'>
            <div className='col-md-12'>
                    
                    <p className='spancontent animate__animated animate__rubberBand'>OUR CLIENTS</p>
                    <p className='text-center contentapp'>
                    Building strong partnerships through trust, quality, and reliable service.
                    </p>
                    <ClientsLogo/>
            </div>    
                </div>
     
        </div>
  )
}

export default Landingpage
