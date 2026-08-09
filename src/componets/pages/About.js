import React from 'react'
import AboutusContent from './AboutusContent'
import Slider from './Slider'
import styled from 'styled-components'
import '../css/CommomHeder.css'
import "bootstrap/dist/css/bootstrap.min.css";


function About() {
  return (
    <div>
      <Slider pageName="ABOUT US">
      </Slider>
      <br/>

      <div className="text-center  animate__heartBeat">
                <h1 className="section-title  bg-white text-center px-3 ">About Us</h1>
            </div>
<br/>
<AboutusContent/>
      <AboutNote>
        Headquartered in Pune, Indeed!!! The reputation that we have earned today is with the uncompromising professionalism in everything that we do in order to ensure Client’s satisfaction at all costs.
      </AboutNote>
    </div>
  )
}

const AboutNote = styled.div`
  background-color: #ff0000;
  color: white;
  padding: 2rem 2rem;
  margin: 2rem 0 0 0;
  text-align: center;
  font-size: 18px;
  line-height: 1.7;
  font-weight: 500;
  letter-spacing: 0.02rem;
`;

export default About
