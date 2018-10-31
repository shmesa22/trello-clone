import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/global';
import Router from 'pages/Router';
import { colors, cardsColors } from 'styles/palette';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={{ colors, cardsColors }}>
        <Fragment>
          <Router />
          <GlobalStyle />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
