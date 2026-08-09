import React from 'react'
import '../css/CommomHeder.css'
import { useNavigate} from 'react-router-dom';
import Cardhovereffect from './Cardhovereffect';

const ApproachContent = () => {
    const navigate = useNavigate();

    const navigateContact = () => {
      //  navigate to /
      navigate('/contact');
    };
  return (
    <div>
        <p className='spancontent text-center animate__animated animate__rollIn'> WHY SHREE BHAIRAVKRUPA?</p>
        <div className='row aboutcontent animate__animated animate__slideInRight'>
       Choose Shree Bhairavkrupa Enterprises for dependable, professional, and integrated business support services. With experience across multiple service divisions, we combine skilled manpower, operational expertise, quality, and a commitment to client satisfaction. Our goal is to provide solutions that allow you to focus on your core business while we take care of the essential services.
        </div>
        <hr/>
        <br/>
        <div className='row approachcontent animate__animated animate__flash'>
            <div className='col-md-12'>
                    
                    <p className='spancontent animate__animated animate__rollIn'>WHAT WE DO</p>
                    <h3 className='text-center animate__animated animate__rollIn'><strong> WE PROVIDE INTEGRATED SERVICE SOLUTIONS</strong></h3>
                    <div className='row aboutcontent animate__animated animate__slideInLeft'>
                 

Based in Pune, Shree Bhairavkrupa Enterprises provides comprehensive facility management and support services designed to meet the diverse needs of businesses and organizations. From manpower and employee transportation to housekeeping, catering, landscaping, and security, our experienced team delivers reliable and customized solutions with a strong focus on quality, safety, and professionalism.
                </div>
                
                
                    
            </div>
            {/* <div className='col-md-6'>
                <div className='approachimg'>

                </div>
            </div> */}

        </div>
        <div className='row animate__animated animate__heartBeat'>
            <div className='rowarea'>
                <p className='text-center'>“We don’t just deliver services, we create standards of excellence.”</p>
                <div className='squarediv'></div>
            </div>
        </div>
      
{/* 
        <div class="row">
            <div class="col-md-4 approachcard1">
                <div></div>
            <div className='d-flex align-items-center justify-content-center'>
                    <img src=""/>
                </div>
                <p className='text-center headercontent'>PLANNING</p>
                <p className='text-center paracontent '>
                Are you looking to celebrate a special occasion or event in style? 
                Whether you're planning an intimate soiree or a lavish gala, we've got you covered.
                We work collaboratively to ensure your event is cohesive and thoughtful.
                </p>
                <div className='d-flex align-items-center justify-content-center'><button className='viewbtn  rounded-pill ' onClick={navigateContact}>Contact Us</button></div>
              </div>
            <br/>
         
            <div class="col-md-4  approachcard2 ">
                <div className='d-flex align-items-center justify-content-center image'>
                    <img src=""/>
                </div>
                <div className='cardbody'>
                <p className='text-center headercontent'>MANAGEMENT</p>
                <p className='text-center paracontent'>
                    With the master plan in place,
                    we handles everything from negotiations and logistics to design and catering for events of all kinds,
                    we believe that even the smallest details can have a huge impact.
                    
                </p>
                <div className='d-flex align-items-center justify-content-center'><button className='viewbtn  rounded-pill ' onClick={navigateContact}>Contact Us</button></div>
              </div>
              </div>

              <div class="col-md-4 approachcard3 ">
              <div className='d-flex align-items-center justify-content-center'>
                    <img src=""/>
                </div>
                <p className='text-center headercontent'>EXECUTION</p>
                <p className='text-center paracontent'>
                
                Swagbox Events team executes each step with skill and precision,
                with every last details taken care of, we can ensure your big day is effortless and unforgettable.
                </p>
                <div className='d-flex align-items-center justify-content-center'><button className='viewbtn  rounded-pill ' onClick={navigateContact}>Contact Us</button></div>
             </div>
             
             </div> */}
             <Cardhovereffect/>
    </div>
  )
}

export default ApproachContent
