import React from 'react';
import styled from 'styled-components';
import {animateScroll as scroll } from "react-scroll";
import { Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

  const scrollToBottom = () => {
    scroll.scrollToBottom(); 
};



const StyledWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9998;
    flex-direction: column;
    background-color: white;
    transform: translate(${({isOpen}) => isOpen ? '0' : '100%'});
    transition: transform .25s ease-in-out;

 
`;

const MenuLink = styled.p`
    color: #2F2E2E;
    font-size: 2.6rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin-top: 40px;
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    transition: opacity .25s .20s ease-in-out;

`;



const menuItems = [
    <HashLink smooth to="/#top">Home</HashLink>,
    <HashLink smooth to="/menu#top">Menu</HashLink>,

    <Link to="/" 
    offset={-50}
    duration={1000}
    onClick={scrollToBottom} >Contact</Link>,
];


const MobileMenu = ({isOpen, toogle}) => (
    
   
    <StyledWrapper isOpen={isOpen}>
        {menuItems.map( item => (
        <MenuLink key={item.id} isOpen={isOpen}
          onClick={toogle}>{item}</MenuLink>
        ))}
    </StyledWrapper>
   
);

export default MobileMenu;