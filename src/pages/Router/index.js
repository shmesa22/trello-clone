import React, { Fragment } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Navbar from 'components/Navbar';
import Board from 'pages/Board';
import Boards from 'pages/Boards';

const Router = () => (
  <BrowserRouter>
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/boards" component={Boards} />
        <Route exact path="/boards/:friendly_url" component={Board} />
        <Redirect to="/boards" />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Router;
