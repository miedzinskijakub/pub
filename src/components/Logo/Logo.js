import React from 'react';
import logoImg from '/Users/Miedziak/Desktop/Nowy-pub-new/my-app/src/assets/image/BaroQ.svg'
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';


  

const DivSty = styled.img`
width: 50%;
z-index: 9999;

`;

const Logo = (props) =>(
    <HashLink smooth to="/#top"><div>
        <DivSty  alt='logo' src={logoImg} { ... props}></DivSty>
    </div></HashLink>
)

export default Logo;