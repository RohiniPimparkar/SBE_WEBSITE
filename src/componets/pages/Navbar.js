import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {CgMenu, CgClose} from 'react-icons/cg'

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const Nav = styled.nav`
        .navbar-list{
            display: flex;
            gap: 2.5rem;
            background-color: #ff0000;
                li{
                    list-style:none;  
                    text-align:center;
                    .navbar-link{
                        text-decoration: none;
                        font-size:20px;
                        color:#000000;

                        &:hover,
                        &:active{
                            color: #ffd6d6;
                        }
                        }
                    
                    .sub-menu{
                        font-size:13px;
                        text-align:center;
                        color: #ffecec;

                    }  
                }
                     #ffffff


        }
        .mobile-navbar-btn{
            display:none;
            .close-outline{
                display:none;
            }
        }

        .mobile-navbar-btn[name="close-outline"]{
            display:none;
        }

        @media (max-width:${({theme})=>theme.media.mobile}){
            .mobile-navbar-btn{
                display: inline-block;
                z-line: 999;
                border:#000;

                .mobile-nav-icon{
                    font-size:4.2rem;
                    color:#ffffff;
                }
            }


            /* hide original navbar*/
.navbar-list{

    width:100vw;
    height:100vh;
    top:0;
    left:0;
    background-color:#ff0000;

    display: flex;
    justify-content:center;
    align-content: center;
    flex-direction:column;
    text-align:center;

    transform: translateX(100%);
    visibility:0;
    opacity:0;
    display:none;

   

    li{
        list-style:none;  
        .navbar-link{
          
            text-decoration: none;
            font-size:15px;
            
            &:hover,
            &:active{
                color: ${({theme})=>theme.colors.hovercol}
            }
            color: ${({theme})=>theme.colors.text}
          
            }
        
        .sub-menu{
            font-size:10px;
            color: ${({theme})=>theme.colors.btn}

        }  
    }
}
.active .navbar-list{
    width:100vw;
    height:100vh;
    position: absolute;
    top:0;
    left:0;
    background-color:#fff;

    display: flex;
    justify-content:center;
    align-content: center;
 
    text-align:center;

    transform: translateX(100%);
  
}
.active .mobile-nav-icon{
    display: none;
    font-size:4.2rem;
    position: absolute;
    top:3%;
    right: 10%;
    color:black;
    z-index: 9999;
}

.active .close-outline {
    position: fixed;
    color:#fff;
    display: inline-block;

}

.active .navbar-list{
    position: fixed;
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
    z-index: 9999;
    width:100vw;
    height:105%;
    background-color: rgba(0,0,0,.93);

    //background-color: red;
 

}
        }

    `;

  return <Nav>
    <div className={openMenu ? 'menuIcon active': 'menuIcon'}>
        <ul className='navbar-list '>
            <li className='animate__animated animate__backInDown'>
                <NavLink className="navbar-link"
                onClick={()=> setOpenMenu(false)}
                to="/">Home</NavLink>
                {/* <div className='sub-menu animate__animated animate__backInDown'>Where the heart is</div> */}
            </li>
           
            <li className='animate__animated animate__backInDown'>
                <NavLink className="navbar-link" 
                onClick={()=> setOpenMenu(false)}
                to="/approach"> Our Services</NavLink>
                {/* <div className='sub-menu animate__animated animate__backInDown'>Our Vision</div> */}
            </li>
            {/* <li className='animate__animated animate__backInDown'>
                <NavLink className="navbar-link"
                onClick={()=> setOpenMenu(false)}
                to="/services">Our Services</NavLink> */}
                {/* <div className='sub-menu animate__animated animate__backInDown'>What we do</div> */}
            {/* </li> */}
             {/* <li className='animate__animated animate__backInDown'>
                <NavLink className="navbar-link"
                onClick={()=> setOpenMenu(false)}
                to="/portfolio">Portfolio</NavLink>  */}
                {/* <div className='sub-menu animate__animated animate__backInDown'>Work samples</div> */}
             {/* </li>  */}
             <li className='animate__animated animate__backInDown'>
                <NavLink className="navbar-link"
                onClick={()=> setOpenMenu(false)}
                to="/client">Our Clients</NavLink>
                {/* <div className='sub-menu animate__animated animate__backInDown'>Clients Details</div> */}
            </li>
             <li className='animate__animated animate__backInDown'>
                <NavLink className="navbar-link" 
                onClick={()=> setOpenMenu(false)}
                to="/about">About</NavLink>
                {/* <div className='sub-menu animate__animated animate__backInDown'>Who we are</div> */}
            </li> 
        
            <li className='animate__animated animate__backInDown'>
                <NavLink className="navbar-link"
                onClick={()=> setOpenMenu(false)}
                to="/contact">Contact</NavLink>
                {/* <div className='sub-menu animate__animated animate__backInDown'>Get in touch</div> */}
            </li>
            
           
            
        </ul>
        {/* nav icone*/}

        <div className='mobile-navbar-btn'>
            <CgMenu name="menu-outline" className="mobile-nav-icon" 
            onClick={()=> setOpenMenu(true)}
            />
            <CgClose name="close-outline" className="close-outline mobile-nav-icon animate__animated animate__rotateIn"
            onClick={()=> setOpenMenu(false)}
            />
        </div>

    </div>

  </Nav>
   
  
}



export default Navbar
