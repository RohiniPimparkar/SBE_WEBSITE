import React from 'react'
import CardUI from './CardUI'

import img1 from '../../Images/event1/main.jpg'

const Card = () => {
  return (
    <div className='container-fluid d-flex justify-content-center'>
        <div className='row animate__animated animate__tada'>
            <div className='col-md-12'>
                <CardUI imgsrc={img1} title="Makeup Mystery"/>
            </div>
           
        </div>
    </div>
   
  )
}

export default Card
