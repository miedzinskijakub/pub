import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        box-sizing: border-box;
        padding: 0;
        margin: 0;

    }
html{
    font-size: 62.5%;

}

body{
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
}


#root {
    position: relative;
    margin:0 auto;
    overflow: hidden;
}

.fb-media{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    z-index: 9999;

}

.insta-media{
    position: absolute;
    top: 50%;
    left: 65%;
    transform: translateY(-50%);
    font-size: 20px;
    z-index: 9999;


}
a{
    text-decoration: none;
    color: black;
}


`

export default GlobalStyle;
