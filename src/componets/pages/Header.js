import React from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'
import whiteLogo from '../../Images/white_logo.png'

function Header() {
  return (
   <MainHeader>
    <LogoGroup to='/'>
      <LogoBox>
        <img className='logoval' src={whiteLogo} alt='SHREE BHAIRAVKRUPA ENTERPRISES' />
      </LogoBox>
      <CompanyName>
        SHREE<br />
        BHAIRAVKRUPA<br />
        ENTERPRISES
      </CompanyName>
    </LogoGroup>
    <Navbar/>
   </MainHeader>
  )
}

const MainHeader = styled.header`
padding: 0 2rem;
height: 5rem;
background-color: #ff0000;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: nowrap;
`;

const LogoGroup = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  white-space: nowrap;
  flex-wrap: nowrap;
`;

const LogoBox = styled.div`
  background-color: #ffffff;
  padding: 0.4rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4rem;
  min-height: 4rem;

  img {
    display: block;
    height: 3.2rem;
    width: auto;
  }
`;

const CompanyName = styled.span`
  color: #000000;
  font-weight: 700;
  letter-spacing: 0.05rem;
  font-size: 0.95rem;
  text-transform: uppercase;
  line-height: 1.1;
`;

export default Header
