import React from 'react';
import styled from 'styled-components';
import Drin0 from '../../../assets/image/desc.png';
import Drin1 from '../../../assets/image/drink1.jpg';
import Drin2 from '../../../assets/image/drink2.jpg';
import Drin3 from '../../../assets/image/drink3.jpg';

const Contact = styled.article`
    position: relative;    
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    flex-wrap: wrap;

    ${({theme}) => theme.mq.tablet}{
        flex-direction: row;
}
`
const ContD = styled.img`
    height: 300px;

    ${({theme}) => theme.mq.tablet}{
        width: 50%;
        height: 400px;
        order: 2;
    }
    ${({theme}) => theme.mq.huge}{
       height: 500px;
    }
    ${({theme}) => theme.mq.full}{
        height: 600px;
    }
    height: 600px;

`
const Division = styled.div`
    height: 400px;
    background-color: #D69869;
    padding: 15px;
    ${({theme}) => theme.mq.tablet}{
        width: 50%;
        order: 1;

}
${({theme}) => theme.mq.huge}{
    height: 500px;
 }
 ${({theme}) => theme.mq.full}{
    height: 600px;
 }
`
const Challange = styled.h1`
    color: white;
    font-weight:normal;
    font-size: 5rem;
    line-height: 50px;
    margin-bottom: 15px;
    font-family: 'Playfair Display', serif;
    ${({theme}) => theme.mq.huge}{
        font-size: 6rem;
    }
`
const Hej = styled.span`
    margin-top: 20%;
    font-size: 1.5rem;
    color: #2F2E2E;
    ${({theme}) => theme.mq.huge}{
        font-size: 3rem;

    }
`

const Spand = styled.p`
    margin-top: 20%;
    font-size: 2rem;
    color: #2F2E2E;
    ${({theme}) => theme.mq.huge}{
        padding: 50px;
        margin-top: 10%;
        font-size: 2rem;
    }
`

const Join = styled.div`
    padding: 15px;
    text-align:center;

    ${({theme}) => theme.mq.tablet}{
    text-align:center;
    margin-top: 50px;
    margin-bottom: 100px;
    }
`
const Small = styled.p`
    font-size: 1.2rem;
    color: #2F2E2E;
    margin-bottom: 15px;
    ${({theme}) => theme.mq.tablet}{
        text-align:center;
        font-size: 1.5rem;
        }
        ${({theme}) => theme.mq.huge}{
           font-size: 2rem;
            }
         }
`
const Challangee = styled.h1`
    font-weight:normal;
    font-size: 4rem;
    font-family: 'Playfair Display', serif;
    color: #2F2E2E;
    ${({theme}) => theme.mq.tablet}{
        text-align:center;
        font-size: 5rem;
        }
        ${({theme}) => theme.mq.huge}{
            font-size: 5rem;
         }
`
const Inputs = styled.input`
width: 90%;
height: 40px;
margin: 5px;
color: #2F2E2E;
    ::placeholder{
        text-align: center;
        font-size: 20px;
    }
    ${({theme}) => theme.mq.tablet}{
        border-style: solid;
        height: 50px;
        width: 70%;

        ::placeholder{
            font-size: 20px;
        }
    }
    ${({theme}) => theme.mq.huge}{
        width: 30%;
        height: 50px;

        ::placeholder{
            font-size: 2rem;
        }
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
text-align: center;
    ${({theme}) => theme.mq.tablet}{
        height: 50px;
        width: 70%;
        font-size: 20px;

    }
}
${({theme}) => theme.mq.huge}{
    width: 20%;
    font-size: 2rem;
    height: 50px;
 }
`
const WaleDriny1 = styled.img`
${({theme}) => theme.mq.tablet}{
    order: 3;
    width: 35%;
}
`
const WaleDriny2 = styled.img`
${({theme}) => theme.mq.tablet}{
    order: 4;
    width: 35%;


}
`
const WaleDriny3 = styled.img`
${({theme}) => theme.mq.tablet}{
    order: 5;
    width: 30%;

}
`

const ContactUs = () =>(
    <>
<Contact>
    <ContD alt="Drink" src={Drin0}></ContD>
    <Division>
        <Challange>Mixology Challenge</Challange>
            <Hej>EVERY TUESDAY NIGHT </Hej>
            <Spand>I'm a paragraph. Click here to add your own text and edit me.It’s easy.
                  Just click “Edit Text” or double click me to add your own content and make changes to the font.</Spand>
    </Division>
    <WaleDriny1 alt="Drink" src={Drin1}></WaleDriny1>
    <WaleDriny2 alt="Drink" src={Drin2}></WaleDriny2>
    <WaleDriny3 alt="Drink" src={Drin3}></WaleDriny3>

    </Contact>

    <Join>
            <Challangee>Join the club</Challangee>
            <Small>& GET UPDATES ON SPECIAL EVENTS</Small>
            <Inputs type="text" placeholder="Enter your email here*"/>
            <Book>Subscribe Now</Book>
            
    </Join>
</>
)

export default ContactUs;