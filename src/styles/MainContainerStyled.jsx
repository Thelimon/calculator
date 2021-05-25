import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #c2c2d6;
        width: 100%;
        height: 100vh;
        @import 'https://fonts.googleapis.com/css?family=Share+Tech+Mono';
        @font-face {
            font-family: 'Digital';
            src: url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot');
            src: url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot?#iefix')
                format('embedded-opentype'),
            url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff2')
                format('woff2'),
            url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff')
                format('woff'),
            url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.ttf')
                format('truetype'),
            url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.svg#Digital-7')
                format('svg');
        }
    }
`;
const MainContainer = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { GlobalStyle, MainContainer };
