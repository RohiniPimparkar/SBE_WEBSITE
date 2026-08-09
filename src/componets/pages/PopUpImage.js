import React,{useState} from 'react'
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
import '../css/PopUpImage.css';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const PopUpImage = () => {
   const[file, setFile] = useState(null);
   //  window.onload = function(){ 
    
   //      document.querySelectorAll('.image-container img').forEach(image =>{
   //          image.onclick  = () =>{
   //              document.querySelector('.popup-image').style.display = 'block';
   //              document.querySelector('.popup-image img').src = image.getAttribute('src');
   //          }
   //        });
    
   //        document.querySelector('.popup-image span').onclick = () =>{
   //          document.querySelector('.popup-image').style.display = 'none';
            

   //        }
   //  };
  
  return (
    <div className='view'>
         <div className='content1 text-center animate__animated animate__tada'>Makeup Mystery</div>
         <div className='aboutcontent animate__animated animate__flash'>ONE DAY LOOK & LEARN MAKEUP SEMINAR,WITH CELEBRITY MAKEUP ARTIST:-MADHURI KHESE </div>
          
               <div class="image-container">
          
               <div class="image" >
                  <img src={event1} class="gallery-item" alt="gallery" onClick={()=>setFile(event1)}/>
               </div>
               <div class="image">
               <img src={event2} class="gallery-item" alt="gallery" onClick={()=>setFile(event2)} />
               </div>
               <div class="image">
               <img src={event3} class="gallery-item" alt="gallery" onClick={()=>setFile(event3)}/>
               </div>
               <div class="image">
               <img src={event4} class="gallery-item" alt="gallery" onClick={()=>setFile(event4)}/>
               </div>
               <div class="image">
               <img src={event5} class="gallery-item" alt="gallery" onClick={()=>setFile(event5)}/>
               </div>
               <div class="image">
               <img src={event6} class="gallery-item" alt="gallery" onClick={()=>setFile(event6)}/>
               </div>
               <div class="image">
                  <img src={event7} class="gallery-item" alt="gallery" onClick={()=>setFile(event7)}/>
               </div>
             
               <div class="image">
               <img src={event9} class="gallery-item" alt="gallery" onClick={()=>setFile(event9)}/>
               </div>
               <div class="image">
               <img src={event10} class="gallery-item" alt="gallery" onClick={()=>setFile(event10)}/>
               </div>
               <div class="image">
               <img src={event11} class="gallery-item" alt="gallery" onClick={()=>setFile(event11)}/>
               </div>
               <div class="image">
               <img src={event12} class="gallery-item" alt="gallery" onClick={()=>setFile(event12)}/>
               </div>
               <div class="image">
                  <img src={event13} class="gallery-item" alt="gallery" onClick={()=>setFile(event13)}/>
               </div>
               <div class="image">
               <img src={event14} class="gallery-item" alt="gallery" onClick={()=>setFile(event14)}/>
               </div>
          
               <div class="image">
               <img src={event16} class="gallery-item" alt="gallery" onClick={()=>setFile(event16)}/>
               </div>
               <div class="image">
               <img src={event17} class="gallery-item" alt="gallery" onClick={()=>setFile(event17)}/>
               </div>
               <div class="image">
               <img src={event18} class="gallery-item" alt="gallery" onClick={()=>setFile(event18)}/>
               </div>
               <div class="image">
                  <img src={event19} class="gallery-item" alt="gallery" onClick={()=>setFile(event19)}/>
               </div>
               <div class="image">
               <img src={event20} class="gallery-item" alt="gallery" onClick={()=>setFile(event20)}/>
               </div>
               <div class="image">
               <img src={event21} class="gallery-item" alt="gallery" onClick={()=>setFile(event21)}/>
               </div>
               <div class="image">
               <img src={event22} class="gallery-item" alt="gallery"onClick={()=>setFile(event22)}/>
               </div>
               <div class="image">
               <img src={event23} class="gallery-item" alt="gallery" onClick={()=>setFile(event23)}/>
               </div>
            
            
         </div>


<div className='popup-image' style={{display: file ? 'block': 'none'}}>
    <span className='cross animate__animated animate__rotateIn' onClick={()=>setFile(null)}>&times;</span>
    <img  alt=""/>
</div>

    </div>

  
  )
}

export default PopUpImage
