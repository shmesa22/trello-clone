import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    font-size: 14px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul {
    padding: 0;
  }

  ul li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }
`;

export default GlobalStyle;
