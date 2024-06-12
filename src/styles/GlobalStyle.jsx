import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    width: 100vw;
    height: 100vh;
    
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;