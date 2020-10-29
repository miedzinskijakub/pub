import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../../assets/styles/GlobalStyle';
import { theme } from '../../../assets/styles/theme';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';




const MainTemplate = ({children}) =>(
    <>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <>
                <Header/>
                {children}
                <Footer/>
            </>
        </ThemeProvider>
    </>
);
export default MainTemplate;