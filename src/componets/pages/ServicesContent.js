import React from 'react'
import '../css/CommomHeder.css'
import { useNavigate} from 'react-router-dom';

const ServicesContent = () => {
    const navigate = useNavigate();

      const navigateContact = () => {
        //  navigate to /
        navigate('/contact');
      };

  return (
    <div>
        <div className='aboutcontent text-center animate__animated animate__backInDown'>
            We take the responsibility of making your dream a reality!!!!
            
        </div>
        <br/>
        
        <div className='row listcontent animate__animated animate__flash'>
            <div className='spancontent col-md-12 text-uppercase  animate__animated animate__rollIn'>Have a look at what we do.</div>
            <div className='col-md-12 blankdiv'></div>
            <div className='col-md-4 spanval animate__animated animate__bounceInDown'>
        &#62;   <span>Gala Dinners</span>
        <br/>
        &#62;    <span>Meetings</span>
        <br/>
        &#62;    <span>Golf Events</span>
        <br/>
        &#62;    <span>Board Meetings</span>
        <br/>
        &#62;    <span>Seminars</span>
        <br/>
        &#62;    <span>Team-Building Events</span>
        <br/>
        &#62;    <span>Press Conferences</span>
        <br/>
        &#62;    <span>VIP Events</span>
            </div>
            <div className='col-md-4 spanval animate__animated animate__bounceInDown'>
        &#62;   <span>Non-profit Fundraisers</span>
        <br/>
        &#62;    <span>Policy Forums</span>
        <br/>
        &#62;    <span>Networking Events</span>
        <br/>
        &#62;    <span>Award Ceremonies</span>
        <br/>
        &#62;    <span>Trade Fairs</span>
        <br/>
        &#62;    <span>Holiday Parties</span>
        <br/>
        &#62;    <span>Product Launches</span>
        <br/>
        &#62;    <span>Shareholder Meetings</span>
            </div>
            <div className='col-md-4 spanval animate__animated animate__bounceInDown'>
        &#62;   <span>Political Fundraisers</span>
        <br/>
        &#62;    <span>Trade Shows</span>
        <br/>
        &#62;    <span>Private Events</span>
        <br/>
        &#62;    <span>Opening Ceremonies</span>
        <br/>
        &#62;    <span>Executive Retreats</span>
        <br/>
        &#62;    <span>Incentive Events</span>
        <br/>
        &#62;    <span>Training Sessions</span>
        <br/>
        &#62;    <span>Cold-pressed Freegan</span>
            </div>
        <div className='col-md-12 blankdiv'></div>

        </div>
        <div class="row">
            <div class="col-md-4">
            <div className='d-flex align-items-center justify-content-center'>
                    <img className='serviceimg' src={require('../../Images/businessevents.jpg')}/>
                </div>
                <p className='text-center serviceheadercontent animate__animated animate__rotateInUpLeft'>BUSINESS EVENTS</p>
                
                
              </div>
              
            <br/>
         
            <div class="col-md-4 ">
                <div className='d-flex align-items-center justify-content-center'>
                    <img className='serviceimg' src={require("../../Images/privateevents.jpg")}/>
                </div>
                <p className='text-center serviceheadercontent animate__animated animate__rotateIn'>PRIVATE EVENTS & PARTIES</p>
                
              </div>

              <div class="col-md-4 ">
              <div className='d-flex align-items-center justify-content-center'>
                    <img className='serviceimg' src={require('../../Images/seminar.jpg')}/>
                </div>
                <p className='text-center serviceheadercontent animate__animated animate__rotateInUpRight'>CONFERENCES & SEMINARS</p>
                
             </div>


            
        </div>

        <div class="row">
            <div class="col-md-4">
            <div className='d-flex align-items-center justify-content-center'>
                    <img className='serviceimg ' src={require('../../Images/opening.jpg')}/>
                </div>
                <p className='text-center serviceheadercontent animate__animated animate__rotateInUpLeft'>OPENING CEREMONIES & PRODUCT LAUNCHES</p>
                
              </div>
            <br/>
         
            <div class="col-md-4 ">
                <div className='d-flex align-items-center justify-content-center'>
                    <img className='serviceimg ' src={require('../../Images/golfevent.jpg')}/>
                </div>
                <p className='text-center serviceheadercontent animate__animated animate__rotateIn'>GOLF EVENT</p>
               
              </div>

              <div class="col-md-4 ">
              <div className='d-flex align-items-center justify-content-center'>
                    <img className='serviceimg ' src={require('../../Images/awardevent.jpeg')}/>
                </div>
                <p className='text-center serviceheadercontent animate__animated animate__rotateInUpRight'>AWARD CEREMONIES</p>
                
             </div>
             </div>
            <br/>
            <br/>
             <div className='row'>
                <div className='lastsection animate__animated animate__flash'>
                <div className='d-flex align-items-center justify-content-center'>
                    <p className='lastsectioncontain animate__animated animate__bounceInRight'>
                    Our professional event planning staff will ensure your celebration is everything you’ve ever dreamed of. 
                    
                    </p>
                </div>
                <div className='d-flex align-items-center justify-content-center animate__animated animate__rollIn'><button className='viewbtn rounded-pill' onClick={navigateContact}>Contact Us</button></div>
               
                
                
                </div>
             </div>
    </div>
  )
}

export default ServicesContent
