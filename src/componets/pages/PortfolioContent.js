import React from 'react'
import Card from './Card'


const PortfolioContent = () => {
  return (
    <div>
       <p className='spancontent text-center animate__animated animate__rubberBand'>CURRENT PROJECTS</p>
        <div className='row aboutcontent animate__animated animate__backInDown'>
        In a world where digital has become overwhelming,
         we put pen to paper to communicate ideas as often as possible.
        </div>
        <hr/>
        <br/>
        <div className='row approachcontent animate__animated animate__flash'>
            <div className='col-md-12'>
                    
                    <p className='spancontent animate__animated animate__rubberBand'>OUR SUCCESSFUL EVENTS</p>
                    <h3 className='text-center'><strong>WE PLAN AND DELIVER</strong></h3>
                    <p className='text-center contentapp'>
                    Our professional event planning staff will ensure your celebration is everything you’ve ever dreamed of. 
                    From elegant table settings and personalised favors, to delectable food and perfectly matched wine and beer,
                     we’ll work with you to create a party that’s as special as the guest of honor.
                    </p>
                  
            </div>    
                </div>
            <Card/>
            </div>
    
  )
}

export default PortfolioContent
