import React from 'react';
import Hero from '../templates/HeroTemplate/HeroTemplate';
import MainSection from '../templates/HeroTemplate/MainTemplate';
import ContactUs from '../templates/HeroTemplate/ArticleTemplate';
import MainTemplate from '../templates/MainTemplate/MainTemplate';



const IndexPage = () =>(
  <MainTemplate>
  <Hero/>
  <MainSection/>
  <ContactUs/>
  </MainTemplate>
)


export default IndexPage;