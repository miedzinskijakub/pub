import React from 'react';
import styled from 'styled-components';
import Background from '/Users/Miedziak/Desktop/Nowy-pub-new/my-app/src/assets/image/back2.jpg'

const StyledWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    color: white;
    margin-top: 63px;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;


`//PARALAXA ^^^^^^^

const Information = styled.div`
    width: 100%;
    background-color: #D69869;
    color: #2F2E2E;
    text-align: center;
    padding: 15px;
    line-height: 1.8em;
    font-size: 12px;
    font: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;

  
    `
const Main = styled.div`
position: relative;
top: 13%;   
text-align: center;

`

const MainT = styled.span`
    font-family: 'Playfair Display', serif;
    text-align: center;
    font-size: 80px;
    font-weight: 400;
    ${({theme}) => theme.mq.tablet}{
        font-size: 150px;

    }
`
const Desc = styled.div`
letter-spacing: 1px;
${({theme}) => theme.mq.tablet}{
    font-size: 30px;

}
`

const Form = styled.div`
margin-top: 15%;
text-align: center;
font-family: 'Playfair Display', serif;
font-size: 3rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
align-content: center;

${({theme}) => theme.mq.tablet}{
     margin-top: 20%;   
}
`
const Inputs = styled.input`
width: 90%;
height: 40px;
margin: 5px;
color: #2F2E2E;
${({theme}) => theme.mq.tablet}{
    height: 50px;
    width: 80%;  
}
`
const Select = styled.select`
width: 90%;
height: 40px;
margin: 5px;
text-align: center;
color: #2F2E2E;
${({theme}) => theme.mq.tablet}{
        height: 50px;
        width: 80%;  
    
}
`
const Book = styled.button`
width: 90%;
height: 40px;
margin: 5px;
text-align: center;
background-color: #D69869;
border-style: none;
color: #2F2E2E;
border: none;
outline: inherit;
${({theme}) => theme.mq.tablet}{
    height: 50px;
    width: 80%;  
}

`

const Hero = () =>(

    <StyledWrapper>

        <Information>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.    |   Lorem ipsum dolor 
        </Information>

        <Main>
            <MainT>BaroQ</MainT>

                <Desc>
                COCTAIL BAR
                </Desc>

            <Form>
                <div>Reservations</div>
                <Inputs type="datetime-local"/>
                <Select defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled >Party size</option>
                    <option >1 person</option>
                    <option>2 person</option>
                    <option>3 person</option>
                    <option>4 person</option>
                    </Select>
                <Book>Book Now</Book>

            </Form>

        </Main>
            
        
    </StyledWrapper>
    
);

export default Hero;