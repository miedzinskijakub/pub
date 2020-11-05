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

    ${({theme}) => theme.mq.huge}{
        margin-top: 94.7px;
    }
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
    ${({theme}) => theme.mq.tablet}{
        font-size: 20px;

    }
    ${({theme}) => theme.mq.desktop}{
        font-size: 20px;
    }
    ${({theme}) => theme.mq.huge}{
        font-size: 1.5rem;

    }
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
${({theme}) => theme.mq.huge}{
    font-size: 2rem;  
}
`

const Form = styled.div`
margin-top: 15%;
text-align: center;
font-family: 'Playfair Display', serif;
font-size: 3rem;


${({theme}) => theme.mq.tablet}{
     margin-top: 20%;   
}
${({theme}) => theme.mq.desktop}{
    margin-top: 10%;   
}
${({theme}) => theme.mq.hug}{
    margin-top: 10%;   
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
    font-size: 20px;
 
}
${({theme}) => theme.mq.desktop}{
    
    width: 20%;
}
${({theme}) => theme.mq.huge}{
    font-size: 2rem;
    width: 20%;

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
        font-size: 20px;

}
${({theme}) => theme.mq.desktop}{
    width: 20%;

}
${({theme}) => theme.mq.huge}{
    width: 20%;

    font-size: 2rem;
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
    font-size: 20px;

}
${({theme}) => theme.mq.desktop}{
    width: 20%;

}
${({theme}) => theme.mq.huge}{
    width: 20%;

    font-size: 2rem;
}
`
const Control = styled.div`
${({theme}) => theme.mq.desktop}{
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;
}

    
`
const Hero = () =>(

    <StyledWrapper>

        <Information>
        500 Terry Francois St. San Francisco, CA 94158    |    Open from 6pm to 2am 


        </Information>

        <Main>
            <MainT>BaroQ</MainT>

                <Desc>
                COCTAIL BAR
                </Desc>

            <Form>
            <div>Reservations</div>
                <Control>
                <Inputs type="datetime-local"/>
                <Select defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled >Party size</option>
                    <option >1 person</option>
                    <option>2 person</option>
                    <option>3 person</option>
                    <option>4 person</option>
                    </Select>
                <Book>Book Now</Book>
                </Control>
            </Form>

        </Main>
            
        
    </StyledWrapper>
    
);

export default Hero;