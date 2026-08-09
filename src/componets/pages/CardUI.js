import React from 'react'
import '../css/cardStyle.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, useNavigate} from 'react-router-dom';



const CardUI = (props) => {
    const navigate = useNavigate();

    const navigatePhotos = () => {
        //  navigate to /
        navigate('/events');
      };
  return (

        <div className='card text-center shadow'>
            <div className='overflow'>
                <img 
                className='card-img-top'
                // src={require('../../Images/event1.png')}
                src={props.imgsrc}
                alt='event-1'
                />
                
            </div>
            <hr/>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.title}</h4>
               
                <div className='d-flex align-items-center justify-content-center '><button className='viewbtncard rounded-pill' onClick={navigatePhotos}>VIEW DETAILS</button></div>
            </div>

        </div>


  )
}

export default CardUI
