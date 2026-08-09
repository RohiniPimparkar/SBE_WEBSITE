import React, { useState, useEffect } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import styled from "styled-components";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";

import '../css/Home.css';

import image1 from "../../Images/Home/page_01_image_01.png";
import image2 from "../../Images/Home/page_02_image_02.png";
import image3 from "../../Images/Home/page_03_image_13.png";
import image4 from "../../Images/Home/page_04_image_18.png";
import image5 from "../../Images/Home/page_05_image_24.png";
import image6 from "../../Images/Home/page_05_image_25.png";
import image7 from "../../Images/Home/page_06_image_27.png";
import image8 from "../../Images/Home/page_06_image_28.png";
import ImageSlider from "./ImageSlider";
import Landingpage from "./Landingpage";
import ClientsLogo from "./ClientsLogo";


function Home() {

    const navigate = useNavigate();

    const navigateServices = () => {
        //  navigate to /
        navigate('/services');
      };

      const navigateContact = () => {
        //  navigate to /
        navigate('/contact');
      };


  return (
        <>
        
            <div className="container1">
            <ImageSlider images={[ image1, image2, image3, image4, image5, image6, image7, image8]}>
            
            <h1 style={{
           
                fontSize:"30px",
               
              color: "#fff"
            }} className="animate__animated animate__backInDown">Our bespoke solutions use the right mix of technology and human intelligence</h1>
            <br/>
       
            <p style={{
            
              flexDirection: "column",
                fontSize:"20px",
            
              color: "#fff"
             
            }} className="animate__animated animate__backInDown">to help you attract and hire candidates who contribute to both your business goals and culture.</p>
            <br/>
            <div style={{
              display: "flex",
            
            }}>
            </div>
            <div className='homebtn animate__animated animate__backInUp' style={{
              display: "flex",
            
            }}>
            </div>
      
        
          
            </ImageSlider>

            <Landingpage/>
            {/* <ClientsLogo/> */}
            
        </div>
        </>
    );
};
export default Home
