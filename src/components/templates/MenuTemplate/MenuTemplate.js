import React from 'react';
import styled from 'styled-components';
import { coctails, beer, wine } from '../../../Drinks';


const StyledWrapper = styled.div`
position: relative;
margin-top: 63px;
text-align: center;
display: flex;
flex-direction: column;
flex-wrap: wrap;
padding: 15px;
justify-content: space-between;



`
const Line = styled.div`
position: relative;
margin-bottom: 55px;
background-color: rgb(160,160,159);
width: 40px;
height: 1px;
margin: 19px auto 40px;

`

const Name = styled.p`
    color: rgb(214, 152, 105);
    line-height: 1;
    font-size: 25px;
    
    
`
const DrinksName = styled.p`
    color: rgb(214, 152, 105);
    font-size: 20px;
    font-weight: 300;

`


const Description = styled.p`
    font-size: 18px;
    margin-bottom: 16px;
    margin-top: 12px;
    color: rgb(160,160,159);
    line-height: 1.6;
    font-weight: 300;

`
const Price = styled.p`
    font-size: 20px;
    font-weight: 300;
    color: rgb(47, 46, 46);
    margin-bottom: 18px;
`
const AllDrink = styled.div`
margin-bottom: 55px;
`




const MenuSection = () =>(
    <StyledWrapper>
        <Name>COCTAILS</Name>
        <Line/>
        {coctails.map(coctails => (
            <AllDrink key={coctails.id}>
                <DrinksName >{coctails.name}</DrinksName>
                <Description >{coctails.desc}</Description>
                <Price >{coctails.price}</Price>
            </AllDrink>
        ))}
    <Name>BEER</Name>
        <Line/>
        {beer.map(beer => (
            <AllDrink key={beer.id}>
                <DrinksName >{beer.name}</DrinksName>
                <Description >{beer.desc}</Description>
                <Price >{beer.price}</Price>
            </AllDrink>
        ))}

        <Name>WINE</Name>
        <Line/>
            {wine.map(wine => (
            <AllDrink key={wine.id}>
                <DrinksName >{wine.name}</DrinksName>
                <Description >{wine.desc}</Description>
                <Price >{wine.price}</Price>
            </AllDrink>
        ))}
        
    </StyledWrapper>
)

export default MenuSection;