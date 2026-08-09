import React from 'react'
import event1 from '../../Images/event1/img4.jpg';
import event2 from '../../Images/event1/Img1.jpg';
import event3 from '../../Images/event1/img2.jpg';
import event4 from '../../Images/event1/img3.jpg';
import event5 from '../../Images/event1/img5.jpg';
import event6 from '../../Images/event1/img6.jpg';
import event7 from '../../Images/event1/IMG_3310.jpg';

import event9 from '../../Images/event1/IMG_3341.jpg';
import event10 from '../../Images/event1/IMG_3349.jpg';
import event11 from '../../Images/event1/IMG_3361.jpg';
import event12 from '../../Images/event1/IMG_3369.jpg';
import event13 from '../../Images/event1/IMG_3392.jpg';
import event14 from '../../Images/event1/IMG_3464.jpg';

import event16 from '../../Images/event1/IMG_3788.jpg';
import event17 from '../../Images/event1/IMG_3823.jpg';
import event18 from '../../Images/event1/IMG_3942.jpg';
import event19 from '../../Images/event1/IMG_3947.jpg';
import event20 from '../../Images/event1/IMG_3966.jpg';
import event21 from '../../Images/event1/IMG_3973.jpg';
import event22 from '../../Images/event1/IMG_3781.jpg';
import event23 from '../../Images/event1/image4.jpg';
import '../css/ImageViwer.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import video1 from '../../videos/video.mp4';


const EventImages = (props) => {
    console.log(props);
  return (
<>
        
         <section class="gallery min-vh-100">
         <div className='content1 text-center animate__animated animate__tada'>Makeup Mystery</div>
         <div className='aboutcontent animate__animated animate__flash'>ONE DAY LOOK & LEARN MAKEUP SEMINAR,WITH CELEBRITY MAKEUP ARTIST:-MADHURI KHESE </div>
          
         <div class="container-lg">
            <div class="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
               <div class="col">
                  <img src={event1} class="gallery-item" alt="gallery"/>
               </div>
               <div class="col">
               <img src={event2} class="gallery-item" alt="gallery"/>
               </div>
               <div class="col">
               <img src={event3} class="gallery-item" alt="gallery"/>
               </div>
               <div class="col">
               <img src={event4} class="gallery-item" alt="gallery"/>
               </div>
               <div class="col">
               <img src={event5} class="gallery-item" alt="gallery"/>
               </div>
               <div class="col">
               <img src={event6} class="gallery-item" alt="gallery"/>
               </div>
               <div class="col">
                  <img src={event7} class="gallery-item" alt="gallery"/>
               </div>
             
               <div class="col">
               <img src={event9} class="gallery-item" alt="gallery"/>
               </div>
               <div class="col">
               <img src={event10} class="gallery-item" alt="gallery"/>
               </div>
               <div class="col">
               <img src={event11} class="gallery-item" alt="gallery"/>
               </div>
               <div class="col">
               <img src={event12} class="gallery-item" alt="gallery"/>
               </div>
               <div class="col">
                  <img src={event13} class="gallery-item" alt="gallery"/>
               </div>
               <div class="col">
               <img src={event14} class="gallery-item" alt="gallery"/>
               </div>
          
               <div class="col">
               <img src={event16} class="gallery-item" alt="gallery"/>
               </div>
               <div class="col">
               <img src={event17} class="gallery-item" alt="gallery"/>
               </div>
               <div class="col">
               <img src={event18} class="gallery-item" alt="gallery"/>
               </div>
               <div class="col">
                  <img src={event19} class="gallery-item" alt="gallery"/>
               </div>
               <div class="col">
               <img src={event20} class="gallery-item" alt="gallery"/>
               </div>
               <div class="col">
               <img src={event21} class="gallery-item" alt="gallery"/>
               </div>
               <div class="col">
               <img src={event22} class="gallery-item" alt="gallery"/>
               </div>
               <div class="col">
               <img src={event23} class="gallery-item" alt="gallery"/>
               </div>
            </div>
            
         </div>
         <div className='content1 text-center animate__animated animate__tada'>VIDEOS
         </div>
          
      </section>
     
      <div className='row videosection d-flex justify-content-center'>

           
            <div className='embded-responsive embded-responsive-16by9'>
                <iframe className = 'embded-responsive-item' 
                src={video1}
                 title="event video" 
                 allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true">

                </iframe>
        
            </div>
 
         
</div>
      
</>  
  )
}

export default EventImages
