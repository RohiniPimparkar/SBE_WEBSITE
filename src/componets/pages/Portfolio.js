import React from 'react'
import Slider from './Slider'
import ApproachContent from './ApproachContent'
import PortfolioContent from './PortfolioContent'

const Portfolio = () => {
  return (
    <div>
    <Slider pageName="OUR APPROACH">
    </Slider>
  
    <br/>

    <div class="text-center  animate__heartBeat">
              <h1 class="section-title  bg-white text-center px-3 ">OUR WORK</h1>
          </div>
<br/>
<PortfolioContent/>
    

  </div>
  )
}

export default Portfolio
