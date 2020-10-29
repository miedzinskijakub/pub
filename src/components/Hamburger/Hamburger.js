import React from 'react';
import styled from 'styled-components'

const StyledHamburger = styled.button`
    padding: 15px;
    border: none;
    background: none;
    z-index: 9999;

`;

    const InnerHamburger = styled.div`
    position: relative;
    width: 24px;
    height: 2px;
    background-color: ${({ isOpen}) => isOpen ? 'transparent' : 'black'};
    transition: background-color .1s .2s ease-in-out;


    ::after, ::before{
        content: '';
        position: absolute;
        left: 0;
        width: 24px;
        height: 2px;
        background-color: black;
        transition: transform .2s .2s ease-in-out;

    }

    ::before {
        top: -6px;
        transform: translateY(${({isOpen}) => isOpen ? '6px' : '0'}) rotate(${({isOpen}) => isOpen ? '45deg' : '0'});
    }

    ::after {
        top: 6px;
        transform: translateY(${({isOpen}) => isOpen ? '-6px' : '0'}) rotate(${({isOpen}) => isOpen ? '-45deg' : '0'});
    }

    `;

const Hamburger = ({isOpen, ...props}) =>(
    <StyledHamburger {...props}>
    <InnerHamburger isOpen={isOpen}/>
    </StyledHamburger>
)


export default Hamburger;