import React from 'react';
import  {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Board from 'pages/Board'
import Boards from 'pages/Boards';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/boards"
        component={Boards}
      />
      <Route
        exact
        path="/boards/:friendly_url"
        component={Board}
      />
      <Redirect to="/boards" />
    </Switch>
  </BrowserRouter>
);

export default Router;
