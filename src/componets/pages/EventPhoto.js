import React from 'react'
import '../css/cardhover.css';
import back2 from '../../Images/low/IMG_3584.jpg'
import back3 from '../../Images/low/IMG_3806.jpg'
import back4 from '../../Images/low/IMG_3978.jpg'


import { useNavigate} from 'react-router-dom';

const EventPhoto = () => {
    const navigate = useNavigate();

    const navigatePhotos = () => {
        //  navigate to /
        navigate('/events');
      };
  return (
    <div class="container">
    <div class="row row-cols-1 g-5 row-cols-md-3 row-cols-lg-3">

    <div class="col animate__animated animate__slideInUp">
    <div class="card overflow-hidden shadow border-0" id="card_Hover">
            <img class="card-img-top" style={{width: "100%", height: "300px"}} src={back2} alt="" loading="lazy"/>
           
        </div>
    </div>
    <div class="col animate__animated animate__slideInRight">
    <div class="card overflow-hidden shadow border-0" id="card_Hover">
            <img class="card-img-top" style={{width: "100%", height: "300px"}} src={back3} alt="" loading="lazy"/>
            
        </div>
    </div>
     <div class="col animate__animated animate__slideInLeft">
        <div class="card overflow-hidden shadow border-0" id="card_Hover">
            <img class="card-img-top" style={{width: "100%", height: "300px"}} src={back4} alt="" loading="lazy"/>
          
        </div>
    </div>
  
</div>

{/* <br/>
<div class="row row-cols-1 g-5 row-cols-md-3 row-cols-lg-3">
<div class="col animate__animated animate__slideInLeft">
        <div class="card overflow-hidden shadow border-0" id="card_Hover">
            <img class="card-img-top" style={{width: "100%", height: "300px" }} src={back1} alt=""/>
          
        </div>
    </div>
   
    <div class="col animate__animated animate__slideInUp">
    <div class="card overflow-hidden shadow border-0" id="card_Hover">
            <img class="card-img-top" style={{width: "100%", height: "300px"}} src={back5} alt=""/>
           
        </div>
    </div>
    <div class="col animate__animated animate__slideInRight">
    <div class="card overflow-hidden shadow border-0" id="card_Hover">
            <img class="card-img-top" style={{width: "100%", height: "300px"}} src={back6} alt=""/>
            
        </div>
    </div>
   
  
</div> */}
<div className='card-body text-dark'>
                
               
                <div className='d-flex align-items-center justify-content-center '><button className='viewbtncard rounded-pill align-items-center' onClick={navigatePhotos}>LOAD MORE.....</button></div>
            </div>

</div>
  )
}

export default EventPhoto
