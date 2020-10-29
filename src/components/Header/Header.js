import React, { useState } from 'react';
import styled from 'styled-components'
import Logo from '../Logo/Logo'
import Hamburger from '../Hamburger/Hamburger'
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import MobileMenu from "../MobileMenu/MobileMenu"


const StyledWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    padding: 13px 4px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    background-color: white;
    z-index: 9999;
    `;

const StyledLogo = styled(Logo)`
position: relative;
z-index: 9999;

`

const Header = () =>{

const [isMenuOpen, setMenuState] = useState(false);


const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen);
}


    return(
<StyledWrapper>
    <StyledLogo/>
    <FaFacebookF className="fb-media"/>
    <FaInstagram className="insta-media"/>
    <Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen}/>
    <MobileMenu toogle={toggleMobileMenu} isOpen={isMenuOpen}/>
</StyledWrapper>
)
    };

export default Header;