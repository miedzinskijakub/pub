import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const Main = styled.main`
    position: relative;
    height: 100vh;
    text-align: center;
    padding: 30px;
    color: #2F2E2E;
    font-family: 'Roboto', sans-serif;
    ${({theme}) => theme.mq.tablet}{
        height: 100%;
        margin-top: 50px;
        margin-bottom: 100px;
    }
`

const AboutUs = styled.div`
    position: relative;
    font-family: 'Playfair Display', serif;
    margin-top: 70px;
    margin-bottom: 30px;
    font-size: 41px;
    line-height: 1.05em;
    text-align: center;
    ${({theme}) => theme.mq.tablet}{
        font-size: 60px;
    }
`
const Explore = styled.button`
position: relative;
width: 50%;
height: 40px;
margin-top: 30px;
text-align: center;
background-color: #D69869;
border-style: none;
color: white;
border: none;
outline: inherit;
${({theme}) => theme.mq.tablet}{
    display: block;
    font-size: 20px;
    left: 50%;
    transform: translateX(-50%);
    height: 50px;
    width: 70%; 
}
`
const Abo = styled.span`
${({theme}) => theme.mq.tablet}{
    margin-left: 30px;
    margin-right: 30px;

        padding: 30px;
        font-size: 20px;
}
`

const MainSection = () =>(
    <Main>
        <AboutUs className="about">
            <p>Mix&Match is our business</p>
        </AboutUs>
        <Abo>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and make changes to the font.
        </Abo>
        <HashLink smooth to="/menu#top"><Explore>Explore our menu</Explore></HashLink>

    </Main>
)

export default MainSection;