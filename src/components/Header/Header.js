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
    ${({theme}) => theme.mq.tablet}{
        align-items: center;

        svg{
            font-size: 30px;
        }
    }
    ${({theme}) => theme.mq.desktop}{
        svg{
            font-size: 25px;
        }
}
${({theme}) => theme.mq.huge}{
    svg{
        font-size: 40px;
    }

}
    `;

const StyledLogo = styled(Logo)`
position: relative;
z-index: 9999;
${({theme}) => theme.mq.tablet}{
   width: 120px;
}
${({theme}) => theme.mq.desktop}{
    width: 130px;
}
${({theme}) => theme.mq.huge}{
    width: 200px;
}
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