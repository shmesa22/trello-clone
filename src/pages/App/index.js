import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/global';
import Navbar from 'components/Navbar';
import { colors } from 'styles/palette';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={colors}>
        <Fragment>
          <Navbar />
          <GlobalStyle />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
