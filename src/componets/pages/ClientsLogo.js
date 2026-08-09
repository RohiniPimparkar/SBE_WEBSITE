import React from 'react'
import ACG_Pam_Pharma_Technologies_Pvt_Ltd_Mumbai from '../../Images/our_clients/ACG_Pam_Pharma_Technologies_Pvt_Ltd_Mumbai.png';
import ACG_Pam_Pharma_Technologies_Pvt_Ltd_Shirwal from '../../Images/our_clients/ACG_Pam_Pharma_Technologies_Pvt_Ltd_Shirwal.png';
import ACG_Pharma_Technologies_Pvt_Ltd_Shirwal from '../../Images/our_clients/ACG_Pharma_Technologies_Pvt_Ltd_Shirwal.png';
import ILJIN from '../../Images/our_clients/ILJIN.png';
import imagesLogo from '../../Images/our_clients/images.png';
import Jyoti_Enterprises from '../../Images/our_clients/Jyoti_Enterprises.png';
import Lawkim_Motors_Group from '../../Images/our_clients/Lawkim_Motors_Group.png';
import NR_Hytech_Engineers from '../../Images/our_clients/NR_Hytech_Engineers.png';
import OY_India from '../../Images/our_clients/OY_India.png';
import PARI from '../../Images/our_clients/PARI.png';
import Stanley_Black_Decker from '../../Images/our_clients/Stanley_Black_Decker.png';
import Universal from '../../Images/our_clients/Universal.png';

import '../css/PopUpImage.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ClientsLogo = () => {
    const logos = [
        { src: ACG_Pam_Pharma_Technologies_Pvt_Ltd_Mumbai, alt: 'ACG Pam Pharma Technologies Pvt Ltd Mumbai' },
        { src: ACG_Pam_Pharma_Technologies_Pvt_Ltd_Shirwal, alt: 'ACG Pam Pharma Technologies Pvt Ltd Shirwal' },
        { src: ACG_Pharma_Technologies_Pvt_Ltd_Shirwal, alt: 'ACG Pharma Technologies Pvt Ltd Shirwal' },
        { src: ILJIN, alt: 'ILJIN' },
        { src: imagesLogo, alt: 'Images' },
        { src: Jyoti_Enterprises, alt: 'Jyoti Enterprises' },
        { src: Lawkim_Motors_Group, alt: 'Lawkim Motors Group' },
        { src: NR_Hytech_Engineers, alt: 'NR Hytech Engineers' },
        { src: OY_India, alt: 'OY India' },
        { src: PARI, alt: 'PARI' },
        { src: Stanley_Black_Decker, alt: 'Stanley Black Decker' },
        { src: Universal, alt: 'Universal' },
    ];

    return (
        <div className='view'>
             <div className='content1 text-center animate__animated animate__tada'>We Work With the Best Partners</div>
             {/* <div className='aboutcontent animate__animated animate__flash'>We Work With the Best Partners.</div> */}
               
                   <div className="client-image-container">
                       {logos.map((logo, index) => (
                           <div key={index} className="image animate__animated animate__rollIn">
                               <img src={logo.src} className="gallery-item" alt={logo.alt} />
                           </div>
                       ))}
                   </div>

        </div>
    )
}

export default ClientsLogo











