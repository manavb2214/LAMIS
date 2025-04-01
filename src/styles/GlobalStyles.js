import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(to bottom, #2c3e50, #121212); /* Dark blue-gray to black gradient */
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  }
`;

export default GlobalStyles;