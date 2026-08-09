import React, {useState} from 'react'
import '../css/EventDetails.css'
import { Media } from '../../Images/imagesvalue' 
import { Video } from '../../Images/imagesvalue' 

const EventDetails = () => {
    console.log(Media);
    const[file, setFile] = useState(null);

  return (
    <div className='bg'>
        <div className='content1 text-center animate__animated animate__tada'>Makeup Mystery</div>
         <div className='aboutcontent animate__animated animate__flash'>ONE DAY LOOK & LEARN MAKEUP SEMINAR,WITH CELEBRITY MAKEUP ARTIST:-MADHURI KHESE </div>

        <div className='media-container'>
            {
                Media.map((file, index)=> (
                    <div className='media' key={index} onClick={()=>setFile(file)}>
                    
                        {console.log({file})}
                        {
                            file.type==='image'
                            ?<img src={file.url} alt=""/>
                            :<video src={`${file.url}#t=0.001`} muted controls preload='metadata'></video>
                        }

                    </div>
                ))
            }

        </div>

        <div className='popup-media' style={{display: file ? 'block': 'none'}}>
            <span className='animate__animated animate__rotateIn' onClick={()=>setFile(null)}>&times;</span>
            {
                file?.type === 'video'
                ? <video src={file.url} muted></video>
                :<img src={file?.url}/>
            }
        </div>
        <div className='content1 text-center animate__animated animate__tada'>VIDEOS
         </div>
         <div className='d-flex justify-content-center'>
         <div className='media-container'>
        
            {
                Video.map((file, index)=> (
                    <div className='media' key={index} onClick={()=>setFile(file)}>
                    
                        {console.log({file})}
                        {
                            file.type==='image'
                            ?<img src={file.url} alt=""/>
                            :<video src={`${file.url}#t=0.001`} muted controls preload='metadata'></video>
                        }

                    </div>
                ))
            }

        </div>

        <div className='popup-media' style={{display: file ? 'block': 'none'}}>
            <span className='animate__animated animate__rotateIn' onClick={()=>setFile(null)}>&times;</span>
            {
                file?.type === 'video'
                ? <video src={file.url} autoPlay controls></video>
                :<img src={file?.url}/>
            }
        </div>
         </div>
    </div>
  )
}

export default EventDetails
