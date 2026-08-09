import React from 'react'
import '../css/cardhover.css';
import service1 from '../../Images/our_services/images.jpg'
import service2 from '../../Images/our_services/page_02_image_18.png'
import service3 from '../../Images/our_services/page_03_image_23.png'
import service4 from '../../Images/our_services/page_04_image_26.png'
import service5 from '../../Images/our_services/page_05_image_30.png'
import service6 from '../../Images/our_services/page_06_image_35.png'
import { useNavigate} from 'react-router-dom';

const Cardhovereffect = () => {
    const navigate = useNavigate();

    const navigateContact = () => {
        navigate('/contact');
    };

    const cards = [
        {
            img: service1,
            title: 'Manpower Supply Service Division',
            text: 'Reliable manpower supply solutions to support your operations with trained personnel and fast onboarding.',
            animation: 'animate__slideInLeft'
        },
        {
            img: service2,
            title: 'Employee Transport Division',
            text: 'Safe and efficient employee transport services designed for punctuality and comfort.',
            animation: 'animate__slideInUp'
        },
        {
            img: service3,
            title: 'Corporate Catering Division',
            text: 'Corporate catering solutions for meetings, events and daily hospitality with a professional touch.',
            animation: 'animate__slideInRight'
        },
        {
            img: service4,
            title: 'Mechanized House Keeping Division',
            text: 'Advanced mechanized housekeeping services to keep your premises clean and well-maintained.',
            animation: 'animate__slideInLeft'
        },
        {
            img: service5,
            title: 'Landscape & Gardening Division',
            text: 'Expert landscaping and gardening services that create and maintain beautiful outdoor spaces.',
            animation: 'animate__slideInUp'
        },
        {
            img: service6,
            title: 'Security & Services',
            text: 'Comprehensive security and support services to protect your people and premises.',
            animation: 'animate__slideInRight'
        }
    ];

    return (
        <div className="container">
            <div className="row row-cols-1 g-5 row-cols-md-3 row-cols-lg-3">
                {cards.map((card, index) => (
                    <div key={index} className={`col animate__animated ${card.animation} mt-4`}>
                        <div className="card overflow-hidden shadow border-0" id="card_Hover">
                            <img className="card-img-top" style={{width: '100%', height: '370px'}} src={card.img} alt="" />
                            <div className="card-body bg-dark text-white bg-opacity-100 w-100" style={{opacity: '0.9', width: '100%', height: '300px'}} id="Card_Text">
                                <h4 className="card-title text-center text-capitalize fw-bold pb-2 headercontent">{card.title}</h4>
                                <p className="card-text text-center paracontent">{card.text}</p>
                                <div className='d-flex align-items-center justify-content-center'><button className='viewbtn rounded-pill' onClick={index === 0 ? () => navigate('/manpower-supply') : index === 1 ? () => navigate('/employee-transport') : index === 2 ? () => navigate('/corporate-catering') : navigateContact}>View Details</button></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cardhovereffect
