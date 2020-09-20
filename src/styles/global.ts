import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Roboto, sans-serif;
    font-weight: 300;
  }

  body{
    -webkit-font-smoothing: antialised;
  }

  body, input, button{
    font: 16px Roboto, sans-serif 300;
  }

  button {
    cursor: pointer;
  }
`;
