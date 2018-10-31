import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    font-size: 14px;
  }

  body {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
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
