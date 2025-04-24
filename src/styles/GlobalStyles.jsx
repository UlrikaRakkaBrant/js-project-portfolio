import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #fff;
    color: #222;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
