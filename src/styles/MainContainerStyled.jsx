import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #c2c2d6;
        width: 100%;
        height: 100vh;
    }
`
const MainContainer = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export {GlobalStyle, MainContainer}